import { HTMLAttributes, useState } from "react";
import { SelectOptionType } from "../../types";

interface SelectFieldPropsI
  extends Omit<HTMLAttributes<HTMLSelectElement>, "onChange"> {
  id: string;
  label: string;
  initialValue?: string;
  options: SelectOptionType[];
  onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldPropsI> = ({
  id,
  label,
  onChange,
  options,
  initialValue,
  ...props
}) => {
  let [value, setValue] = useState(initialValue);
  const onValueChange = (e: any) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label style={{ fontSize: 16, fontWeight: "bold" }} htmlFor={id}>
        {label}
      </label>
      <select
        {...props}
        id={id}
        name={id}
        onChange={onValueChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
