// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Loading } from './src/components';
import { Login } from './src/views';

export default function App() {

  const loading = false;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' backgroundColor='#0000EE' animated={true} />
      {loading
        ? <Loading />
        : <Login />
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
