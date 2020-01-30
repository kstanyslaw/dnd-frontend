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
    this.prepareFilesList($event);
    console.log(this.files);
  }

   /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
    console.log(this.files);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
  }

  //   /**
  //  * Delete file from files list
  //  * @param index (File index)
  //  */
  // deleteFile(index: number) {
  //   this.files.splice(index, 1);
  // }


  ngOnInit() {
  }

}
