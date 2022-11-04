import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts, IPerson, IOutcome } from '../models/bufet'
import { ConfigService } from '../config/config.service'


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    public http:HttpClient,
    public config: ConfigService
    ) { }
    public async sendIncome(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/income', body).subscribe(e=>{
            resolve(e);
          })
        })
      }
  
    public async lastOutcome(){
      return new Promise<IOutcome[]>((resolve) => {
        this.http.post<IOutcome[]>(this.config.serverDomenName+'/outcome/last', "null").subscribe(e=>{
            resolve(e);
          })
        })
      }
    
    public async sendOutcome(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/outcome', body).subscribe(e=>{
            resolve(e);
          })
        })
      }

    public async getLastOutcome(){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/outcome/last/', "null").subscribe(e=>{
            resolve(e);
          })
        })
      }

    public async removePerson(id: number){
      return new Promise<any>((resolve) => {
        this.http.delete<any>(this.config.serverDomenName+'/persons/delete/'+id).subscribe(e=>{
            resolve(e);
          })
        })
      }
    public async addPerson(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/persons/add', body).subscribe(e=>{
            resolve(e);
          })
        })
      }

    public async getGain(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/gain', body).subscribe(e=>{
            resolve(e);
          })
        })
      }

      public async outcomeDetail(body: any){
        return new Promise<any>((resolve) => {
          this.http.post<any>(this.config.serverDomenName+'/outcome/detail', body).subscribe(e=>{
              resolve(e);
            })
          })
        }
      public async getSertedInfo(body: any){
        return new Promise<any>((resolve) => {
          this.http.post<any>(this.config.serverDomenName+'/outcome/sorted', body).subscribe(e=>{
              resolve(e);
            })
          })
        }
    public async updatePersons(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/persons/update', body).subscribe(e=>{
            resolve(e);
          })
        })
      }

    public async getPersons(){
      return new Promise<IPerson[]>((resolve) => {
        this.http.post<IPerson[]>(this.config.serverDomenName+'/persons', "null").subscribe(e=>{
            resolve(e);
          })
        })
      }

    public async getProducts(){
      return new Promise<IProducts[]>((resolve) => {
        this.http.post<IProducts[]>(this.config.serverDomenName+'/products', "null").subscribe(e=>{
            resolve(e);
          })
        })
      }
   public async updateProduct(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/products/update', body).subscribe(e=>{
            resolve(e);
          })
        })
      }
     public async addProduct(body: any){
      return new Promise<any>((resolve) => {
        this.http.post<any>(this.config.serverDomenName+'/products/new', body).subscribe(e=>{
            resolve(e);
          })
        })
      }

    public async removeProduct(id: number){
      return new Promise<any>((resolve) => {
        this.http.delete<any>(this.config.serverDomenName+'/products/delete/'+id).subscribe(e=>{
            resolve(e);
          })
        })
      }

}
