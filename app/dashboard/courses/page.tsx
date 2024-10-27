import AdminCoursesPage from "@/components/AdminCoursesPage";
import EmployeeCoursesPage from "@/components/EmployeeCoursesPage";
const Courses = () => {
  const user = {
    role: "employee",
  };
  const role = user.role;
  return (
    <div className="w-full h-full p-6">
      {role === "admin" && <AdminCoursesPage />}
      {role === "employee" && <EmployeeCoursesPage />}
    </div>
  );
};

export default Courses;
