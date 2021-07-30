import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Challenge } from 'src/app/models/Challenge';
import { UploadchallengeService } from 'src/app/services/uploadchallenge.service';

@Component({
  selector: 'app-uploadchallenge',
  templateUrl: './uploadchallenge.component.html',
  styleUrls: ['./uploadchallenge.component.css']
})
export class UploadchallengeComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  uploadChallenge: FormGroup;
  public challenge = new Challenge;
  uploadSuccess = false;
  successMessage = 'Challenge uploaded successfully';
  constructor(private fb:FormBuilder,private service:UploadchallengeService) { }

  ngOnInit(): void {
    this.initForm();
    this.dropdownList = ["Science","Engineering", "Aerospace","Habitat","Electricity","Power Sources","Environment"];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',

    };
  }
  initForm() {
    this.uploadChallenge = this.fb.group({
     challengerName: [''],
     challengeTitle: ['' ],
     challengeDomain: [''],
     challengeAbstract: [''],
     description: [''],
     rules: ['']
   });
 }
  onSubmit( ){
   
    this.service.addChallenge(this.uploadChallenge.value).subscribe(data => {
      this.uploadSuccess= true;
    });
      console.log(this.uploadChallenge.value);
  }
  onItemSelect($event) {

  }
  get challengeName() { return this.uploadChallenge.get('challengeName') }
  get challengeTitle() { return this.uploadChallenge.get('challengeTitle') }
  get challengeDomain() { return this.uploadChallenge.get('challengeDomain') }
  get challengeAbstract() { return this.uploadChallenge.get('challengeAbstract') }
  get description() { return this.uploadChallenge.get('description') }
  get rules() { return this.uploadChallenge.get('rules') }
  
}
