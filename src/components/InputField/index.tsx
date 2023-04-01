import Eyeon from "./eyeon.svg";
import Eyeoff from "./eyeoff.svg";
import styles from "./styles.module.css";
import { useState } from "react";

type Props = {
  color: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  password?: boolean;
  warning?: boolean;
};

export const InputField = ({
  color,
  onChange,
  placeholder,
  value,
  password,
  warning,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div
      className={styles.container}
      style={{
        borderColor: !warning ? (focused ? color : "#f9f9fb") : "#FF0000",
        backgroundColor: focused ? "#fff" : "#f9f9fb",
      }}
    >
      <input
        className={styles.input}
        type={password ? (showPassword ? "text" : "password") : "text"}
        placeholder={placeholder}
        color={color}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {password && (
        <div className={styles.showPassword} onClick={toggleShowPassword}>
          {showPassword && <Eyeon color="#a9a4a4" />}
          {!showPassword && <Eyeoff color="#a9a4a4" />}
        </div>
      )}
    </div>
  );
};
