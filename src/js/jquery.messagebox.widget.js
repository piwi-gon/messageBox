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
            dialogWidth: 400,
            dialogHeight: 'auto',
            isModal: true,
            text: '',
            },
    boxtypes: ["OK",
              "OK|CANCEL",
              "YES|NO",
              "YES|NO|CANCEL"],
    dialogId: '',
    fileName: '',
    message: 'No Message given',
    intDialogHeight: null,
    intDialogWidth: null,
    _isModal: true,
    elemToAddTo:"",

    _create: function() {
        console.log("TEST (create)");
        this.element.hide();
        this.elemToAddTo = this.element.parent();
        this.intDialogHeight = this.options.dialogHeight;
        this.intDialogWidth  = this.options.dialogWidth;
        this._isModal = this.options.isModal;
        this.message = this.options.text;
    },

    _init: function() {
        console.log("TESTT (init)");
        this.currentDir = $("script[src]").last().attr("src").split('?')[0].split('/').slice(0, -1).join('/')+'/';
        if(this.options.boxType == "OK") {
            this.dialogId = "dialog-ok";
            this.fileName = "ok.html";
        }
        if(this.options.boxType == "OK|CANCEL") {
            this.dialogId = "dialog-okcancel";
            this.fileName = "okcancel.html";
        }
        if(this.options.boxType == "YES|NO") {
            this.dialogId = "dialog-yesnok";
            this.fileName = "yesno.html";
        }
        if(this.options.boxType == "YES|NO|CANCEL") {
            this.dialogId = "dialog-yesnocancel";
            this.fileName = "yesnocancel.html";
        }
        this._createDialog();
    },

    _createDialog: function() {
        var self = this;
        var htmlData = null;
        if(this._isModal == undefined) { this._isModal = true; }
        $.ajax({
            url: this.currentDir + this.fileName,
            type: 'POST',
            success : function(data) {
                htmlData = data;
                $('body').append(htmlData);
                $('#'+self.dialogId).dialog({
                    autoOpen: false,
                    resizeable: false,
                    height: self.intDialogHeight,
                    width:  self.intDialogWidth,
                    modal: self._isModal
                });
                $('#messageContentId').html('').html(self.message);
                $('#'+self.dialogId).siblings(".ui-widget-titlebar").html("Information");
                self._checkButtons(self);
                self._openDialog(self);
            }
        });
    },

    _openDialog: function(self) {
        console.log('Dialog "' + self.dialogId + '"'); 
        if($('#'+self.dialogId).length > 0) {
            console.log('opening ...');
            $('#'+self.dialogId).dialog('open');
        }
    },

    _checkButtons: function(self) {
        if(self.options.boxType.indexOf("OK")>-1) {
            console.log("In OK");
            if($('#'+self.dialogId+'OKButtonId').length > 0) {
                console.log("Its greater tan 0");
                if(self.options.okFunction != null && typeof self.options.okFunction == "function") {
                    $('#'+self.dialogId+'OKButtonId').click(self.options.okFunction);
                } else {
                    $('#'+self.dialogId+'OKButtonId').click(function() {$('#'+self.dialogId).dialog('close').remove();});
                }
            }
        }
        if(this.options.boxType.indexOf("CANCEL")>-1) {
            if($('#'+dialogId+'cancelButtonId').length > 0) {
                if(this.options.cancelFunction != null && typeof this.options.cancelFunction == "function") {
                    $('#'+this.dialogId+'CancelButtonId').click(this.options.cancelFunction);
                } else {
                    $('#'+this.dialogId+'CancelButtonId').click(function() {$('#'+this.dialogId).dialog('close').remove();});
                }
            }
        }
        if(this.options.boxType.indexOf("YES")>-1) {
            if($('#'+dialogId+'yesButtonId').length > 0) {
                if(this.options.yesFunction != null && typeof this.options.yesFunction == "function") {
                    $('#'+this.dialogId+'YesButtonId').click(this.options.yesFunction);
                } else {
                    $('#'+this.dialogId+'YesButtonId').click(function() {$('#'+this.dialogId).dialog('close').remove();});
                }
            }
        }
        if(this.options.boxType.indexOf("NO")>-1) {
            if($('#'+dialogId+'noButtonId').length > 0) {
                if(this.options.noFunction != null && typeof this.options.noFunction == "function") {
                    $('#'+this.dialogId+'NoButtonId').click(this.options.noFunction);
                } else {
                    $('#'+this.dialogId+'NoButtonId').click(function() {$('#'+this.dialogId).dialog('close').remove();});
                }
            }
        }
    }
});
