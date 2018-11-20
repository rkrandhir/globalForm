import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-global-form',
  templateUrl: './global-form.component.html',
  styleUrls: ['./global-form.component.css']
})
export class GlobalFormComponent implements OnInit {
  globalform : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.globalform = this.fb.group({
      setting: this.fb.control(['0']),
      //ipAddress: this.initIpAddressRow()
      ipAddress:<FormArray> this.fb.array([ this.initIpAddressRow() ])
    })
  }

  initIpAddressRow(): FormGroup{
    return this.fb.group({
     a:['12', [Validators.required, Validators.minLength(3)]], 
     b:['2', [Validators.required, Validators.minLength(3)]],
     c:['3', [Validators.required, Validators.minLength(3)]],
     d:['4', [Validators.required, Validators.minLength(3)]]
    });       
   }
 
  /* initIpAddressRow(){
   return this.fb.array([
    ['12', [Validators.required, Validators.minLength(3)]], 
    ['2', [Validators.required, Validators.minLength(3)]],
    ['3', [Validators.required, Validators.minLength(3)]],
    ['4', [Validators.required, Validators.minLength(3)]]
   ])       
  }
 */
  addNewRow(): void {
    const control = this.globalform.get('ipAddress') as FormArray;
    control.push(this.initIpAddressRow());
}

  getSetting(event){
    console.log(event.target.value)
  }

  onSubmit(){
    console.log('submit');
  }
}
