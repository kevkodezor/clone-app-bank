// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Loading } from './src/components';
import { RootScreen } from './src/views';
import { AuthContext } from './src/context'

export default function App() {

    const loading = false;

    if (loading) return <Loading />
    
    return (
        <AuthContext.Provider value={null}>
            <NavigationContainer>
                <StatusBar style='light' backgroundColor='#0000EE' animated={true} />
                <RootScreen />
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
