import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { editProfile } from "../../actions";
import { useAuth } from "./context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/slices/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const { uid } = auth.user;

  const [input, setInput] = useState({
    username: "",
    name: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    console.log(value);
  };

  useEffect(() => {
    if (user) {
      setInput({
        username: user.username,
        name: user.name,
        address: user.address,
      });
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(event);
      console.log(input);
      await dispatch(editProfile(uid, input));
      await dispatch(getUser(input))
      toast.success("Your profile was successfully updated.");
      navigate('/Account/Profile');
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating your profile.");
    }
  };

  return (
    <div className="h-screen overflow-y-auto justify-center items-start md:inset-0 md:h-full dark:bg-neutral-950 flex w-full">
      <div className="relative p-4 h-screen md:h-auto font-general-sans w-full lg:w-[1200px]">
        {/* <!-- content --> */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-zinc-950 sm:p-10 pb-[100px]">
          {/* <!--  header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Profile
            </h3>
          </div>
          {/* <!--  body --> */}
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={input.username || ""}
                  name="username"
                  id="username"
                  placeholder="Type your username"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name || ""}
                  id="name"
                  placeholder="Type your name"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="genre"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={input.address || ""}
                  name="address"
                  id="address"
                  placeholder="Type your address"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <label
                  type="text"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                >
                  {user.email}
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-gray-200 dark:hover:bg-white"
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default Profile;
