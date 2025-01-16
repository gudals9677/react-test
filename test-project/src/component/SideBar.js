import React from "react";
import MemoList from "./MemoList";
import SideBarHeader from "./SideBarHeader";
import SideBarFooter from "./SideBarFooter";

function SideBar({ memos, setMemoIndex, selectedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setMemoIndex={setMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
