import { Injectable } from '@angular/core';
import { headersPost } from '../ajax-header';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Confirm }    from './confirm';

@Injectable()
export class ConfirmService {
  private confirmUrl = 'learn/confirm';

  constructor(private http: Http) { }

  confirm(confirm:Confirm) {
    return this.http
      .post(this.confirmUrl, JSON.stringify(confirm), {headers:headersPost})
  }

}
