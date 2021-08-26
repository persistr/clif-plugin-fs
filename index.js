const fs = require('fs')
module.exports = {
  initialize: (toolbox) => {
    toolbox.fs = fs
  }
}
