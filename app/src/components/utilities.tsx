import { StyleSizes } from "../types/styles";

export default function getSize(size: StyleSizes) {
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
