import "./index.css";

function SideBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFooter-addBtn" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default SideBarFooter;
