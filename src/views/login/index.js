import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.viewLogin}>
            <View style={styles.contentInput}>
                <Text style={styles.label}>Usuario de BFC en Línea:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    selectionColor='#666666'
                // onChangeText={(value) => textInputChange(value)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
            </View>
            <View style={styles.contentInput}>
                <Text style={styles.label}>Clave:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    selectionColor='#666666'
                // onChangeText={(value) => textInputChange(value)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    contentInput: {
        marginTop: 30,
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
    buttonLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#13B955',
        padding: 10,
        width: '48%',
        borderRadius: 10,
        // elevation: 5
    },
    iconLogin: {
        color: '#FFFFFF',
        fontSize: 20
    },
    textLogin: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    success: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 60,
        marginLeft: 25,
        marginRight: 25,
    },
    buttonUp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#763FE5',
        padding: 10,
        width: '48%',
        borderRadius: 10,
    },
    iconUp: {
        color: '#FFFFFF',
        fontSize: 20
    },
    textUp: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    rcvPass: {
        alignSelf: 'center',
        marginTop: 25,
        color: '#6A6A6A'
    }
});
