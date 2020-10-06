import { SocketIoConfig } from 'ngx-socket-io';
export const environment = {
  production: true,
  baseUrl:'/',
  socketConfig: <SocketIoConfig>{ url: '', options: {} }
};
