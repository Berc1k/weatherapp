import React from "react";
import { StyleSizes } from "../../types/styles";

type Props = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: StyleSizes;
};

function getSize(size: StyleSizes) {
  switch (size) {
    case "s":
      return "s";
    case "m":
      return "m";
    case "l":
      return "l";
    case "xl":
      return "xl";
  }
}

function Button({ children, onClick, size = "m" }: Props) {
  return (
    <button className={`btn btn--size-${getSize(size)}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
