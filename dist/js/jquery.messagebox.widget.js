/**
 * jquery.messagebox.widget.js
 * 
 * author: piwi (piwi.gon@osnanet.de)
 * 
 * created: 17.07.2017
 * changed: 17.07.2017
 *
 * purpose:
 *
 */

$.widget("ui.messageBoxWidget", {
    version: "1.0.0",
    currentDir: '',
    options: {
            onChange: function() {},
            boxType: "OK",
            okFunction: null,
            yesFunction: null,
            noFunction: null,
            cancelFunction: null,
            },
    boxtypes: ["OK",
              "OK|CANCEL",
              "YES|NO",
              "YES|NO|CANCEL"],
    boxType: null,
    dialogWidth: 400,
    dialogHeight: 'auto',
    dialogId: '',

    _create: function() {
        
    },

    _init: function() {
        var loc = window.location.pathname;
        var dir = loc.substring(0, loc.lastIndexOf('/'));
        this.currentDir = dir;
        if(this.boxType == "OK") {
            this.dialogId = "dialog-ok";
            _ok();
        }
        if(this.boxType == "OK|CANCEL") {
            this.dialogId = "dialog-okcancel";
            _okcancel();
        }
        if(this.boxType == "YES|NO") {
            this.dialogId = "dialog-yesnok";
            _yesno();
        }
        if(this.boxType == "YES|NO|CANCEL") {
            this.dialogId = "dialog-yesnocancel";
            _yesnocancel();
        }
    },

    _yesno: function() {
        var htmlData = null;
        $.ajax({
            url: this.currentDir + "/" + "yesno.html",
            type: 'POST',
            success : function(data) {
                htmlData = data;
                $('#'+this.dialogId).dialog({
                    autoOpen: false,
                    resizeable: false,
                    height: dialogHeight,
                    width: dialogHeight,
                    modal: _isModal
                });
                $('#messageContentId').html('').html(text);
                $('#'+this.boxType).siblings("ui-widget-titlebar").htm("Information");
                this._checkButtons();
                $('#'+this.boxType).dialog('open');
            }
        });
    },

    _checkButtons: function() {
        if(this.boxType.indexOf("OK")>-1) {
            if($('#'+dialogId+'okButtonId').length > 0) {
                if(this.options.okFunction != null && typeof this.options.okFunction == "function") {
                    $('#'+dialogId+'OKButtonId').click(this.options.okFunction);
                } else {
                    $('#'+method+'OKButtonId').click(function() {$('#'+method).dialog('close').remove();});
                }
            }
        }
        if(this.boxType.indexOf("CANCEL")>-1) {
            if($('#'+dialogId+'cancelButtonId').length > 0) {
                if(this.options.cancelFunction != null && typeof this.options.cancelFunction == "function") {
                    $('#'+dialogId+'CancelButtonId').click(this.options.cancelFunction);
                } else {
                    $('#'+dialogId+'CancelButtonId').click(function() {$('#'+method).dialog('close').remove();});
                }
            }
        }
        if(this.boxType.indexOf("YES")>-1) {
            if($('#'+dialogId+'yesButtonId').length > 0) {
                if(this.options.yesFunction != null && typeof this.options.yesFunction == "function") {
                    $('#'+dialogId+'YesButtonId').click(this.options.yesFunction);
                } else {
                    $('#'+dialogId+'YesButtonId').click(function() {$('#'+method).dialog('close').remove();});
                }
            }
        }
        if(this.boxType.indexOf("NO")>-1) {
            if($('#'+dialogId+'noButtonId').length > 0) {
                if(this.options.noFunction != null && typeof this.options.noFunction == "function") {
                    $('#'+dialogId+'NoButtonId').click(this.options.noFunction);
                } else {
                    $('#'+dialogId+'NoButtonId').click(function() {$('#'+method).dialog('close').remove();});
                }
            }
        }
    }
});
