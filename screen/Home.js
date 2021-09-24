import React, {useState, useEffect} from 'react';
import { View, Text,TextInput, StyleSheet, Button,
ImageBackground
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


 function HomeScreen() {
  const [input, setInput] = useState(0)
  const satuans = ["°C","°F","°R","°K"]
  const [satuan, setSatuan] = useState("°C")
  const [showResult, setShowResult] = useState(false)
  const [values, setValues] = useState([])
  const bg = require("../assets/img/bg.jpg");
  const convert =(val, sat) =>{
    switch (sat) {
      case '°C':
        var c = val;
        var f = (val*1.8) -  459.67;
        var r = val *0.8;
        var k = val + 273.15;
        break;
      case "°F":
        var c =  (val - 32) / 1.8;
        var f = val;
        var r = (val - 32) / 2.25;
        var k = (val + 459,67) / 1.8;
        break;
      case "°R":
        var c =  val / 0.8;
        var f = val * 2.25 + 32;
        var r = val ;
        var k = val / 0.8 + 273.15;
        break;
      case "°K":
        var c =  val - 273.15;
        var f = val * 1.8 - 459.67;
        var r = (val - 273.15) * 0.8 ;
        var k = val;
        break;
    
      default:
        break;
    }
  
    setValues([c,f,r,k])
  
  }
  
  const result=()=>{
    convert(input,satuan);
    setShowResult(true);

    
  }
    return (
      <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover"
         style={styles.bg}
        >
        <Text style={styles.title}>Temprature Converter</Text>
        <View style={styles.row}>
            <TextInput
            style={styles.input}
            placeholder="Input Value"
            keyboardType="numeric"
            onChangeText={x => {setInput(x);}}
            />
          
            <ModalDropdown options={['°C', '°F','°R','°K']}
              onSelect={item =>{setSatuan(satuans[item])}}
            >
              <Text style={styles.satuan}>{satuan}</Text>
            </ModalDropdown>
        </View>
        <Button
          onPress={result}
          title="convert"
          color="#4e998f"
          style={styles.button}
        />

        {showResult && 
        <View style={styles.resultContainer}>
          <View style={styles.resultWrap}>
            <Text style={styles.results}>{values[0]} °C</Text>
            <Text style={styles.results}>{values[1]} °F</Text>
          </View>
          <View style={styles.resultWrap}>
           <Text style={styles.results}>{values[1]} °R</Text>
           <Text style={styles.results}>{values[2]} °K</Text>
         </View>
        </View>
        }
        </ImageBackground>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container:{ 
      flex: 1
    },
    bg:{
      flex: 1, 
      alignItems: 'center', 
    },
    title:{
      marginTop:"20%",
      fontSize:60,
      color:"#9c9799",
      fontFamily:"Beattingvile"
    },
    row:{
      marginTop:100,
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:20
    },
    resultContainer:{
      marginTop:50
    },
    resultWrap:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
    results:{
      margin:10,
      backgroundColor:"#b8de83",
      borderColor:"#4e998f",
      color:"white",
      padding:5,
      borderRadius:5,
      width:100,
      fontWeight:"bold"
    },
    input:{
      height:30,
      borderWidth:1,
      backgroundColor:"white",
      borderColor:"#4e998f",
      borderRadius:5,
      fontSize:20,
      lineHeight:50,
      padding:5,
      width:150
    },
    button:{
      padding:5,
      borderRadius:5,
      marginBottom:50
    },
    satuan:{
      height:30,
      width:30,
      backgroundColor:"#16d6e0",
      color:"white",
      borderRadius:5,
      marginLeft:5,
      padding:6
    }
  })

  export default HomeScreen;