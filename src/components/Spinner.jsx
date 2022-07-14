import React from "react";
import { ClipLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ClipLoader color="green" loading={loading} size={50} />
    </div>
  );
};

export default Spinner;
