/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './index';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/http';
import * as import5 from './services/ui-modal.service';
import * as import6 from './services/ui-resource-cache.service';
class Angular2UIModuleInjector extends import0.ɵNgModuleInjector<import1.Angular2UIModule> {
  _CommonModule_0:import2.CommonModule;
  _ɵba_1:import3.ɵba;
  _FormsModule_2:import3.FormsModule;
  _HttpModule_3:import4.HttpModule;
  _Angular2UIModule_4:import1.Angular2UIModule;
  __NgLocalization_5:import2.NgLocaleLocalization;
  __ɵi_6:import3.ɵi;
  __BrowserXhr_7:import4.BrowserXhr;
  __ResponseOptions_8:import4.BaseResponseOptions;
  __XSRFStrategy_9:any;
  __XHRBackend_10:import4.XHRBackend;
  __RequestOptions_11:import4.BaseRequestOptions;
  __Http_12:any;
  __UIModalService_13:import5.UIModalService;
  __UIResourceCacheService_14:import6.UIResourceCacheService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_5():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == null)) { (this.__NgLocalization_5 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _ɵi_6():import3.ɵi {
    if ((this.__ɵi_6 == null)) { (this.__ɵi_6 = new import3.ɵi()); }
    return this.__ɵi_6;
  }
  get _BrowserXhr_7():import4.BrowserXhr {
    if ((this.__BrowserXhr_7 == null)) { (this.__BrowserXhr_7 = new import4.BrowserXhr()); }
    return this.__BrowserXhr_7;
  }
  get _ResponseOptions_8():import4.BaseResponseOptions {
    if ((this.__ResponseOptions_8 == null)) { (this.__ResponseOptions_8 = new import4.BaseResponseOptions()); }
    return this.__ResponseOptions_8;
  }
  get _XSRFStrategy_9():any {
    if ((this.__XSRFStrategy_9 == null)) { (this.__XSRFStrategy_9 = import4.ɵb()); }
    return this.__XSRFStrategy_9;
  }
  get _XHRBackend_10():import4.XHRBackend {
    if ((this.__XHRBackend_10 == null)) { (this.__XHRBackend_10 = new import4.XHRBackend(this._BrowserXhr_7,this._ResponseOptions_8,this._XSRFStrategy_9)); }
    return this.__XHRBackend_10;
  }
  get _RequestOptions_11():import4.BaseRequestOptions {
    if ((this.__RequestOptions_11 == null)) { (this.__RequestOptions_11 = new import4.BaseRequestOptions()); }
    return this.__RequestOptions_11;
  }
  get _Http_12():any {
    if ((this.__Http_12 == null)) { (this.__Http_12 = import4.ɵc(this._XHRBackend_10,this._RequestOptions_11)); }
    return this.__Http_12;
  }
  get _UIModalService_13():import5.UIModalService {
    if ((this.__UIModalService_13 == null)) { (this.__UIModalService_13 = new import5.UIModalService()); }
    return this.__UIModalService_13;
  }
  get _UIResourceCacheService_14():import6.UIResourceCacheService {
    if ((this.__UIResourceCacheService_14 == null)) { (this.__UIResourceCacheService_14 = new import6.UIResourceCacheService()); }
    return this.__UIResourceCacheService_14;
  }
  createInternal():import1.Angular2UIModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ɵba_1 = new import3.ɵba();
    this._FormsModule_2 = new import3.FormsModule();
    this._HttpModule_3 = new import4.HttpModule();
    this._Angular2UIModule_4 = new import1.Angular2UIModule();
    return this._Angular2UIModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ɵba)) { return this._ɵba_1; }
    if ((token === import3.FormsModule)) { return this._FormsModule_2; }
    if ((token === import4.HttpModule)) { return this._HttpModule_3; }
    if ((token === import1.Angular2UIModule)) { return this._Angular2UIModule_4; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import3.ɵi)) { return this._ɵi_6; }
    if ((token === import4.BrowserXhr)) { return this._BrowserXhr_7; }
    if ((token === import4.ResponseOptions)) { return this._ResponseOptions_8; }
    if ((token === import4.XSRFStrategy)) { return this._XSRFStrategy_9; }
    if ((token === import4.XHRBackend)) { return this._XHRBackend_10; }
    if ((token === import4.RequestOptions)) { return this._RequestOptions_11; }
    if ((token === import4.Http)) { return this._Http_12; }
    if ((token === import5.UIModalService)) { return this._UIModalService_13; }
    if ((token === import6.UIResourceCacheService)) { return this._UIResourceCacheService_14; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const Angular2UIModuleNgFactory:import0.NgModuleFactory<import1.Angular2UIModule> = new import0.NgModuleFactory<any>(Angular2UIModuleInjector,import1.Angular2UIModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovQ29kZS9hbmd1bGFyMi11aS9zcmMvaW5kZXgubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovQ29kZS9hbmd1bGFyMi11aS9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
