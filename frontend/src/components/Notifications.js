import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  console.log(call + " -- > ");
  return (
    <>
      {call?.isReceivedCall && !callAccepted && (
        <div className="flex justify-center items-center w-full bg-white h-12 gap-4">
          <h1 className="font-bold">{call.name} is calling : </h1>
          <button onClick={answerCall} className="bg-green-400 h-8 w-16 rounded font-bold text-gray-400">
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
