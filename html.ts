<h1>login form</h1>
<form [formGroup]="userForm" ngSubmit="SubmitForm()">
<label>user name</label>
<input type="text" formControlName="username">
<br>
<label>user age</label>
<input type="text" formControlName="userage">
<br>
<label>user email</label>
<input type="text" formControlName="useremail">
<br>
<input type="submit" value="submit">
<ul>
  <li *ngFor ="let user of userlist" >{{user.name}}
<img [src]="user.avatar">
  </li>
</ul>
</form>
