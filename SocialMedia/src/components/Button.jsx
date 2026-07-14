import React from "react";

function Button({ content }) {
  return (
    <button className="h-12 flex justify-center items-center bg-blue-700 w-12 rounded-full overflow-hidden">
      {content}
    </button>
  );
}

export default Button;
