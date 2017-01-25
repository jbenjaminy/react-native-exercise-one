// Must import the Component class from the React library, but don't want to
// destructure the React library.
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// axios is used to make http request.
import axios from 'axios';
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
// Lifecycle Methods: another advantage of class-based components (class-based
// components have more awareness of themselves).
    // For example, they know when they are about to be rendered -- we can get
    // notification of that and use it to fetch data, for example.

class AlbumList extends Component {
    // anytime component is about to be rendered to our device, this method
    // will automatically be called for us.
    // Perfect location for initiating a data load in your app.
    componentWillMount() {
        console.log('componentWillMount call in AlbumList');
        // Making an http request is inherently asynchronous, so this returns
        // a promise back to us. Function passed to .then() will be called
        // once the http request completes.
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
    }

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
