import React, {  Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  
  class Map extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>detail Velib</Text>
        <MapView style={styles.mapStyle} />
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
  