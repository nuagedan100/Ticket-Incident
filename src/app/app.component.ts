import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  items = ['home','contact'];
  login ='';
  password = '';


  //functions
  OnAlert(){
    alert('clicked');
  }

  
  onSubmit(event: any){
  console.log(this.login);
  return this.login;
}
}

