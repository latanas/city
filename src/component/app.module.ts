import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BuildingPaletteComponent } from './building-palette.component';
import { MainMenuComponent } from './main-menu.component';
import { UndoRedoMenuComponent } from './undo-redo-menu.component';
import { NavigationMenuComponent } from './navigation-menu.component';
import { VersionInformationComponent } from './version-information.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingPaletteComponent,
    MainMenuComponent,
    UndoRedoMenuComponent,
    NavigationMenuComponent,
    VersionInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
