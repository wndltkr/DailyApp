import { createDrawerNavigator } from "@react-navigation/drawer";
import MapHomeScreen from "../../screens/MapHomeScreen";
import FeedHomeScreen from "../../screens/FeedHomeScreen";
import CalendarHomeScreen from "../../screens/CalendarHomeScreen";

function MainDrawerNavigator(){
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='MapHome' component={MapHomeScreen}/>
      <Drawer.Screen name='FeedHome' component={FeedHomeScreen}/>
      <Drawer.Screen name='CalendarHome' component={CalendarHomeScreen}/>
    </Drawer.Navigator>
  )
}

export default MainDrawerNavigator;
