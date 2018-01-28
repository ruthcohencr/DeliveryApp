import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Text, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import ImageComponent from '../ImageComponent/ImageComponent';
import { WEEK } from '../../mockdata/week.js';


export default class DeliveryScreenComponent extends Component {

    static navigationOptions = {
        title: 'DeliveryScreen',
      };

      openGoogleMap(){
          
      }

      //need to take this function out from hear
      bringDate(date){
        var returnDate = "";  
        var dd = date.getDate();
        returnDate += dd.toString().length == 1 ? '0'+ dd +'.': dd+".";
        var mm = date.getMonth()+1;
        returnDate += mm.toString().length == 1 ? '0'+ mm +'.': mm+'.';
        returnDate += date.getFullYear();
        return returnDate;
      }
    //   constructor(){
    //       super();

    //         currentCustomer = this.props.navigation.state.params.customer;
    //         console.log('current customer ' + currentCustomer)
    //   }
    render(){
        const { navigate } = this.props.navigation;
        currentCustomer = this.props.navigation.state.params.customer;
        console.log('from deliveryScreen ' + currentCustomer.client['name']);
     //   console.log('current customer name ' + this.props.navigation.state.params.customer.client['name'])

      //  var currentCustomrer = this.props.navigation.state.params.customer;

     //   console.log('currentCustomer = '+this.props.navigation.state.params);

        var timeFrom = new Date(currentCustomer['from']).getHours() + ':' + '00';
        var timeTo = new Date(currentCustomer['to']).getHours() + ':' + '00';
        var dayName = WEEK[ new Date(currentCustomer['to']).getDay()];
        var supplyDate = new Date(currentCustomer['from']);
 
        var displayDate = this.bringDate(supplyDate);
        return(
      
                <View style={styles.container}>
                    <View style ={styles.mapContainer}>
                        <Text style={styles.goBack} onPress = {()=> navigate('MainScreen')}> Go Back </Text>
                    </View>
                    <View style = {styles.detailsContainer}>
                             <View>
                                <Text style={styles.id}>{currentCustomer['humanId']}</Text>  
                                <Text style={styles.customerDetails}> {currentCustomer.client['name']} </Text>
                                <Text style={styles.customerDetails}> {currentCustomer.address['street']}  
                                        {' '+currentCustomer.address['number']}, 
                                        {' '+currentCustomer.address['city']} </Text>
                            </View>
                            <View style={styles.circle}>                 
                                <ImageComponent imageUri='https://images.vexels.com/media/users/3/136563/isolated/preview/2acd4ce565e17c65e0ae15150248bf41-phone-call-stroke-icon-by-vexels.png'/>
                            </View>                            
                 </View>
                 <View style={styles.ariveDayTime}>
                 
                    <View>
                        <Text style={styles.allDate}> {dayName} </Text>
                        <Text style={styles.allDate}> {displayDate} </Text>
                        <Text style= {styles.estimatedArrival}> Estimated arrival:  </Text>
                    </View>
                    <View>
                        <Text style={styles.arriveHour}>
                         {timeFrom}  -  {timeTo}  </Text>
                    </View>
                    
                </View>
                <View style = {styles.buttonArea}>
                    <Button style={styles.mapButton} 
                        title = 'Open in google maps'
                        onPress = {this.openGoogleMap}>           
                    </Button>
                </View>
         </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex: 1,   
    },
    goBack:{
        justifyContent: 'center',
        alignSelf:'center',
        fontSize: 25,
        paddingTop:20,
    },
    mapContainer:{
        flex: 1,
    },
    detailsContainer:{
        flex:0.4,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 7,
        paddingTop: 15,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    cardDownContainer: {
        flex: 0.5,
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
      id: {
        fontSize: 14,
      },
      customerDetails: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      circle: {
        position:'absolute',
        right:10,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'rgb(66, 97, 144)',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      ariveDayTime: {
        flex:0.4,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 7,
      },
      buttonArea:{
        flex:0.2,
      },
      arriveHour: {
        backgroundColor:'rgb(244, 120, 139)',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
        alignSelf: 'center',   
      },
      allDate: {
       // color: 'black',
        fontSize: 22,
        fontWeight: "bold",
        paddingRight: 7,
        paddingLeft: 7,
      },
      mapButton:{
        color: 'rgb(66, 97, 144)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      },
      estimatedArrival:{
        color: 'rgb(244, 120, 139)',
        fontSize:20,
      },

});

AppRegistry.registerComponent('DeliveryScreenComponent', () => DeliveryScreenComponent);