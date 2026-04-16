import { StrictMode } from "react";

import { Providers } from "../providers";

export const App = () => {
  return (
    <StrictMode>
      {/* <ThemeProvider> */}
      <Providers />
      {/* </ThemeProvider> */}
    </StrictMode>
  );
};
