/*
 * grunt-jira
 * https://github.com/shift/grunt-jira
 *
 * Copyright (c) 2013 Vincent Palmer
 * Licensed under the MIT license.
 */

'use strict';

var JiraApi = require('jira').JiraApi;

module.exports = function(grunt) {

  grunt.registerTask('jira-create-version', 'JIRA intergration for Grunt', function() {
    grunt.config.requires('grunt-jira.protocol', 'grunt-jira.host', 'grunt-jira.port', 'grunt-jira.user', 'grunt-jira.password', 'grunt-jira.project_key');
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    var version = grunt.config.get('grunt-jira.version') || grunt.package.version;
    var jira = new JiraApi(
      grunt.config.get('grunt-jira.protocol'),
      grunt.config.get('grunt-jira.host'),
      grunt.config.get('grunt-jira.port'),
      grunt.config.get('grunt-jira.user'),
      grunt.config.get('grunt-jira.password'),
      '2',
      true
    );
    jira.createVersion({
      'project': grunt.config.get('grunt-jira.project_key'),
      'version': version,
      'name': "Automated grunt build",
      'description': "This is an automated grunt build.",
      'released': false,
      'archived': false
    }, function(callback) {
      grunt.log.ok(callback);
      grunt.log.ok("JIRA version: " + version + " has been created.");
    });

  });

};
