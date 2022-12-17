queries = {
	'find-all-doctors': 'Select * From DOKTOR',
	'find-all-hospital-names': 'Select HastaneAdi From Hastane',
	'find-all-hospital': 'Select * From Hastane',
	'find-all-fields': 'Select Distinct(Brans) from doktor',
	'find-all-cities': 'Select Distinct(Il) from hastane',
	'find-all-district': 'Select Distinct(Ilce) from hastane',
	'find-all-doctors-by-hospital': 'Select * From DOKTOR Where DOKTOR.HastaneAdi = ',
	'find-all-doctors-named': 'Select * From DOKTOR Where name like ', // Add doctor name after query;
	'find-doctor-by-id': 'Select TCKimlikNO from doktor where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-patient-by-id': 'Select TCKimlikNO from hasta where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-doctor-name-by-id': 'Select Isim, Soyisim from doktor where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-appointments-by-doctor-id': 'Select * from randevu join hasta on TCKimlikNo = HastaTCNo where DoktorTCNo = ', // Add TCKimlikNo after query;
	'find-appointments-by-doctor-id-before-today': 'Select * from randevu join hasta on TCKimlikNo = HastaTCNo where DATE(Tarih) < CURDATE() and DoktorTCNo = ',
	'find-appointments-by-doctor-id-after-today': 'Select * from randevu join hasta on TCKimlikNo = HastaTCNo where DATE(Tarih) >= CURDATE() and DoktorTCNo = ',

}

module.exports = { queries }
