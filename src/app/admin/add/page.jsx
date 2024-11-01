"use client";
import AddStationForm from "@/components/admin/AddStationForm";
import AdminLayout from "@/components/admin/AdminLayout";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <AdminLayout>
      <div className="p-8 flex flex-col">
        <div className="h-fit flex items-center gap-2">
          <div
            onClick={handleBackClick}
            className=" border-2 border-[#898b8d] w-fit p-1 rounded cursor-pointer"
          >
            <ArrowLeft size={20} color="#898b8d" />
          </div>
          <p className="font-semibold text-xl py-5 text-[#202223]">
            Add A New Station
          </p>
        </div>
        <AddStationForm/>
      </div>
    </AdminLayout>
  );
};

export default page;
