import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { OpenPhotoScreen } from "../screens/OpenPhotoScreen";
import { THEME } from "../theme";

const OpenPhotoNavigator = createStackNavigator(
  {
    Main: MainScreen,
    OpenPhoto: OpenPhotoScreen,
  },
  {
    initialRouteName: "Main", // Первый экран по умолчанию
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: THEME.HEADER_TEXT_COLOR,
    },
  }
);

export const AppNavigation = createAppContainer(OpenPhotoNavigator);
