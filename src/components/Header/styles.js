import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignContent:'center',
        backgroundColor:global.colors.gray_regular
        
    },

    containerInfo:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignContent:'center',
        alignItems:'center',
        gap:10,
        height:80,
        marginRight:20
    },

    lineGradient:{
        height:4,
        width:'97%',
    }
})
