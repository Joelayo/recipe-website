import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  companyname:any = "Group 4";
  team:any = [
    { id: 1, name: "Joel", position: "CEO"},
    { id: 2, name: "Eniola", position: "GM"},
    { id: 3, name: "Israel", position: "CTO"}
  ]

  onSubmit() {
    // TODO: Implement form submission logic here
  }

}
