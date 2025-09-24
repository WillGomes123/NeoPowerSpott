import { LinearGradient } from 'expo-linear-gradient';
import {Text, TouchableOpacity, View} from 'react-native';
import { global } from '../../Styles/global'; 
import { styles } from './styles';

export default function Header(){
    return(
        <View style={styles.container} >
            <View style={styles.containerInfo}>
                <Text>Olá, NeoPower</Text>
                <TouchableOpacity>
                    <Text>Português</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Suporte</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient
            
            colors={[
                global.colors.green,
                global.colors.green_dark,
                global.colors.blue
            ]}
            start={{x:0, y:0.5}}
            end={{x:1, y:0.5}}
            style={styles.lineGradient}
            ></LinearGradient>
           
        </View>
    )
}