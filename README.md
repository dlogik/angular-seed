# Test of Angular Seed project with oidc-client

This is a fork of the [Angular Seed](https://github.com/mgechev/angular-seed) project to test integration with the oidc-client package.

How I got here:

$ npm i
$ npm i --save babel-polyfill
$ npm i --save oidc-client

Import a type from oidc-client, e.g I added UserManager to src\client\app\app.component.ts

import {UserManager} from 'oidc-client/oidc-client';

Add to constructor (for testing)

mgr: UserManager = new UserManager(null);
