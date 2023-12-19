function FaqsItem({ num, title, currentOpen, onOpen, children }) {
  const isOpen = num === currentOpen;

  // HELPER FUNCTION TO HANDLE toggle
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p>{title}</p>
      <p>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default FaqsItem;
