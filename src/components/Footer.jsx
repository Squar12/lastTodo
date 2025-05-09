export const Footer = ({ allCount }) => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          color: "#6b7280",
          paddingRight: "210px",
        }}
      >
        0 of {allCount} task completed
      </p>
    </div>
  );
};
