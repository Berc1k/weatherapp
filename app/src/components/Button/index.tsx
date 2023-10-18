import React from "react";
import { StyleSizes } from "../../types/styles";
import getSize from "../utilities";

type Props = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: StyleSizes;
};

function Button({ children, onClick, size = "m" }: Props) {
  return (
    <button
      className={`button button--size-${getSize(size)}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
