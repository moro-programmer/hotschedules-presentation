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
            <ListItem>використовувати з нашими компонентами</ListItem>
            <ListItem>правильніше написання компонентів тому що не дасть перевантажувати класи в контейнері</ListItem>
            <ListItem>можна видалити клас для основного блоку який використовуємо як префікс</ListItem>
        </List>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Heading size={5} textColor='white'>
            How
        </Heading>
        <List>
            <ListItem>Postcss plugin</ListItem>
            <ListItem>.module.cscs suffix</ListItem>
            <ListItem>Convert .name =&gt name___32osj</ListItem>
        </List>
    </Slide>
];
