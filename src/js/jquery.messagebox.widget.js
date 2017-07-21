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
            dialogWidth: 480,
            dialogHeight: 'auto',
            isModal: true,
            message: '',
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
    _boxType:'',
    elemToAddTo:"",

    _create: function() {
        console.log("TEST (create)");
        this.element.hide();
        this.elemToAddTo = this.element.parent();
        this.intDialogHeight = this.options.dialogHeight;
        this.intDialogWidth  = this.options.dialogWidth;
        this._isModal = this.options.isModal;
        this._boxType = this.options.boxType.replace("|ERROR", "");
        this.message = this.options.message;
    },

    _init: function() {
        console.log("TESTT (init)");
        this.currentDir = $("script[src]").last().attr("src").split('?')[0].split('/').slice(0, -1).join('/')+'/';
        if(this._boxType == "OK") {
            this.dialogId = "dialog-ok";
            this.fileName = "ok.html";
        }
        if(this._boxType == "OK|CANCEL") {
            this.dialogId = "dialog-okcancel";
            this.fileName = "okcancel.html";
        }
        if(this._boxType == "YES|NO") {
            this.dialogId = "dialog-yesno";
            this.fileName = "yesno.html";
        }
        if(this._boxType == "YES|NO|CANCEL") {
            this.dialogId = "dialog-yesnocancel";
            this.fileName = "yesnocancel.html";
        }
        console.log(this.options);
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
                    modal: self._isModal,
                    open: function(event) {
                        $(event.target).parent().css( { backgroundColor: 'lightgrey'})
                    },
                    close: function() { console.log("removing dialog"); $(this).dialog('close').remove() }
                });
                $('#messageContentId').html('').html(self.message);
                $('#'+self.dialogId).siblings(".ui-widget-titlebar").html("Information");
                console.log("BOXTYPE: " + self.options.boxType);
                if(self.options.boxType.indexOf("ERROR")>-1) {
                    console.log("replacing");
                    $('.ui-state-default').addClass('ui-state-error').removeClass('ui-state-default');
                }
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
        if(self._boxType.indexOf("OK")>-1) {
            console.log("In OK");
            if($('#'+self.dialogId+'OKButtonId').length > 0) {
                console.log("Its greater tan 0");
                if(self.options.okFunction != null && typeof self.options.okFunction == "function") {
                    $('#'+self.dialogId+'OKButtonId').click(function() { console.log("buttonOK"); self.options.okFunction.call(); $('#'+self.dialogId).dialog('close').remove(); });
                } else {
                    $('#'+self.dialogId+'OKButtonId').click(function() { console.log("buttonOK"); $('#'+self.dialogId).dialog('close').remove(); });
                }
            }
        }
        if(this._boxType.indexOf("CANCEL")>-1) {
            if($('#'+self.dialogId+'CancelButtonId').length > 0) {
                if(self.options.cancelFunction != null && typeof self.options.cancelFunction == "function") {
                    $('#'+self.dialogId+'CancelButtonId').click(function () { console.log("buttonCANCEL"); self.options.cancelFunction.call(); $('#'+self.dialogId).dialog('close').remove(); });
                } else {
                    $('#'+self.dialogId+'CancelButtonId').click(function() { console.log("buttonCANCEL"); $('#'+self.dialogId).dialog('close').remove(); });
                }
            }
        }
        if(this._boxType.indexOf("YES")>-1) {
            if($('#'+self.dialogId+'YesButtonId').length > 0) {
                if(self.options.yesFunction != null && typeof self.options.yesFunction == "function") {
                    $('#'+self.dialogId+'YesButtonId').click(function() { console.log("buttonYES"); self.options.yesFunction.call(); $('#'+self.dialogId).dialog('close').remove(); });
                } else {
                    $('#'+self.dialogId+'YesButtonId').click(function() { console.log("buttonYES"); $('#'+self.dialogId).dialog('close').remove(); });
                }
            }
        }
        if(this._boxType.indexOf("NO")>-1) {
            if($('#'+self.dialogId+'NoButtonId').length > 0) {
                if(self.options.noFunction != null && typeof self.options.noFunction == "function") {
                    $('#'+self.dialogId+'NoButtonId').click(function() { console.log("buttonNO");  self.options.noFunction.call(); $('#'+self.dialogId).dialog('close').remove(); });
                } else {
                    $('#'+self.dialogId+'NoButtonId').click(function() { console.log("buttonNO"); $('#'+self.dialogId).dialog('close').remove(); });
                }
            }
        }
    }
});
