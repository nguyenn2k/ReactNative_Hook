import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import ChildDemoHook from './ChildDemoHook'


//Hook chi hoat dong trong Function Component:
export default function DemoHook() {

  const [count, setCount] = useState(0)
  //Thông báo đang giá trị rỗng:
  let thongbao=''
  //useEffect (function, [Biến điều kiện gọi lại (khi biến thay đổi giá trị)])
  if(count ==5){
    thongbao='Count đã là số 2'
  }
  console.log(thongbao)
  console.log(count)

  useEffect(()=>{
    //Logic Code:
    console.log('Use Effect')
    //Có 'count'=> useEffect vs Render DemoHook (console.log)
    //Không có 'count'=> Render DemoHook (console.log)

    //Nếu như [thongbao] thay đổi giá trị thì useEffect ms chạy:
  },[thongbao])
  console.log('Render DemoHook')
  
  return (
    <View>
      <Text>DemoHook</Text>
      <TouchableOpacity
        style={{padding:10, backgroundColor:'blue', borderRadius:5, justifyContent:'center', alignItems:'center'}}
        //preState: gia tri bien Count:
        onPress ={()=> setCount(preState => preState + 1)}
      >
        <Text style={{color:'white'}}>Count +</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding:10, backgroundColor:'green', borderRadius:5, justifyContent:'center', alignItems:'center'}}
        onPress ={()=> setCount(preState => preState - 1)}
      >
        <Text style={{color:'white'}}>Count -</Text>
      </TouchableOpacity>
      {/* Sử dụng Child Demo Hook */}
      <ChildDemoHook name={thongbao}/>
    </View>
  )
}
//Lần đầu tiên useEffect chạy
// 1-> Thông báo vẫn rỗng;
//  2-> Thông báo đã là số 2 -> useEffect
// 3 -> reRender lại tất cả-> Thông báo rỗng -> không ra useEffect