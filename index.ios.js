/* ----- INDEX.IOS.JS ----- */
// Entry point for iOS version of the app.

// Apps we build are composed of a collection of many components
// Components are any objects to be rendered on the screen of device.

/* ----- STEP 1: IMPORT LIBRARIES TO HELP CREATE COMPONENT. ----- */
// Import Statements:
    // Part of ES6 -- no file gets global access.
    // Only by importing files or modules can we access code outside of file.
// React Library:
    // Knows how a component should behave.
    // Knows how to take a bunch of components and make them work together.
import React from 'react';

// React Native Library:
    // Knows how to take the output from a component and place it on the screen.
    // Provides default core components (image, text)
import ReactNative from 'react-native';

/* ----- STEP 2: CREATE A COMPONENT. ----- */
// Create the component itself.
// To define a component, we use a JS function, which returns some object that
// describes what it should look like on our device.
const App = () => {
    // Looks like HTML but this is actually JSX -- an extension to the JS
    // language that is used to write React components.
    // Follows same semantics of HTML (opening/closing tags w/ content)
    // Can nest content in between tags.
    // Really just 'syntactic sugar' to make our lives easier, using syntax
    // most developers are already familiar with.
    // Looks cleaner than a bunch of React.createElement{} calls too.
        // Can use Babel's 'try it out' feature:
        // Plug in JSX and it will output JS code.
    return (
        <Text>Some text</Text>
    );
};

/* ----- STEP 3: RENDER IT TO THE DEVICE. ----- */
// Tells ReactNative to show this component on the devices
// In any ReactNative app, have to register at least one component.
// First argument should match project name, second one should match first
// component to render in our application.
ReactNative.AppRegistry.registerComponent('albums', () => App);
