import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";

const App: React.FC = () => (
  <div className="App">
    <header>React App For Drap and Drop</header>
    <main>
      <Board id="board-1" title="Todos">
        <Card draggable id="card-1">
          <span>bord1 - card1</span>
        </Card>
      </Board>

      <Board id="board-2" title="on Progress">
        <Card draggable id="card-2">
          <span>2-card-2</span>
        </Card>

        <Card draggable id="card-3">
          <span>2-card-3</span>
        </Card>
      </Board>

      <Board id="board-3" title="Done">
        <Card draggable id="card-4">
          <span>3-card-4</span>
        </Card>

        <Card draggable id="card-5">
          <span>3-card-5</span>
        </Card>
      </Board>
    </main>
  </div>
);

export default App;
