// // Créer un client d'API permettant de gérer du cache de requête avec AsyncStorage et fetch 
// // (API OpenData Paris vélib).
// // Si l'utilisateur ne possède pas internet, utiliser le cache, sinon essayer de lancer la requête.

import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Button, ScrollView, FlatList,TouchableHighlight, ActivityIndicator} from 'react-native';


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
        <View style={styles.halfHeight} />
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


  
// /**
//  * import React, { Component } from 'react';
// import { StyleSheet, Text, View , AppRegistry, Button, ScrollView, FlatList,TouchableHighlight, ActivityIndicator} from 'react-native';


// const styles = StyleSheet.create({
//   container: {
//   flex: 1,  flexDirection: 'column'  },
//   halfHeight: {
//   flex: 2,  backgroundColor: 'yellow'  },
//   quarterHeight: {
//   flex: 2,  backgroundColor: 'green'  },
//   buttonContainer: {    margin: 20  },
//   item: {
//     padding: 10,    fontSize: 18,    height: 44,  },
//   fetchV: {
//     padding: 10, marginTop: 10, borderRadius: 5,
//   }
// });

// let request = new Request('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel', {
//             method: 'GET',
//             headers: ({
//                     'Content-Type': 'application/json'
//                  })
//             });
//         fetch(request).then((response) => {
//             console.log(response);
//         }).catch((err) => {
//             console.error(err);
//         });

// let FetchUtils =require('./FetchUtils');

// async function getVelibsFromApi() {
//   try {
//     let response = await fetch(
//       'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel',
//     );
//     let responseJson = await response.json();
//     return responseJson.movies;
//   } catch (error) {
//     console.error(error);
//   }
// }      
// class FetchV extends Component{
//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.velibs,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={(item, index) => item.id}
//         />
//       </View>
//     );
//   }

//   // render(){
//   //   return (
//   //     <View style={styles.container}>
//   //       <TouchableHighlight
//   //         underlayColor='rgb(210,260,260)'
//   //         style={styles.fetchV}
//   //         onPress={this.get}                >
//   //           <Text >Methode Get </Text>
//   //       </TouchableHighlight>
//   //     </View>
//   //   );
//   // }
//   get (){
//     fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel',{
//       method:'Get',
//       headers: {
//         'Content-Type': 'application/json'
//     }
//     }).then((response) => response.json())
//     .then((jsonData) => {
//       let latitude = jsonData.data[0].latitude;
//       let longitude = jsonData.data[0].longitude[1];
//       alert("latitude: "+latitude + "---longitude: " + longitude);
//     });
//   }
//   post() {
//     fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel', {
//         method: 'POST',//1
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then((response) => response.json())
//         .then((jsonData) => {
//           let latitude = jsonData.data[0].latitude;
//           let longitude = jsonData.data[0].longitude[1];
//           alert("latitude: "+latitude + "---longitude: " + longitude);
//         });
// }
// sendGet() {
//   FetchUtils.send('get', 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel', '', 
//   jsonData => {
//     let latitude = jsonData.data[0].latitude;
//     let longitude = jsonData.data[0].longitude[1];
//     alert("latitude: "+latitude + "---longitude: " + longitude);
//   })
// }
// sendPost() {
//   FetchUtils.send('post', 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel', '', 
//   jsonData => {
//     let latitude = jsonData.data[0].latitude;
//     let longitude = jsonData.data[0].longitude[1];
//     alert("latitude: "+latitude + "---longitude: " + longitude);
//   })
// }

// }
// class FlatListBase extends Component{
//   render(){
//     return (
//       <View style={styles.container}>
//         <FlatList 
//           data ={[
//             {key: 'hey'},
//             {key: 'hi'},
//             {key: 'hola'},
//           ]}
//           renderItem={({item}) => <Text style ={styles.item}>{item.key}</Text>}/>
//       </View>
//     );
//   }
// } 
// class ButtonBase extends Component {
//   _onPressbutton(){
//     Alert.alert('Cliquer Bouton')
//   }
//   render(){
//     return(
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me" />
//             </View>
//       </View>
//     )
//   }
// }
// class FlexAnimation extends Component {
//   state = { isShowingText: true };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         isShowingText: !this.state.isShowingText
//       });
//     }, 1000);
//   }

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
// export default class FlexAnimationApp extends Component {
//   render() {
//     return (
//       //<ScrollView>
//         <View style={styles.container}>
//         <View style={styles.halfHeight} />
//         <View style={styles.quarterHeight} >
//           <FlexAnimation text = 'Hello' />
//           <FlexAnimation text = 'Welcome' />
//           <FlexAnimation text = '! ! !' />

//           <Button  onPress={() => { Alert.alert("clique！"); }}
//           title="Clique Me"/>
//            <FlatListBase />
//            {/* <ButtonBase /> */}
//            <FetchV />

//           </View>
//         </View>
//       //</ScrollView>
//       )
//     }
//   };

 
//   AppRegistry.registerComponent('Flex', () => FlexAnimationApp);


//  */


