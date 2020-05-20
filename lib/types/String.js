const { types } = require("fieldify")

class signderivaMongooseTypeString extends types.String.class {
  
}

module.exports = {
  "code": types.String.code,
  "description": types.String.description,
  "class": signderivaMongooseTypeString
}