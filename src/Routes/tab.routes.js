import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Resumo from '../pages/Resumo';
import Performance from '../pages/Performance';
import Cupons from '../pages/Cupons';
import { global } from '../Styles/global';
import Monitoramento from '../pages/Monitoramento';
import SideBarContent from '../components/SideBarContent';

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Resumo"
        drawerContent={(props) => <SideBarContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'permanent',
          swipeEdgeWidth: 0,
          drawerStyle: {
            width: 260,                 // <- mais estável que '%'
            backgroundColor: global.colors.gray_regular,
            borderRightWidth: 0,
          },
        }}
      >
        <Drawer.Screen name="Resumo" component={Resumo} />
        <Drawer.Screen name="Monitoramento" component={Monitoramento} />
        <Drawer.Screen name="Performance" component={Performance} />
        <Drawer.Screen name="Cupons" component={Cupons} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
