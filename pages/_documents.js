import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme/theme';

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

            <Head>
            
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
                <meta name="HandheldFriendly" content="true" />
                <meta name="theme-color" content="#000000" />
                <meta content="안녕하세요. 꾸생의 포트폴리오 웹사이트입니다." name="description" />

                <meta property="og:title" content="꾸생의 포트폴리오" />
                <meta property="og:site_name" content="꾸생의 포트폴리오" />
                <meta property="og:url" content="https://www.juni-official.com/" />
                <meta property="og:description" content="안녕하세요. 꾸생의 포트폴리오 웹사이트입니다." />
                <meta content="웹 프론트엔드 개발자 포트폴리오, 웹 퍼블리셔 포트폴리오, Web FrontEnd Portfolio" name="keywords" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.juni-official.com/static/media/logo.06f29f67.png"></meta>
                
                <title>꾸생의 Portfolio</title>

            </Head>

            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main/>
                <NextScript />
            </body>

        </Html>
    );
    }
}