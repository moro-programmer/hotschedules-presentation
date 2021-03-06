import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary' key='9'>
        <Layout>
            <Fit>
                <Image
                  height={270}
                  style={{ background: '#d3dc83', margin: '90px 30px 0 0' }}
                  src='https://avatars0.githubusercontent.com/u/22632046?v=3&s=400'
                />
            </Fit>
            <Fill>
                <Heading fit lineHeight={3} style={{ marginLeft: 20 }}>StoryBook</Heading>
            </Fill>
        </Layout>
        <Heading size={5} textColor='white'>UI Development Environment</Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='10'>
        <Heading size={5} textColor='white'>
        Why
    </Heading>
        <List>
            <ListItem>Full list of our components</ListItem>
            <ListItem>New team members can get familiar with the components</ListItem>
            <ListItem>Demonstrating different use cases</ListItem>
            <ListItem>You can work on React components without any app</ListItem>
            <ListItem>Hot module replacement</ListItem>
            <ListItem>Extendable if needed</ListItem>
        </List>
    </Slide>
];
