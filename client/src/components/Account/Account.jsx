import { useSelector } from "react-redux";
import DashBoardUser from "./UserDashboard/DashBoardUser";
import Signup from "./Signup";
import { useAuth } from "./context/AuthContext";

const Account = () => {
  const auth = useAuth();
  const user = useSelector((state) => state.user);
  // console.warn(user);

  return (
    <div>
        {auth.user.uid ? <DashBoardUser user={user} /> : <Signup />}
    </div>
  );
};

export default Account;
