import React from "react";
import Options from "../components/Options";
import Notifications from "../components/Notifications";
import VideoPlayer from "../components/VideoPlayer";

const Home = () => {
  return (
    <section>
      <div className="flex justify-center mt-4">
        <h1 className="bg-white w-52 h-16 flex font-bold text-3xl rounded  justify-center items-center">
          Video Chat
        </h1>
      </div>

      <div className="mx-auto max-w-screen-xl mt-12">
        <div className="text-center ">
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </div>
      </div>
    </section>
  );
};

export default Home;
