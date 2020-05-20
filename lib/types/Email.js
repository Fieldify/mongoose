const { types } = require("fieldify")

class signderivaMongooseTypeEmail extends types.Email.class {

}

module.exports = {
  "code": types.Email.code,
  "description": types.Email.description,
  "class": signderivaMongooseTypeEmail
}