/* ----- INDEX.IOS.JS ----- */
// Entry point for iOS version of the app.

// Apps we build are composed of a collection of many components
// Components are any objects to be rendered on the screen of device.
    // Always use one component per file.

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
// Text tag is a primitive element provided to us by React-Native Library
    // Do so with import destructuring
    // Tell it that we don't need access to the whole library, just the
    // Text property & App Registry function of the library
// With npm all package names are unique. that's why we don't have to provide
// relative path.
// import { Text, AppRegistry } from 'react-native';
import { View, AppRegistry } from 'react-native';

// Use component nesting -- placing one component inside another.
// Import header here for nesting. Consuming exported components and
// component nesting go hand in hand.
// Must provide local path for importing your own files.
import Header from './src/components/header';
import AlbumList from './src/components/album-list';

/* ----- STEP 2: CREATE A COMPONENT. ----- */
// Create the component itself.
// To define a component, we use a JS function, which returns some object that
// describes what it should look like on our device.
// Since all we are doing with this fatero (sp?) function is returning a single
// object, we can omit the return statement and omit the curly braces.
const App = () => (
    // Looks like HTML but this is actually JSX -- an extension to the JS
    // language that is used to write React components.
    // Follows same semantics of HTML (opening/closing tags w/ content)
    // Can nest content in between tags.
    // Really just 'syntactic sugar' to make our lives easier, using syntax
    // most developers are already familiar with.
    // Looks cleaner than a bunch of React.createElement{} calls too.
        // Can use Babel's 'try it out' feature:
        // Plug in JSX and it will output JS code.
    // <Text>Some text</Text>
    // Use self-closing tags for empty components.
    // For any component, must only have one return one tag, so must wrap with
    // a single top-level tag when we have multiple tags to return.
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

/* ----- STEP 3: RENDER IT TO THE DEVICE. ----- */
// Tells ReactNative to show this component on the devices
// In any ReactNative app, have to register at least one component.
// First argument should match project name, second one should match first
// component to render in our application.
// If we weren't importating AppRegistry directly, but rather the whole
// react-native library, we would need ReactNative.AppRegistry...
AppRegistry.registerComponent('albums', () => App);
