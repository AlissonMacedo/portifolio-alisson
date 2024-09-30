var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
  email: String,
  password: String,
  _enabled: Boolean,
})

export default mongoose.models.users || mongoose.model("users", userSchema)
