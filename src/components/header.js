import React from 'react';
import { Text } from 'react-native';

// Always name component and file the same.
const Header = () => {
    // Use destructuring to reference our style.
    const { textStyle } = styles;
    // Use styles as props
    return <Text style={textStyle}>Albums!</Text>;
};

// Styling consists of a JavaScript object that contains certain properties
// for specifying visual preferences. No CSS (so no CSS selectors), even
// though a lot of it looks like CSS rules. Use camelCase instead of dashed
// separation of words for multi-word styling.
const styles = {
    textStyle: {
        fontSize: 20
    }
};
// Make child componenet available to other parts of the app.
export default Header;
