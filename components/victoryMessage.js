import React from 'react';
import { Modal, Text, View, Button } from 'react-native';

const Victory = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text style={{ fontSize: 24, marginBottom: 10 }}>You Win!</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

export default Victory;