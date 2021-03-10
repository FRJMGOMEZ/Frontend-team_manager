class LpArray {
    static divideArray(array, size) {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
            const last = chunked_arr[chunked_arr.length - 1];
            if (!last || last.length === size) {
                chunked_arr.push([array[i]]);
            }
            else {
                last.push(array[i]);
            }
        }
        return chunked_arr;
    }
    static update(oldArray, item, method) {
        let updated;
        switch (method) {
            case 'POST':
                updated = [...oldArray, item];
                break;
            case 'PUT':
                updated = oldArray.map((eachItem) => { return eachItem._id === item._id ? item : eachItem; });
                break;
            case 'DELETE':
                updated = oldArray.filter((eachItem) => { return eachItem._id != item._id; });
                break;
        }
        return updated;
    }
    static hasItem(array, item) {
        if (array.map((eachItem) => { return eachItem._id; }).includes(item._id)) {
            return true;
        }
        return false;
    }
}

class LpDate {
    static dateComparison(date1, date2) {
        if ((date1.getFullYear() === date2.getFullYear()) && (date1.getMonth() === date2.getMonth()) && (date1.getDate() === date2.getDate())) {
            return true;
        }
        else {
            return false;
        }
    }
    static isRangeInRange(event, dayRange) {
        /// check if range2 is  in range1 ///
        if (event.start <= dayRange.start && event.end >= dayRange.end) {
            return true;
        }
        return false;
    }
    static createMonthlyRange(selectedDate) {
        let monthDays = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        let lastMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
        let firstMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1, 0, 0, 0, 0);
        let range = { start: null, end: null };
        let start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1 - firstMonthDay.getDay());
        let end = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), monthDays + (6 - lastMonthDay.getDay()), 23, 59, 59, 0);
        range.start = start;
        range.end = end;
        return range;
    }
    static milisecondsToPeriod(milisecs1, milisecs2) {
        let durationString = [];
        let miliseconds = milisecs2 - milisecs1;
        let seconds = miliseconds / 1000;
        if (Number(String(seconds).split('.')[0]) > 0) {
            seconds = Number(String(seconds).split('.')[0]);
            let minutes = seconds / 60;
            if (Math.round((Number('0.' + String(minutes).split('.')[1]) * 60)) >= 1) {
                durationString.push(Math.round(Number('0.' + String(minutes).split('.')[1]) * 60) + (Math.round(Number('0.' + String(minutes).split('.')[1]) * 60) > 1 ? ' seconds' : 'seconds'));
            }
            if (Number(String(minutes).split('.')[0]) > 0) {
                minutes = Number(String(minutes).split('.')[0]);
                let hours = minutes / 60;
                if (Math.round((Number('0.' + String(hours).split('.')[1]) * 60)) >= 1) {
                    durationString.push(Math.round(Number('0.' + String(hours).split('.')[1]) * 60) + (Math.round(Number('0.' + String(hours).split('.')[1]) * 60) > 1 ? ' minutes' : ' minute'));
                }
                if (Number(String(hours).split('.')[0]) > 0) {
                    hours = Number(String(hours).split('.')[0]);
                    let days = hours / 24;
                    if (Math.round((Number('0.' + String(days).split('.')[1]) * 24)) >= 1) {
                        durationString.push(Math.round((Number('0.' + String(days).split('.')[1]) * 24)) + (Math.round(Number('0.' + String(days).split('.')[1]) * 24) > 1 ? ' hours' : ' hour'));
                    }
                    if (Number(String(days).split('.')[0]) > 0) {
                        days = Number(String(days).split('.')[0]);
                        durationString.push(`${days} days`);
                    }
                }
            }
        }
        return durationString.reverse();
    }
    static milisecsToString(milisecs) {
        return this.milisecondsToPeriod(0, milisecs);
    }
    static monthValue(month) {
        let value;
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
    }
}

class LpHtml {
    static formatTextToHtml(text) {
        let content = [];
        content = text.split('\n');
        let message = [];
        content.forEach((extract) => {
            if (extract === '') {
                message.push('<br>');
            }
            else {
                let extractSplitted = extract.split(' ');
                extractSplitted.forEach((piece, index) => {
                    if (piece === '') {
                        extractSplitted[index] = '&nbsp';
                    }
                });
                let p = `<p>${extractSplitted.join(' ')}</p>`;
                let pSplit = p.split('\n');
                pSplit.forEach((piece, index) => {
                    message.push(piece);
                });
            }
        });
        return message.join(' ');
    }
}

class LpObject {
    static copyObject(object) {
        return JSON.parse(JSON.stringify(object));
    }
    static areEquals(obj1, obj2) {
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
                for (let i = 0; i < obj1.length; i++) {
                    if (!this.areEquals(obj1[i], obj2[i])) {
                        return false;
                    }
                }
            }
            else {
                for (let prop in obj1) {
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
                for (let prop in obj2) {
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
    }
    static getObjectDifferences(obj1, obj2) {
        let differences = {};
        Object.keys(obj1).forEach((key1, index) => {
            Object.keys(obj2).forEach((key2) => {
                if (key1 === key2) {
                    if (typeof obj1[key1] === 'object') {
                        if (!this.areEquals(obj1[key1], obj2[key2])) {
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
    }
    static mergeObjects(initialObj, newObj) {
        initialObj = this.copyObject(initialObj);
        Object.keys(initialObj).forEach((iKey) => {
            Object.keys(newObj).forEach((nKey) => {
                if (iKey === nKey) {
                    initialObj[iKey] = newObj[nKey];
                }
            });
        });
        return initialObj;
    }
    static toQueryString(filters) {
        let queryString = '';
        Object.keys(filters).forEach((key) => {
            if (typeof filters[key] === 'object' && filters[key] !== null && !filters[key].length) {
                Object.keys(filters[key]).forEach((subKey) => {
                    queryString += filters[key][subKey] && filters[key][subKey] != null ? `${queryString ? '&' : '?'}${subKey}=${filters[key][subKey]}` : '';
                });
            }
            else if (filters[key] != null && Array.isArray(filters[key])) {
                queryString += `${queryString ? '&' : '?'}${key}[]=`;
                let arrayParams = '';
                filters[key].forEach((filter, i) => {
                    arrayParams += arrayParams ? `,${filter.toString()}` : `${filter.toString()}`;
                });
                queryString += `${arrayParams}`;
            }
            else {
                queryString += filters[key] && filters[key] != null ? `${queryString ? '&' : '?'}${key}=${filters[key]}` : '';
            }
        });
        return queryString;
    }
}

class LpLocalStorage {
    static set(object, value, key) {
        if (key) {
            let obj = JSON.parse(localStorage.getItem(object)) || {};
            obj[key] = value.toString();
            localStorage.setItem(object, JSON.stringify(obj));
        }
        else {
            localStorage.setItem(object, value);
        }
    }
    static get(object, key) {
        if (key) {
            return localStorage.getItem(object) != null ? JSON.parse(localStorage.getItem(object))[key] != null ? JSON.parse(localStorage.getItem(object))[key] : '' : '';
        }
        else {
            return JSON.parse(localStorage.getItem(object));
        }
    }
    static remove(object, key) {
        if (key) {
            let obj = JSON.parse(localStorage.getItem(object));
            obj[key] != null ? delete obj[key] : null;
            localStorage.setItem(object, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(object);
        }
    }
}

/*
 * Public API Surface of lp-operations
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpArray, LpDate, LpHtml, LpLocalStorage, LpObject };

//# sourceMappingURL=lp-operations.js.map