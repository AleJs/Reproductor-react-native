

import React, { Component } from 'react';


import {
    StyleSheet,
    ListView
} from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtisList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state={
            dataSource:ds
        }


        }
        componentDidMount(){
            this.updateDataSource(this.props.artist)

    }
    componentWillReceiveProps(nextProps){
        if (nextProps.artist !== this.props.artist){
                this.updateDataSource(nextProps.artist)
            }
    }
    updateDataSource = data =>{
        this.setState ({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }
    render() {
        return (

            <ListView
                 enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(artist) => <ArtistBox artist={artist} />}
            />
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
