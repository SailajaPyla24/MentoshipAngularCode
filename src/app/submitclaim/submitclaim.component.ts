import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimModel } from '../claim.component';
import { ClaimService } from '../claimservice.component';
import {DatePipe, formatDate} from '@angular/common';
import { AppComponent } from '../app.component';






@Component({
  selector: 'app-submitclaim',
  templateUrl: './submitclaim.component.html',
  providers:[DatePipe],
  styleUrls: ['./submitclaim.component.css']
})
export class SubmitclaimComponent implements OnInit {
  claims:ClaimModel[]=[];
  
  claim:ClaimModel={
    ClaimId:0,
    MemberId:'',
    MemberName:'',
    Dob:new Date,
    DateOfAdmission:new Date,
    DateOfDischarge:new Date,
    ProviderName:'',
    BillAmount:0
     }
    name:any;
    dateofbirth:any=new Date;
    id:number=0;
   myDate: any = new Date();
    





constructor(public claimServiceComponent : ClaimService,private appComponent:AppComponent,private router: Router,private route:ActivatedRoute, private datePipe: DatePipe) {



 this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
 
}

ngOnInit(): void {
  if (localStorage.getItem("Member") == null) {
    this.router.navigate(['Login']);
  }
  let values = JSON.parse(localStorage.getItem("Member") || '');
  this.name =this.route.snapshot.paramMap.get('name');
  this.dateofbirth=this.route.snapshot.paramMap.get('dob');;
  this.id=values.id;
  this.appComponent.name=values.name;
  this.appComponent.id=values.memberId;
  }
  onSubmit(){
    let values = JSON.parse(localStorage.getItem("Member") || '');
  this.claim.MemberName =this.name;
    this.claim.MemberId = values.id;
    this.claim.Dob=this.dateofbirth;
     

  this.AddClaim(this.claim);
    
  }







AddClaim(claim: ClaimModel)
    {
      // this.member.Id=0;



if(claim.DateOfDischarge > this.myDate || claim.DateOfAdmission > this.myDate)
{

console.log(this.myDate);
  alert("One of the Discharge Date or Admission Date is future Date, please correct it")
  return;



}



if(claim.DateOfAdmission > claim.DateOfDischarge)
{



 alert("Admission Date is future to Discharge Date. Please Correct it")
  return;
}

     this.claimServiceComponent.addClaim(claim)
      .subscribe(
        response => { this.claims }
    );
    alert('Claim Submitted Successfully');
    this.router.navigate(["Available"]);
    localStorage.setItem("isAvailableClaim",'true');
    localStorage.setItem("isSubmitClaim",'false');
    localStorage.setItem("isDependent",'false');
    this.appComponent.isAvailableClaim=true;
    this.appComponent.isSubmitClaim=false;
    this.appComponent.isDependent=false;
    }
enrollclick(){
  this.router.navigate(["Available"]);
  localStorage.setItem("isAvailableClaim",'true');
  localStorage.setItem("isSubmitClaim",'false');
  
  localStorage.setItem("isDependent",'false');
  this.appComponent.isAvailableClaim=true;
  this.appComponent.isSubmitClaim=false;
  this.appComponent.isDependent=false;
}


 }