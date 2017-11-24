import {Component} from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
    selector: 'app-a-page',
    templateUrl: './a-page.html'
})
export class APageComponent {
  constructor(private toastr: ToastsManager) {
  }

  triggerIssue() {
    this.toastr.error('Follow <a href="#/another-page">the link</a> and then come back', 'ISSUE', {
      showCloseButton: true,
      enableHTML: true,
      toastLife: 100000
    });

  }
}
