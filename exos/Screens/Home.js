import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home</Text>
                <Text>Velib</Text>
                <Text>Map</Text>
                <Text>Geolocalisation</Text>
                <Button
                    title="lire plus"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
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
    Details: DetailsScreen
}, {
        initialRouteName: "bottomTabNavigator",
        defaultNavigationOptions: {
            headerStyle: {
                height: 0 
            }
        },
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
