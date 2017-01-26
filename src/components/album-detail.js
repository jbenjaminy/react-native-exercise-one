import React from 'react';
import { View, Text } from 'react-native';
import CardContainer from './card-container';
import CardSection from './card-section';

const AlbumDetail = (props) => (
        <CardContainer>
            <CardSection>
                <View></View>
                <View style={styles.headerTextStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
        </CardContainer>
);

const styles = {
    headerTextStyle: {
    // layout styling
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
