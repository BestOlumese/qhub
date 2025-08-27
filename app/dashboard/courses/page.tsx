import AdminCoursesPage from "@/components/AdminCoursesPage";
import EmployeeCoursesPage from "@/components/EmployeeCoursesPage";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
const Courses = () => {
  const cookieStore = cookies();
  const role = cookieStore.get("role")?.value;
  const organizationId = cookieStore.get("organizationId")?.value;
  if (organizationId == "") return notFound();

  return (
    <div className="w-full h-full p-6">
      {role === "organizationOwner" ? <AdminCoursesPage /> : <EmployeeCoursesPage />}
    </div>
  );
};

export default Courses;
