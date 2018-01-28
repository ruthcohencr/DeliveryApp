import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native';
import CardComponent from './app/components/CardComponent/CardComponent';
import ImageComponent from './app/components/ImageComponent/ImageComponent';
import DeliveryScreenComponent from './app/components/DeliveryScreenComponent/DeliveryScreenComponent';
import MainScreenComponent from './app/components/MainScreenComponent/MainScreenComponent';
import { StackNavigator} from 'react-navigation';

const App = StackNavigator({
  MainScreen: { screen: MainScreenComponent },
  DeliveryScreen: { screen: DeliveryScreenComponent },
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

export default class DeliveryApp extends Component {
  
  render(){
    return (
      <App/>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle:{
    flex:1,
    alignItems:'stretch',
   // padding: 5,
    paddingTop:20,
    justifyContent: 'center',
    paddingLeft:20,
    paddingRight:20,
  },
  header:{
    flexDirection:'row',
    backgroundColor:'rgb(66,97,144)',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth:10,
    borderTopColor:'#ddd',
    paddingLeft:10,
    paddingRight:10,
    },
  headerIcon:{
  
  },
  headerText:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    padding:26
  },
  scrollContainer:{
    flex:1,
    flexDirection:'column',
    marginBottom:5,
  },
});

AppRegistry.registerComponent('DeliveryApp',()=> DeliveryApp);