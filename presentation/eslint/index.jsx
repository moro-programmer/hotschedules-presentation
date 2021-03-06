import React from 'react';
import { Slide, Layout, Fit, Fill, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary' key='40'>
        <Layout>
            <Fit>
                <Image
                  height={260}
                  src='http://eslint.org/img/logo.svg'
                />
            </Fit>
            <Fill>
                <Heading fit size={1}>ESLint</Heading>
            </Fill>
        </Layout>

        <Heading size={5} textColor='white'>
          The pluggable linting utility for JavaScript and JSX
        </Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white' key='41'>
        <Heading size={5} textColor='white'>
            Why
        </Heading>
        <List>
            <ListItem>Strict rules (add our code convention rules)</ListItem>
            <ListItem>Knowledge sharing (team leads, seniors)</ListItem>
            <ListItem>Team leads spend time, it can be checked by linter</ListItem>
            <ListItem>It's much easier to get an error from linter than from human</ListItem>
            <ListItem>Can help decrease time for teaching new members</ListItem>
            <ListItem>Can fix simple errors automatically (parameter --fix) </ListItem>
            <ListItem>.editorconfig file</ListItem>
        </List>
    </Slide>
];
