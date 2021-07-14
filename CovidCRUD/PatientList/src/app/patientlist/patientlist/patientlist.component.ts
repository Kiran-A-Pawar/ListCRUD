import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable,throwError } from 'rxjs';

import { PatientlistService } from '../../shared/patientlist.service';
import { Patientlist } from '../../shared/patientlist';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

declare var M: any;

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css'],
  providers: [PatientlistService]
})
export class PatientlistComponent implements OnInit {
  public patientList:any;
  patient: any;
  public Status: any;
  constructor(public PatientlistService: PatientlistService) { }
 public ncount=0;
  ngOnInit() {
  
    this.resetForm();
    this.refreshContactList();
    this.count();
    
  }

  resetForm(form?: NgForm) {
    
    if (form)
      form.reset();
    this.PatientlistService.selectedContact = {
      _id : "",
      name: "",
      phone: "",
      Status: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.PatientlistService.postPatient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.PatientlistService.putPatient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshContactList() {
    this.PatientlistService.getPatientList().subscribe((res) => {
      this.PatientlistService.patient = res as Patientlist[];
    });
  }

  onEdit(Patient: Patientlist) {
    this.PatientlistService.selectedContact = Patient;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.PatientlistService.deletePatient(_id).subscribe((res) => {
        this.refreshContactList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

  count(){
    this.PatientlistService.getPatientList().subscribe((res) => {
      this.PatientlistService.patient = res as Patientlist[];
      let i=0,pcount=0,ncount=0;
      for(i=0; i<9; i++)
      {
           if(res[i].Status == "Positive")
           {
             pcount = pcount+1;
            console.log(pcount)
           }
           if(res[i].Status == 'Negative')
           {
             ncount ++
            console.log(ncount)
           }
      }
    });
  }

}
