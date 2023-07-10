import React from "react";
import { BsUpload } from "react-icons/bs";

function LeftPannelOfLesson() {
  return (
    <div className="p-3">
      <h3 className="text-violet-900 font-semibold text-xl mb-3">
        File Upload
      </h3>
      {/* @dev main course upload section */}
      <div className="grid md:grid lg:flex gap-8">
        <div className="grid">
          <div className="text-violet-900 font-semibold">Main course file</div>
          <div className="mt-3 h-80 w-full lg:w-96 border-dashed border-2 border-gray-400 flex items-center justify-center">
            <label
              htmlFor="main-course-file"
              className="cursor-pointer bg-gray-400 text-center p-4 rounded-full hover:animate-ping transition duration-200"
            >
              <BsUpload className="text-2xl" />
            </label>
            <h3 className="ml-2 font-semibold">
              Drop files here or click to upload
            </h3>
            <input id="main-course-file" type="file" className="hidden" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="text-violet-900 font-semibold">Introduction file</div>
          <div className="w-full lg:w-96 h-32 flex items-center justify-center border-2 border-dashed border-gray-400">
            <label
              htmlFor="introduction-file"
              className="cursor-pointer bg-gray-400 text-center p-4 rounded-full hover:animate-ping transition duration-200"
            >
              <BsUpload className="text-2xl" />
            </label>
            <h3 className="ml-2 font-semibold">
              Drop files here or click to upload
            </h3>
            <input id="introduction-file" type="file" className="hidden" />
          </div>
          <div className="text-violet-900 font-semibold">Thumbnail file</div>
          <div className="h-32 w-full lg:w-96 border-dashed border-2 border-gray-400 flex items-center justify-center">
            <label
              htmlFor="thumbnail-file"
              className="cursor-pointer bg-gray-400 text-center p-4 rounded-full hover:animate-ping transition duration-200"
            >
              <BsUpload className="text-2xl" />
            </label>
            <h3 className="ml-2 font-semibold">
              Drop files here or click to upload
            </h3>
            <input id="thumbnail-file" type="file" className="hidden" />
          </div>
        </div>
      </div>
      {/* @dev main course upload section close */}
      <div className="mt-6">
        <h3 className="text-xl text-violet-900 font-semibold">
          Other Information
        </h3>
        <hr />
        {/* @user other information form */}
        <div className="grid gap-3 md:flex lg:flex justify-between mt-6">
          <div className="grid gap-3">
            <div className="grid">
              <label htmlFor="name" className="text-gray-500 font-semibold">
                Lesson Name
              </label>
              <input
                placeholder="Type here..."
                type="text"
                name="name"
                className="w-full h-12 px-4 py-2 border border-gray-500 rounded"
              />
            </div>
            <div className="">
              <label
                htmlFor="description"
                className="text-gray-500 font-semibold"
              >
                Lesson Description
              </label>
              <textarea
                placeholder="Type here..."
                name="description"
                className="w-full h-28 px-4 py-2 border border-gray-500 rounded"
              ></textarea>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="">
              <label
                htmlFor="content"
                className="text-gray-500 font-semibold"
              >
                Lesson Tags
              </label>
              <textarea
                placeholder="Type here..."
                name="content"
                className="w-full h-28 px-4 py-2 border border-gray-500 rounded"
              ></textarea>
            </div>
            <div className="">
              <label htmlFor="tag" className="text-gray-500 font-semibold">
                Course Price
              </label>
              <input
                type="text"
                placeholder="$..."
                name="tag"
                className="w-full h-12 px-4 py-2 border border-gray-500 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="grid lg:flex md:flex mt-6 gap-2 justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="font-semibold text-gray-400">
            Iam totally agree with your terms and conditions
          </p>
        </div>
        <div>
          <button className="flex text-xl py-2 p-3 md:px-6 lg:px-12 rounded text-white bg-[#fb6d3a] hover:bg-[#ec7e3c]">
            Submit For Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftPannelOfLesson;
