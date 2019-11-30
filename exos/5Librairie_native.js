// Inclure une librairie native (rajoutant des composants ou comportement purement natifs dans l'application) 
// et expérimenter son API.
// **Exemple** : implémentation d'une carte cross platform
// [https://github.com/react-native-community/react-native-maps](https://github.com/react-native-community/react-native-maps)


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView, Marker} from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default function Librairie() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>

    <MapView
    region={this.state.region}
    onRegionChange={this.onRegionChange}
    >
    {this.state.markers.map(marker => (
        <Marker
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description}
        />
    ))}
    </MapView>

  );
}

