import React, { Component } from 'react';
import { Deck, Spectacle } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'spectacle/lib/themes/default/index.css';
import 'normalize.css';
import './index.css';
import start from './start';
// import flow from './flow';
import links from './links';
import tests from './tests';
import eslint from './eslint';
import postCSS from './postcss';
import webPack from './webpack';
import linters from './linters';
import styleLint from './stylelint';
import storyBook from './storybook';
import cssModules from './cssmodules';
import responsibility from './responsibility';

const theme = createTheme({
    primary: '#2d2d2d'
});

/* eslint-disable */
class StartPage extends Component {
/* eslint-disable */  
    render() {
        const slides = [].concat(start, tests, linters, eslint, styleLint,
          cssModules, postCSS, storyBook, webPack, responsibility, links
        );

        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500} progress='number'>
                    {slides}
                </Deck>
            </Spectacle>
        );
    }
}

export default StartPage;
