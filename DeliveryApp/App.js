import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native';
import SupplierCard from './app/components/SupplierCard/SupplierCard';
import CardComponent from './app/components/CardComponent/CardComponent';
//import Circle from './app/components/Circle/Circle.js';

export default class DeliveryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <View style={styles.header}> 
          <Text style={styles.headerText}> Future Orders  </Text>
        </View>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.cardStyle}>
         <CardComponent></CardComponent>
         
      </View>
      </ScrollView>
    
      </View>  
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
    backgroundColor:'rgb(66,97,144)',
    alignItems: 'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
    justifyContent: 'center',
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