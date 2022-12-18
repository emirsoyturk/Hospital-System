queries = {
	'find-all-doctors': 'Select * From DOKTOR',
	'find-all-hospital-names': 'Select HastaneAdi From Hastane',
	'find-all-hospital': 'Select * From Hastane',
	'find-all-fields': 'Select Distinct(Brans) from doktor',
	'find-all-cities': 'Select Distinct(Il) from hastane',
	'find-all-district': 'Select Distinct(Ilce) from hastane',
	'find-all-district-by-city': 'Select Distinct(Ilce) from hastane where Il = ', // Add city name after query;
	'find-all-hospitals-by-district': 'Select HastaneAdi from hastane where Ilce like ', // Add district name after query;
	'find-all-fields-by-district': 'Select Distinct(Brans) from doktor where HastaneAdi in (Select HastaneAdi from hastane where Ilce like ', // Add district name after query;
	'find-all-hospital-by-field-and-district': 'Select hastane.HastaneAdi from hastane join doktor on doktor.HastaneAdi = hastane.HastaneAdi where Brans = ', // Add field name after query;
	'find-all-doctors-by-hospital': 'Select * From DOKTOR Where DOKTOR.HastaneAdi = ',
	'find-all-doctors-named': 'Select * From DOKTOR Where name like ', // Add doctor name after query;
	'find-doctor-by-id': 'Select TCKimlikNO from doktor where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-patient-by-id': 'Select TCKimlikNO from hasta where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-patient-name-by-id': 'Select Isim, Soyisim from hasta where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-doctor-name-by-id': 'Select Isim, Soyisim from doktor where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-all-doctors-by-field-and-hospital': 'Select * from doktor where brans = ', // Add field name after query;
	'find-appointments-by-doctor-id': 'Select * from randevu join hasta on TCKimlikNo = HastaTCNo where DoktorTCNo = ', // Add TCKimlikNo after query;
	'find-appointments-by-doctor-id-before-today': 'Select * from randevu join hasta on TCKimlikNo = HastaTCNo where  TARIH < now()  and DoktorTCNo = ',
	'find-appointments-by-doctor-id-after-today': 'Select * from randevu join hasta on TCKimlikNo = HastaTCNo where  TARIH >= now()  and DoktorTCNo = ',
	'find-recent-appointment-by-patient-id': 'SELECT doktor.isim, doktor.soyisim, unvan, brans, hastaneadi, tarih, randevuNo FROM doktor as doktor, hasta as hasta, randevu as randevu WHERE doktor.tckimlikno = randevu.doktortcno and hasta.tckimlikno = randevu.hastatcno and tarih <= NOW() and hastatcno = ',
	'find-future-appointment-by-patient-id': 'SELECT doktor.isim, doktor.soyisim, unvan, brans, hastaneadi, tarih FROM doktor as doktor, hasta as hasta, randevu as randevu WHERE doktor.tckimlikno = randevu.doktortcno and hasta.tckimlikno = randevu.hastatcno and tarih > NOW() and hastatcno = ',
	'find-all-medicines': 'Select * from ilac',
	'find-direct-patient-by-id': 'Select * from hasta where TCKimlikNo = ', // Add TCKimlikNo after query;
	'find-medicine-detail-by-appointment-id': 'Select * from recete where randevuno = ', // Add randevuNo after query;
	'find-analysis-detail-by-appointment-id': 'Select * from tahlil where randevuno = ', // Add randevuNo after query;
	'find-disease-detail-by-appointment-id': 'Select * from hastalik where randevuno = ', // Add randevuNo after query;
	'find-report-detail-by-appointment-id': 'Select * from rapor where randevuno = ', // Add randevuNo after query;
	'count-all-appointments-by-doctor-id': 'Select count(*) as total from randevu where DoktorTCNo = ', // Add TCKimlikNo after query;
	'find-appoinment-by-patient-id': 'SELECT doktor.isim, doktor.soyisim, unvan, brans, hastaneadi, tarih FROM doktor as doktor, hasta as hasta, randevu as randevu WHERE doktor.tckimlikno = randevu.doktortcno and hasta.tckimlikno = randevu.hastatcno and hasta.tckimlikno = ', // Add TCKimlikNo after query;
	'find-appointment-analysis-by-id-and-randevu-no': 'Select * from tahlil where detayno = ', // Add detayNo after query; 
}

const add_medicine = (detayNo, randevuNo, IlacAdi, Aciklama, Tur, Doz, Periyot) => {
	return `INSERT INTO recete VALUES (${detayNo}, ${randevuNo}, '${IlacAdi}', '${Aciklama}', '${Tur}', '${Doz}', '${Periyot}')`
}

const add_analysis = (detayNo, randevuNo, TestGorseli, Aciklama, Tur) => {
	return `INSERT INTO tahlil VALUES (${detayNo}, ${randevuNo}, '${TestGorseli}', '${Aciklama}', '${Tur}')`
}

const add_disease = (detayNo, randevuNo, Aciklama, Belirtiler, Tur) => {
	return `INSERT INTO hastalik VALUES (${detayNo}, ${randevuNo}, '${Aciklama}', '${Belirtiler}', '${Tur}')`
}

const add_report = (detayNo, randevuNo, RaporSuresi, Aciklama, Tur) => {
	return `INSERT INTO rapor VALUES (${detayNo}, ${randevuNo}, '${RaporSuresi}', '${Aciklama}', '${Tur}')`
}

module.exports = { queries, add_medicine, add_analysis, add_disease, add_report }
