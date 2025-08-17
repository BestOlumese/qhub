"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { Loader2, Upload } from "lucide-react";
import { useUploadThing } from "@/utils/uploadthing";

const EDIT_RESOURCE_MUTATION = gql`
  mutation EditResource($editResourceInput: EditResourceInput!) {
    editResource(editResourceInput: $editResourceInput) {
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

interface Resource {
  _id: string;
  name: string;
  author: string;
  description: string;
  fileType: string;
  fileUrl: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

interface EditResourceModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
  onResourceUpdated: () => void;
}

const EditResourceModal = ({
  resource,
  isOpen,
  onClose,
  onResourceUpdated,
}: EditResourceModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    author: "",
    fileType: "",
    durationHrs: 0,
    durationMins: 0,
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploadingNewFile, setIsUploadingNewFile] = useState(false);

  const { startUpload } = useUploadThing("fileUploader", {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        // Update the form data with new file info
        const newFileType = selectedFile?.name.split('.').pop()?.toLowerCase() || formData.fileType;
        setFormData(prev => ({
          ...prev,
          fileType: newFileType
        }));
        setIsUploadingNewFile(false);
      }
    },
    onUploadError: (error) => {
      console.error("Upload failed:", error);
      alert("File upload failed. Please try again.");
      setIsUploadingNewFile(false);
    },
  });

  const [editResource, { loading: isSaving }] = useMutation(EDIT_RESOURCE_MUTATION, {
    onCompleted: (data) => {
      console.log("Resource updated successfully:", data);
      alert("Resource updated successfully!");
      onResourceUpdated();
      onClose();
    },
    onError: (error) => {
      console.error("Error updating resource:", error);
      alert("Failed to update resource. Please try again.");
    },
  });

  // Populate form when resource changes
  useEffect(() => {
    if (resource) {
      setFormData({
        name: resource.name,
        description: resource.description,
        author: resource.author,
        fileType: resource.fileType,
        durationHrs: 0, // You can add duration parsing if stored
        durationMins: 0,
      });
    }
  }, [resource]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resource) return;

    if (!formData.name.trim()) {
      alert("Please enter a resource name.");
      return;
    }

    if (!formData.author.trim()) {
      alert("Please enter an author name.");
      return;
    }

    let newFileUrl = resource.fileUrl;

    // Upload new file if selected
    if (selectedFile) {
      setIsUploadingNewFile(true);
      try {
        const uploadResult = await startUpload([selectedFile]);
        if (uploadResult && uploadResult[0]) {
          newFileUrl = uploadResult[0].url;
        }
      } catch (error) {
        console.error("File upload error:", error);
        alert("Failed to upload new file. Please try again.");
        setIsUploadingNewFile(false);
        return;
      }
    }

    // Calculate total duration in minutes
    const totalDurationMinutes = (formData.durationHrs * 60) + formData.durationMins;

    try {
      await editResource({
        variables: {
          editResourceInput: {
            resourceId: resource._id,
            name: formData.name.trim(),
            description: formData.description.trim(),
            author: formData.author.trim(),
            fileType: formData.fileType,
            fileUrl: newFileUrl
          }
        }
      });
    } catch (error) {
      console.error("Mutation error:", error);
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setFormData({
      name: "",
      description: "",
      author: "",
      fileType: "",
      durationHrs: 0,
      durationMins: 0,
    });
    onClose();
  };

  if (!resource) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Resource</DialogTitle>
          <DialogDescription>
            Update the resource information and optionally replace the file.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-name">Name *</Label>
            <Input
              id="edit-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              disabled={isSaving || isUploadingNewFile}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">Description</Label>
            <Textarea
              id="edit-description"
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              disabled={isSaving || isUploadingNewFile}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-author">Author *</Label>
            <Input
              id="edit-author"
              value={formData.author}
              onChange={(e) => handleInputChange("author", e.target.value)}
              required
              disabled={isSaving || isUploadingNewFile}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Duration</Label>
              <div className="flex gap-2">
                <div>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Hrs"
                    value={formData.durationHrs}
                    onChange={(e) => handleInputChange("durationHrs", parseInt(e.target.value) || 0)}
                    disabled={isSaving || isUploadingNewFile}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    min="0"
                    max="59"
                    placeholder="Mins"
                    value={formData.durationMins}
                    onChange={(e) => handleInputChange("durationMins", parseInt(e.target.value) || 0)}
                    disabled={isSaving || isUploadingNewFile}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>File Type</Label>
              <Select
                value={formData.fileType}
                onValueChange={(value) => handleInputChange("fileType", value)}
                disabled={isSaving || isUploadingNewFile}
              >
                <SelectTrigger>
                  <SelectValue />
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

          <div className="space-y-2">
            <Label>Replace File (Optional)</Label>
            <div className="flex items-center gap-2">
              <Input
                type="file"
                accept=".pdf,.docx,.txt,.pptx"
                onChange={handleFileSelect}
                disabled={isSaving || isUploadingNewFile}
                className="flex-1"
              />
            </div>
            {selectedFile && (
              <p className="text-sm text-green-600">
                New file: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
              </p>
            )}
            <p className="text-xs text-gray-500">
              Current file: {resource.fileUrl.split('/').pop()}
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSaving || isUploadingNewFile}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSaving || isUploadingNewFile}
              className="flex-1"
            >
              {isSaving || isUploadingNewFile ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {isUploadingNewFile ? "Uploading..." : "Saving..."}
                </>
              ) : (
                "Update Resource"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditResourceModal;