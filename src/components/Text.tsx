interface TextProps {
  text?: string;
  font?: "noticia" | "dancing" | "garamond" | "mea";
  // all sizes are Tailwind CSS sizes
  // e.g. "sm", "md", "lg", "xl", "
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  weight?: "normal" | "bold" | "light" | "medium";
  type?: "cursive" | "normal";
  color?: string; // e.g. "text-black" or "text-red-500"
}

const fontMap: Record<string, string> = {
  noticia: "font-noticia",
  dancing: "font-dancing",
  garamond: "font-garamond",
  mea: "font-mea",
};

const sizeMap: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
};

const weightMap: Record<string, string> = {
  normal: "font-normal",
  bold: "font-bold",
  light: "font-light",
  medium: "font-medium",
};

export default function Text({
  text,
  font = "noticia",
  size = "md",
  weight = "normal",
  type = "normal",
  color = "text-black",
}: TextProps) {
  if (!text) return null;

  const classes = [
    sizeMap[size],
    weightMap[weight],
    fontMap[font],
    color,
    type === "cursive" ? "italic" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <p className={classes}>{text}</p>;
}
