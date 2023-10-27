import { View, Text, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      {/* header */}

    <View style={{
      flexDirection:'row',
      height: 60,
      justifyContent:'space-between', height : 60,
      alignItems :'center',
      backgroundColor: 'red',
      marginTop: 16,
      marginHorizontal: 16,
      padding: 16,
      borderRadius: 40,
    }}>


    <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor :'yellow'}}>
    </View>
    </View> 
    

   <View style={{borderWidth:1}}></View>
   
   <View style={{
    flexDirection: 'row',
    }}>
    </View>

    <View 
    style={{
    borderWidth:1,
    padding:12,
    }}>
    
    <View 
    style={{
      height: 200,
      backgroundColor: 'green'
    }}/>
  
    <Text>Nasi Tumpeng</Text>
    <Text>Rp. 24.500</Text>
    </View>



    <View 
    style={{
    borderWidth:1,
    padding:12,
    }}>
    
    <View 
    style={{
      height: 200,
      backgroundColor: 'green'
    }}/>
    <Text>Nasi pukay</Text>
    <Text>Rp. 12.500</Text>
    </View>



</View> 

  )
}

export default Home