import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  info(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
}
warn(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
}
error(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
}
debug(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
}
trace(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
}
}
