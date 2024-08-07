/**
 * jQuery plugin for getting position of cursor in textarea
 *
 * @author Bevis Zhao https://github.com/beviz/jquery-caret-position-getter
 */
$(function () {

    var calculator = {
        // key styles
        primaryStyles: ['fontFamily', 'fontSize', 'fontWeight', 'fontVariant', 'fontStyle',
            'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight',
            'marginLeft', 'marginTop', 'marginBottom', 'marginRight',
            'borderLeftColor', 'borderTopColor', 'borderBottomColor', 'borderRightColor',
            'borderLeftStyle', 'borderTopStyle', 'borderBottomStyle', 'borderRightStyle',
            'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth',
            'line-height', 'outline'],

        specificStyle: {
            'word-wrap': 'break-word',
            'overflow-x': 'hidden',
            'overflow-y': 'auto'
        },

        simulator: null,

        toHtml: function (text) {
            return PrimeFaces.escapeHTML(text).replace(/\n/g, '<br>')
                .split(' ').join('<span style="white-space:prev-wrap">&nbsp;</span>');
        },
        // calculate position
        getCaretPosition: function () {
            var cal = calculator, self = this, element = self[0], elementOffset = self.offset();
            if (cal.simulator === null) {
                cal.simulator = $('<div id="textarea_simulator"></div>').css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    visibility: 'hidden'
                }).appendTo(document.body);
            }
            cal.simulator.empty();
            // clone primary styles to imitate textarea
            $.each(cal.primaryStyles, function (index, styleName) {
                self.cloneStyle(cal.simulator, styleName);
            });

            // caculate width and height
            cal.simulator.css($.extend({
                'width': self.width() + 'px',
                'height': self.height() + 'px'
            }, cal.specificStyle));

            var value = self.val(), cursorPosition = self.getCursorPosition();
            var beforeText = value.substring(0, cursorPosition),
                afterText = value.substring(cursorPosition);

            var before = $('<span class="before"></span>').html(cal.toHtml(beforeText)),
                focus = $('<span class="focus"></span>'),
                after = $('<span class="after"></span>').html(cal.toHtml(afterText));

            cal.simulator.append(before).append(focus).append(after);
            var focusOffset = focus.offset(), simulatorOffset = cal.simulator.offset();
            return {
                top: focusOffset.top - simulatorOffset.top - element.scrollTop
                    // calculate and add the font height except Firefox
                    + ($.browser.mozilla ? 0 : parseInt(self.getComputedStyle("fontSize"))),
                left: focus[0].offsetLeft - cal.simulator[0].offsetLeft - element.scrollLeft
            };
        }
    };

    $.fn.extend({
        getComputedStyle: function (styleName) {
            if (this.length == 0) return;
            var result = this.css(styleName);
            result = result || document.defaultView.getComputedStyle(this[0], null)[styleName];
            return result;
        },
        // easy clone method
        cloneStyle: function (target, styleName) {
            var styleVal = this.getComputedStyle(styleName);
            if (!!styleVal) {
                $(target).css(styleName, styleVal);
            }
        },
        cloneAllStyle: function (target, style) {
            var thiz = this[0];
            for (var styleName in thiz.style) {
                var val = thiz.style[styleName];
                typeof val == 'string' || typeof val == 'number'
                    ? this.cloneStyle(target, styleName)
                    : NaN;
            }
        },
        getCursorPosition: function () {
            var thiz = this[0], result = 0;
            if ('selectionStart' in thiz) {
                result = thiz.selectionStart;
            } else if ('selection' in document) {
                var range = document.selection.createRange();
                if (parseInt($.browser.version) > 6) {
                    thiz.focus();
                    var length = document.selection.createRange().text.length;
                    range.moveStart('character', -thiz.value.length);
                    result = range.text.length - length;
                } else {
                    var bodyRange = document.body.createTextRange();
                    bodyRange.moveToElementText(thiz);
                    for (; bodyRange.compareEndPoints("StartToStart", range) < 0; result++)
                        bodyRange.moveStart('character', 1);
                    for (var i = 0; i <= result; i++) {
                        if (thiz.value.charAt(i) == '\n')
                            result++;
                    }
                    var enterCount = thiz.value.split('\n').length - 1;
                    result -= enterCount;
                    return result;
                }
            }
            return result;
        },
        getCaretPosition: calculator.getCaretPosition
    });
});
