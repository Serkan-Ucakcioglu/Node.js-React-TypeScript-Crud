import { useForm } from "react-hook-form";
import Close from "../../assets/Close";
import EditSvg from "../../assets/EditSvg";
import useShowModel from "../../hooks/useShowModel";
import InputList from "./InputList";
import { useSWRConfig } from "swr";
import { addUser, updateUser } from "../../api/api";

export interface Inputs {
  _id: string;
  name: string;
  email: string;
  title: string;
}

function EditModal({ user }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate } = useSWRConfig();

  const { show, active, close } = useShowModel();

  const onSubmit = (data: Inputs) => {
    if (!user) {
      mutate("/users", addUser(data));
    } else {
      mutate("/users", updateUser(user?._id, data));
    }
    close();
    reset();
  };

  return (
    <>
      <button
        className={`${
          !user &&
          "bg-blue-500 hover:scale-125 transition-all	 px-3 py-1 rounded text-white"
        }`}
        onClick={() => active()}
        type="button"
      >
        {user ? <EditSvg /> : "Add"}
      </button>

      {show ? (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="fixed  flex justify-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-md md:h-auto">
              <div className="relative transition ease-in-out delay-150 bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  onClick={() => {
                    close(), reset();
                  }}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <Close />
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    User
                  </h3>
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <InputList
                      user={user}
                      register={register}
                      errors={errors}
                    />
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default EditModal;
