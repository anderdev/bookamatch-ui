import {Component, OnInit} from '@angular/core';
import {AppConfig} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  config: any;
  title: string;

  constructor( private appConfig: AppConfig) {
    this.config = appConfig.getConfig();
  }

  ngOnInit(): void {
    this.title = this.config.appName;
  }
}
