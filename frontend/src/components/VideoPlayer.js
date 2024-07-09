import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(SocketContext);

  return (
    <div className="flex justify-between gap-16">
      {stream && (
        <div className="border-2 w-[500px] h-96 bg-white">
          <div className="text-left p-2">
            <h1 className="text-xl font-bold">{name || "Name"}</h1>
          </div>
          <div>
            <video playsInline ref={myVideo} autoPlay />
          </div>
        </div>
      )}

      {callAccepted && !callEnded && (
        <div className="border-2 w-[500px] h-96 bg-white">
          <div className="text-left p-2">
            <h1 className="text-xl font-bold">{call.name || "Name"}</h1>
          </div>
          <div>
            <video playsInline ref={userVideo} autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
