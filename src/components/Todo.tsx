import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

interface List {
  id: number;
  name: string;
  completed: boolean;
}

interface props {
  lists: List[];
  onCheck: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  isSortable?: boolean;
}

const Todo = ({ lists, onDelete, onCheck, isSortable }: props) => {
  return (
    <>
      {lists.map((list) => (
        <div className="todo-container group" key={list.id} data-id={list.id}>
          {/* Checkbox */}
          <div
            className={`check${list.completed ? " check-active" : ""}`}
            onClick={() => onCheck(list.id, list.completed)}
          >
            {list.completed && (
              <img src={check} alt="check icon" className="check-img" />
            )}
          </div>
          {isSortable && (
            <div className="drag-handle">
              <p
                onClick={() => onCheck(list.id, list.completed)}
                className={`todo ${
                  list.completed && "line-through decoration-0 opacity-30"
                }`}
              >
                {list.name}
              </p>
            </div>
          )}
          {/*  */}
          <div
            className="ml-auto cursor-pointer sm:hidden group-hover:block"
            onClick={() => onDelete(list.id)}
          >
            <img
              src={cross}
              alt="cross icon"
              className="w-[0.8rem] sm:w-4 h-[0.8rem] sm:h-4"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
