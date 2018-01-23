import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native';
import SupplierCard from './app/components/SupplierCard/SupplierCard';
//import Circle from './app/components/Circle/Circle.js';

export default class DeliveryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}> 
          <Text style={styles.headerText}> Future Orders  </Text>
        </View>

      <View style={styles.cardStyle}>
         <SupplierCard></SupplierCard>
         <SupplierCard></SupplierCard>
         <SupplierCard></SupplierCard>
         <SupplierCard></SupplierCard>
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
    alignItems:'center',
    padding: 5,
    paddingTop:20,
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
    marginBottom:10,
  },
});

AppRegistry.registerComponent('DeliveryApp',()=> DeliveryApp);