import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SupplierCard from './app/components/SupplierCard/SupplierCard';

export default class DeliveryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}> 
          <Text style={styles.headerText}> Future Orders  </Text>
        </View>

      <SupplierCard></SupplierCard>
      <SupplierCard></SupplierCard>
      </ScrollView>
    
      </View>  
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize:18,
    padding:26
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
});

AppRegistry.registerComponent('DeliveryApp',()=> DeliveryApp);