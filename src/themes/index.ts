import { ThemedStyledProps } from 'styled-components';

type Theme = {
  header: string;
  background: string;
  textColor: string;
}

const darkTheme: Theme = {
  header: '#1F2937',
  background: '#4B5563',
  textColor: '#fff'
}

const lightTheme: Theme = {
  header: '#60A5FA',
  background: '#FFFFF',
  textColor: '#000'
}

export type CustomThemedProps<P = Record<string, unknown>> = ThemedStyledProps<P, Theme>;
export { lightTheme, darkTheme };
