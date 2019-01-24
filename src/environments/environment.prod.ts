export let Api_Url = '';

switch (window.location.hostname){
  case '':
    Api_Url +='https://queuedapideployment.azurewebsites.net'
    break;
  default:
  Api_Url += 'https://queuedapideployment.azurewebsites.net';


}

export const environment = {
  production: true
};
