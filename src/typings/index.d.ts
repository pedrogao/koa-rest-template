// export class Consola {
//   info(msg: any, ...args: any[]): void;
//   warn(msg: any, ...args: any[]): void;
//   debug(msg: any, ...args: any[]): void;
//   error(msg: any, ...args: any[]): void;
// }

declare namespace consola {
  // type consola = Console;
  function info(msg: any, ...args: any[]): void;
  function warn(msg: any, ...args: any[]): void;
  function debug(msg: any, ...args: any[]): void;
  function error(msg: any, ...args: any[]): void;
}
