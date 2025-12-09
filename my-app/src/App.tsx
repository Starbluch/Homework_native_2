import { View } from "react-native";
import "./utils/TriggerStyles";
import MainComponent from "./components/HelloWorld";
import { styles } from "./utils/Css";

const MainApp = () => {
  return (
    <View style={styles.mainWrapper}>
      <MainComponent />
    </View>
  );
};

export default MainApp;