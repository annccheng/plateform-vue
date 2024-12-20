export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};

export const getToken = () => {
  return localStorage.setItem("TOKEN") || "";
};

export const setLanguage = (lang) => {
  localStorage.setItem('language', lang);
}

export const getLanguage = () => {
  return localStorage.getItem('language') || '';
}