import React from 'react';
import { Slide, Heading, Image, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary'>
        <div className='logos'>
            <Image
              style={{ filter: 'invert(100%)' }}
              src='https://camo.githubusercontent.com/b5f24097389580680375d33c4a743ddde5885cf2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3436373132342f696d616765732f323837323735382f7374796c656c696e742d69636f6e2d626c61636b2e737667'
            />
            <Image src='http://postcss.org/_/web_modules/Hero/postcss.svg' />
            <Image src='http://eslint.org/img/logo.svg' />
            <br />
            <Image src='https://avatars0.githubusercontent.com/u/15352388' />
            <Image src='https://s24.postimg.org/s6j9f3hj9/image.png' />
            <Image src='https://cdn-images-1.medium.com/max/800/1*pu9U8EYL3KGrgvapyp1pSg.png' />
        </div>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Heading size={5} textColor='white'>
            Problems
        </Heading>
        <List>
            <ListItem>There is a lot of legacy code</ListItem>
            <ListItem>There are several code generations</ListItem>
            <ListItem>Common problem - low code quality</ListItem>
            <ListItem>How can we fix it ?</ListItem>
        </List>
    </Slide>
];
