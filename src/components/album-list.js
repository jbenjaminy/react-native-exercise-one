// Must import the Component class from the React library, but don't want to
// destructure the React library.
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// ORIGINAL FUNCTIONAL COMPONENT REFACTORED INTO A CLASS-BASED COMPONENT.
// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List!</Text>
//         </View>
//     );
// };
// By extending Component, we indicated that we want to borrow a lot of
// functionality from the class Component.
// When using a class-based component, must define at least one method (the
// 'render' method).
    // Only requirement of the render method is that it returns some amount
    // of JSX.

class AlbumList extends Component {
    render() {
        return (
            <View>
                <Text>Album List!</Text>
            </View>
        );
    }
// Classes do not require semicolons.
}

export default AlbumList;
