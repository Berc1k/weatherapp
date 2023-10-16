import React from "react";
import "./style.scss";
import { StyleSizes } from "../../types/styles";

type Props = {
  children: string;
  OnClick: React.MouseEventHandler<HTMLButtonElement>;
  size: StyleSizes;
};

function checkSize(size: string) {
  switch (size) {
    case "s":
      return "btn --size-s";
    case "m":
      return "btn --size-m";
    case "l":
      return "btn --size-l";
    case "xl":
      return "btn --size-xl";
  }
}

function Button({ children, OnClick, size = "m" }: Props) {
  return (
    <button className={checkSize(size)} onClick={OnClick}>
      {children}
    </button>
  );
}

export default Button;
