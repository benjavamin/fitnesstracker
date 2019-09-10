import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FlexLayoutModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FlexLayoutModule]
})
export class MaterialModule {

}
