import React from "react";
import BoardHeader, { onClickEvent } from "../BoardHeader";
import Card, { CardProps } from "../Card";
import { onChangeParams } from "../Input/definitions";
import ButtonIcon from "../ButtonIcon";
import "./index.css";

const { useMemo, useState, useEffect, useCallback } = React;

interface CProps {
  id: string;
  style?: React.CSSProperties;
  title?: string;
  onClickAddTask?: (boardId: string) => void;
  onAddBoard?: onClickEvent;
  tasks?: Array<CardProps>;
  onChangeBoardName?: (value: string, id: string) => void;
}

const Board: React.FC<CProps> = (props: CProps): JSX.Element => {
  const {
    tasks,
    onClickAddTask,
    title,
    onAddBoard,
    onChangeBoardName,
    ...restProps
  } = props;

  const [items, setItems] = useState<CardProps[]>([]);

  useEffect(() => {
    if (tasks) {
      setItems(tasks);
    }
  }, [setItems, tasks]);

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

  const createTask = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      return setItems((oldTasks: React.SetStateAction<CardProps[]>) => {
        const newId = (oldTasks ? oldTasks.length + 1 : 1).toString();
        const tasks = oldTasks.length ? oldTasks : [];
        return [...tasks, { id: newId, children: `Task-${newId}` }];
      });
    },
    [setItems]
  );

  const updateBoardName = useCallback(
    ({ value }: onChangeParams) => {
      if (onChangeBoardName) {
        onChangeBoardName(value, restProps.id);
      }
    },
    [onChangeBoardName, restProps]
  );

  const memorizedTasks = useMemo(() => {
    if (items) {
      return items.map((taskProps: CardProps) => (
        <Card key={taskProps.id} {...taskProps} />
      ));
    }
    return null;
  }, [items]);

  return (
    <div className="board-container">
      <BoardHeader
        title={title}
        onAddBoard={onAddBoard}
        onChange={updateBoardName}
      />
      <section className="board-add-task-container">
        <ButtonIcon onClick={createTask} />
      </section>
      <div
        className="board"
        onDrop={onDrop}
        onDragOver={onDragOver}
        {...restProps}
      >
        {memorizedTasks}
      </div>
    </div>
  );
};

export default Board;
