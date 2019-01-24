const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
	name: String,
	mod: Number,
	attr: String,
	equipped: Boolean
});

const AttributesSchema = new Schema({
	strength: Number,
	dexterity: Number,
	constitution: Number,
	intelligence: Number,
	wisdom: Number,
	charisma: Number
});

const KnightSchema = new Schema({
  name: String,
  nickname: String,
  birthday: Date,
  weapons: [ WeaponSchema ],
  attributes: AttributesSchema,
  keyAttribute: { type: String, required: true, max: 13 },
});

module.exports = mongoose.model('Knight', KnightSchema);
