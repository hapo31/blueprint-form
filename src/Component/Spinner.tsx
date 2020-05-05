import React from "react";
import "./Spinner.css";

type Props = {
  className?: string;
};

export default (props: Props) => (
  <span className={`loader ${props.className}`} {...props} />
);
