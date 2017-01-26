import React from 'react';
import { View } from 'react-native';

const CardSection = () => (
        <View style={styles.viewStyle}>
        </View>
    );

const styles = {
    viewStyle: {
    // borders & coloring
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    // spacing & orientation
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'


    }
};

export default CardSection;
