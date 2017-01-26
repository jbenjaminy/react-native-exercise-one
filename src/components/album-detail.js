import React from 'react';
import { View, Image, Text } from 'react-native';
import CardContainer from './card-container';
import CardSection from './card-section';
// Destructure the props, since we are only referencing the album object.
// Two options:
    // const AlbumDetail = ({ album: { thumbnail_image, title, artist } }) => (
    // or as seen in line 10
const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist } = album;
    return (
        <CardContainer>
            <CardSection>
                <View>
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
                        style={styles.imageStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.textStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </CardContainer>
    );
};

const styles = {
    imageStyle: {
        height: 50,
        width: 50
    },
    textStyle: {
    // layout styling
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
