"use client";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";

const ADD_RESOURCE_MUTATION = gql`
  mutation AddResource($resourceInput: ResourceInput!) {
    addResource(resourceInput: $resourceInput) {
      _id
      name
      author
      description
      fileType
      fileUrl
      createdAt
      updatedAt
    }
  }
`;

interface Step2Props {
  onBack: () => void;
  uploadedFile: File | null;
  fileUrl: string;
  onResourceSaved: () => void;
}

const Step2ResourceInfo = ({ onBack, uploadedFile, fileUrl, onResourceSaved }: Step2Props) => {
  const [formData, setFormData] = useState({
    name: uploadedFile?.name.split('.')[0] || "",
    description: "",
    author: "",
    fileType: uploadedFile?.name.split('.').pop()?.toLowerCase() || "",
    durationHrs: 0,
    durationMins: 0,
  });

  const [addResource, { loading: isSaving }] = useMutation(ADD_RESOURCE_MUTATION, {
    onCompleted: (data) => {
      console.log("Resource saved successfully:", data);
      alert("Resource uploaded successfully!");
      onResourceSaved();
    },
    onError: (error) => {
      console.error("Error saving resource:", error);
      alert("Failed to save resource. Please try again.");
    },
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert("Please enter a resource name.");
      return;
    }

    if (!formData.author.trim()) {
      alert("Please enter an author name.");
      return;
    }

    // Calculate total duration in minutes
    const totalDurationMinutes = (formData.durationHrs * 60) + formData.durationMins;
    const organizationId = Cookies.get("organizationId") || "";

    try {
      await addResource({
        variables: {
          resourceInput: {
            name: formData.name.trim(),
            description: formData.description.trim(),
            author: formData.author.trim(),
            fileType: formData.fileType,
            fileUrl: fileUrl,
            organizationId,
            // ...(totalDurationMinutes > 0 && { duration: totalDurationMinutes })
          }
        }
      });
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  return (
    <>
      <SheetHeader>
        <SheetTitle className="px-6 border-b-2 pb-4">
          Resource Information
        </SheetTitle>
        <SheetDescription className="px-6">
          Input author, title, and description for your resource.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-4 px-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name *
            </Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              disabled={isSaving}
            />
          </div>
          
          <div className="grid gap-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Type your description here."
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              disabled={isSaving}
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <Label htmlFor="author" className="text-sm font-medium">
              Author *
            </Label>
            <Input
              type="text"
              id="author"
              value={formData.author}
              onChange={(e) => handleInputChange("author", e.target.value)}
              required
              disabled={isSaving}
            />
          </div>
          
          <div className="grid gap-2 grid-cols-2 place-content-center">
            <div className="flex flex-col gap-2">
              <Label>Estimated Duration</Label>
              <div className="flex gap-4">
                <div>
                  <Input
                    id="duration-hrs"
                    className="col-span-3"
                    type="number"
                    min="0"
                    value={formData.durationHrs}
                    onChange={(e) => handleInputChange("durationHrs", parseInt(e.target.value) || 0)}
                    disabled={isSaving}
                  />
                  <Label
                    htmlFor="duration-hrs"
                    className="mt-1 text-xs text-gray-400"
                  >
                    Hrs
                  </Label>
                </div>
                <div>
                  <Input
                    id="duration-mins"
                    className="col-span-3"
                    type="number"
                    min="0"
                    max="59"
                    value={formData.durationMins}
                    onChange={(e) => handleInputChange("durationMins", parseInt(e.target.value) || 0)}
                    disabled={isSaving}
                  />
                  <Label
                    htmlFor="duration-mins"
                    className="mt-1 text-xs text-gray-400"
                  >
                    Mins
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="fileType">File Type</Label>
              <Select
                value={formData.fileType}
                onValueChange={(value) => handleInputChange("fileType", value)}
                disabled={isSaving}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select file type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="pptx">PowerPoint</SelectItem>
                  <SelectItem value="txt">Text</SelectItem>
                  <SelectItem value="docx">Word Document</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {uploadedFile && (
            <div className="p-3 bg-gray-50 rounded-md">
              <p className="text-sm font-medium">Uploaded File:</p>
              <p className="text-sm text-gray-600">{uploadedFile.name}</p>
              <p className="text-xs text-gray-500">
                Size: {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          )}

          <div className="w-full gap-2 flex items-center">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              disabled={isSaving}
            >
              Go back
            </Button>
            <Button
              type="submit"
              variant="default"
              className="bg-primary"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Resource"
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step2ResourceInfo;