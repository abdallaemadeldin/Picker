import React, { memo } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import { useHome } from 'src/hooks';
import { style } from './style';

const Home = () => {
    const { container, box, label, btn, btnLabel, overlay, list, valuesStyle } = style();
    const { values, logs, visible, setVisible, fetchLogs, generate } = useHome();

    const renderItem = ({ item }) => {
        return (
            <View style={box}>
                <Text style={label}>{item}</Text>
            </View>
        );
    }

    const renderFooter = () => {
        return (
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={btn} onPress={generate}>
                    <Text style={btnLabel}>Generate</Text>
                </TouchableOpacity>

                <TouchableOpacity style={btn} onPress={fetchLogs}>
                    <Text style={btnLabel}>Show Logs</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={container}>
            <FlatList
                data={values}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                bounces={false}
                getItemLayout={(_, index) => ({ index, length: 130, offset: 130 * index })}
                numColumns={2}
                centerContent={true}
                ListFooterComponent={renderFooter}
            />

            <Modal visible={visible} animationType="slide" transparent onDismiss={() => setVisible(false)}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={overlay} onPress={() => setVisible(false)} />
                    <View style={list}>
                        <FlatList
                            data={logs}
                            renderItem={({ item, index }) => {
                                return (
                                    <Text style={valuesStyle} key={index}>{item.values}</Text>
                                );
                            }}
                            bounces={false}
                            keyExtractor={e => e.id}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default memo(Home);