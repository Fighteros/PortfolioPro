import { jsx as _jsx } from "react/jsx-runtime";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
var geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: [
        "latin"
    ]
});
var geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: [
        "latin"
    ]
});
export var metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
export default function RootLayout(param) {
    var children = param.children;
    return /*#__PURE__*/ _jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ _jsx("body", {
            className: "".concat(geistSans.variable, " ").concat(geistMono.variable, " antialiased"),
            children: children
        })
    });
}
