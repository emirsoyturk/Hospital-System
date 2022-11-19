queries = {
	'find-all-doctors': 'Select * From DOKTOR',
	'find-all-hospital-names': 'Select HastaneAdi From Hastane',
	'find-all-doctors-named': 'Select * From DOKTOR Where name like ', // Add doctor name after query;
}

module.exports = { queries }
