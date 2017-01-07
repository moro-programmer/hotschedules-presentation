import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

const flowCode = require('raw!./flow.example');

export default [
    <Slide transition={['zoom']} bgColor='primary'>
        <Layout>
            <Fit>
                <Image
                  height={400}
                  src='https://avatars0.githubusercontent.com/u/15352388'
                />
            </Fit>
            <Fill>
                <Heading fit caps size={1} lineHeight={2}>flow</Heading>
            </Fill>
        </Layout>
        <Heading size={5} textColor='white'>A static type checker for javascript</Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Heading size={5} textColor='white'>
            Why
        </Heading>
        <List>
            <ListItem>Improve developer productivity and code quality</ListItem>
            <ListItem>Additional documentation</ListItem>
            <ListItem>Flow-typed - check external libraries</ListItem>
            <ListItem>Good integration with atom</ListItem>
        </List>
    </Slide>,

    <CodeSlide
      key='1'
      lang='js'
      transition={['zoom']}
      code={flowCode}
      className='code-slide'
      ranges={[{ loc: [0, 270], title: 'Flow example' }]}
    />
];
