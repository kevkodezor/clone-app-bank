import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, ImageBackground } from 'react-native';
import loadingImg from '../../resources/img/main-loading.png'

export default function Loading() {

    const [color, setColor] = useState('#0000EE');
    
    useEffect(() => {
        const id = setInterval(() => {
            setColor((color) => color == '#0000EE' ? '#F37520' : color == '#F37520' ? '#F00627' : '#0000EE');
        }, 1500);
        return () => clearInterval(id);
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.img} source={loadingImg} resizeMode='cover'>
                <ActivityIndicator style={styles.spinnerLoading} size='large' color={color} animating />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        flex: 1,
        width: '100%',
        marginLeft: -160,
        alignItems:'center',
        justifyContent: 'center'
    },
    spinnerLoading: {
        marginTop: 300,
        marginLeft: 160
    }
});