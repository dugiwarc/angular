import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailCreateComponent } from './inbox/email-create/email-create.component';
import { EmailReplyComponent } from './inbox/email-reply/email-reply.component';
import { EmailIndexComponent } from './inbox/email-index/email-index.component';
import { EmailShowComponent } from './inbox/email-show/email-show.component';

@NgModule({
  declarations: [AppComponent, EmailCreateComponent, EmailReplyComponent, EmailIndexComponent, EmailShowComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
