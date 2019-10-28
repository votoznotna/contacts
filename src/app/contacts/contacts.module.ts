import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/contact.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/contact.effects';
import { ContactSpaceComponent } from './contact-space/contact-space.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { SortByLastName } from './pipes/sort.by.last.name';

@NgModule({
  declarations: [
    ContactSpaceComponent,
    ContactListComponent,
    ContactViewComponent,
    ContactEditComponent,
    SortByLastName
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('contacts', reducer),
    EffectsModule.forFeature(
      [ ContactEffects ]
    ),
  ],
  exports: [
    ContactSpaceComponent,
    ContactListComponent,
    ContactViewComponent,
    ContactEditComponent
  ]

})
export class ContactsModule { }
