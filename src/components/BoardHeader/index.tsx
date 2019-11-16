import React from "react";
import ButtonIcon from "../ButtonIcon";
import Input from "../Input";
import { onChangeEvent, onPressEnterEvent } from "../Input/definitions";
import "./index.css";

export type onClickEvent = (
  event: React.MouseEvent<HTMLSpanElement, MouseEvent>
) => void;

interface BoardHeaderProps {
  title?: string;
  onAddBoard?: onClickEvent;
  onChange?: onChangeEvent;
  onPressEnter?: onPressEnterEvent;
}

const BoardHeader: React.FC<BoardHeaderProps> = (
  props: BoardHeaderProps
): JSX.Element => {
  const { title, onAddBoard, ...otherProps } = props;
  return (
    <section className="board-header">
      <Input
        initialValue={title}
        placeholder="Enter Board Name"
        {...otherProps}
      />
      <ButtonIcon onClick={onAddBoard} />
      <ButtonIcon children="-" />
    </section>
  );
};

export default BoardHeader;
