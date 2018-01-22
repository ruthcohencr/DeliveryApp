import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class SupplierCard extends Component {
  render() {
    return (
    
      <View style={styles.container}>
        <View style={styles.cardsHeader}>
                <Text style={styles.allDate}> Sunday </Text>
                <Text> 21.01.18 </Text> 
                <Text> Arrive between </Text> 
                <Text> Arrival Hour </Text>
        </View>  

         <Text> SuppierName </Text>
         <Text> Address </Text>
      
         <Text> Image </Text>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '30%',
    backgroundColor: 'blue',  //#fff
    alignItems: 'center',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    borderBottomWidth:10,
    borderBottomColor:'white',
  },
  cardsHeader:{
    flex:1,
    backgroundColor: 'rgb(44,183,161)',
    alignSelf:'stretch',
    
    justifyContent:'center',
  },
  allDate:{
    color:'white',
    fontSize:18,
  }
});

AppRegistry.registerComponent('SupplierCard',()=> SupplierCard);