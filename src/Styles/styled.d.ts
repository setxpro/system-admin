import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      layout: string;
      sidebar: string;
      header: string;
      text: string;
      border: string;
    };
  }
}
