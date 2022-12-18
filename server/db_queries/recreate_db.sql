DROP DATABASE IF EXISTS HealthManagementSystem;
CREATE DATABASE HealthManagementSystem;
USE HealthManagementSystem;

CREATE TABLE HASTA (
	TCKimlikNo char(11) NOT NULL,
	Isim varchar(30) NOT NULL,
	Soyisim varchar(30) NOT NULL,
	KanGrubu varchar(6),
    Cinsiyet char,
	Boy int,
	Kilo int,
	DogumTarihi Date NOT NULL,
	PRIMARY KEY(TCKimlikNo)
);

CREATE TABLE HASTANE (
	HastaneAdi varchar(40) NOT NULL,
	TelefonNo varchar(11),
	Il varchar(15) NOT NULL,
	Ilce varchar(15) NOT NULL,
	Adres varchar(120) NOT NULL,
	PRIMARY KEY(HastaneAdi)
);

CREATE TABLE DOKTOR (
	TCKimlikNo char(11) NOT NULL,
	Isim varchar(15) NOT NULL,
	Soyisim varchar(15) NOT NULL,
	MezunOlduguUniversite varchar(40),
	Unvan varchar(15) NOT NULL,
	Brans varchar(30) NOT NULL,
	HastaneAdi char(40) NOT NULL,
	PRIMARY KEY(TCKimlikNo),
	CONSTRAINT CALISTIGIHASTANE FOREIGN KEY(HastaneAdi) REFERENCES HASTANE(HastaneAdi)
);

CREATE TABLE RANDEVU (
	RandevuNo char(9) NOT NULL,
	RandevuTuru varchar(15) NOT NULL,
	Tarih Date NOT NULL,
	DoktorTCNo char(11) NOT NULL,
	HastaTCNo char(11) NOT NULL,
	PRIMARY KEY(RandevuNo),
	CONSTRAINT HASTA_TC FOREIGN KEY(HastaTCNo) REFERENCES HASTA(TCKimlikNo),
	CONSTRAINT DOKTOR_TC FOREIGN KEY(DoktorTCNo) REFERENCES DOKTOR(TCKimlikNo)
);

CREATE TABLE ILAC (
	IlacAdi varchar(40) NOT NULL,
	KullanimSekli varchar(120),
	PRIMARY KEY(IlacAdi)
);

CREATE TABLE RAPOR (
    DetayNo     char(8) NOT NULL,
    RandevuNo char(9) NOT NULL,
    RaporSuresi TIME    NOT NULL,
    Aciklama    varchar(150),
    Tur         varchar(20),
    PRIMARY KEY(DetayNo),
    CONSTRAINT RANDEVUNORAPOR FOREIGN KEY(RandevuNo) REFERENCES RANDEVU(RandevuNo)
);

CREATE TABLE HASTALIK (
    DetayNo     char(8) NOT NULL,
    RandevuNo char(9) NOT NULL,
    Aciklama    varchar(150),
    Belirtiler    varchar(150),
    Tur         varchar(20),
    PRIMARY KEY(DetayNo),
    CONSTRAINT RANDEVUNOHASTALIK FOREIGN KEY(RandevuNo) REFERENCES RANDEVU(RandevuNo)
);

CREATE TABLE TAHLIL (
    DetayNo     char(8) NOT NULL,
    RandevuNo char(9) NOT NULL,
    TestGorseli varchar(100),
    Aciklama    varchar(150),
    Tur         varchar(20),
    PRIMARY KEY(DetayNo),
    CONSTRAINT RANDEVUNOTAHLIL FOREIGN KEY(RandevuNo) REFERENCES RANDEVU(RandevuNo)
);

CREATE TABLE RECETE (
	DetayNo char(8) NOT NULL,
	RandevuNo char(9) NOT NULL,
	IlacAdi varchar(40) NOT NULL,
	Aciklama    varchar(150),
    Tur         varchar(20),
	Doz varchar(10) NOT NULL,
	Periyot varchar(30) NOT NULL,
	PRIMARY KEY(DetayNo, IlacAdi),
	CONSTRAINT RECETE_ISTEKLERIILACKODUFK FOREIGN KEY(IlacAdi) REFERENCES ILAC(IlacAdi),
    CONSTRAINT RANDEVUNORECETE FOREIGN KEY(RandevuNo) REFERENCES RANDEVU(RandevuNo)
);