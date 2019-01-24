const Knight = require('../models/knight');

exports.new_knight = (req, res, next) => {
	const knight = new Knight(req.body);

	knight.save(function (err, knight) {
		if (err) {
	    	return next(err);
		}
		res.send(knight);
	});
};

exports.get_knight = (req, res) => {
	Knight.findById(req.params.id, function (err, knight) {
		if (err) return next(err);
		res.send(knight);
	});
};

exports.update_nickname = (req, res) => {
	Knight.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, knight) {
		if (err) return next(err);
		res.send(knight);
	});
};

exports.get_all_knights = (req, res) => {
	Knight.find(function (err, knights) {
		if (err) return next(err);
		res.send(knights);
	});
};

exports.delete_knight = (req, res) => {
	Knight.findByIdAndRemove(req.params.id, function (err, knight) {
		if (err) return next(err);
		res.send(knight);
	});
	// TODO Inserir o guerreiro apagado numa coleção "Hall of Heroes"?
};
