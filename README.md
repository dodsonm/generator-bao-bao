generator-bao-bao
=================

Yeoman Generator For Django-friendly Static Builds/Prototypes

## Getting started
#### This is a very fresh alpha version so you must `npm link` instead of `npm install`

* Clone this repo and `cd` into the project root.
* Link it to your global lib: `npm link`
* Create a new folder to use as your project root and `cd` into it: `mkdir ~/my-project && cd $_`
* Run: `yo bao-bao`
* Run `grunt less`

## Commands

* `yo bao-bao` prompts you for the name of the Django app your front end code will ultimately live. It has a default of `front_end` for those who prefer an app dedicated to centralizing front end files. 

### What do you get?

Scaffolds out a website with a folder structure that plays nice with traditional Django apps. The goal is to streamline the process of migrating a static build/prototype into Django.

```
.
├── website
│   ├── index.js
│   └── static
│       ├── bower_components
│           └── ... a bunch of dependencies
│       └── front_end
|           ├── css
|           ├── img
|           ├── js
|               └── main.js
|           └── less
|               └── main.less
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── bower.json
├── config.json
├── Gruntfile.json
├── package.json
```
