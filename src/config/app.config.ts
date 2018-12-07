import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { IAppConfig } from './app.config.model';

@Injectable()
export class AppConfig {

    static settings: IAppConfig;
    jsonFile: string;

    constructor(private http: Http) {}

    load() {
        if (environment.production) {
            this.jsonFile = 'assets/config/app.config.prod.json';
        } else {
            this.jsonFile = 'assets/config/app.config.json';
        }
        return new Promise<void>((resolve, reject) => {
            this.http.get(this.jsonFile).toPromise().then((response: Response) => {
               AppConfig.settings = <IAppConfig>response.json();
               resolve();
            }).catch((response: any) => {
               reject(`Could not load file '${this.jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}
