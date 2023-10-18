import { InputTypes } from "../../types/inputs";
import { StyleSizes } from "../../types/styles";
import getSize from "../utilities";

type Props = {
  size: StyleSizes;
  type: InputTypes;
  label: string;
  value: string | number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({
  size = "m",
  type = "text",
  label = "",
  value = "",
  placeholder = "text",
  onChange,
}: Props) {
  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input
        id="label"
        className={`input ${getSize(size)}`}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
