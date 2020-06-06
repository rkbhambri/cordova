import Cookies from 'universal-cookie';
import { isAndroid } from '../helpers/miscellaneous';

const cookies = new Cookies();

export const getItem = (key) => {
    let meta = null;
    console.log('==meta===', meta, '===', localStorage.getItem('token'));
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth && auth.hasOwnProperty(key)) {
        meta = auth[key];
    } else {
        meta = JSON.parse(localStorage.getItem(key));
    }
    // if (isAndroid()) {
    //     const auth = JSON.parse(localStorage.getItem('auth'));
    //     if (auth && auth.hasOwnProperty(key)) {
    //         meta = auth[key];
    //     } else {
    //         meta = JSON.parse(localStorage.getItem(key));
    //     }
    // } else {
    //     const auth = cookies.get('auth');
    //     if (auth && auth.hasOwnProperty(key)) {
    //         meta = auth[key];
    //     } else {
    //         meta = cookies.get(key);
    //     }
    // }
    return meta;
};

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    // isAndroid() ? localStorage.setItem(key, JSON.stringify(value)) : cookies.set(key, value, { path: '/' });
};

export const removeItem = (key) => {
    cookies.remove(key, { path: '/' });
};

export const clearItems = () => {
    localStorage.clear();
    // if (isAndroid()) {
    //     localStorage.clear();
    // } else {
    //     const allCookies = cookies.getAll();
    //     for (let key in allCookies) {
    //         cookies.remove(key, { path: '/' });
    //     }
    // }
};

