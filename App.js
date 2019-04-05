import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import HomeActivity from './activities/HomeActivity'
import MoviesActivity from './activities/MoviesActivity'


export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <View style={{ flex:1}}>
    <View style={{ height:150, 
      backgroundColor:'#3399CC', 
      justifyContent:'center', 
      alignItems:'center'}}
      >
      <Text style={{ color:'#FFF'}}>Movie Manager</Text>
  </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
)

const AppNavigator = createDrawerNavigator({
  Home: HomeActivity,
  Movies:MoviesActivity
}, {
  contentComponent : CustomDrawerComponent
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
