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
    this.async();
    grunt.config.requires('jira.protocol', 'jira.host', 'jira.port', 'jira.user', 'jira.password', 'jira.project_key');
    var version = grunt.config.get('jira.version') || grunt.package.version;
    var jira = new JiraApi(
      grunt.config.get('jira.protocol'),
      grunt.config.get('jira.host'),
      grunt.config.get('jira.port'),
      grunt.config.get('jira.user'),
      grunt.config.get('jira.password'),
      '2',
      true
    );
    jira.createVersion({
      'project': grunt.config.get('jira.project_key'),
      'name': version,
      'description': "This is an automated grunt build.",
      'released': true,
      'archived': false
    }, function(err, callback) {
      if (err) {
        grunt.log.fail(err);
        return;
      } else {
        grunt.log.ok("JIRA version: " + version + " has been created.");
      }
    });
  });
};
