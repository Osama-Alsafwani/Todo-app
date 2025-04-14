import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { todos } from "./components/todod";
import TodoFilter from "./components/TodoFilter";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [theme, setTheme] = useState("light");
  //
  const [todo, setTodo] = useState<ItemType[]>(todos);

  const [activeFilter, setActiveFilter] = useState<
    "all" | "active" | "completed"
  >("all");

  const visibleTodos = todo.filter((item) => {
    if (activeFilter === "active") return !item.completed;
    if (activeFilter === "completed") return item.completed;
    return true; // 'all' case
  });

  // SortableJS configuration
  const handleSort = (newState: ItemType[]) => {
    // Map visible sorted items back to original array
    const visibleIds = newState.map((item) => item.id);
    const newTodos = [
      ...todo.filter((item) => !visibleIds.includes(item.id)),
      ...newState,
    ];
    setTodo(newTodos);
  };

  return (
    <main className={theme}>
      <div className="bg-body">
        <div className="bg-image"></div>
        <div className=" w-[20.5rem] sm:w-[34rem] mt-[2.55rem] sm:mt-[4.25rem] relative">
          <Header
            theme={theme}
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          />
          <Input onAdd={(newTodo) => setTodo([...todo, newTodo])} />
          {/*  */}
          <div className="shadow-xl mt-4 sm:mt-6 rounded-[0.3rem] overflow-hidden">
            {/* Sorting */}
            <ReactSortable
              list={visibleTodos}
              setList={handleSort}
              animation={150}
              handle=".drag-handle"
              className="sortable-list"
            >
              <Todo
                lists={visibleTodos}
                onCheck={(id, completed) =>
                  setTodo(
                    todo.map((e) =>
                      e.id === id ? { ...e, completed: !completed } : e
                    )
                  )
                }
                onDelete={(id) => setTodo(todo.filter((e) => e.id !== id))}
                isSortable={true}
              />
            </ReactSortable>
            {/* Filter Buttons */}
            <TodoFilter
              onClear={() => setTodo(todo.filter((e) => !e.completed))}
              total={visibleTodos.length}
              onSelectFilter={setActiveFilter}
            />
          </div>
        </div>
        <p className="drag-drop">Drag and drop to reorder list</p>
      </div>
    </main>
  );
}

export default App;
