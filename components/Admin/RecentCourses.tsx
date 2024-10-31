import Course from "@/components/Course";
const RecentCourses = () => {
  return (
    <div className=" mt-6 ">
      <h3 className=" mb-2 font-semibold">Recent courses</h3>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-4 gap-6 w-full">
        <Course enrolled={true} />
        <Course enrolled={true} />
        <Course enrolled={true} />
        <Course enrolled={true} />
      </div>
    </div>
  );
};
export default RecentCourses;
