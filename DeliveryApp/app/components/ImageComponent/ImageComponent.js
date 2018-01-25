import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';

export default class ImageComponent extends Component {

    render(){
        return(
        
            <Image style={styles.imageStyle} source={{ uri: this.props.imageUri }} /> 
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        
        width: 40,     //Number(this.props.size)
        height: 40,
        alignSelf: 'center',
      },
});

AppRegistry.registerComponent('ImageComponent', () => ImageComponent);