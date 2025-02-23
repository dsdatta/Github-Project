import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  items: MenuItem[] | undefined; //nav menu items
  ngOnInit(){
    //menu items
    this.items = [
      {
          label: 'Repositories',
          icon: 'pi pi-home',
          routerLink:'/repos'
      }
  ]
  }
}
