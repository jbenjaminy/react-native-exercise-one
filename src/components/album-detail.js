import React from 'react';
import { View, Image, Text } from 'react-native';
import CardContainer from './card-container';
import CardSection from './card-section';
// Destructure the props, since we are only referencing the album object.
// Two options:
    // const AlbumDetail = ({ album: { thumbnail_image, title, artist } }) => (
    // or as seen in line 10
const AlbumDetail = ({ album }) => {
    const {
        thumbnail_image,
        title,
        artist
    } = album;
// destructure styles object, since we are referencing more than once.
    const {
        imageContainerStyle,
        imageStyle,
        textStyle,
        headerTextStyle
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
                        // render.
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
    }
};

export default AlbumDetail;
