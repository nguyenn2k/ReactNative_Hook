import { View, Text } from 'react-native'
import React, { memo } from 'react'

//1 Function component không nhận vào tham số (property);
//2 Function component có nhận tham số (nhưng giá trị là Function);
function ChildDemoHook(props) {

  //Lúc chưa nhận tham số:
  console.log('Đây là Child Demo Hook')


  return (
    <View>
      {/* Nhận tham số */}
      <Text>{props.name}</Text>
      {/* Lúc chưa nhận tham số: */}
      <Text>ChildDemoHook</Text>
    </View>
  )
}

export default memo (ChildDemoHook)