import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useMantineTheme } from "@mantine/core";

interface IBackground {
  forceTheme?: 'light' | 'dark';
}

export const background = (forceTheme?: IBackground["forceTheme"]) => {
  const theme = useMantineTheme();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const isDarkMode = forceTheme === 'dark' || (!forceTheme && mode === 'dark');

  return isDarkMode ? theme.other.bgDark : theme.other.bgLight;
};