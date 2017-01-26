import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;
    return (
        // TouchableOpacity tag has touch functions:
            // Providing feedback to the user that their tap was registered.
                // Need to add hook to catch this and respond.
            // Giving us the ability to respond to these taps (e.g., to run a
            // callback or some code).
        // NOTE: the tag by itself doesn't appear like a button -- requires
        // styling.
    // NOTE: onPress is an optional prop for TouchableOpacity, which takes
    // a function to be called whenever the button is tapped.
        <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={buttonStyle}
        >
            <Text style={textStyle}>Purchase</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
    // sizing
        // NOTE: remember, this means that you want the element to expand to fill
        // as much content as it can.
        flex: 1,
    // layout
        // Another flexbox rule, for when we want an element to align itself using
        // the rules of flexbox containers.
        alignSelf: 'stretch',
    // borders
        borderWidth: 1,
        borderRadius: 5,
    // coloring
        // close to iOS blue
        borderColor: '#007aff',
        backgroundColor: '#fff',
    // spacing
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
    // layout
        alignSelf: 'center',
    // coloring & effects
        color: '#007aff',
        fontWeight: '600',
    // sizing
        fontSize: 16,
    // spacing
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
