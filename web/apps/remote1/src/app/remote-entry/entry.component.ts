import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'web-remote1-entry',
  template: `<web-nx-welcome></web-nx-welcome>`,
})
export class RemoteEntryComponent {}
