import HomeScreen from './screens/HomeScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
import CounterScreen from './screens/CounterScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
