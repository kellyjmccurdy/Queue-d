export let Api_Url = '';

switch (window.location.hostname){
  case '':
    Api_Url +='https://localhost:44311/api'
    break;
  default:
  Api_Url += 'https://queuedapi.azurewebsites.net/api';

}

export const environment = {
  production: true
};
