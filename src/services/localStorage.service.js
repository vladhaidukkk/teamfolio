const TOKEN_KEY = 'jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const ACCOUNT_KEY = 'account-data';

export const setTokens = ({ idToken, refreshToken, localId, expiresIn = 3600 }) => {
  const expiresDate = Date.now() + expiresIn * 1000;
  localStorage.setItem(TOKEN_KEY, idToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate.toString());
};

export const getAccessToken = () => localStorage.getItem(TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_KEY);

export const getTokenExpiresDate = () => localStorage.getItem(EXPIRES_KEY);

export const removeTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
};

export const setAccountData = (data) => {
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(data));
};

export const getAccountData = () => {
  const accountData = localStorage.getItem(ACCOUNT_KEY);
  return JSON.parse(accountData);
};

export const removeAccountData = () => {
  localStorage.removeItem(ACCOUNT_KEY);
};

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  removeTokens,
  setAccountData,
  getAccountData,
  removeAccountData,
};

export default localStorageService;
