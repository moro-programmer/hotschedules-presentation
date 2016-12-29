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
        <Heading size={5} textColor='white'>
        UI Development Environment You'll {String.fromCharCode('E005')} to use
      </Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='10'>
        <Heading size={5} textColor='white'>
        Why
    </Heading>
        <List>
            <ListItem>повний список компонентів</ListItem>
            <ListItem>New team members can get familiar with the components </ListItem>
            <ListItem>всі варіанти використання</ListItem>
            <ListItem>приклади як з ними працювати</ListItem>
            <ListItem>You can work on React components without app</ListItem>
            <ListItem>Hot module replacement</ListItem>
            <ListItem>Extendable as required</ListItem>
        </List>
    </Slide>
];
