import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HoverDirective } from '../hover.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, HoverDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
