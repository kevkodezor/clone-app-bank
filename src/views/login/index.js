import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconFat from 'react-native-vector-icons/Feather';

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.contentLogin}>
            <View>
                <Text style={styles.label}>Usuario de BFC en Línea:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    selectionColor='#666666'
                // onChangeText={(value) => textInputChange(value)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Clave:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    selectionColor='#666666'
                    secureTextEntry={true}
                // onChangeText={(value) => textInputChange(value)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
            </View>
            
            <View style={styles.contentActions}>
                <TouchableOpacity style={styles.btnAction}>
                    <Text style={styles.btnText}>Aceptar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAction}>
                    <Text style={styles.btnText}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContact}>
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <Icon name='info' style={styles.btnInfoContact} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <IconFat name='at-sign' style={styles.btnInfoContact} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentLogin: {
        gap: 30,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333399'
    },
    input: {
        borderRadius: 5,
        borderColor: '#666666',
        borderWidth: 1,
        height: 45,
        width: 250,
        top: 10,
        paddingLeft: 10,
    },
    contentActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15
    },
    btnAction: {
        backgroundColor: '#F3A020',
        padding: 15,
        borderRadius: 5,
        width: 100,
    },
    btnText: {
        color: '#333399',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    infoContact: {
        flexDirection: 'row',
        position: 'relative',
        top: 30,
        gap: 50
    },
    btnInfoContact: {
        fontSize: 50,
        color: '#0000EE'
    }
});
