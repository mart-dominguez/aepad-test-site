/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
// Add all operators to Observable
import 'rxjs/Rx'

bootstrap(AppComponent);