import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  companyname:any = "Group 4";
  team:any = [
    { id: 1, name: "Joel", position: "CEO"},
    { id: 2, name: "Eniola", position: "GM"},
    { id: 3, name: "Israel", position: "CTO"}
  ]
}
