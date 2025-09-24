import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

export const styles = StyleSheet.create({
    viewCards:{
        flexDirection:'row',
        gap:10,
        marginTop:20
    },

    viewCalendary:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:40,
        gap:10,
        marginTop:40
    },

    viewDate:{
        alignContent:'flex-start'
    },

    buttonDate:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderWidth:1,
        borderRadius:10,
        paddingRight:20,
        paddingLeft:20,
        padding:5
    },

    container:{
        backgroundColor:global.colors.gray_regular
    },

    textCalendar:{
        paddingLeft:20
    }

})