import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
const version = require("../package.json").version;// tslint:disable-line:no-var-requires
class MyDocument extends Document {
    public static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    public render() {
        return (
            <html>
                <Head>
                    <title>构件</title>
                    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
                    <link rel="stylesheet" href={`/_next/static/style.css?v${version}`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
