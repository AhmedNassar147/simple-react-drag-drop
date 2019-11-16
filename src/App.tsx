import React from "react";
import Board from "./components/Board";
import { initialBoards, BoardInterface } from "./dummy";

const { useState, useCallback } = React;

const App: React.FC = () => {
  const [boards, setBoards] = useState<BoardInterface[]>(initialBoards);

  const onAddBoard = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      return setBoards((oldBoard: React.SetStateAction<BoardInterface[]>) => {
        const newId = (oldBoard ? oldBoard.length + 1 : 1).toString();
        const newBoards = oldBoard.length ? oldBoard : [];
        return [...newBoards, { id: newId, title: "" }];
      });
    },
    [setBoards]
  );

  const onChangeBoardName = useCallback(
    (value, id) => {
      setBoards((oldBoard: BoardInterface[]) => {
        return oldBoard.map(item => {
          if (item.id === id) {
            return {
              ...item,
              title: value
            };
          } else return item;
        });
      });
    },
    [setBoards]
  );

  return (
    <div className="App">
      <header>React App For Drap and Drop</header>
      <main>
        {boards.map(board => (
          <Board
            {...board}
            key={board.id}
            onAddBoard={onAddBoard}
            onChangeBoardName={onChangeBoardName}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
