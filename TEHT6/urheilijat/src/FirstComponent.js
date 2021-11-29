import React from "react";

// First simple component with heading tag
function FirstComponent() {
  return (
    <div>
      <h1
        style={{
          // Applying some styles to the heading
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          border: "13px solid #b4f0b4",
          color: "rgb(11, 167, 11)",
        }}
      >
        Kimi Räikkönen
      </h1>
    </div>
  );
}
export default FirstComponent;
