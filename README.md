
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
│      └── jquery.messagebox.widget.js
├── src/
│   ├── css/
│   │  └── jquery.messagebox.css
│   └── js/
│      └── jquery.messagebox.widget.js
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
