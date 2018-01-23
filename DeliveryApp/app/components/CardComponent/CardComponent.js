import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight,TouchableOpacity,ListView } from 'react-native';
//import {Circle} from '../components/Circle';


 const customers = [
      {name: 'Ruth Cohen', streetName:'Bereshit', streetNumber: 16, city:'Ramat-Hasharon',supplyDay:'Sunday'},
      {name: 'Ron Cohen',streetName:'Ovdat', streetNumber: 9, city:'Holon',supplyDay:'Monday'},
      {name: 'Michel Levi',streetName:'Bet-Gobrin', streetNumber: 7, city:'Bne-Brak',supplyDay:'Monday'},
      {name: 'Israel Meir',streetName:'Hamlachim', streetNumber: 5, city:'Jerusalem',supplyDay:'Wednesday'},
      {name: 'Ron Cohen',streetName:'Ovdat', streetNumber: 9, city:'Holon',supplyDay:'Monday'},
      {name: 'Michel Levi',streetName:'Bet-Gobrin', streetNumber: 7, city:'Bne-Brak',supplyDay:'Monday'},
      {name: 'Israel Meir',streetName:'Hamlachim', streetNumber: 5, city:'Jerusalem',supplyDay:'Wednesday'}
  ]

export default class CardComponent extends Component {

  onCardPress() {
    console.log('Card Pressed');
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(customers),
    };
  }

  renderRow(customer, sectionID, rowID, highlightRow){
    return(
    <TouchableOpacity 
    style={styles.container} 
    onPress={this.onCardPress}
    underlayColor='rgb(66,97,144)'>
    <View >
      <View style={styles.cardsHeader}>

        <View>
          <Text style={styles.allDate}> {customer.supplyDay} </Text>
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
          <Text style={styles.customerDetails}> {customer.name} </Text>
          <Text style={styles.customerDetails}> {customer.streetName} {customer.streetNumber}, {customer.city} </Text>
        </View>

        <View style={styles.circle}>
          <Image style={styles.imageStyle} source={{ uri: 'https://www.iconsdb.com/icons/preview/white/map-marker-2-xxl.png' }} />
        </View>

      </View>

    </View>
  </TouchableOpacity>
    )
  }

  render() {
    return (
        <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}/>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '25%',
    backgroundColor: '#fff',  //#fff
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', //  justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderRadius: 4,
    borderWidth: 2.5,
    borderColor: '#d6d7da',
    marginBottom: 5,
    paddingBottom: 15,
  },
  cardsHeader: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgb(44,183,161)',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingRight: 7,
    paddingLeft: 7,
    paddingTop: 7,
    paddingBottom: 7,
  },
  allDate: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 7,
  },
  arrive: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 7,
  },
  arriveHour: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  id: {
    fontSize: 14,
  },
  customerDetails: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDownContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 7,
    paddingTop: 7,
    paddingRight: 20,
  },
  imageStyle: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  circle: {
    position:'absolute',
    right:10,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'rgb( 57, 229, 200)',
    justifyContent: 'center',
    alignSelf: 'center',

  },

});

AppRegistry.registerComponent('CardComponent', () => CardComponent);