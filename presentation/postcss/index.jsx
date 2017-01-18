import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary'>
        <Layout>
            <Fit>
                <Image
                  height={250}
                  style={{ margin: '0 30px 0 0' }}
                  src='http://postcss.org/_/web_modules/Hero/postcss.svg'
                />
            </Fit>
            <Fill>
                <Heading fit size={1}>PostCSS</Heading>
            </Fill>
        </Layout>

        <Heading size={5} textColor='white'>A tool for transforming CSS with JavaScript</Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Heading size={5} textColor='white'>
            Why
        </Heading>
        <List>
            <ListItem>Contains a lot of useful plugins (we use only auto-prefix)</ListItem>
            <ListItem>Postcss-flexbugs-fixes - tries to fix all of flexbug's issues</ListItem>
            <ListItem>CssNext - allows using the latest CSS syntax today</ListItem>
        </List>
    </Slide>
];
