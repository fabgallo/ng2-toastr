import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager, Toast} from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  triggerIssue() {
    this.toastr.error('Follow <a href="#/other-page">the link</a> and then come back', 'ISSUE', {
      showCloseButton: true,
      enableHTML: true,
      toastLife: 100000
    });

  }
}
