import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-newnorma',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './newnorma.component.html'
})
export class NewnormaComponent {
  showModal = false;
  showModal2 = false;
  showModal3 = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }

  toggleModal2(){
    this.showModal2 = !this.showModal2;
  }

  toggleModal3(){
    this.showModal3 = !this.showModal3;
  }

  ngOnInit(): void{

  }

  
 
}
