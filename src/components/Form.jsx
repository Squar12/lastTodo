import { useState } from "react";
import styles from "./styles/Form.module.css";
import { Footer } from "./Footer";

export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };

    setTaskList([...taskList, newTask]);
    setInputValue("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={inputValue}
          placeholder="Add a new task..."
          className={styles.taskInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <button className={styles.taskAddButton} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};
