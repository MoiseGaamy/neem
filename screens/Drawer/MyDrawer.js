import { StyleSheet, Text, View ,Button} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React,{ useEffect} from 'react';
import Profile from '../Profile.js';
import Setting from '../Setting.js';
import HomeScreen from '../HomeScreen.js';
import * as Notifications from 'expo-notifications';
import userAuth from '../../firebase/userAuth.js';
import { signOut } from '../../redux/actions/authActions.js';
import { connect } from 'react-redux';
import * as Permission from "expo-permissions";
  

Notifications.setNotificationHandler({
    handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
    });


const Drawer = createDrawerNavigator()

const MyDrawer = ({navigation,signOut}) =>
{
  // const { signOut } = userAuth()
  
  const handleSignOut = () =>
  {
    signOut()
  }
  useEffect(() =>
  {
    Permission.getAsync(Permission.NOTIFICATIONS).then((response) =>
    {
      if (response.status !== 'granted')
      {
        return Permission.askAsync(Permission.NOTIFICATIONS);
      }
      return response;
    }).then((response) =>
    {
      if (response.status !== "granted")
      {
          return 
        }
      })
    },[])
      
   const handleNotification = () =>
    {
    Notifications.scheduleNotificationAsync({
    content: {
      title: "hi 😎there",
      body: 'it is time for your payment',
    },
    trigger: { seconds: 5 },
  });
}
  return (
      <Drawer.Navigator initialRouteName='homeScreen' drawerContent={(props)=>{
      return (
          <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label='LogOut' onPress={handleSignOut}/>
          <DrawerItem label='Notification' onPress={handleNotification}/>
        </DrawerContentScrollView>
        )
      }}>
        <Drawer.Screen name='homeScreen' component={HomeScreen} options={{headerShown:false}}/>
        <Drawer.Screen name='profile' component={Profile}/>
        <Drawer.Screen name='setting' component={Setting}/>
    </Drawer.Navigator>
  )
}

export default connect(null,{signOut})(MyDrawer)

