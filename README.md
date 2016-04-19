# angular-filesaver
FileSaver.js wrapped by an Angular service

##Installation
**Install using bower**

```js
bower install angular-filesaver
```

```html
<script src="bower_components/angular-filesaver/angular-filesaver.js" type="text/javascript"></script>
```
Add as dependency in your module

```js
angular.module('yourApp', ['FileSaver']);
```

**Dependencies**

1. angular
2. filesaver.js (https://github.com/eligrey/FileSaver.js or `bower install file-saver.js`)
3. Blob.js (https://github.eligrey/Blob.js or `bower install blob`) - optional, for legacy browser support


Refer all dependencies in your page in the proper order

```html
<script src="./bower_components/angular/angular.min.js" type="text/javascript"></script>
<script src="./bower_components/blob/Blob.js" type="text/javascript"></script>
<script src="./bower_components/file-saver.js/FileSaver.js" type="text/javascript"></script>
<script src="./bower_components/angular-filesaver/angular-filesaver.js" type="text/javascript"></script>
```

###Usage

Use FileSaver as you would FileSaver's saveAs() method

```js
var blob = new Blob(['Hello, world!'], {type: 'text/plain;charset=utf-8'});
FileSaver(blob, 'hello world.txt');
```

## Contribute
Please do. Update and send pull requests if you have anything to add.

License - MIT.
