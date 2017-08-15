var versions = [
  '2012-02-23',
  '2013-02-13',
  '2013-07-05',
  '2013-08-13',
  '2014-10-07',
  '2014-11-05',
  '2015-04-07',
  '2015-10-01',
  '2016-07-06'
]

versions.forEach(function (version) {
  var hooks = require('./' + version)

  // Setup version object
  exports[version] = {}

  // Import version hooks
  hooks.forEach(function (hook) {
    exports[version][hook.replace('_', '.')] = require('./' + version + '/' + hook + '.json')
  })
})