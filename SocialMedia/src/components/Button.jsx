import React from "react";

function Button({ content, width, height, context }) {
  return (
    <button
      style={{ width: width ? `${width}px` : "auto" },{height : height ? `${height}px`: "48px"}}
      className="flex flex-col justify-center items-center bg-blue-700 w-12 rounded-full overflow-hidden bg-gray-200"
    >
      {content}
      {context}
    </button>
  );
}

export default Button;
