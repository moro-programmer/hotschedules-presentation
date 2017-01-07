import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary' key='40'>
        <Layout>
            <Fit>
                <Image src='http://www.scotiabank.com/ca/common/csr/images/icon-employees.png' height={250} />
            </Fit>
            <Fill>
                <Heading fit size={1} style={{ margin: '90px 0 0 60px' }}>
                Split Responsibility
              </Heading>
            </Fill>
        </Layout>
        <Heading size={5} textColor='white'>Good way to ....</Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='41'>
        <Heading size={5} textColor='white'>
        Why
    </Heading>
        <List>
            <ListItem>Helps to share information about latest changes</ListItem>
            <ListItem>Helps to keep our tools configs up-to-date</ListItem>
            <ListItem>Css (code conventions, style, rules, stylelint configuration)</ListItem>
            <ListItem>ESlint (add code conventions to eslint config, modern rules)</ListItem>
            <ListItem>PostCSS (add useful plugins, extract settings to config)</ListItem>
        </List>
    </Slide>
];
