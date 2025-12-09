import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";

type StyleDefinition<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const styles: any = {};

class ThemeManager {
  static create<T extends StyleDefinition<T>>(definitions: T): boolean {
    const processedStyles: ReturnType<typeof StyleSheet.create> =
      StyleSheet.create(definitions);
    Object.assign(styles, processedStyles);
    return true;
  }
}

export { ThemeManager as Css };