"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LMS_DASHBOARD_DATA } from "@/lib/graphql";
import { Card, CardHeader, CardContent } from "../ui/card";
import SkeletonStats from "../ui/SkeletonStats";

const HomepageStats = () => {
  const { data, loading, error } = useQuery(GET_LMS_DASHBOARD_DATA, {
    fetchPolicy: "network-only", // always fetch from server
    nextFetchPolicy: "cache-first", // after refetch, use cache
  });

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonStats key={i} />
        ))}
      </div>
    );
  }
  if (error) return <p>Error loading stats 😢</p>;

  const stats = [
    {
      value: data.getLmsDashboardData.numberOfCompletedCourses,
      sub: "Completed Courses",
      icon: "📘",
    },
    {
      value: data.getLmsDashboardData.numberOfCourses,
      sub: "Total Courses",
      icon: "📚",
    },
    {
      value: data.getLmsDashboardData.numberOfEmployees,
      sub: "Employees",
      icon: "👨‍💼",
    },
    {
      value: data.getLmsDashboardData.numberOfEnrollments,
      sub: "Enrollments",
      icon: "📝",
    },
  ];

  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="flex items-center flex-col p-4 gap-2 w-full bg-white justify-center rounded-3xl"
        >
          <CardHeader className="p-0">
            <span className="w-8 text-primary h-8 flex items-center justify-center rounded-full bg-primary/20">
              {stat.icon}
            </span>
          </CardHeader>
          <CardContent className="p-0 flex flex-col items-center justify-center">
            <p className="font-plus text-2xl max-md:text-xl font-bold">
              {stat.value}
            </p>
            <p className="font-plus text-sm max-md:text-xs text-center">
              {stat.sub}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomepageStats;
