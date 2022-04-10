import { StyleSheet, Text, View ,Button} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import Profile from '../Profile.js';
import Setting from '../Setting.js';
import HomeScreen from '../HomeScreen.js';
import userAuth from '../../firebase/userAuth.js';
import { signOut } from '../../redux/actions/authActions.js';
import { connect } from 'react-redux';
  

const Drawer = createDrawerNavigator()

const MyDrawer = ({navigation,signOut}) =>
{
  // const { signOut } = userAuth()
  
  const handleSignOut = () =>
  {
    signOut()
  }
  return (
      <Drawer.Navigator initialRouteName='homeScreen' drawerContent={(props)=>{
      return (
          <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label='LogOut' onPress={handleSignOut}/>
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

