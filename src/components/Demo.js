import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");
    // RTK lazy query
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
    // Load data from localStorage on mount
    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"));
        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const existingArticle = allArticles.find((item) => item.url === article.url);
        if (existingArticle)
            return setArticle(existingArticle);
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];
            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
    };
    const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        //@ts-ignore
        setTimeout(() => setCopied(false), 3000);
    };
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };
    return (_jsxs("section", { className: "mt-16 w-full max-w-xl", children: [_jsxs("div", { className: "flex flex-col w-full gap-2", children: [_jsxs("form", { className: "relative flex justify-center items-center", onSubmit: handleSubmit, children: [_jsx("img", { src: linkIcon, alt: "link-icon", className: "absolute left-0 my-2 ml-3 w-5" }), _jsx("input", { type: "url", placeholder: "Paste the article link", value: article.url, onChange: (e) => setArticle({ ...article, url: e.target.value }), onKeyDown: handleKeyDown, required: true, className: "url_input peer" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
                             }), _jsx("button", { type: "submit", className: "submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 ", children: _jsx("p", { children: "\u21B5" }) })] }), _jsx("div", { className: "flex flex-col gap-1 max-h-60 overflow-y-auto", children: allArticles.reverse().map((item, index) => (_jsxs("div", { onClick: () => setArticle(item), className: "link_card", children: [_jsx("div", { className: "copy_btn", onClick: () => handleCopy(item.url), children: _jsx("img", { src: copied === item.url ? tick : copy, alt: copied === item.url ? "tick_icon" : "copy_icon", className: "w-[40%] h-[40%] object-contain" }) }), _jsx("p", { className: "flex-1 font-satoshi text-blue-700 font-medium text-sm truncate", children: item.url })] }, `link-${index}`))) })] }), _jsx("div", { className: "my-10 max-w-full flex justify-center items-center", children: isFetching ? (_jsx("img", { src: loader, alt: "loader", className: "w-20 h-20 object-contain" })) : error ? (_jsxs("p", { className: "font-inter font-bold text-black text-center", children: ["Well, that wasn't supposed to happen...", _jsx("br", {}), _jsx("span", { className: "font-satoshi font-normal text-gray-700", children: 
                            //@ts-ignore
                            errors && error?.data?.error })] })) : (article.summary && (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsxs("h2", { className: "font-satoshi font-bold text-gray-600 text-xl", children: ["Article ", _jsx("span", { className: "blue_gradient", children: "Summary" })] }), _jsx("div", { className: "summary_box", children: _jsx("p", { className: "font-inter font-medium text-sm text-gray-700", children: article.summary }) })] }))) })] }));
};
export default Demo;
