import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary' key='9'>
        <Layout>
            <Fit>
                <Image
                  height={300}
                  src='https://s24.postimg.org/s6j9f3hj9/image.png'
                  style={{ marginTop: 110 }}
                />
            </Fit>
            <Fill>
                <Heading fit lineHeight={3} style={{ marginLeft: 20 }}>WebPack</Heading>
            </Fill>
        </Layout>
        <Heading size={5} textColor='white'>
        Module Bundler
      </Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='10'>
        <Heading size={5} textColor='white'>
        Why
    </Heading>
        <List>
            <ListItem>Split bundle</ListItem>
            <ListItem>Extract vendor libs</ListItem>
            <ListItem>Migrate to webpack 2</ListItem>
            <ListItem>Tree Shaking </ListItem>
        </List>
    </Slide>
];
