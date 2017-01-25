import React from 'react';
import { Text, View } from 'react-native';

// Always name component and file the same.
const Header = (props) => {
    // Use destructuring to reference our style.
    const { textStyle, viewStyle } = styles;
    // Use styles as props
    // Wrap text tag in a view tag to take up additional space the 'text' does
    // not take up. Use it for positioning -- positioning elements in
    // React-Native is tough. Can't really position the Text tag by itself.
    // Flexbox: a solution for positioning in react-native. It is a system for
    // elements in a container. Text is a child element of the View. Everything
    // by default gets positioned to the top-left of the parent container,
    // as we would expect in HTML.
    return (
        // If you don't want to use destructuring, could reference using
        // 'styles.viewStyle'
        // Use justifyContent and alignItems for positioning Text tag.
            // 'justifyContent' is used for vertical positioning (one case where
            // it functions differently). If we give it the string:
                // 'flex-end': it will position to the bottom of parent.
                // 'center': it will position to the center of parent.
                // 'flex-start': top of parent; typically same as default.
            // 'alignItems': positions horizontally
                // 'flex-end': it will position to the right of parent.
                // 'center' and 'flex-start' can be used here too.
            // Rather than hardcoding this text, we reuse header component by
                // making this text variable, by using props.
                // <Text style={textStyle}>Albums!</Text>
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Styling consists of a JavaScript object that contains certain properties
// for specifying visual preferences. No CSS (so no CSS selectors), even
// though a lot of it looks like CSS rules. Use camelCase instead of dashed
// separation of words for multi-word styling.
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        // the following two are just like in CSS -- set a pixel value
        height: 60,
        paddingTop: 15,
        // shadow property used for a kind of border, rather than a hard line
            // color it black
        shadowColor: '#000',
        // dimensions of shadow
        shadowOffset: { width: 0, height: 2 },
        // darkness of shadow or how heavy it is
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};
// Make child componenet available to other parts of the app.
export default Header;
