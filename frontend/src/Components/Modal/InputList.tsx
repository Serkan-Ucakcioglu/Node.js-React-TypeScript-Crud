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
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="John Doe"
        />
        <span className="text-red-500 text-left text-sm text-black">
          {errors?.name?.message}
        </span>
      </div>
      <div>
        <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email
        </label>
        <input
          type="email"
          placeholder="serkanuckc123@gmail.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Title
        </label>
        <input
          type="title"
          placeholder="Hello World !"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
    </>
  );
}

export default InputList;
