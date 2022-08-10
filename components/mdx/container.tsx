import { forwardRef, Box, BoxProps } from "@chakra-ui/react";

export const MDXContainer = forwardRef<BoxProps, "div">((props, ref) => (
  <Box ref={ref} {...props} sx={{ "> *": { marginBottom: 4 } }} />
));
