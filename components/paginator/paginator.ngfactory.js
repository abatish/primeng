"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./paginator");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var i4 = require("../common/shared");
var i5 = require("../dropdown/dropdown");
var i6 = require("../dropdown/dropdown.ngfactory");
var i7 = require("../dom/domhandler");
var i8 = require("../utils/objectutils");
exports.PaginatorModuleNgFactory = i0.ɵcmf(i1.PaginatorModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i3.ɵi, i3.ɵi, []), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []),
        i0.ɵmpd(512, i4.SharedModule, i4.SharedModule, []), i0.ɵmpd(512, i5.DropdownModule, i5.DropdownModule, []), i0.ɵmpd(512, i3.ɵba, i3.ɵba, []),
        i0.ɵmpd(512, i3.FormsModule, i3.FormsModule, []), i0.ɵmpd(512, i1.PaginatorModule, i1.PaginatorModule, [])]);
});
var styles_Paginator = [];
exports.RenderType_Paginator = i0.ɵcrt({ encapsulation: 2, styles: styles_Paginator,
    data: {} });
function View_Paginator_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'a', [['class',
                'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all'], ['href',
                '#']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onPageLinkClick($event, (_v.context.$implicit - 1)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-active': 0 }), (_l()(), i0.ɵted(null, ['', '']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all';
        var currVal_1 = _ck(_v, 2, 0, ((_v.context.$implicit - 1) == _co.getPage()));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_2);
    });
}
function View_Paginator_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 8, 'p-dropdown', [], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'onChange']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('ngModelChange' === en)) {
                var pd_0 = ((_co.rows = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (('onChange' === en)) {
                var pd_1 = (_co.onRppChange($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i6.View_Dropdown_0, i6.RenderType_Dropdown)), i0.ɵprd(512, null, i7.DomHandler, i7.DomHandler, []), i0.ɵprd(512, null, i8.ObjectUtils, i8.ObjectUtils, []), i0.ɵdid(13877248, null, 1, i5.Dropdown, [i0.ElementRef, i7.DomHandler,
            i0.Renderer2, i0.ChangeDetectorRef, i8.ObjectUtils, i0.NgZone], { autoWidth: [0, 'autoWidth'],
            lazy: [1, 'lazy'], options: [2, 'options'] }, { onChange: 'onChange' }), i0.ɵqud(603979776, 1, { templates: 1 }), i0.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i5.Dropdown]), i0.ɵdid(671744, null, 0, i3.NgModel, [[8, null], [8,
                null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { model: [0, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i0.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = false;
        var currVal_8 = false;
        var currVal_9 = _co.rowsPerPageItems;
        _ck(_v, 3, 0, currVal_7, currVal_8, currVal_9);
        var currVal_10 = _co.rows;
        _ck(_v, 6, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 8).ngClassUntouched;
        var currVal_1 = i0.ɵnov(_v, 8).ngClassTouched;
        var currVal_2 = i0.ɵnov(_v, 8).ngClassPristine;
        var currVal_3 = i0.ɵnov(_v, 8).ngClassDirty;
        var currVal_4 = i0.ɵnov(_v, 8).ngClassValid;
        var currVal_5 = i0.ɵnov(_v, 8).ngClassInvalid;
        var currVal_6 = i0.ɵnov(_v, 8).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_Paginator_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 40, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0,
                'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-first ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToFirst($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-step-backward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToPrev($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-backward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'span', [['class', 'ui-paginator-pages']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_2)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-next ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToNext($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-forward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['class', 'ui-paginator-last ui-paginator-element ui-state-default ui-corner-all'],
            ['href', '#']], [[8, 'tabIndex', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changePageToLast($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-step-forward']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_3)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = 'ui-paginator ui-widget ui-widget-header ui-unselectable-text';
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 2, 0, currVal_2);
        var currVal_4 = 'ui-paginator-first ui-paginator-element ui-state-default ui-corner-all';
        var currVal_5 = _ck(_v, 6, 0, _co.isFirstPage());
        _ck(_v, 5, 0, currVal_4, currVal_5);
        var currVal_7 = 'ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all';
        var currVal_8 = _ck(_v, 13, 0, _co.isFirstPage());
        _ck(_v, 12, 0, currVal_7, currVal_8);
        var currVal_9 = _co.pageLinks;
        _ck(_v, 21, 0, currVal_9);
        var currVal_11 = 'ui-paginator-next ui-paginator-element ui-state-default ui-corner-all';
        var currVal_12 = _ck(_v, 26, 0, _co.isLastPage());
        _ck(_v, 25, 0, currVal_11, currVal_12);
        var currVal_14 = 'ui-paginator-last ui-paginator-element ui-state-default ui-corner-all';
        var currVal_15 = _ck(_v, 33, 0, _co.isLastPage());
        _ck(_v, 32, 0, currVal_14, currVal_15);
        var currVal_16 = _co.rowsPerPageOptions;
        _ck(_v, 39, 0, currVal_16);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = (_co.isFirstPage() ? (0 - 1) : null);
        _ck(_v, 4, 0, currVal_3);
        var currVal_6 = (_co.isFirstPage() ? (0 - 1) : null);
        _ck(_v, 11, 0, currVal_6);
        var currVal_10 = (_co.isLastPage() ? (0 - 1) : null);
        _ck(_v, 24, 0, currVal_10);
        var currVal_13 = (_co.isLastPage() ? (0 - 1) : null);
        _ck(_v, 31, 0, currVal_13);
    });
}
function View_Paginator_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Paginator_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.alwaysShow ? true : (_co.pageLinks && (_co.pageLinks.length > 1)));
        _ck(_v, 2, 0, currVal_0);
    }, null);
}
exports.View_Paginator_0 = View_Paginator_0;
function View_Paginator_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'p-paginator', [], null, null, null, View_Paginator_0, exports.RenderType_Paginator)),
        i0.ɵdid(49152, null, 0, i1.Paginator, [], null, null)], null, null);
}
exports.View_Paginator_Host_0 = View_Paginator_Host_0;
exports.PaginatorNgFactory = i0.ɵccf('p-paginator', i1.Paginator, View_Paginator_Host_0, { pageLinkSize: 'pageLinkSize', style: 'style',
    styleClass: 'styleClass', alwaysShow: 'alwaysShow', totalRecords: 'totalRecords',
    first: 'first', rows: 'rows', rowsPerPageOptions: 'rowsPerPageOptions' }, { onPageChange: 'onPageChange' }, []);
//# sourceMappingURL=paginator.ngfactory.js.map