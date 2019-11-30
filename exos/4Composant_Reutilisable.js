// Créer un composant représentant une station de vélib avec des informations factices (position, nom, distance...). 
// Utiliser les propTypes, les styles et les defaults prop values.
// Il constituera la vue détail d'une station Vélib.

import React from "react";
import { Text, StyleSheet, Dimension,View, TouchableOpacity,ScrollView } from "react-native";
import MapView from "react-native-maps";
import openMap from "react-native-open-maps";

const spacing = 10;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {},
    mapMarker:{},
    content: {},
    title: {},
    row: {},
    rowIcon: {},
    rowText:  {},
  });

  export class Composant extends component{
    render(){
      return (
          <ScrollView contentContainerStyle={styles.container} />
      <MapView 
        style={styles.map} 
        showsUserLocation={true} 
        region={{
            latitude:  geometry.coordinates[1],
            longitude: geometry.coordinates[0],
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        >
            <MapView.Maker 
            coordinate={{
                latitude:  geometry.coordinates[1],
                longitude: geometry.coordinates[0],
                }}
                title= {name-station}>
                <View style={styles.mapMarker} >
                    <Text>velo</Text>
                    <Text style={styles.rowAvailability} >{nbbike}/{nbedock}</Text>
                </View>
            </MapView.Maker>                
      </MapView>
      );
    }
  }
    
  export default Composant;
  