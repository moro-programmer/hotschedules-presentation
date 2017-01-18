import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// const jestCode = require('raw!./jest.example');
const enzymeCode = require('raw!./enzyme.example');

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
        <Heading size={5} textColor='white'>Tools</Heading>
        <List>
            <ListItem>Enzyme (JavaScript Testing utility for React)</ListItem>
            {/* <ListItem>Jest (JavaScript testing framework)</ListItem> */}
            <ListItem>Mocha (Simple, flexible, fun javascript test framework)</ListItem>
            <ListItem>Istanbul (Code coverage tool)</ListItem>
        </List>
    </Slide>,

    <CodeSlide
      key='0'
      lang='js'
      transition={['zoom']}
      code={enzymeCode}
      className='code-slide'
      ranges={[{ loc: [0, 270], title: 'Enzyme test example' }]}
    />
];
