"use client";
import BrowseResourceHeader from "./BrowseResourceHeader";
import resource from "@/assets/icons/resource.gif";
import UploadResource from "./UploadResource";
import EditResourceModal from "./EditResourceModal";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { Loader2, Trash2, Edit, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const GET_RESOURCES_QUERY = gql`
  query GetOrganizationResources($organizationId: String!) {
    getOrganizationResources(organizationId: $organizationId) {
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

const DELETE_RESOURCE_MUTATION = gql`
  mutation DeleteResourceById($resourceId: String!) {
    deleteResourceById(resourceId: $resourceId) {
      message
      status
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

const AdminResourcesPage = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const organizationId = Cookies.get("organizationId") || ""; // Replace with actual organization ID from context/auth

  const { data, loading, error, refetch } = useQuery(GET_RESOURCES_QUERY, {
    variables: { organizationId },
    fetchPolicy: "network-only", // always fetch from server
    nextFetchPolicy: "cache-first", // after refetch, use cache
  });

  const [deleteResource, { loading: isDeleting }] = useMutation(DELETE_RESOURCE_MUTATION, {
    onCompleted: () => {
      alert("Resource deleted successfully!");
      refetch();
    },
    onError: (error) => {
      console.error("Delete error:", error);
      alert("Failed to delete resource. Please try again.");
    },
  });

  const handleDelete = async (resourceId: string, resourceName: string) => {
    if (window.confirm(`Are you sure you want to delete "${resourceName}"? This action cannot be undone.`)) {
      try {
        await deleteResource({
          variables: { resourceId }
        });
      } catch (error) {
        console.error("Delete operation failed:", error);
      }
    }
  };

  const handleEdit = (resource: Resource) => {
    setSelectedResource(resource);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setSelectedResource(null);
  };

  const handleResourceUpdated = () => {
    refetch(); // Refresh the resources list
  };

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileIcon = (fileType: string) => {
    const icons: { [key: string]: string } = {
      pdf: "📄",
      docx: "📝",
      pptx: "📊",
      txt: "📋",
    };
    return icons[fileType.toLowerCase()] || "📁";
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin" />
          <span className="ml-2">Loading resources...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-500 mb-2">Failed to load resources</p>
            <Button onClick={() => refetch()} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const resources = data?.getOrganizationResources || [];

  return (
    <div className="p-6">
      <div className="flex max-lg:flex-col justify-between">
        <h2 className="font-semibold">Resources</h2>
        <UploadResource />
      </div>
      <div className="w-full mt-4 h-[calc(100vh-200px)] bg-white rounded-md border border-gray-300">
        <BrowseResourceHeader />
        <div className="p-6 h-[calc(100%-80px)] overflow-y-auto">
          {resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {resources.map((resource: Resource) => (
                <div
                  key={resource._id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">
                      {getFileIcon(resource.fileType)}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownload(resource.fileUrl, resource.name)}
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(resource)}
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(resource._id, resource.name)}
                        disabled={isDeleting}
                        title="Delete"
                        className="text-red-600 hover:text-red-700"
                      >
                        {isDeleting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 line-clamp-2" title={resource.name}>
                    {resource.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    by {resource.author}
                  </p>
                  
                  {resource.description && (
                    <p className="text-xs text-gray-500 line-clamp-3 mb-3">
                      {resource.description}
                    </p>
                  )}
                  
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span className="uppercase font-medium">
                      {resource.fileType}
                    </span>
                    <span>
                      {new Date(resource.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <img src={resource.src} alt="resource" width={100} height={100} />
              <h2 className="mb-3 text-lg font-medium">No resources found</h2>
              <p className="text-gray-500 mb-4">Upload your first resource to get started</p>
              <UploadResource />
            </div>
          )}
        </div>
      </div>

      {/* Edit Resource Modal */}
      <EditResourceModal
        resource={selectedResource}
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        onResourceUpdated={handleResourceUpdated}
      />
    </div>
  );
};

export default AdminResourcesPage;