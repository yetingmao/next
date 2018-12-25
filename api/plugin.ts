import { headersInit } from "./apiHeaders";
import fetch from "isomorphic-unfetch";
import { getConfig } from "../plugin";
//import Router from "next/router";

export const request = async (
    option: {
        url: string,
        method?: string,
        body?: string,
        origin?: string
    }) => {
    try {
        const { origin = getConfig("productOrigin"), url, body, method } = option;
        const header = headersInit();
        const token = getConfig("token");
        if (token) {
            header.push(["authorization", `Bearer ${token}`]);
        }
        const res = await fetch(origin + url, {
            method: method || "get",
            credentials: "include",
            cache: "no-cache",
            mode: "cors",
            headers: header,
            body: body,
        });
        switch (res.status) {
            case 200:
                return (await res.json());
            case 404:
            // Router.push("/");
        }
    } catch (error) {
        throw error;
    }
};
