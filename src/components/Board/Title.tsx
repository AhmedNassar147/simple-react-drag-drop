import React from "react";
import "./title.css";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {
  const { children } = props;
  return <h3 className="bord-title">{children}</h3>;
};

export default Title;
