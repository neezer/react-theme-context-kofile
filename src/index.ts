import { createContext } from "react";

export interface Theme {
  contentBlock: {
    padding: string;
  };
  section: {
    header: {
      background: string;
    };
  };
}

export const defaultTheme: Theme = {
  contentBlock: {
    padding: "25px"
  },
  section: {
    header: {
      background: "#eee"
    }
  }
};

export const context = createContext<Theme>(defaultTheme);
