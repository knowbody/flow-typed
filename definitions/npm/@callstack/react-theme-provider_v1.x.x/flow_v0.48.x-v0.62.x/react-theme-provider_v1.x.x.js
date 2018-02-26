declare module 'react-theme-provider' {
  declare type ThemeProviderProps<T> = {
    children?: any,
    theme?: T,
  };

  declare class ThemeProvider<T> extends React$PureComponent<
    ThemeProviderProps<T>
  > {}

  declare type ThemeProviderType<T> = React$ComponentType<
    ThemeProviderProps<T>
  >;

  declare function createThemeProvider<T>(
    defaultTheme: T,
    channel: string
  ): ThemeProviderType<T>;

  declare type withThemeReturnType<Theme, Props: {}> = React$ComponentType<
    $Diff<Props, { theme: Theme }>
  >;

  declare type WithThemeType<T> = <Props: {}>(
    Comp: React$ComponentType<Props>
  ) => withThemeReturnType<T, Props>;

  declare export type ThemingType<T> = {
    ThemeProvider: ThemeProviderType<T>,
    withTheme: WithThemeType<T>,
  };

  declare function createTheming<T>(defaultTheme: T): ThemingType<T>;
}
