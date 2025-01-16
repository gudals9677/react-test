import "./App.css";
import MemoContainer from "./component/MemoContainer";
import SideBar from "./component/SideBar";
import { useState } from "react";

function App() {
  const [memos, setMemos] = useState([
    {
      title: "Memo 1",
      content: "Content 1",
      strDate: 1737007545632,
      endDate: 1737007550073,
    },
    {
      title: "Memo 2",
      content: "Content 2",
      strDate: 1737007545635,
      endDate: 1737007550078,
    },
  ]);

  const [memoIndex, setMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[memoIndex] = newMemo;

    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setMemoIndex={setMemoIndex}
        selectedMemoIndex={memoIndex}
      />
      <MemoContainer memo={memos[memoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
