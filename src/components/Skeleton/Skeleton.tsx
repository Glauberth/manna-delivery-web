import styles from "./styles.module.css";

type SkeletonProps = {
  lines?: number;
  heigth?: number;
  spacings?: number;
};

export default function Skeleton({ heigth = 20, lines = 5, spacings = 6 }: SkeletonProps) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: `${spacings}px`, padding: 15 }}>
      {[...Array(lines)].map((_, index) => (
        <div
          key={index}
          className={styles.SkeletonContent}
          style={{
            height: `${heigth}px`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
