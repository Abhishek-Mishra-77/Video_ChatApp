import React, { useContext, useState } from "react";
import CopyToClipboard, { copyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { callAccepted, name, setName, callEnded, me, callUser, leaveCall } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="mt-8 float-left">
      options
      <div className="flex flex-col">
        <div className="flex justify-between p-4 border-2 w-[500px] h-40 bg-white">
          <div className="flex flex-col gap-4">
            <h1>Acount Info</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border-2 rounded"
            />
            <CopyToClipboard text={me}>
              <button className="border-2 bg-gray-200 rounded font-bold">
                Copy Your ID
              </button>
            </CopyToClipboard>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Make a call</h1>
            <input
              type="text"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              placeholder="Id to Call"
              className="border-2 rounded"
            />
            {callAccepted && !callEnded ? (
              <button
                onClick={leaveCall}
                className="border-2 bg-red-400 rounded font-bold"
              >
                Hang UP
              </button>
            ) : (
              <button
                onClick={() => callUser(idToCall)}
                className="border-2 rounded font-bold bg-green-500"
              >
                Call
              </button>
            )}
          </div>
        </div>
        <div className="text-left">{children}</div>
      </div>
    </div>
  );
};

export default Options;
