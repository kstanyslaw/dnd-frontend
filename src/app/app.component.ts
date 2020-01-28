import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  imagePreviews: string[];

  onSave() {
    console.log({
      files: this.form.value.files
    });
    this.form.reset();
  }

  onImagePicked(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.form.patchValue({files: Array.from(files)});
    this.form.get('files').updateValueAndValidity();

    //Preview
    this.imagePreviews = [];
    Array.from(files).forEach(element => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews.push(String(reader.result));
      };
      reader.readAsDataURL(element);
    });
    console.log(Array.from(files));
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      files: new FormArray([new FormControl(null, {validators: [Validators.required]})])
    });
  }
}
