export let Api_Url = '';

switch (window.location.hostname){
  case 'https://queuedapp.herokuapp.com/':
    Api_Url +='https://queuedapi.azurewebsites.net/api'
    break;
  default:
  Api_Url += 'https://localhost:44311/api';

}

export const environment = {
  production: true
};
