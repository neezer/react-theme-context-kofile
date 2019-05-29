import { createContext } from "react";

export interface Theme {
  contentBlock: {
    padding: string;
  };
  contentDivider: {
    color: string;
    strokeWidth: string;
  };
  section: {
    header: {
      background: string;
      padding: string;
    };
  };
}

export const defaultTheme: Theme = {
  contentBlock: {
    padding: "25px"
  },
  contentDivider: {
    color: "#eee",
    strokeWidth: "1px"
  },
  section: {
    header: {
      background: "#eee",
      padding: "8px"
    }
  }
};

export const context = createContext<Theme>(defaultTheme);
