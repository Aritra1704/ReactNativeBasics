import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
import CounterScreen from './screens/CounterScreen';
import TextScreen from './screens/TextScreen';
import BoxScreen from './screens/BoxScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Counter: CounterScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
