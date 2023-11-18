import React from "react";

export const Video = (props) => {
  return (
    <video
      src={props.videoLink}
      width="600"
      height="300"
      controls="controls"
      autoPlay="true"
    />
  );
};
