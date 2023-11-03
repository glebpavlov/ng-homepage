import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBook, faLink, faStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconModule {
  private icons = [faGithub, faMediumM, faTwitter, faLinkedinIn, faStar, faBook, faLink];

  constructor(faIconLibrary: FaIconLibrary) {
    // @ts-ignore
    faIconLibrary.addIcons(...this.icons);
  }
}
