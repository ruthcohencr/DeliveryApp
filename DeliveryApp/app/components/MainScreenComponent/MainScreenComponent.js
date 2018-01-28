import React,{Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native';
import CardComponent from '../CardComponent/CardComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import DeliveryScreenComponent from '../DeliveryScreenComponent/DeliveryScreenComponent';
import { StackNavigator } from 'react-navigation';

export default class MainScreenComponent extends Component {

  static navigationOptions = {
    title: 'MainScreen',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
       
        <View style={styles.header}> 
            <ImageComponent style={styles.headerIcon}
             imageUri = 'https://www.iconsdb.com/icons/preview/white/map-marker-2-xxl.png'/>
            <Text style={styles.headerText}> Future orders </Text>
            <ImageComponent style={styles.headerIcon}
            imageUri = 'http://houstoncreativesmiles.com/wp-content/themes/ss3/assets/css/hamburger.png'/>
        </View>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.cardStyle}>
         <CardComponent navigate = {navigate}></CardComponent>
         
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

AppRegistry.registerComponent('MainScreenComponent',()=> MainScreenComponent);