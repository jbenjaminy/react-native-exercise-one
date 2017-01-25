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
    // STEP #1
    // Add class-level property to set initial state.
    // an earlier iteration of this state declaration was 'getInitialState'
    // Whenever a componenet is created, it will now have a property called
    // this.state, set to an empty object, which represents our initial, base
    // state.
        // Have an empty list of albums when component first renders -- it will
        // have access to a variable that we can make reference to inside of our
        // render method, that we can refer to as this.state.albums and that's
        // going to return an empty array.
    state = { albums: [] };
    // anytime component is about to be rendered to our device, this method
    // will automatically be called for us.
    // Perfect location for initiating a data load in your app.
    componentWillMount() {
        console.log('componentWillMount call in AlbumList');
        // Making an http request is inherently asynchronous, so this returns
        // a promise back to us. Function passed to .then() will be called
        // once the http request completes.
        // When http request completes it gives us back a JSON object.
        // http request takes some time to complete -- before we get back our
        // data, the component tries to render. We have an order of operations
        // problem and must tell our component to re-render when we have this
        // data.
        // Must enable component-level state, with the goal of rerendering the
        // component once new data is made available.
        // Three steps to enabling component-level state:
            // 1) Set up default or 'initial' state
            // 2) Once we fetch some data, tell our component to re-render.
            // 3) Make sure that our component makes use of the state (by
            // tweaking render method).
        // 'State' is built in system in React.
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // set the list of albums (available at response.data) to
            // our albums list in our state. we're switching the empty
            // array from the initial state to an array full of objects.
            // 'this.setState' is the only we we will update our component state,
            // never set it directly (mutating it)
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!</Text>
            </View>
        );
    }
// Classes do not require semicolons.
}

export default AlbumList;
