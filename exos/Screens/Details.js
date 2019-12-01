import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

import Map from './Map';

class Details extends Component {
    static navigationOptions = {
        title: "detail",
        headerStyle: {
            height: 45
        }
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>detail Velib</Text>
                <Map />
                <Button title="retour home" onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button title="actualise" onPress={() => this.props.navigation.push('Details')}
                />
                <Button title="page precedente" onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}