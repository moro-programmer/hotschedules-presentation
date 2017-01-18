import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary'>
        <Layout>
            <Fit>
                <Image
                  height={300}
                  style={{ background: 'white', margin: '10px 30px 0 0' }}
                  src='https://raw.githubusercontent.com/gajus/react-css-modules/master/.README/react-css-modules.png'
                />
            </Fit>
            <Fill>
                <Heading fit lineHeight={3} style={{ marginLeft: 20 }}>CSSModules</Heading>
            </Fill>
        </Layout>
        <Heading size={5} textColor='white'>
            Seamless mapping of class names to CSS modules inside of React components.
        </Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Heading size={5} textColor='white'>
            Why
        </Heading>
        <List>
            <ListItem>No more conflicts (unique class names).</ListItem>
            <ListItem>No global scope.</ListItem>
            <ListItem>Modular and reusable CSS.</ListItem>
            <ListItem>We can start using it for our components</ListItem>
            <ListItem>Remove ability to override class names in containers</ListItem>
            <ListItem>Remove wrapper classes from our components</ListItem>
        </List>
    </Slide>
];
