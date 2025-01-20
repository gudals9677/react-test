import "./App.css";
import MemoContainer from "./component/MemoContainer";
import SideBar from "./component/SideBar";
import { memo, useCallback, useState } from "react";
import { getItem, setItem } from "./lib/storage";
import debounce from "lodash/debounce";

const debouncedSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);
  const [memoIndex, setMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[memoIndex] = newMemo;
        debouncedSetItem("memo", newMemos);

        return newMemos;
      });
    },
    [memoIndex]
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "Untitled",
          content: "",
          createdAt: now,
          updatedAt: now,
        },
      ];
      debouncedSetItem("memo", newMemos);

      return newMemos;
    });
    setMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debouncedSetItem("memo", newMemos);

        return newMemos;
      });

      if (index === memoIndex) {
        setMemoIndex(0);
      }
    },
    [memoIndex]
  );

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
