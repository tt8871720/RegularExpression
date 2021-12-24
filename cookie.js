// getCookie function
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

// set cookie
document.cookie = "username=Max Brown";

// Set an expiration date for a cookie, By default, cookies will be automatically deleted once the browser is closed.
document.cookie = "username=Max Brown; expires=Wed, 05 Aug 2020 23:00:00 UTC";

// Set a path for a cookie, you can provide a path where this data should be stored. 
document.cookie = "username=Max Brown; expires=Wed, 05 Aug 2020 23:00:00 UTC; path=/";

// setCookie function
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}