import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";
import check from "../images/icon-check.svg";

interface Props {
  onAdd: (newTodo: { id: number; name: string; completed: boolean }) => void;
}

const Input = ({ onAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleAddTodo = (
    // event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && inputRef.current?.value.trim()) {
      onAdd({
        id: Date.now(),
        name: inputRef.current?.value.trim(),
        completed: isChecked,
      });
      inputRef.current.value = "";
      setIsChecked(false);
    }
  };
  return (
    <div className="input-box">
      <div
        className={`check${isChecked ? " check-active" : ""}`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && (
          <img src={check} alt="check icon" className="check-img" />
        )}
      </div>
      <input
        ref={inputRef}
        name="TODO"
        type="text"
        className="input"
        placeholder="Create a new todo..."
        onKeyUp={handleAddTodo}
      />
    </div>
  );
};

export default Input;
