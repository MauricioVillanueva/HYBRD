import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../../redux/slices/userSlice";


const UserSideBar = () => {
  const auth = useAuth();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    clearUser();
    navigate('/Account');
  };

  return (
    <div
      className="hidden lg:block w-80 h-screen pt-[40px]  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-500 min-w-[350px]"
    >
      <div className=" w-full h-auto flex justify-center items-center flex-col gap-4 mb-6">
        <div className="border border-gray-300 rounded-full overflow-hidden">
          <img className="w-[80px] h-[80px]" src={user.photo_secure_url} />
        </div>
        <p className="font-general-sans font-semibold text-sm">{user.name}</p>
      </div>
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-neutral-950">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="Profile"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://icons.veryicon.com/png/128/miscellaneous/keyi-icon-linear-and-colorful/technician-3.png"
              />
              <span className="ml-3">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="MyFavorites"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://icons.veryicon.com/png/128/miscellaneous/keyi-icon-linear-and-colorful/industrial-and-commercial-finance-and-taxation-2.png"
              />
              <span className="ml-3">Favorites</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="OrderHistory"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://icons.veryicon.com/png/128/miscellaneous/keyi-icon-linear-and-colorful/find-activity-2.png"
              />
              <span className="ml-3">Orders</span>
            </NavLink>
          </li>
          <li>
            <div
              onClick={() => handleLogout()}
              className="cursor-pointer flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/B6c75bpG/log-out-34.png"
              />
              <span className="ml-3">Log out</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSideBar;
