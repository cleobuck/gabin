import styles from "./TinyLoader.module.scss";

export default function TinyLoader({
  black,
  className,
}: {
  black?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${styles.spinner} ${
        black ? "" : styles.whiteSnipper
      } ${className}`}
    ></div>
  );
}
