import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Button, FlatList, Navigator} from 'react-native';
import 'react-native-gesture-handler';

import Home from './exos/Screens/Home';

const styles = StyleSheet.create({
  container: {
  flex: 1,  flexDirection: 'column'  },
  halfHeight: {
  flex: 2,  backgroundColor: 'yellow'  },
  quarterHeight: {
  flex: 2,  backgroundColor: 'green'  },
  buttonContainer: {    margin: 20  },
  item: {
    padding: 10,    fontSize: 18,    height: 44,  },
  fetchV: {
    padding: 10, marginTop: 10, borderRadius: 5,
  },
  list: {
    paddingTop: 20,    backgroundColor: '#F5FCFF',  },
});
const REQUEST_URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel";


class Homes extends Component{
  static defaultProps = {
    title: 'Home'
  };
  render(){
    return (
      <View>
        <Text style ={{marginTop: 20 }}>I am {this.props.title}</Text>
      </View>
    );
  }
}

class FetchV extends Component{
  constructor(props){
    super(props);
    this.state ={ 
      data: [],
      isLoading: false,
      velibs: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: this.state.data.concat(responseData.velibs),
          isLoading:true,
        });
      });
  }
  render(){
    if(!this.state.velibs){
      return this.renderLoadingview();
    }
    return (
      <FlatList
      data={this.state.data}
      renderItem={this.renderVelib}
      style={styles.list}
      keyExtractor={item => item.id}
      />
    )
  }
  renderLoadingview(){
    return(
      <View style={styles.container}>
        <Text>
          En cours chargement...
        </Text>
      </View>
    );
  }
  renderVelib(item) {
    return (
      <View style={styles.container}>
        <Text style={styles.latitude}>{item.latitude}</Text>
          <Text style={styles.longitude}>{item.longitude}</Text>
      </View>
    );
  }


}
class FlatListBase extends Component{
  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data ={[
            {key: 'hey'},
            {key: 'hi'},
            {key: 'hola'},
          ]}
          renderItem={({item}) => <Text style ={styles.item}>{item.key}</Text>}/>
      </View>
    );
  }
} 
class ButtonBase extends Component {
  _onPressbutton(){
    Alert.alert('Cliquer Bouton')
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me" />
            </View>
      </View>
    )
  }
}
class FlexAnimation extends Component {
  state = { isShowingText: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText
      });
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}
export default class FlexAnimationApp extends Component {
  render() {
    return (
      //<ScrollView>
        <View style={styles.container}>
        <View style={styles.halfHeight} >
          {/* <Navigator
          initialRoute={{ title: 'Accueil', index: 0 }}
          renderScene={(route, navigator) =>
            <Home
              title={route.title}
              // page next
              onForward={ () => {    
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Home ' + nextIndex,
                  index: nextIndex,
                });
              }}
              // page back
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
            }}/>
          }/> */}
          <Home />
        </View>  
          <View style={styles.quarterHeight} >
            <FlexAnimation text = 'Hello' />
            <FlexAnimation text = 'Welcome' />
            <FlexAnimation text = '! ! !' />
            <Button  onPress={() => { Alert.alert("clique！"); }} title="Clique Me"/>
            <FlatListBase />
            <FetchV />
          </View>
        </View>
      //</ScrollView>
      )
    }
  };

 
  AppRegistry.registerComponent('Flex', () => FlexAnimationApp);

