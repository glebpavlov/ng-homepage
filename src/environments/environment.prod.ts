declare const APP_VERSION: string;
declare const LAST_MODIFIED: string;

export const environment = {
  production: true,
  appVersion: `${APP_VERSION}`,
  lastModified: LAST_MODIFIED,

  // Replace this with your server API URL
  // We assigned it to empty string for the Fake API
  apiUrl: '',

  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id', // <Your auth client id here>
      secretId: 'fake-secret-id', // <Your auth secret id here>

      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb',
    },
  },
};
