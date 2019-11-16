import React from "react";
import Title from "./Title";
import "./index.css";

export interface CProps {
  children: React.ReactNode;
  id: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
}

const Board: React.FC<CProps> = (props: CProps): JSX.Element => {
  const { children, title, ...restProps } = props;

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let target = event.target as HTMLElement;
    const todo_id = event.dataTransfer.getData("todo_id");
    let todo = document.getElementById(todo_id) as HTMLElement;
    // todo.style.display = "block";
    return target.appendChild(todo) as HTMLElement;
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="board-container">
      <Title children={title} />
      <div
        className="board"
        onDrop={onDrop}
        onDragOver={onDragOver}
        {...restProps}
      >
        {children}
      </div>
    </div>
  );
};

export default Board;
