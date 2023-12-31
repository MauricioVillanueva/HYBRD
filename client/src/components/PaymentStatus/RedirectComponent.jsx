import React from "react";
import { useNavigate } from "react-router-dom";
import FailureComponent from "./Failure";
import PendingComponent from "./Pending";
import ApprovedComponent from "./Aproved";
import axios from "axios";

const RedirectComponent = ({ status }) => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = React.useState(10);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const receivedId = urlParams.get("preference_id");
    const receivedref = urlParams.get("external_reference");
    const paymentId = urlParams.get("payment_id");

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Realizar el fetch para enviar los parámetros al webhook
    axios
      .post(`http://localhost:3001/api/payment/webhook`, {
        status: status,
        preference_id: receivedId,
        orderId: receivedref,
        paymentId,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error en la solicitud POST:", error);
      });

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  // Redirigir al home después de 10 segundos
  React.useEffect(() => {
    if (seconds === 0) {
      navigate("/"); // Redirigir al home
    }
  }, [seconds, navigate]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Redireccionando...</h1>
        {status === "failure" && <FailureComponent />}
        {status === "pending" && <PendingComponent />}
        {status === "success" && <ApprovedComponent />}
        {status !== "failure" &&
          status !== "pending" &&
          status !== "success" && (
            <p className="text-red-500 mb-4">Estado desconocido</p>
          )}
        <div>
          <p>Redirigiendo al home en: {seconds} segundos</p>
        </div>
      </div>
    </div>
  );
};

export default RedirectComponent;
