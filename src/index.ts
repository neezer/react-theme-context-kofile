import { createContext } from "react";

export interface Theme {
  section: {
    header: {
      background: string;
    };
  };
}

export const defaultTheme: Theme = {
  section: {
    header: {
      background: "#eee"
    }
  }
};

export const context = createContext<Theme>(defaultTheme);
