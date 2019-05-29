import { createContext } from 'react'

export interface Theme {
  section: {
    header: {
      background: string;
    }
  }
}

export const context = createContext<Theme>({
  section: {
    header: {
      background: '#eee'
    }
  }
})