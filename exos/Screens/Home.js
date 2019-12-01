import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MapView from 'react-native-maps';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Velib</Text>
                <Button title="Map" onPress={() => this.props.navigation.navigate('Map')}/>
                <Text>Geolocalisation</Text>
                <Button title="lire plus"onPress={() => this.props.navigation.navigate('Details')}/>
            </View>
        );
    }
}
class UsersScreen extends Component {
    static navigationOptions = {
        title: "Velib",
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Map</Text>
                <Text>Velib Details</Text>
                <Text>Velib staion</Text>
                <Button
                    title="back"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}
class DetailsScreen extends Component {
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
                <Button
                    title="retour home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="actualise"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="page precedente"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

class MapScreen extends Component {
    componentDidMount(){
        this.componentDidUpdate();
    }

    componentDidUpdate(){
        if(this.lastlatitudeitude == this.props.latitudeitude && this.lastlongitude == this.props.longitude){
            return;
        }

        this.lastlatitudeitude = this.props.latitudeitude;
        this.lastLongitude = this.props.longitude

        const map = new GMaps({
            el: '#map',
            latitude: this.props.latitude,
            longitude: this.props.longitude
        });
        map.addMarker({
            lat: this.props.lat,
            lng: this.props.lng
        });
    }
    render(){
        return (
            <View className="map-holder">
                <Text>Loading...</Text>
                <View id="map">
                    <MapView style={styles.mapStyle} />
                </View>
            </View>
        );
    }
}

const bottomTabNavigator = createBottomTabNavigator({
        Home: HomeScreen,
        User: UsersScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: '#f00',
            inactiveTintColor: '#000',
        },
    });
const AppNavigator = createStackNavigator({
    bottomTabNavigator: {
        screen: bottomTabNavigator
    },
    Details: DetailsScreen,
    Map : MapScreen
}, {
        initialRouteName: "bottomTabNavigator",
        defaultNavigationOptions: {
            headerStyle: {
                height: 0 
            }
        },
});

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
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
