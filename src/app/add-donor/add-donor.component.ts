import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  constructor() { }

  name = ""
  bloodGroup = ""
  dateOfBirth = ""
  lastDonatedDate = ""
  previousDisease = ""
  lastVaccinationDate = ""
  address = ""
  pincode = ""
  mobileNumber = ""
  email = ""

  readValues=()=>{
    let data = {
      "name" : this.name,
      "bloodGroup" : this.bloodGroup,
      "dateOfBirth" : this.dateOfBirth,
      "lastDonatedDate" : this.lastDonatedDate,
      "previousDisease" : this.previousDisease,
      "lastVaccinationDate" : this.lastVaccinationDate,
      "address" : this.address,
      "pincode" : this.pincode,
      "mobileNumber": this.mobileNumber,
      "email" : this.email
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
