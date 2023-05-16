import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Account } from 'src/app/models/Account';
import { Domain } from 'src/app/models/Domain';

import { DomainService } from 'src/app/services/domain.service';



@Component({
  selector: 'app-form-mail-creation',
  templateUrl: './form-mail-creation.component.html',
  styleUrls: ['./form-mail-creation.component.css'],
  providers: [MessageService]
})
export class FormMailCreationComponent implements OnInit {

  public domains: Domain[] = [];

  public registerGroup: FormGroup = {} as FormGroup;

  @Input() public selectedDomain : string;

  @Input() public usernameInput : string;

  public rdmDomain : string;

  @Input() public password : string;

  @Input() public password_confirmation : string;


  constructor(private domainService : DomainService, private messageService: MessageService) {

  this.selectedDomain ="";
  this.usernameInput ="";
  this.rdmDomain ="";
  this.password="";
  this.password_confirmation="";
  
  }


    ngOnInit() {

      this.domainService.getDomains()
      .subscribe(
        {
          next : (data: any[]) => {
            this.domains = data.map(({ Domain }) => ({ name: Domain }))
          },
          error: (e) => {
            console.error(e)
            this.show("error", e.name, e.message)
          },
          complete: () => this.show("success", "ok", "Dato importato correttamente")
          }
      );

      // Funzione utile per assegnare automaticamente il primo dominio utile
      // this.domainService.getFirstDomain()
      // .subscribe(
      //   {
      //     next : (data) => this.rdmDomain = data,
      //     error: (e) => {
      //       console.error(e)
      //       this.show("error", e.name, e.message)
      //     },
      //     complete: () => this.show("success", "ok", "Dato random importato correttamente")
      //     }
      // );

      this.registerGroup = new FormGroup({
        selectedDomain: new FormControl<Domain | null>(null),
        usernameInput: new FormControl<string | null>(null),
        password: new FormControl<string | null>(null),
        password_confirmation: new FormControl<string | null>(null),
      });

  }

  
//al submit
  ngOnSubmit(): void {

    this.usernameInput = this.registerGroup.get('usernameInput')?.value
    this.selectedDomain = this.registerGroup.get('selectedDomain')?.value.name

    this.password = this.registerGroup.get('password')?.value
    this.password_confirmation = this.registerGroup.get('password_confirmation')?.value

      const account : Account = {
        username: this.usernameInput,
        domain: this.selectedDomain,
        password: this.password,
        address: this.usernameInput + '@' + this.selectedDomain
      };

    this.domainService.postCreateNewUser(account)
    .subscribe(
      {
        next : (response) => {
          console.log('Messaggio inviato con successo!', response)
        },
        error: (e) => {
          console.error(e)
          this.show("error", e.name, e.message)
        },
        complete: () => this.show("success", "ok", "Utente creato correttamente")
        }
    );

  }
  show(_severity : string, _summary: string, _detail : string) {
    this.messageService.add({ severity: _severity, summary: _summary, detail: _detail });
  }
  
  
  setRdmDomain () {
    this.selectedDomain = this.rdmDomain;
  }
}

