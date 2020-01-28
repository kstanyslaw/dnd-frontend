import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent implements OnInit {

  files: any[] = [];

  constructor() { }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    
  }


  ngOnInit() {
  }

}
