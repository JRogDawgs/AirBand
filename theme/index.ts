import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { borders } from "./borders";
import { shadows } from "./shadows";
import { gradients } from "./gradients";

export const theme = {
  colors,
  spacing,
  typography,
  gradients,
  borders,
  shadows,
};

export type Theme = typeof theme;

export { colors, spacing, typography, borders, shadows, gradients };
export default theme;
