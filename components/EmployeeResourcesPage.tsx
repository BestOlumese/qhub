"use client";
import Image from "next/image";
import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { Loader2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import ResourceSkeleton from "./ui/ResourceSkeleton";

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

const EmployeeResourcesPage = () => {
  const organizationId = Cookies.get("organizationId") || "";

  const { data, loading, error, refetch } = useQuery(GET_RESOURCES_QUERY, {
    variables: { organizationId },
    fetchPolicy: "cache-and-network",
  });

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
      xlsx: "📊",
      xls: "📊",
      jpg: "🖼️",
      jpeg: "🖼️",
      png: "🖼️",
      gif: "🖼️",
      mp4: "🎥",
      mp3: "🎵",
      zip: "📦",
    };
    return icons[fileType.toLowerCase()] || "📁";
  };

  const getFileTypeColor = (fileType: string) => {
    const colors: { [key: string]: string } = {
      pdf: "bg-red-100 text-red-700",
      docx: "bg-blue-100 text-blue-700",
      pptx: "bg-orange-100 text-orange-700",
      txt: "bg-gray-100 text-gray-700",
      xlsx: "bg-green-100 text-green-700",
      xls: "bg-green-100 text-green-700",
      jpg: "bg-purple-100 text-purple-700",
      jpeg: "bg-purple-100 text-purple-700",
      png: "bg-purple-100 text-purple-700",
      gif: "bg-purple-100 text-purple-700",
      mp4: "bg-pink-100 text-pink-700",
      mp3: "bg-yellow-100 text-yellow-700",
      zip: "bg-indigo-100 text-indigo-700",
    };
    return colors[fileType.toLowerCase()] || "bg-gray-100 text-gray-700";
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="font-bold max-md:text-lg text-xl">Resources</h1>
        <p className="max-md:text-sm">
          Browse our collection of resources to help you thrive.
        </p>
        <ResourceSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="font-bold max-md:text-lg text-xl mb-2">Resources</h1>
        <p className="max-md:text-sm mb-6">
          Browse our collection of resources to help you thrive.
        </p>
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
      <h1 className="font-bold max-md:text-lg text-xl">Resources</h1>
      <p className="max-md:text-sm">
        Browse our collection of resources to help you thrive.
      </p>

      {resources.length > 0 ? (
        <div className="mt-7 grid max-xl:grid-cols-3 max-md:grid-cols-2 grid-cols-4 gap-6">
          {resources.map((resource: Resource) => (
            <div
              key={resource._id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group"
            >
              {/* Resource Preview/Icon */}
              <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center relative">
                <div className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity">
                  {getFileIcon(resource.fileType)}
                </div>
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      handleDownload(resource.fileUrl, resource.name)
                    }
                    title="Download"
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Resource Info */}
              <div className="p-4">
                <h3
                  className="font-bold text-lg mb-2 line-clamp-2"
                  title={resource.name}
                >
                  {resource.name}
                </h3>

                <p className="text-sm text-gray-600 mb-2">
                  by {resource.author}
                </p>

                {resource.description && (
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {resource.description}
                  </p>
                )}

                <div className="flex justify-between items-center">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium uppercase ${getFileTypeColor(
                      resource.fileType
                    )}`}
                  >
                    {resource.fileType}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(resource.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No resources available
          </h2>
          <p className="text-gray-500">
            Check back later for new resources from your organization.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeResourcesPage;
