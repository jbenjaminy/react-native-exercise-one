import React from 'react';
import { View } from 'react-native';

// Anytime we pass a component that we write another component, that component
// will show up in the props object as 'props.children'. (Like when we pass
// our routes to the app component).
const CardContainer = (props) => (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
);

const styles = {
    viewStyle: {
    // border styling
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
    // shadow styling
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    // margin styling
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    // other styling
        elevation: 1
    }
};

export default CardContainer;
