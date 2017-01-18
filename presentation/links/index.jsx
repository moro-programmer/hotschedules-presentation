import React from 'react';
import { Slide, Layout, Fill, List, ListItem, Heading, Link } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Layout>
            <Fill>
                <Heading lineHeight={1} style={{ marginLeft: 20 }}>Test links</Heading>
                <List>
                    <ListItem>
                        <Link target='_blank' href='https://github.com/airbnb/enzyme'>
                          Enzyme home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://mochajs.org/'>
                          Mocha home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://github.com/gotwarlost/istanbul'>
                          Istanbul home page
                        </Link>
                    </ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Layout>
            <Fill>
                <Heading lineHeight={1} style={{ marginLeft: 20 }}>Linters, flow links</Heading>
                <List>
                    <ListItem>
                        <Link target='_blank' href='http://eslint.org/'>
                          ESLint home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://github.com/stylelint/stylelint'>
                          Stylelint home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://flowtype.org/'>
                          Flow home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://github.com/airbnb/javascript'>
                          Airbnb code style guide
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://medium.freecodecamp.com/why-use-static-types-in-javascript-part-1-8382da1e0adb#.53j3kn8do'>
                          Why use static types in JavaScript?
                        </Link>
                    </ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Layout>
            <Fill>
                <Heading lineHeight={1} style={{ marginLeft: 20 }}>Other</Heading>
                <List>
                    <ListItem>
                        <Link target='_blank' href='https://github.com/gajus/react-css-modules'>
                          CssModules home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://github.com/postcss/postcss'>
                          PostCSS home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://getstorybook.io/'>
                          StoryBook home page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link target='_blank' href='https://webpack.js.org/'>
                          WebPack home page
                        </Link>
                    </ListItem>
                </List>
            </Fill>
        </Layout>
    </Slide>,

    <Slide transition={['zoom']} bgColor='primary' textColor='white'>
        <Layout>
            <Fill>
                <Link target='_blank' href='https://github.com/moro-programmer/hotschedules-presentation'>
                    <Heading
                      lineHeight={1}
                      size={4}
                      textColor='white'
                      style={{ marginLeft: 20 }}
                    >
                      Presentation source
                    </Heading>
                </Link>
                <Link target='_blank' href='https://github.com/moro-programmer/hotschedules-presentation-example'>
                    <Heading
                      lineHeight={1}
                      size={4}
                      textColor='white'
                      style={{ marginLeft: 20 }}
                    >
                      Presentation example source
                    </Heading>
                </Link>
            </Fill>
        </Layout>
    </Slide>
];
