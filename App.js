import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
//import Routes from './Routes.js'
import Routes from './src/Components/Routes';

class reactTutorialApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
