import "./App.css";
import MemoContainer from "./component/MemoContainer";
import SideBar from "./component/SideBar";
import { memo, useState } from "react";

function App() {
  const [memoIndex, setMemoIndex] = useState(0);

  const [memos, setMemos] = useState([
    {
      title: "Memo 1",
      content: "Content 1",
      createdAt: 1737007545632,
      updatedAt: 1737007550073,
    },
    {
      title: "Memo 2",
      content: "Content 2",
      createdAt: 1737007545635,
      updatedAt: 1737007550078,
    },
  ]);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[memoIndex] = newMemo;

    setMemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setMemoIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);

    setMemos(newMemos);

    if (index === memoIndex) {
      setMemoIndex(0);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setMemoIndex={setMemoIndex}
        selectedMemoIndex={memoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[memoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
