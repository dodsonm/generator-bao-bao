/*jslint node:true, indent:2, nomen:true, unparam:true, ass:true, vars:true */

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BaoBaoGenerator = module.exports = function BaoBaoGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
  this.WEB_ROOT = 'website';
  this.STATIC_URL = '/static/';
};

util.inherits(BaoBaoGenerator, yeoman.generators.Base);

BaoBaoGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'djangoApp',
    message: 'For which Django app is this front end code being written?',
    default: 'front_end'
  }];

  this.prompt(prompts, function (props) {
    this.djangoApp = props.djangoApp;

    cb();
  }.bind(this));
};

BaoBaoGenerator.prototype.app = function app() {
  this.mkdir(this.WEB_ROOT);
  this.mkdir(this.WEB_ROOT);
  this.mkdir(this.WEB_ROOT + this.STATIC_URL);
  this.mkdir(this.WEB_ROOT + this.STATIC_URL + this.djangoApp);
  this.mkdir(this.WEB_ROOT + this.STATIC_URL + this.djangoApp + '/css');
  this.mkdir(this.WEB_ROOT + this.STATIC_URL + this.djangoApp + '/img');
  this.mkdir(this.WEB_ROOT + this.STATIC_URL + this.djangoApp + '/js');
  this.mkdir(this.WEB_ROOT + this.STATIC_URL + this.djangoApp + '/less');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
  this.template('_package.json', 'package.json');
  this.template('index.html', this.WEB_ROOT + '/index.html');
  this.template('main.less', this.WEB_ROOT + this.STATIC_URL + this.djangoApp + '/less/main.less');
};

BaoBaoGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

BaoBaoGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};
