import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Button, ScrollView, FlatList} from 'react-native';


const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column'
  },
  halfHeight: {
  flex: 2,
  backgroundColor: 'yellow'
  },
  quarterHeight: {
  flex: 2,
  backgroundColor: 'green'
  },
  buttonContainer: {
    margin: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
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
        <View style={styles.halfHeight} />
        <View style={styles.quarterHeight} >
          <FlexAnimation text = 'Hello' />
          <FlexAnimation text = 'Welcome' />
          <FlexAnimation text = '! ! !' />

          <Button  onPress={() => { Alert.alert("clique！"); }}
          title="Clique Me"/>
           <FlatBase />
          </View>
        </View>
      //</ScrollView>
      )
    }
  };

 
  AppRegistry.registerComponent('Flex', () => FlexAnimationApp);






  /**aniamation text 
   * 
   * import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry} from 'react-native';


const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column'
  },
  halfHeight: {
  flex: 2,
  backgroundColor: 'yellow'
  },
  quarterHeight: {
  flex: 2,
  backgroundColor: 'green'
  }
});


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
      <View style={styles.container}>
      <View style={styles.halfHeight} />
      <View style={styles.quarterHeight} >
        <FlexAnimation text = 'Hello' />
        <FlexAnimation text = 'Welcome' />
        <FlexAnimation text = '! ! !' />
         </View>
      </View>
      )
    }
  };

 
  AppRegistry.registerComponent('Flex', () => FlexAnimationApp);

  */