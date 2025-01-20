function Nav({ setIndex, max, title }) {
  const onLeftClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + max) % max);
  };

  const onRightClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % max);
  };

  return (
    <div className="header">
      <button onClick={onLeftClick} className="arrow-button">
        &larr;
      </button>
      <h1>{title}</h1>
      <button onClick={onRightClick} className="arrow-button">
        &rarr;
      </button>
    </div>
  );
}

export default Nav;
