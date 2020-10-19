import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { Button } from 'react-native';
import CourseDetailScreen from './screens/CourseDetailScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import ScheduleScreen from './screens/ScheduleScreen';
import SignInScreen from './screens/SignInScreen';
import UserContext from './UserContext';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from './firebase';

const Stack = createStackNavigator();

const SignInButton = ({ navigation, user }) =>
  user && user.uid ? (
    <Button
      title='Logout'
      color='#448aff'
      onPress={() => firebase.auth().signOut()}
    />
  ) : (
    <Button
      title='SignIn'
      color='#448aff'
      onPress={() => navigation.navigate('SignInScreen')}
    />
  );

const App = () => {
  const [user, setUser] = useState({ role: 'admin' });
  const [auth, setAuth] = useState();

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = (snap) => {
        setUser(auth.uid, ...snap.val());
      };
      db.on('value', handleData, (error) => alert(error));
      return () => {
        db.off('value', handleData);
      };
    } else {
      setUser(null);
    }
  }, [auth]);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ScheduleScreen'
            component={ScheduleScreen}
            options={({ navigation }) => ({
              title: 'Schedule',
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
            })}
          />
          <Stack.Screen
            name='CourseEditScreen'
            component={CourseEditScreen}
            options={{ title: 'Course Editor' }}
          />
          <Stack.Screen
            name='CourseDetailScreen'
            component={CourseDetailScreen}
            options={{ title: 'Course detail' }}
          />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
