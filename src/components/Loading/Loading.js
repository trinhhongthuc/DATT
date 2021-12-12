import React from "react";

const Loading = ({ Icon, width, background }) => {
  return (
    <div
      className="loading"
      style={{ background: !!background ? background : "" }}
    >
      <Icon
        style={{ width: width, background: !!background ? background : "" }}
      />
    </div>
  );
};

export default Loading;
