import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/toaster.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pro3',
  templateUrl: './pro3.component.html',
  styleUrls: ['./pro3.component.css'],
})
export class Pro3Component implements OnInit {
  constructor(private fb: FormBuilder, private notification: ToasterService) {}

  // ngOnInit======================================
  ngOnInit(): void {
    // When the page loads, this function will be called
    this.setEmpForm();
  }

  // formGroup=====================================
  employeeForm: FormGroup = new FormGroup({});

  // setForm=======================================
  setEmpForm() {
    this.employeeForm = this.fb.group({
      id: [0],
      department: ['', Validators.required],
      empName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    // Now put an event on HTML to get the data when clicking on save using "ngSubmit"
  }

  // FormSubmit()===========================
  formSubmit() {
    try {
      // Assuming the notification service handles success and error notifications
      this.notification.success('Form is submitted', 'JP');
      console.log(this.employeeForm.value);
    } catch (error) {
      console.error('Error while submitting form', error);
      // Handle error or show an error notification to the user
    }
  }

  // get fun()=======================
  get fun() {
    return this.employeeForm.controls;
    // In HTML, use this property Bind:
    // [class.is-invalid]="fun['department'].invalid && fun['department'].touched"
  }

  // reset()=======================
  // reset()=======================
  resetBtn() {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      });
      Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
      });
      swalWithBootstrapButtons
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, reset it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Reset the form only if the user confirms
            this.employeeForm.reset();

            swalWithBootstrapButtons.fire({
              title: 'Reset!',
              text: 'Your form has been reset.',
              icon: 'success',
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: 'Cancelled',
              text: 'Your form reset has been cancelled.',
              icon: 'error',
            });
          }
        });
    } catch (error) {
      console.error('Error while resetting form', error);
      // Handle error or show an error notification to the user
    }
  }

  erase() {
    const Swal = require('sweetalert2');
    Swal.fire({
      title: 'Form Cancelled!',
      text: 'Fill your data again!',
      icon: 'success',
    });
  }
}
