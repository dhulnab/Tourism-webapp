import styles from "./Input.module.css";

const Input = ({ placeholder, value, onChange, style, type, ...props }) => {
  return (
    <span>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        style={{ ...style }}
      />
    </span>
  );
};

export default Input;
