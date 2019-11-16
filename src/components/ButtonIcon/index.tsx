import React from "react";
import "./index.css";

export interface CProps {
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const ButtonIcon: React.FC<CProps> = (props: CProps): JSX.Element => {
  const { onClick, children } = props;
  return (
    <span className="button-icon" onClick={onClick}>
      {children}
    </span>
  );
};

ButtonIcon.defaultProps = {
  children: "+"
};

export default ButtonIcon;
