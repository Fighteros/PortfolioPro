import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
export default function Home() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] text-white flex flex-col",
        children: [
            /*#__PURE__*/ _jsxs("nav", {
                className: "flex items-center justify-between px-8 py-6 border-b border-white/10",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                src: "/copilot-logo.svg",
                                alt: "Copilot Logo",
                                width: 40,
                                height: 40
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "text-2xl font-bold tracking-tight",
                                children: "Copilot"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("ul", {
                        className: "hidden md:flex gap-8 text-sm font-medium",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "#features",
                                    className: "hover:text-cyan-400 transition",
                                    children: "Features"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "#pricing",
                                    className: "hover:text-cyan-400 transition",
                                    children: "Pricing"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "#faq",
                                    className: "hover:text-cyan-400 transition",
                                    children: "FAQ"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx("a", {
                                    href: "#blog",
                                    className: "hover:text-cyan-400 transition",
                                    children: "Blog"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ _jsx("button", {
                                className: "px-4 py-2 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0f172a] transition font-semibold",
                                children: "Sign in"
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                className: "px-4 py-2 rounded-md bg-cyan-400 text-[#0f172a] font-semibold hover:bg-cyan-300 transition",
                                children: "Get started"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("main", {
                className: "flex-1 flex flex-col items-center justify-center text-center px-4 py-16",
                children: [
                    /*#__PURE__*/ _jsx("h1", {
                        className: "text-4xl md:text-6xl font-extrabold mb-6 leading-tight",
                        children: "AI that builds with you"
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto",
                        children: "Meet your new AI pair programmer. Write better code, faster. Let Copilot help you code, learn, and create—right in your editor."
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: "#",
                                className: "px-8 py-3 rounded-full bg-cyan-400 text-[#0f172a] font-bold text-lg shadow-lg hover:bg-cyan-300 transition",
                                children: "Get started for free"
                            }),
                            /*#__PURE__*/ _jsx("a", {
                                href: "#pricing",
                                className: "px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400 hover:text-[#0f172a] transition",
                                children: "See plans & pricing"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
