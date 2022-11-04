import { Injectable } from '@angular/core';
export interface ILangItem{
  label:string;
  icon:string;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public serverDomenName:string = ''

  // public serverDomenName:string = 'http://192.168.5.195:3001' //test

  constructor() {
  }
}