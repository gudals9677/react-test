import React from "react";
import MemoList from "../MemoList";
import SideBarHeader from "../SideBarHeader";
import SideBarFooter from "../SideBarFooter";
import "./index.css";

function SideBar({
  memos,
  addMemo,
  setMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setMemoIndex={setMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
