'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
export const Image = (_a) => {
    var { src, alt, width, height, className = '', loading = 'lazy', objectFit, objectPosition, onLoad, onError } = _a, rest = __rest(_a, ["src", "alt", "width", "height", "className", "loading", "objectFit", "objectPosition", "onLoad", "onError"]);
    const imageClasses = [
        className,
        objectFit && `object-${objectFit}`,
        objectPosition && `object-[${objectPosition}]`,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("img", Object.assign({ src: src, alt: alt, width: width, height: height, loading: loading, className: imageClasses, onLoad: onLoad, onError: onError }, rest)));
};
export default Image;
