import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Information, Contact } from '../index'

const Stack = createNativeStackNavigator();

export default function RootScreen() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Info' component={Information} />
            <Stack.Screen name='Contact' component={Contact} />
        </Stack.Navigator>
    );
}
