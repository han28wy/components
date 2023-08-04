

export const caculateLength = (value: string | number | object) : number => {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number') {
        return value.toString().length;
    }
    if (typeof value === 'object') {
        return Object.keys(value).length;
    }
}