# grunt-jira

[![NPM version](https://badge.fury.io/js/grunt-jira.png)](http://badge.fury.io/js/grunt-jira)

> JIRA intergration for Grunt

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jira --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jira');
```

## The "jira" task

### Overview
In your project's Gruntfile, add a section named `jira` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jira: {
    'protocol': 'https:',
    'host': 'ondemand.atlassian.net',
    'port': '443',
    'user': 'grunt_user',
    'password': 'grunt_password',
    'project_key': 'GRUNT'
    // The following is optional and is derived from the package.json if not given.
    //'version': new Application().version();
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 0.1.* - Travis CI 
 * 0.1.0 - Initial release
