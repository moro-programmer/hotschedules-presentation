import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading, List, ListItem } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary'>
        <Layout>
            <Fit>
                <Image
                  height={230}
                  style={{ filter: 'invert(100%)', margin: '10px 30px 0 0' }}
                  src='https://camo.githubusercontent.com/b5f24097389580680375d33c4a743ddde5885cf2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3436373132342f696d616765732f323837323735382f7374796c656c696e742d69636f6e2d626c61636b2e737667'
                />
            </Fit>
            <Fill>
                <Heading fit size={1}>StyleLint</Heading>
            </Fill>
        </Layout>

        <Heading size={5} textColor='white'>
        A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
      </Heading>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Heading size={5} textColor='white'>
        Why
    </Heading>
        <List>
            <ListItem> приведення css до одного стилю</ListItem>
            <ListItem>Knowledge sharing (team leads, seniors)</ListItem>
            <ListItem>Team leads spend time, it can be checked by linter</ListItem>
            <ListItem>скорочення часу на навчання juniors</ListItem>
            <ListItem> Catch errors: e.g. invalid hex colors, indistinguishable colors, or overriding shorthand properties.</ListItem>
            <ListItem>Control what languages features can be used: e.g. whitelisting specific units, properties and functions, or disallowing certain selector types.</ListItem>
            <ListItem>Support for the latest CSS syntax: Including custom properties, range context for media features, calc() and nesting.</ListItem>
            <ListItem>Understands CSS-like syntaxes: The linter is powered by PostCSS, so it understands any syntax that PostCSS can parse, including SCSS, SugarSS, and experimental support for Less.</ListItem>
            <ListItem>Support for plugins: It's easy to create your own rules and add them to the linter.</ListItem>
            <ListItem>Automatically fix some stylistic warnings: By using stylefmt which supports stylelint configuration files. </ListItem>
        </List>
    </Slide>
];
