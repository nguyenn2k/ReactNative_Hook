//Import Library:
import React from 'react'

//Import Library:
import { View } from 'react-native';
import DemoHook from './screens/demoHook/DemoHook';

export default function App (){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
      <DemoHook/>
    </View>
  );
};