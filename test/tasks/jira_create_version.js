'use strict';

var should = require('should'),
    spawn  = require('child_process').spawn;

/***
 * Helpers
 */

function run(cmd, options, callback) {
  var spawn = require('child_process').spawn;
  var command = spawn(cmd, options);
  var result = '';
  command.stdout.on('data', function(data) {
    result += data.toString();
  });
  command.on('close', function(code) {
    return callback(result);
  });
}

/***
 * Test the task
 */

describe('jira-create-version', function() {
  it("should register the task with Grunt", function () {
    var output = run('grunt', ['--help', '|', 'grep jira-create-version'], function (result) {
      console.log(result);
      result.should.match(/.*jira-create-version.*/);
    });
  });
});


