import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary' key='1'>
        <Layout>
            <Fit>
                <Image
                  height={300}
                  src='https://cdn-images-1.medium.com/max/800/1*pu9U8EYL3KGrgvapyp1pSg.png'
                />
            </Fit>
            <Fill>
                <Heading fit lineHeight={1} style={{ marginLeft: 20 }}>Tests</Heading>
            </Fill>
        </Layout>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='2'>
        <Heading size={5} textColor='white'>
        Why
    </Heading>
        <List>
            <ListItem>Design aid</ListItem>
            <ListItem>Feature documentation</ListItem>
            <ListItem>Quality Assurance</ListItem>
            <ListItem>Continuous Delivery Aid</ListItem>
            <ListItem>Can reduce code complexity</ListItem>
            <ListItem>Full regression testing</ListItem>
        </List>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='2'>
        <Heading size={5} textColor='white'>
        Utils
    </Heading>
        <List>
            <ListItem>Enzyme (airbnb)</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>Karma</ListItem>
        </List>
    </Slide>
];
