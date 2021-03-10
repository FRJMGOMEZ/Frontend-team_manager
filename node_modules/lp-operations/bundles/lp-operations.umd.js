(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('lp-operations', ['exports'], factory) :
    (global = global || self, factory(global['lp-operations'] = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var LpArray = /** @class */ (function () {
        function LpArray() {
        }
        LpArray.divideArray = function (array, size) {
            var chunked_arr = [];
            for (var i = 0; i < array.length; i++) {
                var last = chunked_arr[chunked_arr.length - 1];
                if (!last || last.length === size) {
                    chunked_arr.push([array[i]]);
                }
                else {
                    last.push(array[i]);
                }
            }
            return chunked_arr;
        };
        LpArray.update = function (oldArray, item, method) {
            var updated;
            switch (method) {
                case 'POST':
                    updated = __spread(oldArray, [item]);
                    break;
                case 'PUT':
                    updated = oldArray.map(function (eachItem) { return eachItem._id === item._id ? item : eachItem; });
                    break;
                case 'DELETE':
                    updated = oldArray.filter(function (eachItem) { return eachItem._id != item._id; });
                    break;
            }
            return updated;
        };
        LpArray.hasItem = function (array, item) {
            if (array.map(function (eachItem) { return eachItem._id; }).includes(item._id)) {
                return true;
            }
            return false;
        };
        return LpArray;
    }());

    var LpDate = /** @class */ (function () {
        function LpDate() {
        }
        LpDate.dateComparison = function (date1, date2) {
            if ((date1.getFullYear() === date2.getFullYear()) && (date1.getMonth() === date2.getMonth()) && (date1.getDate() === date2.getDate())) {
                return true;
            }
            else {
                return false;
            }
        };
        LpDate.isRangeInRange = function (event, dayRange) {
            /// check if range2 is  in range1 ///
            if (event.start <= dayRange.start && event.end >= dayRange.end) {
                return true;
            }
            return false;
        };
        LpDate.createMonthlyRange = function (selectedDate) {
            var monthDays = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
            var lastMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
            var firstMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1, 0, 0, 0, 0);
            var range = { start: null, end: null };
            var start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1 - firstMonthDay.getDay());
            var end = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), monthDays + (6 - lastMonthDay.getDay()), 23, 59, 59, 0);
            range.start = start;
            range.end = end;
            return range;
        };
        LpDate.milisecondsToPeriod = function (milisecs1, milisecs2) {
            var durationString = [];
            var miliseconds = milisecs2 - milisecs1;
            var seconds = miliseconds / 1000;
            if (Number(String(seconds).split('.')[0]) > 0) {
                seconds = Number(String(seconds).split('.')[0]);
                var minutes = seconds / 60;
                if (Math.round((Number('0.' + String(minutes).split('.')[1]) * 60)) >= 1) {
                    durationString.push(Math.round(Number('0.' + String(minutes).split('.')[1]) * 60) + (Math.round(Number('0.' + String(minutes).split('.')[1]) * 60) > 1 ? ' seconds' : 'seconds'));
                }
                if (Number(String(minutes).split('.')[0]) > 0) {
                    minutes = Number(String(minutes).split('.')[0]);
                    var hours = minutes / 60;
                    if (Math.round((Number('0.' + String(hours).split('.')[1]) * 60)) >= 1) {
                        durationString.push(Math.round(Number('0.' + String(hours).split('.')[1]) * 60) + (Math.round(Number('0.' + String(hours).split('.')[1]) * 60) > 1 ? ' minutes' : ' minute'));
                    }
                    if (Number(String(hours).split('.')[0]) > 0) {
                        hours = Number(String(hours).split('.')[0]);
                        var days = hours / 24;
                        if (Math.round((Number('0.' + String(days).split('.')[1]) * 24)) >= 1) {
                            durationString.push(Math.round((Number('0.' + String(days).split('.')[1]) * 24)) + (Math.round(Number('0.' + String(days).split('.')[1]) * 24) > 1 ? ' hours' : ' hour'));
                        }
                        if (Number(String(days).split('.')[0]) > 0) {
                            days = Number(String(days).split('.')[0]);
                            durationString.push(days + " days");
                        }
                    }
                }
            }
            return durationString.reverse();
        };
        LpDate.milisecsToString = function (milisecs) {
            return this.milisecondsToPeriod(0, milisecs);
        };
        LpDate.monthValue = function (month) {
            var value;
            if (typeof month === 'string') {
                switch (month) {
                    case 'january':
                        value = 0;
                        break;
                    case 'february':
                        value = 1;
                        break;
                    case 'march':
                        value = 2;
                        break;
                    case 'april':
                        value = 3;
                        break;
                    case 'may':
                        value = 4;
                        break;
                    case 'june':
                        value = 5;
                        break;
                    case 'july':
                        value = 6;
                        break;
                    case 'august':
                        value = 7;
                        break;
                    case 'september':
                        value = 8;
                        break;
                    case 'october':
                        value = 9;
                        break;
                    case 'november':
                        value = 10;
                        break;
                    case 'december':
                        value = 11;
                        break;
                }
            }
            else {
                switch (month) {
                    case 0:
                        value = 'january';
                        break;
                    case 1:
                        value = 'february';
                        break;
                    case 2:
                        value = 'march';
                        break;
                    case 3:
                        value = 'april';
                        break;
                    case 4:
                        value = 'may';
                        break;
                    case 5:
                        value = 'june';
                        break;
                    case 6:
                        value = 'july';
                        break;
                    case 7:
                        value = 'august';
                        break;
                    case 8:
                        value = 'september';
                        break;
                    case 9:
                        value = 'october';
                        break;
                    case 10:
                        value = 'october';
                        break;
                    case 11:
                        value = 'december';
                        break;
                }
            }
            return value.toString();
        };
        return LpDate;
    }());

    var LpHtml = /** @class */ (function () {
        function LpHtml() {
        }
        LpHtml.formatTextToHtml = function (text) {
            var content = [];
            content = text.split('\n');
            var message = [];
            content.forEach(function (extract) {
                if (extract === '') {
                    message.push('<br>');
                }
                else {
                    var extractSplitted_1 = extract.split(' ');
                    extractSplitted_1.forEach(function (piece, index) {
                        if (piece === '') {
                            extractSplitted_1[index] = '&nbsp';
                        }
                    });
                    var p = "<p>" + extractSplitted_1.join(' ') + "</p>";
                    var pSplit = p.split('\n');
                    pSplit.forEach(function (piece, index) {
                        message.push(piece);
                    });
                }
            });
            return message.join(' ');
        };
        return LpHtml;
    }());

    var LpObject = /** @class */ (function () {
        function LpObject() {
        }
        LpObject.copyObject = function (object) {
            return JSON.parse(JSON.stringify(object));
        };
        LpObject.areEquals = function (obj1, obj2) {
            if (typeof obj1 !== typeof obj2) {
                return false;
            }
            if ((obj1 === undefined && obj2 !== undefined) ||
                (obj1 === undefined && obj1 !== undefined) ||
                (obj1 === null && obj2 !== null) ||
                (obj2 === null && obj1 !== null)) {
                return false;
            }
            if (typeof obj1 === 'object') {
                if (Array.isArray(obj1)) {
                    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
                        return false;
                    }
                    for (var i = 0; i < obj1.length; i++) {
                        if (!this.areEquals(obj1[i], obj2[i])) {
                            return false;
                        }
                    }
                }
                else {
                    for (var prop in obj1) {
                        if (obj1.hasOwnProperty(prop)) {
                            if (!obj2.hasOwnProperty(prop)) {
                                return false;
                            }
                            //Endless loop fix for recursive properties
                            if (!this.areEquals(obj1[prop], obj2[prop])) {
                                return false;
                            }
                        }
                    }
                    for (var prop in obj2) {
                        if (obj2.hasOwnProperty(prop)) {
                            if (!obj1.hasOwnProperty(prop)) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
            return obj1 === obj2;
        };
        LpObject.getObjectDifferences = function (obj1, obj2) {
            var _this = this;
            var differences = {};
            Object.keys(obj1).forEach(function (key1, index) {
                Object.keys(obj2).forEach(function (key2) {
                    if (key1 === key2) {
                        if (typeof obj1[key1] === 'object') {
                            if (!_this.areEquals(obj1[key1], obj2[key2])) {
                                differences[key2] = obj2[key2];
                            }
                        }
                        else {
                            if (obj1[key1] != obj2[key2]) {
                                differences[key2] = obj2[key2];
                            }
                        }
                    }
                });
            });
            return differences;
        };
        LpObject.mergeObjects = function (initialObj, newObj) {
            initialObj = this.copyObject(initialObj);
            Object.keys(initialObj).forEach(function (iKey) {
                Object.keys(newObj).forEach(function (nKey) {
                    if (iKey === nKey) {
                        initialObj[iKey] = newObj[nKey];
                    }
                });
            });
            return initialObj;
        };
        LpObject.toQueryString = function (filters) {
            var queryString = '';
            Object.keys(filters).forEach(function (key) {
                if (typeof filters[key] === 'object' && filters[key] !== null && !filters[key].length) {
                    Object.keys(filters[key]).forEach(function (subKey) {
                        queryString += filters[key][subKey] && filters[key][subKey] != null ? "" + (queryString ? '&' : '?') + subKey + "=" + filters[key][subKey] : '';
                    });
                }
                else if (filters[key] != null && Array.isArray(filters[key])) {
                    queryString += "" + (queryString ? '&' : '?') + key + "[]=";
                    var arrayParams_1 = '';
                    filters[key].forEach(function (filter, i) {
                        arrayParams_1 += arrayParams_1 ? "," + filter.toString() : "" + filter.toString();
                    });
                    queryString += "" + arrayParams_1;
                }
                else {
                    queryString += filters[key] && filters[key] != null ? "" + (queryString ? '&' : '?') + key + "=" + filters[key] : '';
                }
            });
            return queryString;
        };
        return LpObject;
    }());

    var LpLocalStorage = /** @class */ (function () {
        function LpLocalStorage() {
        }
        LpLocalStorage.set = function (object, value, key) {
            if (key) {
                var obj = JSON.parse(localStorage.getItem(object)) || {};
                obj[key] = value.toString();
                localStorage.setItem(object, JSON.stringify(obj));
            }
            else {
                localStorage.setItem(object, value);
            }
        };
        LpLocalStorage.get = function (object, key) {
            if (key) {
                return localStorage.getItem(object) != null ? JSON.parse(localStorage.getItem(object))[key] != null ? JSON.parse(localStorage.getItem(object))[key] : '' : '';
            }
            else {
                return JSON.parse(localStorage.getItem(object));
            }
        };
        LpLocalStorage.remove = function (object, key) {
            if (key) {
                var obj = JSON.parse(localStorage.getItem(object));
                obj[key] != null ? delete obj[key] : null;
                localStorage.setItem(object, JSON.stringify(obj));
            }
            else {
                localStorage.removeItem(object);
            }
        };
        return LpLocalStorage;
    }());

    /*
     * Public API Surface of lp-operations
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LpArray = LpArray;
    exports.LpDate = LpDate;
    exports.LpHtml = LpHtml;
    exports.LpLocalStorage = LpLocalStorage;
    exports.LpObject = LpObject;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lp-operations.umd.js.map
