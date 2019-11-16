import React from "react";
import { InputProps } from "./definitions";
import "./index.css";

const { useState, useCallback, useEffect } = React;

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  const { onPressEnter, onChange, name, initialValue, placeholder } = props;

  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(initialValue || "");
  }, [setValue, initialValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value }
      } = event;
      setValue(value);
      if (onChange) {
        onChange({ name, value });
      }
    },
    [setValue, onChange]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        if (onPressEnter) onPressEnter(value);
      }
    },
    [onPressEnter, value]
  );

  return (
    <input
      onKeyPress={handleKeyDown}
      name={name}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
