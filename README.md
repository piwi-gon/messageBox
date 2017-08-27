
# jQuery Widget messagebox

this widget is used to generate message-boxes with 
ok, ok|cancel, ok|error, ok|cancel|error, yes|no, yes|no|cancel, yes|no|error, yes|no|cancel|error

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<link rel="stylesheet" href="dist/css/jquery.messagebox.css">
	<script src="dist/js/jquery.messagebox.widget.js"></script>
	```

3. Call the plugin:

	```javascript
	$.ui.messageBoxWidget('OK', 'Just the text');
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   ├── demo.html
│   ├──css/
│   │  └──demo.css
├── dist/
│   ├── css/
│   │  └── jquery.messagebox.css
│   └── js/
│      ├── jquery.messagebox.widget.js
│      └── mbMasks/
│         ├── ok.html
│         ├── okcancel.html
│         ├── yesno.html
│         └── yesnocancel.html
├── src/
│   ├── css/
│   │  └── jquery.messagebox.css
│   └── js/
│      ├── jquery.messagebox.widget.js
│      └── mbMasks/
│         ├── ok.html
│         ├── okcancel.html
│         ├── yesno.html
│         └── yesnocancel.html
├── .jshintrc
├── Gruntfile.js
├── bower.json
└── package.json


#### [demo/](https://github.com/jquery-boilerplate/boilerplate/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/jquery-boilerplate/boilerplate/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/jquery-boilerplate/boilerplate/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

# messageBox

to modify those essageboxes you can use the css or - of course - can create your own.

# the messageboxes got and id - 

for the ok-dialog the id is: "dialog-ok"

for the ok-cancel-dialog the id is: "dialog-okcancel"

for the yes-no-dialog the id is: "dialog-yesno"

for the yes-no-cancel-dialog the id is: "dialog-yesnocancel"

# another thing you have to use are this ids of the useable buttons:

OK-Button: dialog-okcancelOKButtonId

CANCEL-Button: dialog-okcancelCancelButtonId

YES-Button: dialog-yesnoYesButtonId

No-Button: dialog-yesnoNoButtonId



therefore you can build your own layout for those boxes.


