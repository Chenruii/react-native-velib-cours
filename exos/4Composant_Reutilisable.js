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
    map: {
      height: 200,
      width: Dimension.get("window").width
    },
    mapMarker: {
      borderWidth: 1,
      paddingBottom:5,
      paddingLeft: 5,
      paddingRight: 5
    }
  });

  Composant.defaultProps ={
    name_station :"Volataire",
    station_state :"operative",
    nbbike: 2,
    nbebike :1,
    nbfreedock:30,
    credicard:"yes",
    geometry:{
      coordinates: [2.275725,48.865983],
    },
    record_timestamp:"2019-12-01:12:00:00.92500+00:00",
  };
  export class Composant extends component{
    render(){
      return (
        <ScrollView contentContainerStyle={styles.container} >
          <MapView style={styles.map} 
        showsUserLocation={true} 
        region={{
            latitudeitude:  geometry.coordinates[1],
            longitude: geometry.coordinates[0],
            latitudeitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        >
           <MapView.Maker 
          coordinate={{
              latitudeitude:  geometry.coordinates[1],
              longitude: geometry.coordinates[0],
              }}
              title= {name_station}>
              <View style={styles.mapMarker} >
                <Text>velo</Text>
                <Text style={styles.rowAvailability} >{nbbike}/{nbedock}</Text>
              </View>
        </MapView.Maker>   
        <View>
            <Text>{nbbike} velos disponible</Text>
        </View>   
        <View>
            <Text>{nbbike} velos electrique disponible</Text>
        </View> 
        <View>
            <Text>Mise à n jour le {new Date(record_timestamp).toLocaleTimeString}</Text>
        </View> 
        <View>
            <TouchableOpacity onPress={() => openMap({
              latitude:geometry.coordinates[1],
              longitude: geometry.coordinates[0],
            })
          }>
            <Text>ouvrir la carte</Text>
            </TouchableOpacity>
        </View> 
        </View> 
        </ScrollView> 
      );
    }
  }
