import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './src/screens/Settings';
import Chat from './src/screens/Chat';
import ChatList from './src/screens/ChatList';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from 'iconsax-react-native';

const Tabs = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Home size={size} color={color} />;
        },
      })}>
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabsNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
