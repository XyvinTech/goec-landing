import { Camera, Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

function ImageDropzone({ value, onChange }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        onChange(file);  // Pass the file back to `react-hook-form`
      }
    },
    accept: {
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
    },
    multiple: false,
  });

  const imageSrc = value ? URL.createObjectURL(value) : null;

  return (
    <>
      {imageSrc ? (
        <div className="rounded-sm border border-[#8e8e8e] flex flex-col gap-5 justify-center w-fit px-3 py-5">
          <Image
            src={imageSrc}
            alt="Preview"
            width={200}
            height={200}
            layout="fixed"
          />
          <Trash onClick={() => onChange(null)} size={20} color="red" className="cursor-pointer" />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="w-[550px] h-[300px] lg:h-[300px] flex items-center"
        >
          <input {...getInputProps()} className="w-full h-full" />
          <div className="w-[90%] lg:w-[95%] lg:h-full bg-white h-[320px] rounded-sm border-dashed border border-[#8e8e8e] flex items-center justify-center flex-col gap-2 cursor-pointer">
            <Camera size={40} color="#dadada" />
            <p className="font-roboto font-normal text-base">
              <span className="underline">Upload</span> or drop an image right
              here
            </p>
            <p className="font-roboto text-xs font-light text-gray-500">
              JPG, PNG. Up to 4MB.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageDropzone;
