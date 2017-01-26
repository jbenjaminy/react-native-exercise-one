import React from 'react';
import { Text } from 'react-native';
import CardContainer from './card-container';

const AlbumDetail = (props) => (
        <CardContainer>
            <Text>{props.album.title}</Text>
        </CardContainer>
);

export default AlbumDetail;
