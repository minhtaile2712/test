function getValue() {
  console.log("getValuerun");
  return 2112312;
}

const a = getValue();

function Button({ color, handleClick }) {
  b = a;

  return (
    <button onClick={handleClick} style={{ color: color }}>
      click me
    </button>
  );
}

export default Button;
