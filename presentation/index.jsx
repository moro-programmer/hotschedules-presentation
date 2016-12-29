import React from 'react';
import { Deck, Spectacle } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'spectacle/lib/themes/default/index.css';
import 'normalize.css';
import flow from './flow';
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
    primary: '#3c4c55'
});

export default () => {
    const slides = [].concat(tests, linters, eslint, styleLint, flow,
      cssModules, postCSS, storyBook, webPack, responsibility
    );

    return (
        <Spectacle theme={theme}>
            <Deck transition={['zoom', 'slide']} transitionDuration={500} progress='number'>
                {slides}
            </Deck>
        </Spectacle>
    );
};
