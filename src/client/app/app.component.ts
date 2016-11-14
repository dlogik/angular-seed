import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { UserManager } from 'oidc-client';

const settings: any = {
  authority: 'http://localhost:5000/oidc',
  client_id: 'js.tokenmanager',
  redirect_uri: 'http://localhost:4200/auth.html',
  post_logout_redirect_uri: 'http://localhost:4200/',
  response_type: 'id_token token',
  scope: 'openid email roles',

  silent_redirect_uri: 'http://localhost:4200',
  automaticSilentRenew: true,
  //silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);

    let mgr: UserManager = new UserManager(settings);

    console.log(mgr);
  }
}
