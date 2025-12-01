import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

const gradients = {
  goldBorder: {
    start: "#F8D56A", // lighter gold highlight
    end: "#C99700",   // core ND gold
  },
};

export const theme = {
  colors,
  spacing,
  typography,
  gradients,
};

export type Theme = typeof theme;

export { colors, spacing, typography };
export default theme;
