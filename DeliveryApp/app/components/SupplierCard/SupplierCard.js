import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
//import {Circle} from '../components/Circle';

export default class SupplierCard extends Component {
  render() {
    return (
    
      <View style={styles.container}>
        <View style={styles.cardsHeader}>
          <View> 
                <Text style={styles.allDate}> Sunday </Text>
                <Text style={styles.allDate}> 21.01.2018 </Text> 
            </View>    
            <View>
                <Text style={styles.arrive}> Arrive between </Text> 
                <Text style={styles.arriveHour}> 14:00 - 17:00 </Text>
            </View>
                
        </View> 
            <View style={styles.cardDownContainer}>
              <View> 
                <Text style={styles.id}> ID 8531286 </Text>
                <Text style={styles.supplierDetails}> SupplierName </Text>
                <Text style={styles.supplierDetails}> Address </Text>
              </View> 

                  <View style={styles.circle}>   
                  <Image style={styles.imageStyle} source={{uri: 'https://www.iconsdb.com/icons/preview/white/map-marker-2-xxl.png'}}/> 
                    </View>
                           
            </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
   // height: '25%',
    backgroundColor: '#fff',  //#fff
    alignItems: 'center',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center', //  justifyContent: 'space-between',
    borderBottomWidth:2,
    borderBottomColor:'white',
    borderRadius: 4,
    borderWidth: 2.5,
    borderColor: '#d6d7da',
    marginBottom: 5,
  },
  cardsHeader:{
    flexDirection:'row',
    flex:1,
    backgroundColor: 'rgb(44,183,161)',
    alignSelf:'stretch',
    justifyContent: 'space-between',
    paddingRight:7,
    paddingLeft:7,
    paddingTop:7,
    paddingBottom:7,
  },
  allDate:{
    color:'white',
    fontSize:22,
    fontWeight:"bold",
    paddingRight:7,
  },
  arrive:{
    color:'white',
    fontSize: 20,
    paddingLeft: 7,
  },
  arriveHour:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    paddingLeft: 5,
  },
  id:{
    fontSize: 14,
  },
  supplierDetails:{
    fontSize: 22,
    fontWeight:'bold',
  },
  cardDownContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'stretch',
    paddingLeft: 7,
    paddingTop:7,
    paddingRight:20,
  },
  imageStyle:{
    width:40,
    height:40,
    alignSelf:'center',
  },
  circle:{
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'rgb( 57, 229, 200)', 
    justifyContent:'center',
    alignSelf:'center',

  },

});

AppRegistry.registerComponent('SupplierCard',()=> SupplierCard);