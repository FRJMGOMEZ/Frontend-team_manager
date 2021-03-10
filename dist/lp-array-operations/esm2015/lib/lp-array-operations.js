export class LpArrayOperations {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHAtYXJyYXktb3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy8zNDY5NS9EZXNrdG9wL0RSQUZUL3RlYW0tbWFuYWdlci1mcm9udGVuZC9wcm9qZWN0cy9scC1hcnJheS1vcGVyYXRpb25zL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9scC1hcnJheS1vcGVyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sT0FBTyxpQkFBaUI7SUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFZLEVBQUUsSUFBWTtRQUNsRCxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDakMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtTQUNGO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFjO1FBQ2pELElBQUksT0FBTyxDQUFBO1FBQ1gsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxHQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENB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Q0FBQztvQkFBRSxLQUFLLEdBQUcsV0FBVyxDQUFDO29CQUMxQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDO29CQUN4QixNQUFNO2dCQUNSLEtBQUssRUFBRTtvQkFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDO29CQUN6QixNQUFNO2dCQUNSLEtBQUssRUFBRTtvQkFBRSxLQUFLLEdBQUcsVUFBVSxDQUFDO29CQUMxQixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIExwQXJyYXlPcGVyYXRpb25zIHtcbiAgcHVibGljIHN0YXRpYyBkaXZpZGVBcnJheShhcnJheTogYW55W10sIHNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IGNodW5rZWRfYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGFzdCA9IGNodW5rZWRfYXJyW2NodW5rZWRfYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKCFsYXN0IHx8IGxhc3QubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICAgIGNodW5rZWRfYXJyLnB1c2goW2FycmF5W2ldXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2h1bmtlZF9hcnI7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB1cGRhdGUob2xkQXJyYXksIGl0ZW0sIG1ldGhvZDogc3RyaW5nKSB7XG4gICAgbGV0IHVwZGF0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgIHVwZGF0ZWQgPSBbLi4ub2xkQXJyYXksIGl0ZW1dO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1BVVCc6XG4gICAgICAgIHVwZGF0ZWQgPSBvbGRBcnJheS5tYXAoKGVhY2hJdGVtKSA9PiB7IHJldHVybiBlYWNoSXRlbS5faWQgPT09IGl0ZW0uX2lkID8gaXRlbSA6IGVhY2hJdGVtIH0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgdXBkYXRlZCA9IG9sZEFycmF5LmZpbHRlcigoZWFjaEl0ZW0pID0+IHsgcmV0dXJuIGVhY2hJdGVtLl9pZCAhPSBpdGVtLl9pZCB9KVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZWRcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGFzSXRlbShhcnJheSwgaXRlbSk6IGJvb2xlYW4ge1xuICAgIGlmIChhcnJheS5tYXAoKGVhY2hJdGVtKSA9PiB7IHJldHVybiBlYWNoSXRlbS5faWQgfSkuaW5jbHVkZXMoaXRlbS5faWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG4gIHB1YmxpYyBzdGF0aWMgbW9udGhWYWx1ZShtb250aDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgbW9udGggPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICAgIGNhc2UgJ2phbnVhcnknOiB2YWx1ZSA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZlYnJ1YXJ5JzogdmFsdWUgPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXJjaCc6IHZhbHVlID0gMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXByaWwnOiB2YWx1ZSA9IDM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heSc6IHZhbHVlID0gNDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnanVuZSc6IHZhbHVlID0gNTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnanVseSc6IHZhbHVlID0gNjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXVndXN0JzogdmFsdWUgPSA3O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZXB0ZW1iZXInOiB2YWx1ZSA9IDg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29jdG9iZXInOiB2YWx1ZSA9IDk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vdmVtYmVyJzogdmFsdWUgPSAxMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGVjZW1iZXInOiB2YWx1ZSA9IDExO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICAgIGNhc2UgMDogdmFsdWUgPSAnamFudWFyeSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogdmFsdWUgPSAnZmVicnVhcnknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6IHZhbHVlID0gJ21hcmNoJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiB2YWx1ZSA9ICdhcHJpbCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogdmFsdWUgPSAnbWF5JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OiB2YWx1ZSA9ICdqdW5lJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OiB2YWx1ZSA9ICdqdWx5JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OiB2YWx1ZSA9ICdhdWd1c3QnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6IHZhbHVlID0gJ3NlcHRlbWJlcic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTogdmFsdWUgPSAnb2N0b2Jlcic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6IHZhbHVlID0gJ29jdG9iZXInO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOiB2YWx1ZSA9ICdkZWNlbWJlcic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG59XG4iXX0=