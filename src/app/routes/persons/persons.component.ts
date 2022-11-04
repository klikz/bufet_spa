import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BackendService } from 'src/app/services/backend.service';
import { IPerson } from '../../models/bufet'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [MessageService]
})
export class PersonsComponent implements OnInit {

  persons: IPerson[]
  selectedPerson: IPerson
  addPerson: boolean = false
  submitted: boolean;
  newPerson: IPerson = {
    id: 0,
    status: '',
    name: '',
    summa: 0
  }

  constructor(public api: BackendService,
    private messageService: MessageService) { }

  async ngOnInit(): Promise<void> {

    this.persons = await this.api.getPersons()
    console.log("persons: ", this.persons)

  }

  async onRowEditSave(person: IPerson) {
    if (!person.name || !person.summa){
      this.persons = await this.api.getPersons()
      this.messageService.add({severity:'error', summary: 'Error', detail:'Bazaga kiritilmadi'})
      // alert(`Kerakli xamma ma'lumotlar kiritilmadi`)
      return
  }
  
    let result = await this.api.updatePersons(person)
    if(result.result == 'ok'){
      this.messageService.add({severity:'success', summary: 'Success', detail:'Person is updated'});
    }else{
      this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
      console.log(result.error)
    }
    this.persons = await this.api.getPersons()
  }
  
  async onRemoveItem(product: IPerson){
    let result = await this.api.removePerson(product.id)
    if(result.result == 'ok'){
      this.messageService.add({severity:'success', summary: 'Success', detail:'Product removed'});
    }else{
      this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
      console.log(result.error)
    }
    this.persons = await this.api.getPersons()
  }
  
  onRowEditCancel(product: IPerson, index: number) {
      // this.products2[index] = this.clonedProducts[product.id];
      // delete this.products2[product.id];
  }
  openNew(){ 
    this.submitted = false;
    this.addPerson = true;
  }
  hideDialog() {
    this.addPerson = false;
    this.submitted = false;
    
  }
  async saveProduct() {
    this.submitted = true;
    if (!this.newPerson.name){
        // alert(`Kerakli xamma ma'lumotlar kiritilmadi`)
        return
    }
    let result = await this.api.addPerson(this.newPerson)
    if(result.result == 'ok'){
      this.messageService.add({severity:'success', summary: 'Success', detail:'Maxsulot kiritildi'});
    }else{
      this.messageService.add({severity:'error', summary: 'Error', detail:'Something wrong'})
      console.log(result.error)
    }
    this.addPerson = false;
    this.submitted = false
    this.persons = await this.api.getPersons()
  }
  
  

}
