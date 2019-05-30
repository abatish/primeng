"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./splitbutton");
var i2 = require("@angular/common");
var i3 = require("../button/button");
var i4 = require("@angular/router");
var i5 = require("../dom/domhandler");
exports.SplitButtonModuleNgFactory = i0.ɵcmf(i1.SplitButtonModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.ButtonModule, i3.ButtonModule, []), i0.ɵmpd(512, i4.RouterModule, i4.RouterModule, [[2, i4.ɵa], [2,
                i4.Router]]), i0.ɵmpd(512, i1.SplitButtonModule, i1.SplitButtonModule, [])]);
});
var styles_SplitButton = [];
exports.RenderType_SplitButton = i0.ɵcrt({ encapsulation: 2, styles: styles_SplitButton,
    data: { 'animation': [{ type: 7, name: 'overlayState', definitions: [{ type: 0, name: 'hidden',
                        styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined },
                    { type: 0, name: 'visible', styles: { type: 6, styles: { opacity: 1 }, offset: null },
                        options: undefined }, { type: 1, expr: 'visible => hidden', animation: { type: 4,
                            styles: null, timings: '400ms ease-in' }, options: null }, { type: 1,
                        expr: 'hidden => visible', animation: { type: 4, styles: null, timings: '400ms ease-out' },
                        options: null }], options: {} }] } });
