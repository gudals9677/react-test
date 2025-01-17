import MemoItem from "../MemoItem";

function MemoList({ memos, setMemoIndex, selectedMemoIndex, deleteMemo }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            setMemoIndex(index);
          }}
          onClickDeleteMemo={(e) => {
            deleteMemo(index);
            e.stopPropagation();
            e.preventDefault();
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
