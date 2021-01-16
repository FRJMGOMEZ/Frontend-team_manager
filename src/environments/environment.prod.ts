import { SocketIoConfig } from 'ngx-socket-io';
export const environment = {
  production: true,
  apiUrl:'/',
  socketConfig: <SocketIoConfig>{ url: '', options: {} }
};