function View_SplitButton_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.icon;
        var currVal_1 = 'ui-menuitem-icon fa fa-fw';
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_SplitButton_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 9, 'a', [['class',
                'ui-menuitem-link ui-corner-all']], [[8, 'href', 4], [1, 'target', 0]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.itemClick($event, _v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitButton_3)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-menuitem-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n                        ']))], function (_ck, _v) {
        var currVal_2 = 'ui-menuitem-link ui-corner-all';
        var currVal_3 = _ck(_v, 2, 0, _v.parent.context.$implicit.disabled);
        _ck(_v, 1, 0, currVal_2, currVal_3);
        var currVal_4 = _v.parent.context.$implicit.icon;
        _ck(_v, 5, 0, currVal_4);
    }, function (_ck, _v) {
        var currVal_0 = (_v.parent.context.$implicit.url || '#');
        var currVal_1 = _v.parent.context.$implicit.target;
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_5 = _v.parent.context.$implicit.label;
        _ck(_v, 8, 0, currVal_5);
    });
}
function View_SplitButton_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.icon;
        var currVal_1 = 'ui-menuitem-icon fa fa-fw';
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_SplitButton_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 10, 'a', [['class',
                'ui-menuitem-link ui-corner-all']], [[1, 'target', 0], [1, 'target', 0], [8, 'href',
                4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.itemClick($event, _v.parent.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-state-disabled': 0 }), i0.ɵdid(671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i2.LocationStrategy], { queryParams: [0,
                'queryParams'], routerLink: [1, 'routerLink'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitButton_5)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-menuitem-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n                        ']))], function (_ck, _v) {
        var currVal_3 = 'ui-menuitem-link ui-corner-all';
        var currVal_4 = _ck(_v, 2, 0, _v.parent.context.$implicit.disabled);
        _ck(_v, 1, 0, currVal_3, currVal_4);
        var currVal_5 = _v.parent.context.$implicit.queryParams;
        var currVal_6 = _v.parent.context.$implicit.routerLink;
        _ck(_v, 3, 0, currVal_5, currVal_6);
        var currVal_7 = _v.parent.context.$implicit.icon;
        _ck(_v, 6, 0, currVal_7);
    }, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.target;
        var currVal_1 = i0.ɵnov(_v, 3).target;
        var currVal_2 = i0.ɵnov(_v, 3).href;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        var currVal_8 = _v.parent.context.$implicit.label;
        _ck(_v, 9, 0, currVal_8);
    });
}
function View_SplitButton_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'li', [['class',
                'ui-menuitem ui-widget ui-corner-all'], ['role', 'menuitem']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitButton_2)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitButton_4)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                    ']))], function (_ck, _v) {
        var currVal_0 = !_v.context.$implicit.routerLink;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.routerLink;
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
function View_SplitButton_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { buttonViewChild: 0 }), i0.ɵqud(402653184, 2, { overlayViewChild: 0 }),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, [['container',
                1]], null, 23, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-splitbutton ui-buttonset ui-widget': 0,
            'ui-state-disabled': 1 }), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, [[1, 0], ['defaultbtn',
                1]], null, 3, 'button', [['cornerStyleClass', 'ui-corner-left'], ['pButton',
                ''], ['type', 'button']], [[8, 'disabled', 0], [1, 'tabindex', 0]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onDefaultButtonClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []), i0.ɵdid(4341760, null, 0, i3.Button, [i0.ElementRef,
            i5.DomHandler], { iconPos: [0, 'iconPos'], cornerStyleClass: [1, 'cornerStyleClass'],
            label: [2, 'label'], icon: [3, 'icon'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'button', [['class', 'ui-splitbutton-menubutton'], ['cornerStyleClass', 'ui-corner-right'],
            ['icon', 'fa-caret-down'], ['pButton', ''], ['type', 'button']], [[8, 'disabled',
                0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onDropdownButtonClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []), i0.ɵdid(4341760, null, 0, i3.Button, [i0.ElementRef,
            i5.DomHandler], { cornerStyleClass: [0, 'cornerStyleClass'], icon: [1, 'icon'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, [[2, 0], ['overlay', 1]], null, 9, 'div', [], [[4,
                    'display', null], [24, '@overlayState', 0]], null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { ngStyle: [0,
                'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class', 'ui-menu-list ui-helper-reset']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SplitButton_1)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = _ck(_v, 5, 0, true, _co.disabled);
        _ck(_v, 4, 0, currVal_0, currVal_1);
        var currVal_2 = _co.style;
        _ck(_v, 6, 0, currVal_2);
        var currVal_5 = _co.iconPos;
        var currVal_6 = 'ui-corner-left';
        var currVal_7 = _co.label;
        var currVal_8 = _co.icon;
        _ck(_v, 10, 0, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_10 = 'ui-corner-right';
        var currVal_11 = 'fa-caret-down';
        _ck(_v, 14, 0, currVal_10, currVal_11);
        var currVal_14 = _co.menuStyleClass;
        var currVal_15 = 'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow';
        _ck(_v, 17, 0, currVal_14, currVal_15);
        var currVal_16 = _co.menuStyle;
        _ck(_v, 18, 0, currVal_16);
        var currVal_17 = _co.model;
        _ck(_v, 23, 0, currVal_17);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.disabled;
        var currVal_4 = _co.tabindex;
        _ck(_v, 8, 0, currVal_3, currVal_4);
        var currVal_9 = _co.disabled;
        _ck(_v, 12, 0, currVal_9);
        var currVal_12 = (_co.menuVisible ? 'block' : 'none');
        var currVal_13 = (_co.menuVisible ? 'visible' : 'hidden');
        _ck(_v, 16, 0, currVal_12, currVal_13);
    });
}
exports.View_SplitButton_0 = View_SplitButton_0;
function View_SplitButton_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-splitButton', [], null, null, null, View_SplitButton_0, exports.RenderType_SplitButton)),
        i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []), i0.ɵdid(12763136, null, 0, i1.SplitButton, [i0.ElementRef, i5.DomHandler, i0.Renderer2,
            i4.Router, i0.ChangeDetectorRef], null, null)], null, null);
}
exports.View_SplitButton_Host_0 = View_SplitButton_Host_0;
exports.SplitButtonNgFactory = i0.ɵccf('p-splitButton', i1.SplitButton, View_SplitButton_Host_0, { model: 'model', icon: 'icon', iconPos: 'iconPos',
    label: 'label', style: 'style', styleClass: 'styleClass', menuStyle: 'menuStyle',
    menuStyleClass: 'menuStyleClass', disabled: 'disabled', tabindex: 'tabindex', appendTo: 'appendTo' }, { onClick: 'onClick', onDropdownClick: 'onDropdownClick' }, []);
//# sourceMappingURL=splitbutton.ngfactory.js.map