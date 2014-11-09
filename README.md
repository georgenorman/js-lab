# JS Lab

JS experiments for the [JS Overview](http://www.thruzero.com/jcat3/apps/resources/resources.jsf?rid=javascript.overview) at ThruZero.

## Description


## Experiments

* [JS Lab Demo](http://www.thruzero.com/pages/jcat3/js-lab/html/index.html)
  * [Window Interface](http://www.thruzero.com/pages/jcat3/js-lab/html/bom/window.html)
  * [Navigator Interface](http://www.thruzero.com/pages/jcat3/js-lab/html/bom/navigator.html)
  * [Screen Interface](http://www.thruzero.com/pages/jcat3/js-lab/html/bom/screen.html)
  * [Location Interface](http://www.thruzero.com/pages/jcat3/js-lab/html/bom/location.html?test=a+query+string#hash1)
  * [History Interface](http://www.thruzero.com/pages/jcat3/js-lab/html/bom/history.html)
  * [Document Interface](http://www.thruzero.com/pages/jcat3/js-lab/html/dom/document.html)

## Testing Locally

Just cd to the project directory and open the ```src/html/index.html``` file in your browser.
The CSS and JavaScript files will be accessed in a non-minified and non-amalgamated way.

Alternatively, you can perform a build, which will optimize the CSS and JavaScript files for deployment.

## Building a Release

### Setup

The project's build process uses Node.js and Grunt.
If you don't have Grunt, you can follow the [Getting Started](http://gruntjs.com/getting-started) guide.
Next, just do an `sudo npm install` which will install Grunt locally as well as all of the project dependencies:

```bash
sudo npm install
```

### Default Build

The default build cleans the target directory and generates the current release.

```bash
grunt
```

## License

Copyright 2014 George Norman

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this software except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
