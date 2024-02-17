import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ link }) {
  console.log("Debugando VideoPlayer");
  console.log(link);
  return (
    <ReactPlayer
      url={link}
      width={"100%"}
      config={{
        youtube: {
          playerVars: { origin: window.location.origin },
        },
      }}
    />
  );
}
