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
            <ListItem> дуже багато плагінів які були б корисні, але зараз ми використовуємо тільки auto-prefix</ListItem>
            <ListItem>postcss-flexbugs-fixes - фіксить баги flexbox</ListItem>
            <ListItem>Solve Global CSS Problem</ListItem>
            <ListItem>Use Future CSS, Today (cssnext)</ListItem>
            <ListItem> postcss-browser-reporter - виводить помилки в browser</ListItem>
        </List>
    </Slide>
];
