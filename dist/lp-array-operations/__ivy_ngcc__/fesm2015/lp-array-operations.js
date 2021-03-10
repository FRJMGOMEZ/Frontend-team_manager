class LpArrayOperations {
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

/*
 * Public API Surface of lp-array-operations
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LpArrayOperations };

//# sourceMappingURL=lp-array-operations.js.map