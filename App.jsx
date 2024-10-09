import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './src/screens/Settings';
import Chat from './src/screens/Chat';
import ChatList from './src/screens/ChatList';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Setting2, Messages2} from 'iconsax-react-native';
import {Provider} from 'react-native-paper';
import {useEffect} from 'react';

const Tabs = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate('SignUp');
    }
  }, []);
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return route.name === 'ChatList' ? (
            <Messages2 size={size} color={color} />
          ) : (
            <Setting2 size={size} color={color} />
          );
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
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabsNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{presentation: 'fullScreenModal'}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{presentation: 'fullScreenModal'}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
