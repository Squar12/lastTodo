import { Filter } from "@/components/Filter";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Task } from "@/components/Task";
import { useState, useEffect } from "react";
import { Notask } from "../components/Notask";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);

  const handleDelete = (id) => {
    const todoDelete = taskList.filter((todo) => todo.id !== id);
    setTaskList(todoDelete);
  };

  const toggleChekBox = (id) => {
    const toggledTask = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(toggledTask);
  };

  const filteredTask = taskList.filter((task) => {
    switch (filter) {
      case "active":
        return !task.isCompleted;
      case "completed":
        return task.isCompleted;
      default:
        return true;
    }
  });

  const allCount = taskList.length;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "365px",
        width: "100%",
        margin: "auto",
        gap: "10px",
        padding: "24px 16px",
        borderRadius: "8px",
        marginInline: "auto",
        backgroundColor: "#fff",
        boxShadow: "0 0 12px rgba(0, 0, 0, .16)",
        marginTop: "70px",
      }}
    >
      <h1
        style={{
          color: "#000",
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        To-Do List
      </h1>

      <Form setTaskList={setTaskList} taskList={taskList} />

      <Filter setFilter={setFilter} />

      {filteredTask.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTaskById={handleDelete}
          toggleChekBox={toggleChekBox}
        />
      ))}

      {filteredTask.length === 0 && <Notask />}

      <Footer allCount={allCount} />
    </div>
  );
}
