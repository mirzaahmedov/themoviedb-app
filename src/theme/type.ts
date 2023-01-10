import "styled-components";

type Palette = {
  primary: string;
  secondary: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors?: Partial<Palette>;
    text?: Partial<Palette>;
    bg?: Partial<Palette>;
  }
}
