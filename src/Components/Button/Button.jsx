import styles from "./Button.module.css";

const Button = ({ type, size, children, ...props }) => {
  return (
    <span
      className={size === "sm" ? styles.sm : size === "md" ? styles.md : null}
    >
      <button
        className={
          type === "secondary"
            ? styles.secondary
            : type === "primary"
            ? styles.primary
            : styles.default
        }
        {...props}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
