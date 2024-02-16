"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
/**
 * Chart component for user interaction
 */
const Chart = (props) => {
    const { symbol = 'AUDJPY.m', showHeader = 1, showToolbar = 1 } = props;
    const uriChart = process.env.URI_CHART || 'http://localhost:2099/chart';
    const refIframe = (0, react_1.useRef)(null);
    const [iframeSrc, setIframeSrc] = (0, react_1.useState)(uriChart);
    const [windowContent, setWindowContent] = (0, react_1.useState)({ height: '100vh', width: '100vw' });
    const updateIframeSrc = () => {
        setIframeSrc(`${uriChart}?symbol=${symbol}&showheader=${showHeader}&showtoolbar=${showToolbar}`);
    };
    (0, react_1.useEffect)(() => {
        if ((window === null || window === void 0 ? void 0 : window.innerHeight) && (window === null || window === void 0 ? void 0 : window.innerWidth)) {
            setWindowContent({ height: window === null || window === void 0 ? void 0 : window.innerHeight, width: window === null || window === void 0 ? void 0 : window.innerWidth });
        }
    }, [global === null || global === void 0 ? void 0 : global.window]);
    (0, react_1.useEffect)(() => {
        updateIframeSrc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uriChart, symbol, showHeader, showToolbar]);
    const renderChart = (0, react_1.useMemo)(() => (React.createElement("iframe", { title: 'Trading Chart', id: "chart-web", src: iframeSrc, height: (windowContent === null || windowContent === void 0 ? void 0 : windowContent.height) || 100, width: (windowContent === null || windowContent === void 0 ? void 0 : windowContent.width) || 100, frameBorder: 0, scrolling: "no", allowFullScreen: true, ref: refIframe })), [iframeSrc, refIframe, windowContent]);
    return renderChart;
};
exports.Chart = Chart;
