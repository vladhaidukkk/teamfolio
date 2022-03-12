const TOKEN_KEY = 'jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const ACCOUNT_KEY = 'account-id';

export const setTokens = ({ localId, idToken, refreshToken, expiresIn = 3600 }) => {
  const expiresDate = Date.now() + expiresIn * 1000;
  localStorage.setItem(TOKEN_KEY, idToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate.toString());
  localStorage.setItem(ACCOUNT_KEY, localId);
};

export const getAccessToken = () => localStorage.getItem(TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_KEY);

export const getTokenExpiresDate = () => localStorage.getItem(EXPIRES_KEY);

export const getAccountId = () => localStorage.getItem(ACCOUNT_KEY);

export const removeTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
  localStorage.removeItem(ACCOUNT_KEY);
};

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getAccountId,
  removeTokens,
};

export default localStorageService;
