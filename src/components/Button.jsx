import React from "react";

const Button = ({
  children,
  type = "button",
  btnclr = "bg-blue-600",
  className = "",
  cursor = "pointer",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${btnclr} ${cursor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
