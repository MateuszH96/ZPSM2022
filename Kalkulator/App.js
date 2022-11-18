import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ButtonInputValue from './ButtonsInputValue';
import SplashScreen from 'react-native-splash-screen'

function toShow(value,landscape) {
  const onlyLandscape = ['(', ')'];
  const onlyPortrait = [''];

  if(onlyLandscape.includes(value) || onlyPortrait.includes(value)){
    if(onlyLandscape.includes(value) && landscape){
      return true;
    }
    if(onlyPortrait.includes(value) && !landscape){
      return true;
    }else{
      return false;
    }
  }
  return true;
}

export default function App() {
  const [layoutBtns, changeLayout] = useState("")
  calcButtonsTable = [
    [
      {
        bColor: 'grey',
        flexSize: 1,
        value: 'AC',
        pressFun: () => clearScreen(),
        isVisible: true
      },
      {
        bColor: 'grey',
        flexSize: 2,
        value: '',
        pressFun: () => { },
        isVisible: true
      },
      {
        bColor: 'orange',
        flexSize: 1,
        value: '/',
        pressFun: () => pressSign('/'),
        isVisible: true

      },
      {
        bColor: 'orange',
        flexSize: 1,
        value: '(',
        pressFun: () => pressSign('('),
        isVisible: true

      },
      {
        bColor: 'orange',
        flexSize: 1,
        value: ')',
        pressFun: () => pressSign(')'),
        isVisible: true

      }
    ],
    [
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '7',
        pressFun: () => pressNum('7'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '8',
        pressFun: () => pressNum('8'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '9',
        pressFun: () => pressNum('9'),
        isVisible: true

      },
      {
        bColor: 'orange',
        flexSize: 1,
        value: 'x',
        pressFun: () => pressNum('*'),
        isVisible: true

      }
    ],
    [
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '4',
        pressFun: () => pressNum('4'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '5',
        pressFun: () => pressNum('5'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '6',
        pressFun: () => pressNum('6'),
        isVisible: true

      },
      {
        bColor: 'orange',
        flexSize: 1,
        value: '-',
        pressFun: () => pressNum('-'),
        isVisible: true

      }
    ],
    [
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '1',
        pressFun: () => pressNum('1'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '2',
        pressFun: () => pressNum('2'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: '3',
        pressFun: () => pressNum('3'),
        isVisible: true

      },
      {
        bColor: 'orange',
        flexSize: 1,
        value: '+',
        pressFun: () => pressNum('+'),
        isVisible: true

      }
    ],
    [
      {
        bColor: 'darkgrey',
        flexSize: 2,
        value: '0',
        pressFun: () => pressNum('0'),
        isVisible: true

      },
      {
        bColor: 'darkgrey',
        flexSize: 1,
        value: ',',
        pressFun: () => pressComma(),
        isVisible: true

      },

      {
        bColor: 'orange',
        flexSize: 1,
        value: '=',
        pressFun: () => calculate(),
        isVisible: true

      }
    ],
  ]

  const [isLandscape, setOrientation] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
    Dimensions.addEventListener("change", () => {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        setOrientation(false)
      } else {
        setOrientation(true)
      }
    })
  }, [])
  const [calcText, setCalcText] = useState('0');
  const [isComma, setBoolComma] = useState(false);
  const [isSign, setBoolSign] = useState(false);
  const pressNum = (value) => {
    if (calcText !== '0' && value !== '0' || calcText.length > 1) {
      setCalcText(calcText + value);
      if (value >= '0' && value <= '9') {
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
    if (!isSign && calcText[len - 1] !== '.') {
      pressNum(sign);
      setBoolSign(true);
      setBoolComma(true);
    }
  }
  const pressComma = () => {
    let len = calcText.length;
    if (!isComma && calcText[len - 1] >= '0' && calcText[len - 1] <= '9') {
      pressNum('.')
      setBoolComma(true)
    }
  }
  const calculate = () => {
    result = eval(calcText)
    setCalcText(result.toString())
  }
  const renderButtons = () => {
    let numkey=0;
    let numkey2=0;
    const btnsAll = calcButtonsTable.map((row, col) => {
      const btnsRow = row.map(cols => {
        return ((toShow(cols.value,isLandscape)) ? <ButtonInputValue
          value={cols.value}
          flexSize={cols.flexSize}
          bColor={cols.bColor}
          pressFun={cols.pressFun}
          sizeFont={isLandscape?30:60}
          key={numkey2++}
        ></ButtonInputValue> : null);
      });
      return (
        <View style={styles.calcButtonsRow} key={numkey++}>{btnsRow}</View>
      );
    });
    return btnsAll;
  };


  return (<View style={styles.constainer}>
    <View style={styles.calcScreen}>
      <Text style={styles.calcScreenTxt}>
        {calcText}
      </Text>
    </View>
    <View style={styles.calcButtons}>{renderButtons()}
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