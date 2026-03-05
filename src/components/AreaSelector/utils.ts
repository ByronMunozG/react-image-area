export const isSubElement = (el: HTMLElement | null, check: (el: HTMLElement) => boolean): boolean => {
    if (el === null) {
        return false;
    } else if (check(el)) {
        return true;
    } else {
        return isSubElement(el.parentElement, check);
    }
};
