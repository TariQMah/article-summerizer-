import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Demo from "./components/Demo";
import Hero from "./components/Hero";
import "./App.css";
const App = () => {
    return (_jsxs("main", { children: [_jsx("div", { className: "main", children: _jsx("div", { className: "gradient" }) }), _jsxs("div", { className: "app", children: [_jsx(Hero, {}), _jsx(Demo, {})] })] }));
};
export default App;
