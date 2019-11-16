import React from "react";
import "./index.css";

export interface CardProps {
  children: React.ReactNode;
  id: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  const { children, ...restProps } = props;

  const onDragStart = (event: React.DragEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    event.dataTransfer.setData("todo_id", target.id);
    // setTimeout(() => (target.style.display = "none"), 0);
  };

  const onDragOver = (event: React.DragEvent<HTMLElement>) =>
    event.stopPropagation();

  return (
    <section
      className="card"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      draggable
      {...restProps}
    >
      {children}
    </section>
  );
};

export default Card;
