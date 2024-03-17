import { Component, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FormControl, ValidationErrors, NG_VALUE_ACCESSOR, ControlValueAccessor, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() name: any;
  @Input() type: any;
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() customErrors!: any;
  @Input() validationErrors!: ValidationErrors | null | undefined;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  @ViewChild('input') inputModel!: NgModel;

  constructor() { }

  ngOnInit(): void {

  }

  // The internal model value
  public innerValue: any = '';

  // Function to propagate changes to the form
  public onChange: any = () => { };

  // Function to propagate touch
  public onTouched: any = () => { };

  // Get accessor
  get value(): any {
    return this.innerValue;
  }

  // Set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    this.innerValue = value;
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // From ControlValueAccessor interface
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  isInputInvalid(input: NgModel): boolean | null {    
    return input.touched && (this.validationErrors != null || this.validationErrors != undefined || input.errors != null);
  }

  hasRequiredValidator(): boolean {
    return (this.validationErrors ? this.validationErrors['required'] : false) || this.required;
  }

}
