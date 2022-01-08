import Document, { Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../theme/theme';

// head에 들어갈 태그 및 폰트, 

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

        const initialProps = await Document.getInitialProps(ctx);
        return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
        ),
        };
    } finally {
        sheet.seal();
    }
    }

    render() {
    return (
        <Html lang="ko">
            
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main/>
                <NextScript />
            </body>

        </Html>
    );
    }
}