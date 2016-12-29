import React from 'react';
import { Slide, Layout, Fill, Fit, Image, Heading } from 'spectacle';

export default [
    <Slide transition={['zoom']} bgColor='primary'>
        <Layout>
            <Fit>
                <Image
                  height={240}
                  style={{ margin: '10px 20px 0 0' }}
                  src='https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/1.2.2/1481885982045/Microsoft.VisualStudio.Services.Icons.Default'
                />
            </Fit>
            <Fill>
                <Heading fit lineHeight={1} style={{ marginLeft: 20 }}>Linters</Heading>
            </Fill>
        </Layout>
    </Slide>
];
