import { StyleSheet, Text, View } from 'react-native';
import InputComp from './components/InputsComp';
import NavBar from './components/NavBar';
import { useState } from 'react';

export default function App() {

  const  [calendarChange, setCalendarChange] = useState(true);

  const changeComp = ()=> {
    setCalendarChange(!calendarChange)
  }
  const returnMainCont = () => {
    setCalendarChange(!calendarChange)
  }

  

  return (
    <View style = { styles.container }>
        {calendarChange ? <NavBar OnPress = { changeComp }/> : <InputComp OnPress ={returnMainCont}/>} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0A9B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
