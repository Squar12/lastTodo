export const Task = ({ task, removeTaskById }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#F3F4F6",
        padding: "12px 16px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          textDecoration: task.isCompleted ? "line-through" : "none",
        }}
      >
        <input type="checkbox" />
        <p>{task.taskName}</p>
      </div>
      <div>
        <button
          onClick={() => {
            removeTaskById(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
