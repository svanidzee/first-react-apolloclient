import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: "#f0e7db",
    },
  }),
};

const theme = extendTheme({ styles });
export default theme;
