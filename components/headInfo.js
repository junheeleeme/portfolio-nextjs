import Head from "next/head"
import Script from "next/script"

const HeadInfo = ({title, keyword, content}) => {

    const headInfo = {
        _title :  title === undefined ? '꾸생의 Portfolio' : '꾸생의 Portfolio - ' + title,
        _keyword : keyword === undefined ? '프론트엔드, 퍼블리셔, 웹 개발자, React, Nextjs, 포트폴리오' : '프론트엔드, 퍼블리셔, 웹 개발자, React, Nextjs, 포트폴리오, ' + keyword,
        _content : content === undefined ? '안녕하세요. 꾸생의 포트폴리오 웹사이트입니다.' : '안녕하세요. 꾸생의 포트폴리오 웹사이트입니다. ' + content, 
    }

    return(
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="HandheldFriendly" content="true" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content={headInfo._content}/>
            <meta name="keywords" content={headInfo._keyword} />

            <meta property="og:title" content={headInfo._title} />
            <meta property="og:site_name" content={headInfo._title} />
            <meta property="og:url" content="https://www.juni-official.com/" />
            <meta property="og:description" content={headInfo._content} />
            <meta name="keywords" content={headInfo._keyword} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.juni-official.com/static/media/logo.06f29f67.png"></meta>
            <meta name="naver-site-verification" content="e69fd3cdf360b7e0ad6743948aac856c7014fadb" />
            <title>{headInfo._title}</title>
        </Head>
    )
}

export default HeadInfo