# react-native-velib-cours
 app Velib

 ## Exercice 1 : Flex et animation
------------------------------
Créer deux vues prenant chacune la moitié de l'écran en hauteur.
Faites varier leurs hauteur grâce à l'API Animated.

## Exercice 2 : Navigation
------------------------------
Implémenter une navigation entre plusieurs vues avec gestion de l'historique et l'implémentation de votre choix.
Type de parcours d'écrans : [1] -> [2] -> [3] -> [1]

## Exercice 3 : Client d'API
------------------------------
Créer un client d'API permettant de gérer du cache de requête avec AsyncStorage et fetch (API OpenData Paris vélib).
Si l'utilisateur ne possède pas internet, utiliser le cache, sinon essayer de lancer la requête.

## Exercice 4 : Composant réutilisable
------------------------------
Créer un composant représentant une station de vélib avec des informations factices (position, nom, distance...). Utiliser les propTypes, les styles et les defaults prop values.
Il constituera la vue détail d'une station Vélib.

## Exercice 5 : Librairie native
------------------------------
Inclure une librairie native (rajoutant des composants ou comportement purement natifs dans l'application) et expérimenter son API.
**Exemple** : implémentation d'une carte cross platform
[https://github.com/react-native-community/react-native-maps](https://github.com/react-native-community/react-native-maps)

## Exercice 6 : Géolocalisation
----------------------------
Utiliser l'API de géolocalisation pour récupérer votre position.
Apprendre a fausser sa position GPS.
Utiliser cette position pour récupérer les vélibs les plus proches.

## Exercice 7 : Test unitaire
Inclure la librairie Jest et réaliser un test de type "Snapshot" sur un composant visuel.
React Native : https://facebook.github.io/jest/docs/tutorial-react-native.html
Expo : https://docs.expo.io/versions/latest/guides/testing-with-jest/


Exercice projet : Velib
Liste de données 
Tabs
Géolocalisation
Récupération de données
Navigation (react-navigation)

Map
Stations favorites

Velib J1
- Composant de liste (FlatList)
- Tabs (react-navigation-tabs)
- Module Geolocation

Velib J2
- Géolocalisation
- API fetch https://opendata.paris.fr/explore/dataset/velibdisponibilite-  en-temps-reel/api
- Navigation

Velib J3
- Librairie react-native-maps
- Architecture Redux (au moins deux actions et un reducer pour gérer des
favoris)
