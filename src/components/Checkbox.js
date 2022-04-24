import React, { ReactNode } from "react";

const CheckBox = ({ isChecked = false }): ReactNode => {
  if (!isChecked) {
    return null;
  }
  return <div>COMPLETED</div>;
};

export default CheckBox;
