

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
   View,
 } from 'react-native';

import ArtisList from './ArtisList';
import {getArtist} from './ApiClient';
export default class reproductor extends Component {
  state={
    artist:[

    ]
  }
  componentDidMount(){
    getArtist()
      .then(data => this.setState({artist: data}))
  }

  render() {

    const artist = this.state.artist

    return (

      <View style={styles.container}>
      <ArtisList artist={artist}/>
      </View>
    );
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'lightgray',
  },





});

AppRegistry.registerComponent('reproductor', () => reproductor);
