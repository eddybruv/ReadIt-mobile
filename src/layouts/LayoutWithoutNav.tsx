import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Background } from "../colors/Colors";

type Props = {
  children: ReactNode;
};

const LayoutWithoutNav: React.FC<Props> = ({ children }) => {
  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: Background,
  },
});

export default LayoutWithoutNav;
