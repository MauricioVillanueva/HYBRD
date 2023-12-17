import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth} from '../context/AuthContext'
import UserSideBar from "./UserSideBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUser } from "../../../redux/slices/userSlice";

const DashBoardUser = () => {
  const auth = useAuth();
  const { authReady, user } = auth;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {

      const fetchDetail = async () => {
        try {
          setLoading(true);
          setError(null); 

          const json = await axios.get(`http://localhost:3001/api/user/${user.uid}`);
          if(!json) console.log('No existe en la db');
          const detail = json.data;
          dispatch(getUser(detail));
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false); 
        }
      };
      fetchDetail();
    }
  }, [dispatch, authReady, user.uid]);

  const { pathname } = useLocation();

  if (!authReady) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      {pathname === "/" && <Navigate to="/Account" />}
      <div className="h-full w-auto flex">
        <UserSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardUser;
