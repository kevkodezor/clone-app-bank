import { View, StyleSheet, Text } from 'react-native';

export default function Footer () {
    return (
        <View style={styles.footer}>
            <Text style={styles.textFooter}>
                BFC Banco Fondo Común C.A Banco Universal RIF: J-00072306-0
            </Text>
            <Text style={styles.textFooter}>
                Todo los Derechos Reservados {new Date().getFullYear()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0000EE',
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFooter: {
        color: '#FFF',
        fontSize: 10
    }
});