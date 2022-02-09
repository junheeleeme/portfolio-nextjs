import React, { useEffect } from 'react';
import Head from 'next/head';

const GoogleAnalyticsHOC = ({ children }) => {
useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-7YXKTBES0Q', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
    });
    }
}, []);
return (
    <>
    <Head>
        <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-7YXKTBES0Q'
        />
    </Head>
    {children}
    </>
);
};
export default GoogleAnalyticsHOC;