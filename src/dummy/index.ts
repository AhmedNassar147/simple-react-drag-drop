export interface BoardInterface {
  id: string;
  title: string;
}

export const initialBoards: Array<BoardInterface> = [
  {
    id: "board1",
    title: "Not Planned"
  }
];
