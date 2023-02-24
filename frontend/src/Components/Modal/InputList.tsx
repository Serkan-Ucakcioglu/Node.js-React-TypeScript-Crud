import React from "react";

function InputList({ register, errors }: any) {
  return (
    <>
      <div>
        <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "required!",
            minLength: {
              value: 3,
              message: "Minumum Length 3!",
            },
            maxLength: {
              value: 15,
              message: "Maximum Length 15!",
            },
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="John Doe"
        />
        <span className="flex flex-start  text-red-500 text-left text-sm text-black">
          {errors?.name?.message}
        </span>
      </div>
      <div>
        <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email
        </label>
        <input
          {...register("email", {
            required: "required!",
          })}
          type="email"
          placeholder="serkanuckc123@gmail.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <span className="flex flex-start  text-red-500 text-left text-sm text-black">
          {errors?.email?.message}
        </span>
      </div>
      <div>
        <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Title
        </label>
        <input
          type="title"
          {...register("title", {
            required: "required!",
            minLength: {
              value: 8,
              message: "Minumum Length 8!",
            },
            maxLength: {
              value: 40,
              message: "Maximum Length 40!",
            },
          })}
          placeholder="Hello World !"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <span className="flex flex-start text-red-500 text-left text-sm text-black">
          {errors?.title?.message}
        </span>
      </div>
    </>
  );
}

export default InputList;
