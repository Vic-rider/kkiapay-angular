import { Component } from '@angular/core';

declare let openKkiapayWidget:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kkiapay-angular';
  amount = 0

  // Assurez vous sur kkiapay.me d'être en mode sandbox quand votre compte n'est pas encore activé et en mode live quand ça l'êst

  // Make sure on kkiapay.me to be in sandbox mode when your account is not yet activated and in live mode when it is

  lauchKkiapay() {

    openKkiapayWidget({
      key: '973ac3e4f4277f28bd6d5541d7f188cbad7fa16b',
      amount: this.amount,
      position: 'center',

      // sandbox must be 'true' when your kkiapay acount is not yet verified and 'false' when it is

      // sandbox doit être 'true' quand votre compte n'est pas encore vérifié et 'false' quand ça l'est
      sandbox: false,
      callBack: 'https://google.com'
    })

  }
}
