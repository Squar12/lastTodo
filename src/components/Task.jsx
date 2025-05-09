export const Task = ({ task, removeTaskById, toggleChekBox }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "320px",
        height: "35px",
        backgroundColor: "#F3F4F6",
        padding: "12px 16px",
        alignItems: "center",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          textDecoration: task.isCompleted ? "line-through" : "none",
        }}
      >
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleChekBox(task.id)}
        />
        <p>{task.taskName}</p>
      </div>
      <div>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: "6px",
            paddingInline: "12px",
            textTransform: "capitalize",
            height: "30px",
            color: "red",
            backgroundColor: "#fef2f2",
          }}
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
