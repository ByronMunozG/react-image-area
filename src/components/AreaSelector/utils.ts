export const isSubElement = (el: any, check: (el: any) => boolean): boolean => {
    if (el === null) {
        return false;
    } else if (check(el)) {
        return true;
    } else {
        return isSubElement(el.parentNode, check);
    }
};
