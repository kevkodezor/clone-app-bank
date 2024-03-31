import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loading } from './src/components';
import { Login } from './src/views';

const Stack = createNativeStackNavigator();

export default function App() {

    const loading = false;

    if (loading) return <Loading />
    
    return (
        <NavigationContainer>
            <StatusBar style='light' backgroundColor='#0000EE' animated={true} />
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
