import { useState , useEffect} from "react";
import { TouchableOpacity,StyleSheet, View, Text,Dimensions} from "react-native";


export default function ButtonInputValue(props){

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
            fontSize: props.sizeFont
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
