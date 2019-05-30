"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./lightbox");
var i2 = require("@angular/common");
var i3 = require("../dom/domhandler");
exports.LightboxModuleNgFactory = i0.ɵcmf(i1.LightboxModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.LightboxModule, i1.LightboxModule, [])]);
});
var styles_Lightbox = [];
exports.RenderType_Lightbox = i0.ɵcrt({ encapsulation: 2, styles: styles_Lightbox,
    data: {} });
function View_Lightbox_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'a', [], [[8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onImageClick($event, _v.context.$implicit, _v.context.index, i0.ɵnov(_v.parent.parent, 18)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'img', [], [[8, 'src',
                4], [8, 'title', 0], [8, 'alt', 0]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.source;
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.thumbnail;
        var currVal_2 = _v.context.$implicit.title;
        var currVal_3 = _v.context.$implicit.alt;
        _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3);
    });
}
function View_Lightbox_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'div', [], [[8, 'className', 0]], null, null, null, null)),
        i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Lightbox_2)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.style;
        _ck(_v, 1, 0, currVal_1);
        var currVal_2 = _co.images;
        _ck(_v, 4, 0, currVal_2);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_Lightbox_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'span', [], [[8, 'className', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onLinkClick($event, i0.ɵnov(_v.parent, 18)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), i0.ɵncd(null, 0), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.style;
        _ck(_v, 1, 0, currVal_1);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_Lightbox_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Lightbox_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Lightbox_3)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 33, 'div', [['class', 'ui-lightbox ui-widget ui-corner-all ui-shadow']], [[4, 'display', null], [4, 'zIndex', null], [4, 'transitionProperty',
                null], [4, 'transitionDuration', null], [4, 'transitionTimingFunction',
                null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = ((_co.preventDocumentClickListener = true) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-lightbox-loading': 0 }), (_l()(), i0.ɵted(null, ['\n           '])), (_l()(), i0.ɵeld(0, null, null, 18, 'div', [['class',
                'ui-lightbox-content-wrapper']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n              '])), (_l()(),
            i0.ɵeld(0, null, null, 3, 'a', [['class', 'ui-state-default ui-lightbox-nav-left ui-corner-right']], [[4, 'zIndex', null]], [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.prev(i0.ɵnov(_v, 20)) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-helper-hidden': 0 }),
        (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-fw fa-caret-left']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n              '])), (_l()(), i0.ɵeld(0, [['content',
                1]], null, 5, 'div', [['class', 'ui-lightbox-content ui-corner-all']], [[4, 'transitionProperty', null], [4, 'transitionDuration', null],
            [4, 'transitionTimingFunction', null]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, [['img', 1]], null, 0, 'img', [['style', 'display:none']], [[8, 'src', 4]], [[null, 'load']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('load' === en)) {
                var pd_0 = (_co.onImageLoad($event, i0.ɵnov(_v, 18)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        i0.ɵncd(null, 1), (_l()(), i0.ɵted(null, ['\n              '])),
        (_l()(), i0.ɵted(null, ['\n              '])), (_l()(), i0.ɵeld(0, null, null, 3, 'a', [['class', 'ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden']], [[4, 'zIndex', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.next(i0.ɵnov(_v, 20)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), i0.ɵpod({ 'ui-helper-hidden': 0 }),
        (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-fw fa-caret-right']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n           '])), (_l()(), i0.ɵted(null, ['\n           '])), (_l()(), i0.ɵeld(0, null, null, 8, 'div', [['class', 'ui-lightbox-caption ui-widget-header']], [[4, 'display', null]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n              '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-lightbox-caption-text']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'a', [['class', 'ui-lightbox-close ui-corner-all'],
                ['href', '#']], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.hide($event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'fa fa-fw fa-close']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n              '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['style', 'clear:both']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n           '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.type == 'image');
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = (_co.type == 'content');
        _ck(_v, 5, 0, currVal_1);
        var currVal_7 = 'ui-lightbox ui-widget ui-corner-all ui-shadow';
        var currVal_8 = _ck(_v, 9, 0, _co.loading);
        _ck(_v, 8, 0, currVal_7, currVal_8);
        var currVal_10 = 'ui-state-default ui-lightbox-nav-left ui-corner-right';
        var currVal_11 = _ck(_v, 15, 0, !_co.leftVisible);
        _ck(_v, 14, 0, currVal_10, currVal_11);
        var currVal_17 = 'ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden';
        var currVal_18 = _ck(_v, 27, 0, !_co.rightVisible);
        _ck(_v, 26, 0, currVal_17, currVal_18);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = (_co.visible ? 'block' : 'none');
        var currVal_3 = _co.zindex;
        var currVal_4 = 'all';
        var currVal_5 = _co.effectDuration;
        var currVal_6 = _co.easing;
        _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_9 = (_co.zindex + 1);
        _ck(_v, 13, 0, currVal_9);
        var currVal_12 = 'width,height';
        var currVal_13 = _co.effectDuration;
        var currVal_14 = _co.easing;
        _ck(_v, 18, 0, currVal_12, currVal_13, currVal_14);
        var currVal_15 = (_co.currentImage ? (_co.currentImage.source || '') : '');
        _ck(_v, 20, 0, currVal_15);
        var currVal_16 = (_co.zindex + 1);
        _ck(_v, 25, 0, currVal_16);
        var currVal_19 = (_co.captionText ? 'block' : 'none');
        _ck(_v, 31, 0, currVal_19);
        var currVal_20 = _co.captionText;
        _ck(_v, 34, 0, currVal_20);
    });
}
exports.View_Lightbox_0 = View_Lightbox_0;
function View_Lightbox_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-lightbox', [], null, null, null, View_Lightbox_0, exports.RenderType_Lightbox)),
        i0.ɵprd(512, null, i3.DomHandler, i3.DomHandler, []), i0.ɵdid(4374528, null, 0, i1.Lightbox, [i0.ElementRef, i3.DomHandler, i0.Renderer2], null, null)], null, null);
}
exports.View_Lightbox_Host_0 = View_Lightbox_Host_0;
exports.LightboxNgFactory = i0.ɵccf('p-lightbox', i1.Lightbox, View_Lightbox_Host_0, { images: 'images', type: 'type', style: 'style', styleClass: 'styleClass',
    appendTo: 'appendTo', easing: 'easing', effectDuration: 'effectDuration' }, {}, ['a',
    '*']);
//# sourceMappingURL=lightbox.ngfactory.js.map