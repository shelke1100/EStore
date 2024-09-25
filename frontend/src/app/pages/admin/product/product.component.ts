import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  isSidePanelVisible:boolean=false;
  openSidePanel(){
    this.isSidePanelVisible=true;
  }
  closeSidePanel(){
    this.isSidePanelVisible=false;
  }

}
