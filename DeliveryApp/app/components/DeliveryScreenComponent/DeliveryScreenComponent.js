import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Text, Button, Dimensions } from 'react-native';
import { StackNavigator} from 'react-navigation';
import ImageComponent from '../ImageComponent/ImageComponent';
import { WEEK } from '../../mockdata/week.js';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const SCREEN_WIDTH = width;
const LATITUDE_DELTA = 0.0922;
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class DeliveryScreenComponent extends Component {

    static navigationOptions = {
        title: 'DeliveryScreen',
      };

      openGoogleMap(){
          console.log ('open google map pressed');
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
        console.log('latitude '+currentCustomer.address.geometry['coordinates'][0]);
        var timeFrom = new Date(currentCustomer['from']).getHours() + ':' + '00';
        var timeTo = new Date(currentCustomer['to']).getHours() + ':' + '00';
        var dayName = WEEK[ new Date(currentCustomer['to']).getDay()];
        var supplyDate = new Date(currentCustomer['from']);
 
        var displayDate = this.bringDate(supplyDate);
        return(
      
                <View style={styles.container}>
                 <Text style={styles.goBack} onPress = {()=> navigate('MainScreen')}> Go Back </Text>
                    <View style ={styles.mapContainer}>                        
                        <MapView style = {styles.mapArea}
                            region={{
                                latitude:currentCustomer.address.geometry['coordinates'][0],
                                longitude:currentCustomer.address.geometry['coordinates'][1],
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta:LONGTITUDE_DELTA,
                            }}>
                        </MapView>
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
                                <Image style={styles.imageStyle} 
                                 source={require('../../Images/iconCall2.png')} />
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
                    <View style={styles.mapButton} >
                        <Button  color = 'rgb(66, 97, 144)'
                            title = '  Open in google maps  '
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
    mapContainer:{
        flex: 1,
      //  position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapArea:{  
        position: 'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
    },
    goBack:{
        justifyContent: 'center',
        alignSelf:'center',
        fontSize: 25,
        paddingTop:20,
    },
  
    detailsContainer:{
        flex:0.4,
        flexDirection: 'row',
        backgroundColor: 'white',
        position: 'relative',
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
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
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
        flex:0.4,
        backgroundColor:'white',
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
       // color: 'rgb(66, 97, 144)',
        zIndex:11,
        backgroundColor:'white',
        flex:0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
 
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      },
      estimatedArrival:{
        color: 'rgb(244, 120, 139)',
        fontSize:20,
      },

});

AppRegistry.registerComponent('DeliveryScreenComponent', () => DeliveryScreenComponent);