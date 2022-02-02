import { UserStoragService } from './../../service/user-storag.service';
import { ProfileDtoService } from './profile-dto.service';
import { IProfileDto } from './../profile-dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-dto',
  templateUrl: './profile-dto.component.html',
  styleUrls: ['./profile-dto.component.css']
})
export class ProfileDtoComponent implements OnInit {
public profile: IProfileDto;
connectionForm: FormGroup;

  constructor(private profileDtoService: ProfileDtoService,
              private userStoragService: UserStoragService,
              private formBuilder: FormBuilder) {
       this.connectionForm = this.formBuilder.group({
         email: ['', Validators.required], 
       });
      }

  ngOnInit() {
    this.profileDtoService.getUser(this.userStoragService.getEmail())
    .subscribe(
      res => {
        if (res['status'] === 'OK') {
          this.profile = res['data'];
          console.log(this.profile);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
