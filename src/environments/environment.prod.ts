export let Api_Url = '';

switch (window.location.hostname){
  case '':
    Api_Url +='https://queuedapideployment.azurewebsites.net/api'
    break;
  default:
  Api_Url += 'https://queuedapideployment.azurewebsites.net/api';


}

export const environment = {
  production: true
};
