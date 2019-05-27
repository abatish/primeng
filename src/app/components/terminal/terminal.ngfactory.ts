/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './terminal';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '../dom/domhandler';
import * as i5 from './terminalservice';
export const TerminalModuleNgFactory:i0.NgModuleFactory<i1.TerminalModule> = i0.ɵcmf(i1.TerminalModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i3.ɵi,
          i3.ɵi,([] as any[])),i0.ɵmpd(512,i2.CommonModule,i2.CommonModule,([] as any[])),
          i0.ɵmpd(512,i3.ɵba,i3.ɵba,([] as any[])),i0.ɵmpd(512,i3.FormsModule,i3.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i1.TerminalModule,i1.TerminalModule,([] as any[]))]);
    });
const styles_Terminal:any[] = ([] as any[]);
export const RenderType_Terminal:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Terminal,
    data:{}});
function View_Terminal_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.welcomeMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_Terminal_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
      i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),1,'span',[['class','ui-terminal-command']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',
      ''])),(_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',
      ''])),(_l()(),i0.ɵted((null as any),['\n                ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.prompt;
        _ck(_v,3,0,currVal_0);
        const currVal_1:any = _v.context.$implicit.text;
        _ck(_v,6,0,currVal_1);
        const currVal_2:any = _v.context.$implicit.response;
        _ck(_v,9,0,currVal_2);
      });
}
export function View_Terminal_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),25,'div',([] as any[]),(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.Terminal = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.focus(i0.ɵnov(_v,19))) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,
      i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_Terminal_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'ui-terminal-content']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Terminal_2)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),11,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,
          'span',[['class','ui-terminal-content-prompt']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,[['in',1]],(null as any),5,'input',[['autocomplete','off'],['autofocus',
              ''],['class','ui-terminal-input'],['type','text']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],
              [(null as any),'keydown'],[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
              (_v,en,$event) => {
                var ad:boolean = true;
                var _co:i1.Terminal = _v.component;
                if (('input' === en)) {
                  const pd_0:any = ((<any>i0.ɵnov(_v,20)._handleInput($event.target.value)) !== false);
                  ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                  const pd_1:any = ((<any>i0.ɵnov(_v,20).onTouched()) !== false);
                  ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                  const pd_2:any = ((<any>i0.ɵnov(_v,20)._compositionStart()) !== false);
                  ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                  const pd_3:any = ((<any>i0.ɵnov(_v,20)._compositionEnd($event.target.value)) !== false);
                  ad = (pd_3 && ad);
                }
                if (('ngModelChange' === en)) {
                  const pd_4:any = ((<any>(_co.command = $event)) !== false);
                  ad = (pd_4 && ad);
                }
                if (('keydown' === en)) {
                  const pd_5:any = ((<any>_co.handleCommand($event)) !== false);
                  ad = (pd_5 && ad);
                }
                return ad;
              },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i3.NgModel,[[8,(null as any)],
          [8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],{model:[0,
          'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),i3.NgControl,
          (null as any),[i3.NgModel]),i0.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Terminal = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-terminal ui-widget ui-widget-content ui-corner-all';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_3:any = _co.welcomeMessage;
    _ck(_v,6,0,currVal_3);
    const currVal_4:any = _co.commands;
    _ck(_v,11,0,currVal_4);
    const currVal_13:any = _co.command;
    _ck(_v,22,0,currVal_13);
  },(_ck,_v) => {
    var _co:i1.Terminal = _v.component;
    const currVal_5:any = _co.prompt;
    _ck(_v,17,0,currVal_5);
    const currVal_6:any = i0.ɵnov(_v,24).ngClassUntouched;
    const currVal_7:any = i0.ɵnov(_v,24).ngClassTouched;
    const currVal_8:any = i0.ɵnov(_v,24).ngClassPristine;
    const currVal_9:any = i0.ɵnov(_v,24).ngClassDirty;
    const currVal_10:any = i0.ɵnov(_v,24).ngClassValid;
    const currVal_11:any = i0.ɵnov(_v,24).ngClassInvalid;
    const currVal_12:any = i0.ɵnov(_v,24).ngClassPending;
    _ck(_v,19,0,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12);
  });
}
export function View_Terminal_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-terminal',([] as any[]),
      (null as any),(null as any),(null as any),View_Terminal_0,RenderType_Terminal)),
      i0.ɵprd(512,(null as any),i4.DomHandler,i4.DomHandler,([] as any[])),i0.ɵdid(12763136,
          (null as any),0,i1.Terminal,[i0.ElementRef,i4.DomHandler,i5.TerminalService],
          (null as any),(null as any))],(null as any),(null as any));
}
export const TerminalNgFactory:i0.ComponentFactory<i1.Terminal> = i0.ɵccf('p-terminal',
    i1.Terminal,View_Terminal_Host_0,{welcomeMessage:'welcomeMessage',prompt:'prompt',
        style:'style',styleClass:'styleClass',response:'response'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3BzaGFoL3Byb2plY3RzL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3Rlcm1pbmFsL3Rlcm1pbmFsLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3BzaGFoL3Byb2plY3RzL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3Rlcm1pbmFsL3Rlcm1pbmFsLnRzIiwibmc6Ly8vVXNlcnMvcHNoYWgvcHJvamVjdHMvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvdGVybWluYWwvdGVybWluYWwudHMuVGVybWluYWwuaHRtbCIsIm5nOi8vL1VzZXJzL3BzaGFoL3Byb2plY3RzL3ByaW1lbmcvc3JjL2FwcC9jb21wb25lbnRzL3Rlcm1pbmFsL3Rlcm1pbmFsLnRzLlRlcm1pbmFsX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3VpLXRlcm1pbmFsIHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1jb3JuZXItYWxsJ1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiAoY2xpY2spPVwiZm9jdXMoaW4pXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwid2VsY29tZU1lc3NhZ2VcIj57e3dlbGNvbWVNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS10ZXJtaW5hbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29tbWFuZCBvZiBjb21tYW5kc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Byb21wdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLXRlcm1pbmFsLWNvbW1hbmRcIj57e2NvbW1hbmQudGV4dH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7Y29tbWFuZC5yZXNwb25zZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS10ZXJtaW5hbC1jb250ZW50LXByb21wdFwiPnt7cHJvbXB0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0ICNpbiB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29tbWFuZFwiIGNsYXNzPVwidWktdGVybWluYWwtaW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAoa2V5ZG93bik9XCJoYW5kbGVDb21tYW5kKCRldmVudClcIiBhdXRvZm9jdXM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtdGVybWluYWw+PC9wLXRlcm1pbmFsPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFWTtNQUFBLHdFQUE0QjthQUFBOztJQUFBO0lBQUE7Ozs7b0JBRXhCO01BQUEsd0VBQXNDO2FBQUEsNENBQ2xDO01BQUE7TUFBQSw4QkFBTSx3Q0FBaUI7YUFBQSw0Q0FDdkI7TUFBQTtNQUFBLDRDQUFrQztNQUFBLE1BQXVCLDJEQUN6RDtNQUFBO01BQUEsNENBQUs7TUFBQSxNQUEwQjs7O1FBRnpCO1FBQUE7UUFDNEI7UUFBQTtRQUM3QjtRQUFBOzs7O29CQVB6QiwrQ0FDUTtNQUFBO1VBQUE7UUFBQTtRQUFBO1FBQWdIO1VBQUE7VUFBQTtRQUFBO1FBQWhIO01BQUEsdUNBQUE7a0RBQUE7TUFBQSxrQ0FBQTsrQkFBQSx5Q0FBb0k7TUFBQSxxQkFDaEk7TUFBQSx1Q0FBQTtvQkFBQSxtQ0FBb0Q7TUFBQSxxQkFDcEQ7TUFBQTtNQUFBLGdCQUFpQyx1REFDN0I7YUFBQTthQUFBOzRCQUFBLHlDQUlNO1VBQUEscUJBQ0o7TUFDTjtVQUFBLDBEQUFLO1VBQUEseUJBQ0Q7VUFBQTtVQUFBLDRDQUF5QztVQUFBLFVBQWlCLHVEQUMxRDtpQkFBQTtjQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2NBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBdUI7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQW1FO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUExRjtjQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtRQUFBO01BQUEsb0NBQUE7VUFBQTtVQUFBLDJDQUFBO1VBQUEsbUNBQUE7VUFBQSw0Q0FBc0k7VUFBQSxxQkFDcEksK0NBQ0o7aUJBQUE7O0lBYnFGO0lBQXRGO0lBQUwsV0FBMkYsVUFBdEYsU0FBTDtJQUF5RTtJQUF6RSxXQUF5RSxTQUF6RTtJQUNTO0lBQUwsV0FBSyxTQUFMO0lBRVM7SUFBTCxZQUFLLFNBQUw7SUFRdUI7SUFBdkIsWUFBdUIsVUFBdkI7OztJQUR5QztJQUFBO0lBQ3pDO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFBQSx3RUFBQTs7OztvQkNaaEI7TUFBQTthQUFBLHFFQUFBO1VBQUE7VUFBQTs7OzsifQ==
