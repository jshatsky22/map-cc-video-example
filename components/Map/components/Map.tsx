interface MapProps {
  title: string;
  onZoom: (x: number, y: number) => void;
  theme: string;
  mileRadius: number;
}

export default function Component({
  title,
  onZoom,
  theme,
  mileRadius,
}: MapProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a7aebe",
      }}>
      <h1 style={{ color: "white" }}>{title}</h1>
    </div>
  );
}
