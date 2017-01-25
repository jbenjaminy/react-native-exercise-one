import React from 'react';
import { Text, View } from 'react-native';

// Always name component and file the same.
const Header = () => {
    // Use destructuring to reference our style.
    const { textStyle, viewStyle } = styles;
    // Use styles as props
    // Wrap text tag in a view tag to take up additional space the 'text' does
    // not take up.
    return (
        // If you don't want to use destructuring, could reference using
        // 'styles.viewStyle'
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
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
        backgroundColor: '#F8F8F8'
    }
};
// Make child componenet available to other parts of the app.
export default Header;
