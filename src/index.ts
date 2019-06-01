import Color from "color";
import { createContext } from "react";
import { verticalLinearGradient } from "./utils";

export interface Theme {
  site: {
    header: {
      color: string;
      background: string;
    };
  };
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
      color: string;
      padding: string;
    };
  };
}

/**
 * Color definitions
 */
const baseAccent = Color("#243f8a");

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
      color: "#000",
      padding: "8px"
    }
  },
  site: {
    header: {
      background: verticalLinearGradient([
        [baseAccent.darken(0.3).toString(), "0%"],
        [baseAccent.toString(), "100%"]
      ]),
      color: "#fff"
    }
  }
};

export const context = createContext<Theme>(defaultTheme);
