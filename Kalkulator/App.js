import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ButtonInputValue from './ButtonsInputValue';

export default function App() {
  const [calcText, setCalcText] = useState('0');
  const [isComma, setBoolComma] = useState(false);
  const [isSign, setBoolSign] = useState(false); 
  const pressNum = (value) => {
    if (calcText !== '0' && value !== '0' || calcText.length > 1) {
      setCalcText(calcText + value);
      if(value >= '0' && value<='9'){
        setBoolSign(false);
      }
    } else {
      setCalcText(value);
    }
    setBoolComma(false);
  }
  const clearScreen = () => {
    setCalcText('0');
    setBoolSign(false);
  }

  const pressSign = (sign) => {
    let len = calcText.length;
    if(!isSign && calcText[len-1]!=='.')
    {
      pressNum(sign);
      setBoolSign(true);
      setBoolComma(true);
    }
  }
  const pressComma = ()=>
  {
    let len = calcText.length;
    if(!isComma && calcText[len-1]>='0' && calcText[len-1]<='9'){
      pressNum('.')
      setBoolComma(true)
    }
  }
  const calculate = () => {
    result = eval(calcText)
    setCalcText(result.toString())
  }
  return (<View style={styles.constainer}>
    <View style={styles.calcScreen}>
      <Text style={styles.calcScreenTxt}>
        {calcText}
      </Text>
    </View>
    <View style={styles.calcButtons}>
      <View style={styles.calcButtonsRow}>
        <ButtonInputValue value='AC' pressFun={() => clearScreen()} flexSize={1}  bColor={'grey'}></ButtonInputValue>
        <ButtonInputValue value='' pressFun={() => { }} flexSize={2} bColor={'grey'}></ButtonInputValue>
        <ButtonInputValue value='/' pressFun={() => pressSign('/')} flexSize={1} bColor={'orange'}></ButtonInputValue>
      </View>
      <View style={styles.calcButtonsRow}>
        <ButtonInputValue value='7' pressFun={() => pressNum('7')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='8' pressFun={() => pressNum('8')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='9' pressFun={() => pressNum('9')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='X' pressFun={() => pressSign('*')} flexSize={1} bColor={'orange'}></ButtonInputValue>
      </View>
      <View style={styles.calcButtonsRow}>
        <ButtonInputValue value='4' pressFun={() => pressNum('4')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='5' pressFun={() => pressNum('5')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='6' pressFun={() => pressNum('6')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='-' pressFun={() => pressSign('-')} flexSize={1} bColor={'orange'}></ButtonInputValue>
      </View>
      <View style={styles.calcButtonsRow}>
        <ButtonInputValue value='1' pressFun={() => pressNum('1')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='2' pressFun={() => pressNum('2')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='3' pressFun={() => pressNum('3')} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='+' pressFun={() => pressSign('+')} flexSize={1} bColor={'orange'}></ButtonInputValue>
      </View>
      <View style={styles.calcButtonsRow}>
        <ButtonInputValue value='0' pressFun={() => pressNum('0')} flexSize={2} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value=',' pressFun={() => pressComma()} flexSize={1} bColor={'darkgrey'}></ButtonInputValue>
        <ButtonInputValue value='=' pressFun={() => calculate()} flexSize={1} bColor={'orange'}></ButtonInputValue>
      </View>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column'
  },
  calcScreen: {
    backgroundColor: 'black',
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  calcScreenTxt: {
    fontSize: 60
  },
  calcButtons: {
    backgroundColor: 'grey',
    flex: 8,
    flexDirection: 'column'
  },
  calcButtonsRow: {
    flex: 1,
    flexDirection: 'row'
  }
});