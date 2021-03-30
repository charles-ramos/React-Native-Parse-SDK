// In a React Native application
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Parse from "parse/react-native";
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = (keys.serverURL);

const App = () => {
 useEffect(() => {
  createInstallation = async () => {
	 const Installation = Parse.Object.extend(Parse.Installation);
	 const installation = new Installation();
	 
	 installation.set('deviceType', Platform.OS);
	 installation.set("GCMSenderId", "1069568716159")
	 console.warn(installation)
	 await installation.save();
	};
	createInstallation();
}, []);

return (
	<View>
		<Text>Your Installation has been created</Text>
	</View>
	)
}

export default App;