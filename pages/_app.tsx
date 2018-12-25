import App, { Container } from "next/app";
import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store";
import { setConfig } from "../plugin";
import "../style/base.less";

export interface IProps {
    store: Store;
    productOrigin?: string;
    matchOrigin?: string;
    loginOrigin?: string;
}
export interface IState extends IProps {
}
class MyApp extends App<IProps> {
    public static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        const { productOrigin, matchOrigin, loginOrigin, token } = ctx.query;
        if (productOrigin !== undefined) {
            setConfig("productOrigin", productOrigin);
        }
        if (matchOrigin !== undefined) {
            setConfig("matchOrigin", matchOrigin);
        }
        if (loginOrigin !== undefined) {
            setConfig("loginOrigin", loginOrigin);
        }
        if (token !== undefined) {
            setConfig("token", token);
        }
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps, productOrigin, matchOrigin, loginOrigin };
    }
    constructor(props) {
        super(props);
        const { productOrigin, matchOrigin, loginOrigin } = this.props;
        if (productOrigin !== undefined) {
            setConfig("productOrigin", productOrigin);
        }
        if (matchOrigin !== undefined) {
            setConfig("matchOrigin", matchOrigin);
        }
        if (loginOrigin !== undefined) {
            setConfig("loginOrigin", loginOrigin);
        }
    }
    public render() {
        const { Component, pageProps, store } = this.props;
        return <Container>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Container>;
    }
}
export default withRedux(initStore)(MyApp);
