import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Destructuring to gain access to callback function passed in as prop.
// The 'onPress' reference right here is exactly equal to the fat-arrow function
// on line 74 of album-detail.js.
const Button = ({ onPress }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        // TouchableOpacity tag has touch functions:
            // Providing feedback to the user that their tap was registered.
                // Need to add hook to catch this and respond.
            // Giving us the ability to respond to these taps (e.g., to run a
            // callback or some code).
        // NOTE: the tag by itself doesn't appear like a button -- requires
        // styling.
        // Another option is using 'TouchableHighlight'
    // NOTE: onPress is an optional prop (event-handler) for TouchableOpacity,
    // which takes a function to be called whenever the button is tapped.
    // We want general logic inside of this event-handler so that we can
    // re-use this button component.
        // We pass in a prop called 'onPress' (arbitrarily), from the AlbumDetail
        // component, and we need to tell the TouchableOpacity tag to run this
        // function whenever it gets touched.
    // We tell it to run the callback passed in as a prop from album-detail
    // when the onPress event is triggered.
        <TouchableOpacity
            onPress={onPress}
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
