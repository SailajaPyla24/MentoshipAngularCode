import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModel } from './members.component';
import { ClaimModel } from './claim.component';
import { Login } from './login';
import { UpdateMemberModel } from './updatemember.component';
import { DependentModel } from './dependents.component';
import { UpdateDependentModel } from './updatedependent.component';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  
baseUrl = 'https://localhost:7100/api/Members';
claimUrl = 'https://localhost:7100/api/Claims';
dependentUrl='https://localhost:7100/api/Dependents';
validateUrl='https://localhost:7170/validate';

// baseUrl = 'https://claimservices20221014103547.azurewebsites.net/api/Members';
// claimUrl = 'https://claimservices20221014103547.azurewebsites.net/api/Claims';
// dependentUrl='https://claimservices20221014103547.azurewebsites.net/api/Dependents';
// validateUrl='https://memberclaim20221014103116.azurewebsites.net/validate';

constructor(private http: HttpClient) { }
addMember(member: MemberModel):Observable<MemberModel> {
    return this.http.post<MemberModel>(this.baseUrl, member);
  }
  getmember(member:MemberModel):Observable<MemberModel>{
    return this.http.get<MemberModel>(this.baseUrl +'/'+member.id);



 }
  getmemberInfo(Id:number):Observable<MemberModel>{
    return this.http.get<MemberModel>(this.baseUrl +'/'+Id);
  }
  searchMembers(Mname:string):Observable<MemberModel[]>{
    return this.http.get<MemberModel[]>(this.baseUrl +'/SearchMember?MName='+Mname);
  
  }
  addClaim(claim: ClaimModel):Observable<ClaimModel> {
    return this.http.post<ClaimModel>(this.claimUrl, claim);
  }
  ValidateUsers(userValidation:Login):Observable<Login>
{
  return this.http.post<Login>(this.validateUrl,userValidation);
}
loginuser(member: MemberModel):Observable<any>{
  var request={
    name:member.name,
    password:member.password
  }
  return this.http.post<any>(this.validateUrl,request);
}
getAllClaimsId(memid:String):Observable<ClaimModel[]>{
    return this.http.get<ClaimModel[]>(this.claimUrl+'/GetMmeber?mid='+memid);
  }
  updatemember(id:number,umember:UpdateMemberModel):Observable<UpdateMemberModel> {
    return this.http.put<UpdateMemberModel>(this.baseUrl+'/'+id,umember);
   }
   getDependentsId(memid:String):Observable<DependentModel[]>{
    return this.http.get<DependentModel[]>(this.dependentUrl+'/GetDependent?mid='+memid);
  }
  updatedependent(id:number,udependent:UpdateDependentModel):Observable<UpdateDependentModel> {
   



    return this.http.put<UpdateDependentModel>(this.dependentUrl+'/'+id,udependent);
   }
   getDependents(id:number):Observable<DependentModel>{
    return this.http.get<DependentModel>(this.dependentUrl+'/'+id);
}
adddependent(dependent: DependentModel):Observable<DependentModel> {
    return this.http.post<DependentModel>(this.dependentUrl, dependent);
  }
}