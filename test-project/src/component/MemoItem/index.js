import "./index.css";

function MemoItem({ children, onClickItem, onClickDeleteMemo, isSelected }) {
  return (
    <div
      className={"MemoItem " + (isSelected ? "selected" : "")}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem-deleteBtn" onClick={onClickDeleteMemo}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
