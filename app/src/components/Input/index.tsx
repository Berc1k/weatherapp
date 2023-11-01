import { InputTypes } from "../../types/inputs";
import { StyleSizes } from "../../types/styles";
import getSize from "../utilities";

type Props = {
  size: StyleSizes;
  type: InputTypes;
  label: string;
  value: string | number;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({
  size = "m",
  type = "text",
  label = "",
  value = "",
  name = "",
  placeholder = "text",
  onChange,
}: Props) {
  return (
    <div className={`input__wraper input--size-${getSize(size)}`}>
      <label className="input__label" htmlFor={label}>
        {label}
      </label>
      <input
        name={name}
        id={label}
        className={"input__field"}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
