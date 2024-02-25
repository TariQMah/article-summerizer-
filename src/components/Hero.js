import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { logo } from "../assets";
const Hero = () => {
    return (_jsxs("header", { className: "w-full flex justify-center items-center flex-col", children: [_jsxs("nav", { className: "flex justify-between items-center w-full pt-3 mb-10", children: [_jsx("img", { src: logo, alt: "logo", className: "w-28 object-contain" }), _jsx("button", { type: "button", onClick: () => window.open("https://github.com/TariQMah"), className: "black_btn", children: "Github" })] }), _jsxs("h1", { className: "head_text", children: ["Summerize Article with ", _jsx("br", { className: "max-md:hidden" }), _jsx("span", { className: "orange_gradient", children: "OpenAI GPT-4" })] }), _jsx("h2", { className: "desc", children: "Simplify your reading with Summerize, an open-source article summerizer that transforms lengthy articles into clear and concise summaries" })] }));
};
export default Hero;
