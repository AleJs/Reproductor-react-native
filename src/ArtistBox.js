// eslint-disable-next-line prefer-stateless-function

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {

  StyleSheet,
  Text,
  View,
  Image,

} from 'react-native';

export default class ArtistBox extends Component {
  render() {

    const { image, name, likes, comment} = this.props.artist

    const likeicon = (<Icon name="md-heart-outline" size={30} color="gray" />)

    const comenticon = (<Icon name="ios-chatboxes-outline" size={30} color="gray" />)
    
    return (



      <View style={styles.artisbox}>
        <Image style={styles.hayley} source={{ uri: image }} />

        <View style={styles.info}>
          <Text style={styles.name} >{name}</Text>
          <View style={styles.row}>
            <View style={styles.setupicon}>
              <Icon>{likeicon}</Icon>
              <Text style={styles.texsetup}>{likes}</Text>

            </View>
            <View style={styles.setupicon}>
              <Icon>{comenticon}</Icon>
              <Text style={styles.texsetup}>{comment}</Text>
            </View>
          </View>

        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
  hayley: {
    height: 150,
    width: 150,
  },
  artisbox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 6,
    margin: 5,
  },
  info: {

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
    fontFamily: 'Arial',
    fontWeight: 'bold',

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 50,

  },
  setupicon: {

    flex: 1,
    alignItems: 'center',
  },
  texsetup: {
    color: 'gray',

  },


});
