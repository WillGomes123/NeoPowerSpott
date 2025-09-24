import {View, Text, Button, TouchableOpacity} from 'react-native';
import CardStatus from '../../components/cardStatus';
import { styles } from './styles';
import Header from '../../components/Header';
import TableChargers from '../../components/tableChargers';
import Entypo from '@expo/vector-icons/Entypo';
import { global } from '../../Styles/global';
import LineCards from '../../components/lineCards';

export default function Resumo(){

const Calendary = ()=> (
    <View style={styles.viewCalendary}>
        <Text>Este Mês</Text>

        <View style={styles.viewDate}>
            <Text>Data Inicial </Text>

            <TouchableOpacity style={styles.buttonDate}>
                <Entypo
                name='calendar'
                size={12}
                color={global.colors.cor_preto}
                />
                <Text style={styles.textCalendar} >01/09/2025</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewDate}>
            <Text>Data Final</Text>

            <TouchableOpacity style={styles.buttonDate}>
                <Entypo
                name='calendar'
                size={12}
                color={global.colors.cor_preto}
                />
                <Text style={styles.textCalendar}>01/09/2025</Text>
            </TouchableOpacity>
        </View>
        
    </View>
)



    return(
        <View style={styles.container}>
            <Header/>

            <Calendary/>

            <View style={styles.viewCards} >
            <LineCards/>
            </View>
            <View>            
                <TableChargers/>
            </View>
        </View>
    )
}