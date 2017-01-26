import React from 'react';
import { View, Image, Text } from 'react-native';
import CardContainer from './card-container';
import CardSection from './card-section';
import Button from './button';
// Destructure the props, since we are only referencing the album object.
// Two options:
    // const AlbumDetail = ({ album: { thumbnail_image, title, artist } }) => (
    // or as seen in line 10
const AlbumDetail = ({ album }) => {
    const {
        thumbnail_image,
        title,
        artist,
        image
    } = album;
// destructure styles object, since we are referencing more than once.
    const {
        imageContainerStyle,
        imageStyle,
        textStyle,
        headerTextStyle,
        albumImageStyle
    } = styles;
    return (
        <CardContainer>
            <CardSection>
                <View style={imageContainerStyle}>
                    {
                    // Image is another primitive component available through
                    // the react-native library.
                        // Must pass this a 'source' prop, and the prop must
                        // be an object with a URI property, that is a link
                        // to an image.
                        // Also must add styling to the image, specifying
                        // height and width, otherwise it will not appear to
                        // render. With no height or width set, it gets
                        // condensed down to zero, and nothing will show up
                        // on the screen of the device (even though it
                        // technically renders).
                    }
                    <Image
                        style={imageStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={textStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                {
                    // Not easy for us to calculate the width of our image for
                    // hardcoding, because we want it to span the entire width
                    // of our CardSection. So we use trick in styling, where
                    // we set a fixed height, with a width of 'null' and a
                    // property 'flex' set to 1.
                }
                <Image
                    style={albumImageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <Button />
        </CardContainer>
    );
};

const styles = {
// Styling for the View tag containing the Image
    imageContainerStyle: {
    // layout styling
        justifyContent: 'center',
        alignItems: 'center',
    // spacing
        marginLeft: 10,
        marginRight: 10
    },
// Styling for Image tag
    imageStyle: {
    // sizing
        height: 50,
        width: 50
    },
// Styling for Text tags
    textStyle: {
    // layout styling
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
// Styling for the 'title' text
    headerTextStyle: {
        fontSize: 18
    },
// Styling for album artwork image
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
