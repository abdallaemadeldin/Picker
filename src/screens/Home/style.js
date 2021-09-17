import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { top } = useSafeAreaInsets();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: top + 20
        },
        box: {
            width: '46%',
            margin: '2%',
            height: 130,
            borderRadius: 4,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        label: {
            fontSize: 24,
            color: '#000',
            fontWeight: 'bold'
        },
        btn: {
            width: '90%',
            marginVertical: 10,
            height: 44,
            backgroundColor: '#fff',
            alignSelf: 'center',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        btnLabel: {
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold'
        },
        overlay: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0007',
            justifyContent: 'center',
            alignItems: 'center',
        },
        list: {
            width: '100%',
            minHeight: 150,
            maxHeight: '60%',
            backgroundColor: '#fff'
        },
        valuesStyle: {
            fontSize: 20,
            color: '#000',
            fontWeight: 'bold',
            marginHorizontal: 20,
            lineHeight: 24
        }
    });
}