export const writeCookie = (key, value, days = 365) => {
  let date = new Date();
  date.setDate(date.getDate() + days);

  const cookie = (document.cookie =
    key + "=" + value + "; expires=" + date.toGMTString() + "; path=/");
  console.log("cookie: ", cookie);

  return cookie;
};

export const getTokenFromCookie = (cookieName) => {
  const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);
  console.log(expression);

  try {
    const cookie = document.cookie.match(expression)[0]; // will raise type error if cookie not found
    console.log(cookie);
    return cookie;
  } catch {
    console.log("Cookie not found");
  }
};

// module.exports = { writeCookie };
