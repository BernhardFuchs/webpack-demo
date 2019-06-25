import _ from "lodash";

function component() {
  const element = document.createElement("ion-app");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(
    [
      `<ion-header>
    <ion-toolbar>
      <ion-title>
        Ionic Web Pack prototype V2
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item>
      <ion-label position="floating">Input Text here:</ion-label>
      <ion-input text="text"></ion-input>
    </ion-item>
  </ion-content>`
    ],
    " "
  );

  return element;
}

document.body.appendChild(component());
