import type { CSSProperties } from "react";

import styles from "./TextBlock.module.css";

interface TextBlockProps {
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontFamily?: string;
  textDecoration?: string;
  color?: string;
  textAlign?: string;
  textTransform?: string;
}

export const TextBlock = ({
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  fontFamily,
  textDecoration,
  color,
  textAlign,
  textTransform,
}: TextBlockProps) => {
  return (
    <div
      className={styles.root}
      style={
        {
          color: `var(${color})`,
          textDecoration: `var(${textDecoration})`,
          fontSize: `var(${fontSize})`,
          fontWeight: `var(${fontWeight})`,
          lineHeight: `var(${lineHeight})`,
          fontStyle: `var(${fontStyle})`,
          fontFamily: `var(${fontFamily})`,
          textAlign: `var(${textAlign})`,
          textTransform: `var(${textTransform})`,
        } as unknown as CSSProperties
      }
    >
      Text
    </div>
  );
};
