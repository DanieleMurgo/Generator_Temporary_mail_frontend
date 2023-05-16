import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-form-mail-login',
  templateUrl: './form-mail-login.component.html',
  styleUrls: ['./form-mail-login.component.css'],
  providers: [MessageService]
})
export class FormMailLoginComponent {

  public loginGroup: FormGroup = {} as FormGroup;

  @Input() public addressInput : string;

  @Input() public password : string;

  constructor(private accountService : AccountService, private messageService: MessageService) {

    this.addressInput="";
    this.password="";
    
    }

    ngOnInit() {
      
      this.loginGroup = new FormGroup({
        addressInput: new FormControl<string | null>(null),
        password: new FormControl<string | null>(null),
      });

    }

    ngOnSubmit(): void {

      this.addressInput = this.loginGroup.get('usernameInput')?.value
      this.password = this.loginGroup.get('password')?.value
  
        const account : Account = {
          username: "",
          domain: "",
          password: this.password,
          address: this.addressInput
        };
  
      this.accountService.allMessagesUser(account)
      .subscribe(
        {
          next : (response) => {
            console.log('Messaggio inviato con successo!', response)
          },
          error: (e) => {
            console.error(e)
            this.show("error", e.name, e.message)
          },
          complete: () => this.show("success", "ok", "Login corretto")
          }
      );
  
    }
    show(_severity : string, _summary: string, _detail : string) {
      this.messageService.add({ severity: _severity, summary: _summary, detail: _detail });
    }


}
