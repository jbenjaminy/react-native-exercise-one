import React from 'react';
import { Text } from 'react-native';
import CardContainer from './card-container';
import CardSection from './card-section';

const AlbumDetail = (props) => (
        <CardContainer>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </CardContainer>
);

export default AlbumDetail;
