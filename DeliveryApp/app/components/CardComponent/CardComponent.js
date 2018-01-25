import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight,TouchableOpacity,ListView } from 'react-native';
//import {Circle} from '../components/Circle';
import { CLIENTS } from '../../mockdata/deliveryMock.js';
import { WEEK } from '../../mockdata/week.js';
import  ImageComponent  from '../ImageComponent/ImageComponent';

export default class CardComponent extends Component {

  bringDate(date){
    var returnDate = "";
    
    var dd = date.getDate();
    returnDate += dd.toString().length == 1 ? '0'+ dd +'.': dd+".";
    var mm = date.getMonth()+1;

    returnDate += mm.toString().length == 1 ? '0'+ mm +'.': mm+'.';

    returnDate += date.getFullYear();

    return returnDate;
  }

  onCardPress() {
    console.log('Card Pressed');
  };

  constructor() {
    super();
    clientsList = CLIENTS;
   
    var time1 = new Date (clientsList[0]['from']);
    var time2 = new Date(clientsList[0]['to']);
    time1 = time1.getHours() + ':' + '00';
    time2 = time2.getHours() + ':' + '00';
    console.log(time1+" "+time2);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(clientsList),
    };

  }

  renderRow(customer, sectionID, rowID, highlightRow){

    var timeFrom = new Date(customer['from']).getHours() + ':' + '00';
    var timeTo = new Date(customer['to']).getHours() + ':' + '00';
    var dayName = WEEK[ new Date(customer['to']).getDay()];
    var supplyDate = new Date(customer['from']);

    var displayDate = this.bringDate(supplyDate);
    
    return(
    <TouchableOpacity 
    style={styles.container} 
    onPress={this.onCardPress}
    underlayColor='rgb(66,97,144)'>
    <View >
      <View style={styles.cardsHeader}>

        <View>
          <Text style={styles.allDate}> {dayName} </Text>
          <Text style={styles.allDate}> {displayDate} </Text>
        </View>
        <View>
          <Text style={styles.arrive}> Arrive between </Text>
          <Text style={styles.arriveHour}>
          {timeFrom}  -  {timeTo}  </Text>
        </View>

      </View>
      <View style={styles.cardDownContainer}>
        <View>
          <Text style={styles.id}>{customer['humanId']}</Text>  
          <Text style={styles.customerDetails}> {customer.client['name']} </Text>
          <Text style={styles.customerDetails}> {customer.address['street']} {customer.address['number']}, 
          {' '+customer.address['city']} </Text>
        </View>
        <View style={styles.circle}>                 
          <ImageComponent imageUri='https://www.iconsdb.com/icons/preview/white/map-marker-2-xxl.png'/>
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
    paddingLeft: 7,
    alignSelf: 'center',
    
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