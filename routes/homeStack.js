import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import AboutMe from "../screens/about";

const screens = {
  Home: {
    screen: Home,
  },
  About: {
    screen: AboutMe,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
