import { SocketIoConfig } from 'ngx-socket-io';
export const environment = {
  production: true,
  apiUrl: "https://bee-team.herokuapp.com/",
  socketConfig: <SocketIoConfig>{ url: 'https://bee-team.herokuapp.com', options: {} }
};
