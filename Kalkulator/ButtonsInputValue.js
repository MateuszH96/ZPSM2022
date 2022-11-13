import { useState , useEffect} from "react";
import { TouchableOpacity,StyleSheet, View, Text,Dimensions} from "react-native";


export default function ButtonInputValue(props){
    
    const [fontSizeButton,chageFontSize] = useState(60);

    useEffect(() => {
        Dimensions.addEventListener('change', ({window:{width,height}})=>{
          if (width<height) {
            chageFontSize(60)
          } else {
            chageFontSize(30)
          }
        })
    
      }, []);
    

    const styles=StyleSheet.create({
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.bColor,
            flex: props.flexSize,
            borderColor: 'black',
            borderWidth:1
        },
        textDecoration:{
            fontSize: fontSizeButton 
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={props.pressFun}>
            <View >
                <Text style={styles.textDecoration}> 
                    {props.value}
                </Text>
            </View>
        </TouchableOpacity>
    );
}