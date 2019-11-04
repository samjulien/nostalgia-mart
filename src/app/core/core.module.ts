import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@nostalgia-mart/material';
import { NavBarComponent } from '@nostalgia-mart/core/components/';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [CommonModule, MaterialModule],
})
export class CoreModule {}
