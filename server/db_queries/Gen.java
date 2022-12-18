import java.io.*;
import java.lang.*;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Gen {
    static String[] isimler = {"Iffet", "Sevtap", "Emine", "Gulen", "Dilan", "Ruhsar", "Berre", "Fatos", "Yagmur", "Gonul", "Munevver", "Kevser", "Derin", "Ilke", "Sennur", "Gokce", "Nazli", "Gunay", "Selin", "Idil", "Itir", "Benli", "Meral", "Vesile", "Ilgin", "Gulbahar", "Bercin", "Imran", "Yagmur", "Selma", "Bade", "Tezer", "Turna", "Ilayda", "Mine", "Gonca", "Firdevs", "Nalan", "Fahriye", "Ilksen", "Hande", "Nurgul", "Berran", "Destan", "Muesser", "Diclehan", "Anar", "Ilkben", "Sule", "Nihal", "Aysar", "Gamze", "Ceylinaz", "Cilay", "Zerrin", "Fureyya", "Reyhan", "Gunsel", "Ela", "Lerzan", "Kismet", "Vicdan", "Latife", "Kadriye", "Pakize", "Lamia", "Vahide", "Kevser", "Evsen", "Olcay", "Parla", "Mehtap", "Tezer", "Sevda", "Sevda", "Arin", "Muge", "Yosun", "Melek", "Bercin", "Ferah", "Alisa", "Selma", "Seval", "Serin", "Melis", "Zekiye", "Sule", "Idil", "Hilal", "Guher", "Nalan", "Nevra", "Diclehan", "Sevtap", "Adel", "Sevda", "Imge", "Siir", "Gunnur", "Eftalya", "Sevda", "Elcin", "Eysan", "Goksin", "Neslisah", "Andac", "Belemir", "Lale", "Miray", "Nukhet", "Bedran", "Seyma", "Fureyya", "Itir", "Yildiz", "Nergis", "Ceylan", "Handan", "Zuleyha", "Ozlen", "Adelya", "Anar", "Berceste", "Gunseli", "Ilksen", "Seval", "Amelya", "Elcin", "Bagdagul", "Didem", "Olcay", "Seval", "Zerrin", "Aykal", "Kamelya", "Guven", "Vicdan", "Isil", "Duygu", "Nalan", "Ahenk", "Vesile", "Melike", "Senay", "Izel", "Dilek", "Imge", "Serap", "Melis", "Bade", "Miray", "Rabia", "Yonca", "Tunay", "Melodi", "Cilvenaz", "Ruhsar", "Verda", "Ferda", "Nilgun", "Ikbal", "Ceyda", "Nilgun", "Nehir", "Merve", "Berceste", "Fulden", "Sehrazat", "Hande", "Mujde", "Nursel", "Derya", "Merih", "Sengul", "Alpike", "Amara", "Ecem", "Dondu", "Ferah", "Miray", "Leyla", "Zuleyha", "Gulcin", "Vuslat", "Nevin", "Acilay", "Kumru", "Bercin", "Ela", "Perihan", "Unsel", "Melek", "Rahsan", "Bercin", "Esmeray", "Rahime", "Nural", "Tulay", "Rahsan", "Turkan", "Besra", "Kismet", "Huner", "Cesminaz", "Idil", "Esen", "Ceyla", "Amelya", "Fusun", "Berran", "Dicle", "Vildan", "Acela", "Latife", "Zeynep", "Almila", "Hayat", "Fahriye", "Kader", "Seval", "Leyla", "Ceyla", "Ummiye", "Nalan", "Reyhan", "Anka", "Hazan", "Zumrut", "Umran", "Selen", "Ulfet", "Gonul", "Zeliha", "Sinem", "Handan", "Ece", "Esmeray", "Rengin", "Elcin", "Unsel", "Yelda", "Meral", "Latife", "Parla", "Zuhal", "Anar", "Nursel", "Lida", "Kevser", "Bedran", "Afra", "Dilara", "Misra", "Kader", "Nevra", "Ilknur", "Oksan", "Bade", "Amara", "Amelya", "Gulriz", "Peri", "Muesser", "Cagil", "Derin", "Amelya", "Sanem", "Hande", "Afitap", "Bediz", "Yonca", "Dilara", "Agca", "Elvan", "Cimen", "Yildiz", "Pelin", "Olcay", "Leman", "Senay", "Guven", "Cicek", "Firdevs", "Esmeray", "Kamuran", "Utku", "Gul", "Zuhal", "Selale", "Ceren", "Feriha", "Gunnur", "Gunseli", "Ceren", "Dondu", "Pelin", "Dondu", "Vahide", "Dilan", "Fusun", "Guldem", "Deste", "Ahenk", "Iclal", "Yesim", "Nukhet", "Pelinsu", "Cesminaz", "Nurseli", "Gulgun", "Anita", "Sevgi", "Lida", "Altin", "Aysil", "Elif", "Esin", "Gulsen", "Adelya", "Sevval", "Sule", "Canel", "Simge", "Kamuran", "Gurcan", "Rengin", "Handan", "Pelinsu", "Adel", "Guniz", "Zahide", "Miray", "Nihal", "Derya", "Nilgun", "Nida", "Bediz", "Latife", "Yasemin", "Nurgul", "Dunya", "Fikriye", "Gulriz", "Fikriye", "Fatos", "Berva", "Fikriye", "Nevin", "Besra", "Yesim", "Eda", "Ahlem", "Deste", "Guher", "Fahrunissa", "Vicdan", "Sunay", "Ece", "Bedran", "Tulay", "Zulal", "Senay", "Bercin", "Belma", "Feride", "Guniz", "Uygu", "Ipek", "Ilknur", "Imge", "Cangul", "Pembe", "Zuleyha", "Guher", "Nalan", "Muge", "Beltun", "Isil", "Isin", "Sanem", "Kadriye", "Cimen", "Miray", "Kiymet", "Ece", "Furuzan", "Selvi", "Gulgun", "Yildiz", "Turkan", "Zuleyha", "Anka", "Goknur", "Ozlen", "Siir", "Derya", "Zerrin", "Secil", "Defne", "Sanem", "Verda", "Fikriye", "Dilara", "Gonca", "Cigil", "Zeliha", "Gokben", "Seren", "Sevda", "Yelda", "Vahide", "Mihriban", "Siir", "Dilhan", "Besra", "Rezzan", "Berceste", "Derin", "Derin", "Duygu", "Acela", "Rengin", "Kiraz", "Goknur", "Meryem", "Ozlen", "Cicek", "Muge", "Figen", "Guven", "Nukhet", "Adel", "Aykal", "Yaprak", "Perran", "Senay", "Gonul", "Ulviye", "Nihan", "Serpil", "Esin", "Ceylin", "Sennur", "Nihal", "Siir", "Yesim", "Gulsen", "Lemide", "Cangul", "Durriye", "Gunseli", "Hande", "Ilkyaz", "Julide", "Berre", "Melodi", "Melek", "Guldeste", "Altin", "Acelya", "Neslisah", "Vildan", "Ilknur", "Secil", "Nil", "Tanyeli", "Dicle", "Melis", "Anka", "Altin", "Sengul", "Fuldem", "Kiymet", "Belma", "Rezzan", "Idil", "Guniz", "Destan", "Cilvenaz", "Defne", "Neslisah", "Behrem", "Sibel", "Dicle", "Julide", "Sermin", "Fusun", "Vahide", "Iffet", "Gulben", "Feray", "Fuldem", "Secil", "Behrem", "Almila", "Mukaddes", "Meral", "Funda", "Anita", "Neslisah", "Gulcin", "Muge", "Benice", "Cansin", "Melisa", "Anar", "Ahenk", "Yeliz", "Su", "Isil", "Kiraz", "Sertap", "Esmeray", "Esmeray", "Gunnur", "Ekin", "Eda", "Latife", "Bedran", "Tunay", "Firdevs", "Jale", "Balin", "Alvina", "Isik", "Dolunay", "Alisa", "Ozden", "Anka", "Seren", "Ulfet", "Isilay", "Sevil", "Yelda", "Oznur", "Yildiz", "Sevinc", "Ozden", "Ela", "Gokben", "Altin", "Mujgan", "Dondu", "Goksin", "Dilan", "Melda", "Bercin", "Ahenk", "Handan", "Serpil", "Isin", "Vesile", "Sevinc", "Munevver", "Neslisah", "Fulden", "Leyla", "Cilvenaz", "Ruhsar", "Utku", "Sengul", "Sevim", "Selvi", "Elif", "Neslisah", "Suzan", "Nevin", "Balin", "Gonca", "Ayren", "Ceren", "Meryem", "Ulker", "Gulben", "Ferda", "Fazilet", "Yagmur", "Tutku", "Derin", "Ferda", "Fusun", "Emel", "Didem", "Perihan", "Latife", "Berva", "Pervin", "Berre", "Gokben", "Belcim", "Gizem", "Yagmur", "Nisan", "Durriye", "Cesminaz", "Yonca", "Pembe", "Selma", "Nisa", "Anita", "Nevin", "Firdevs", "Asuela", "Lerzan", "Cesminaz", "Ceylin", "Ozlen", "Kadriye", "Melike", "Selen", "Melis", "Derya", "Latife", "Songul", "Gungor", "Ceylin", "Ozlen", "Kismet", "Eser", "Kevser", "Iffet", "Nil", "Melda", "Cisil", "Guniz", "Adelya", "Abendam", "Rana", "Kevser", "Isik", "Mehtap", "Seval", "Kevser", "Seden", "Kadriye", "Yildiz", "Enise", "Esen", "Yosun", "Eysan", "Deniz", "Gokben", "Lamia", "Leman", "Benice", "Ecem", "Ulku", "Enise", "Iclal", "Sedef", "Cansin", "Fatma", "Asuela", "Nazan", "Cisil", "Gurcan", "Hayal", "Ilknur", "Sunay", "Yaprak", "Nurseli", "Munevver", "Vesile", "Ahenk", "Isin", "Ceyda", "Zerrin", "Gulriz", "Nihan", "Melda", "Amelya", "Nur", "Su", "Ilayda", "Cagil", "Meryem", "Perran", "Hayat", "Cise", "Miray", "Hande", "Isil", "Selin", "Gokben", "Yonca", "Guner", "Fuldem", "Rezzan", "Simge", "Hande", "Iffet", "Adel", "Semra", "Serin", "Ummiye", "Emel", "Irem", "Dunya", "Oyku", "Nisan", "Imran", "Gulsen", "Bediz", "Tulin", "Selvi", "Afra", "Merih", "Fatos", "Hande", "Sevtap", "Sertap", "Cilay", "Lemide", "Pervin", "Dilberay", "Dilan", "Guher", "Mihriban", "Ilkben", "Hande", "Ilkyaz", "Nuran", "Asuela", "Ulku", "Ecem", "Senay", "Eda", "Sehrazat", "Melda", "Sennur", "Guven", "Seval", "Alisa", "Anise", "Agca", "Ulker", "Zulal", "Unsel", "Necla", "Meral", "Bade", "Benice", "Feride", "Dilberay", "Guniz", "Dilara", "Sengul", "Ruhsar", "Latife", "Lemide", "Gulen", "Yagmur", "Feride", "Nevra", "Melis", "Nurgul", "Cicek", "Necla", "Nevra", "Feray", "Fahrunissa", "Behrem", "Anita", "Nihan", "Semra", "Kader", "Cigil", "Verda", "Zulal", "Cisil", "Sibel", "Rahsan", "Kamile", "Hilal", "Gunes", "Lamia", "Hayat", "Yelda", "Nukhet", "Meltem", "Meric", "Ekin", "Feyza", "Diler", "Unsel", "Ulviye", "Pelinsu", "Alvina", "Cagla", "Ceren", "Yildiz", "Uygu", "Deste", "Necla", "Pervin", "Meric", "Selma", "Esin", "Furuzan", "Tunay", "Elif", "Kiymet", "Aysil", "Kader", "Piraye", "Enise", "Kamelya", "Isin", "Unseli", "Durriye", "Derin", "Sibel", "Fikriye", "Ruya", "Acela", "Kevser", "Yaprak", "Fureyya", "Fusun", "Gunsel", "Zerrin", "Tanyeli", "Neslisah", "Hulya", "Guniz", "Nazan", "Ulfet", "Yesim", "Ozden", "Sema", "Cangul", "Melis", "Gulnaz", "Gulden", "Gulgun", "Ilkyaz", "Vesile", "Pembe", "Nehir", "Verda", "Sengul", "Oksan", "Emel", "Isil", "Handan", "Kiymet", "Hulya", "Zuleyha", "Ulviye", "Derya", "Acelya", "Irem", "Cimen", "Esmeray", "Selen", "Turkan", "Zeliha", "Ela", "Aslim", "Enise", "Fikriye", "Leyla", "Gaye", "Funda", "Nursel", "Ela", "Sehrazat", "Yildiz", "Furuzan", "Yesim", "Elcin", "Sennur", "Hazan", "Serpil", "Guldeste", "Gulsen", "Nisa", "Bercin", "Perihan", "Zahide", "Guniz", "Rahsan", "Seher", "Diclehan", "Yelda", "Gunsel", "Canel", "Hazan", "Ulfet", "Belcim", "Senay", "Oznur", "Filiz", "Mukaddes", "Eftalya", "Besra", "Amelya", "Idil", "Muesser", "Nazli", "Humeyra", "Nazli", "Yonca", "Selma", "Filiz", "Derya", "Latife", "Perihan", "Fikriye", "Ciler", "Seyma", "Mihriban", "Seda", "Nalan", "Vildan", "Alpike", "Eser", "Gizem", "Senay", "Ece", "Oya", "Cigil", "Mihriban", "Guher", "Inci", "Hayal", "Rahime", "Imran", "Kadriye", "Ilgin", "Furuzan", "Firdevs", "Gonul", "Gonca", "Ozden", "Gulgun", "Anka", "Gulsen", "Seda", "Sunay", "Filiz", "Nilgun", "Senay", "Seyma", "Nevin", "Rabia", "Asuela", "Necla", "Diler", "Aykal", "Adelya", "Gulsen", "Diler", "Fahrunissa", "Selvi", "Isin", "Cigil", "Fureyya", "Hulya", "Sevda", "Ozden", "Ciler", "Sevtap", "Utku", "Muesser", "Fehime", "Parla", "Ozge", "Melodi", "Besra", "Belcim", "Kumru", "Ozge", "Olcay", "Cagil", "Gulen", "Nur", "Hale", "Sila", "Ferah", "Belcim", "Adelya", "Sila", "Gulden", "Mukaddes", "Altin", "Gozde", "Ozden", "Nisa", "Evsen", "Yeliz", "Ceylin", "Ozge", "Tanyeli", "Leyla", "Sunay", "Secil", "Emel", "Reyhan","Devran", "Nihat", "Sergen", "Tekinalp", "Ramazan", "Baris", "Hamza", "Mukadder", "Nadi", "Huzeyfe", "Mehmet", "Cemil", "Ferhan", "Kabil", "Feyyaz", "Sahin", "Muzaffer", "Barkin", "Cafer", "Faruk", "Doganer", "Sir", "Ulker", "Raif", "Erkâm", "Enis", "Nadir", "Gazanfer", "Ulker", "Kadem", "Davud", "Lamih", "Hamza", "Yasar", "Zihnî", "Besim", "Tarik", "Baykal", "Ecmel", "Yusuf", "Aktimur", "Cevahir", "Musir", "Habib", "Timur", "Berat", "Semsi", "Ilkay", "Avni", "Hafid", "Nurettin", "Baris", "Berk", "Bahadir", "Kamber", "Canalp", "Hafid", "Sahin", "Babacan", "Kerami", "Hilmi", "Mithat", "Tezcan", "Affan", "Kalender", "Fatin", "Ayhan", "Nahid", "Giray", "Emre", "Feyzullah", "Muktedi", "Mansur", "Said", "Omer", "Bâki", "Mir", "Halit", "Cevat", "Sehlevent", "Kagan", "Vahâ", "Habib", "Isiner", "Esref", "Koray", "Sadi", "Emir", "Kadem", "Muslih", "Yilmaz", "Sidki", "Seyfi", "Semih", "Ethem", "Cezmi", "Avni", "Coskun", "Aktekin", "Mesut", "Erdem", "Ferhat", "Resat", "Âmir", "Alp", "Afsin", "Veysi", "Ziver", "Suat", "Ezrak", "Yasar", "Hasmet", "Sadi", "Sururi", "Evren", "Seyban", "Âmir", "Oguz", "Fazil", "Ceyhun", "Sahsuvar", "Bedreddin", "Musa", "Erberk", "Husnu", "Hilmi", "Sirri", "Durmus", "Usame", "Refik", "Bera", "Behcet", "Durmus", "Neset", "Ekmel", "Tufan", "Mahir", "Hattâb", "Kerami", "Haluk", "Afi", "Ali", "Hatip", "Hamit", "Taskin", "Sâkip", "Ediz", "Ercument", "Kubat", "Kerami", "Canalp", "Lamih", "Talay", "Huccet", "Musir", "Rakip", "Can", "Mahmut", "Bedirhan", "Yasin", "Sâfi", "Sadullah", "Cuneyt", "Nejat", "Berkan", "Fatih", "Kerem", "Payidar", "Bahtiyar", "Nizamettin", "Hizir", "Aydin", "Oguzhan", "Selami", "Efe", "Zekai", "Nazim", "Keremsah", "Gaffar", "Erdem", "Sihabeddin", "Cubeyr", "Sadri", "Usame", "Mujdat", "Muktedir", "Sayan", "Eray", "Muhterem", "Ecmel", "Ergun", "Seyfullah", "Eralp", "Nasrullah", "Canalp", "Erol", "Izzet", "Harun", "Haydar", "Suat", "Sirri", "Saim", "Ugur", "Turkay", "Ziyad", "Doganay", "Nihat", "Tekinalp", "Hafid", "Serhat", "Taskin", "Misbah", "Bayram", "Dâver", "Efken", "Enes", "Yumni", "Serbulent", "Coskuner", "Ferman", "Tekinalp", "Afi", "Erberk", "Tevfik", "Tumer", "Ecmel", "Sirri", "Mirkelam", "Gurkan", "Dilhan", "Mutemed", "Hâtem", "Huzeyfe", "Muammer", "Erel", "Âmir", "Haki", "Barin", "Tezcan", "Alisan", "Aktekin", "Ramiz", "Cemil", "Ercan", "Kemâl", "Berat", "Husrev", "Ozer", "Ilker", "Sir", "Yasin", "Ahmet", "Hasin", "Cevat", "Ahmet", "Kamran", "Mir", "Erkâm", "Bulut", "Bunyamin", "Cagdas", "Hafid", "Muharrem", "Namik", "Fuzuli", "Osman", "Haydar", "Emin", "Muren", "Cemil", "Yalcin", "Harun", "Davud", "Direnc", "Beser", "Lutfullah", "Ayvaz", "Fevzi", "Ekrem", "Batur", "Hursit", "Hazar", "Azmi", "Kenan", "Nabi", "Ferda", "Sehlevent", "Hâlis", "Cemil", "Tezel", "Sahap", "Cagri", "Sadullah", "Ferit", "Hifzi", "Ceyhun", "Daghan", "Umit", "Ferruh", "Necib", "Seyyit", "Edhem", "Ayhan", "Temel", "Refet", "Mahzun", "Daghan", "Hikmet", "Tevfik", "Emir", "Remzi", "Mutahhar", "Nahil", "Dora", "Tahir", "Tamer", "Nurettin", "Selami", "Efken", "Peyami", "Onur", "Aytac", "Yuksel", "Ferhan", "Abay", "Recep", "Bugra", "Safa", "Feyzullah", "Ayhan", "Cubeyr", "Ersin", "Nedim", "Kadrican", "Egemen", "Erman", "Selim", "Yasin", "Muttalib", "Sayan", "Dildâr", "Seyfettin", "Ramiz", "Ziya", "Habil", "Musa", "Kadir", "Tevhid", "Cemal", "Kâzim", "Bartu", "Rustu", "Efsun", "Mujdat", "Rustu", "Turan", "Osman", "Ata", "Taner", "Ramiz", "Durmus", "Semsi", "Sihab", "Peyami", "Avsar", "Altemur", "Ufuk", "Barkin", "Batur", "Usame", "Abay", "Faik", "Aytekin", "Yigit", "Taner", "Fasih", "Mazhar", "Dâver", "Nizamettin", "Ismail", "Kenan", "Ridvan", "Ercin", "Kâmil", "Talay", "Hacib", "Aytac", "Melih", "Tevhid", "Tamer", "Izzettin", "Edhem", "Acar", "Behzat", "Ozgur", "Suleyman", "Gongor", "Nurettin", "Hayati", "Haldun", "Husrev", "Erdem", "Evren", "Batuhan", "Nurullah", "Cubeyr", "Dinc", "Kemalettin", "Ergin", "Erda", "Cafer", "Nevzat", "Asim", "Salim", "Yuksel", "Safa", "Mert", "Mestan", "Coskuner", "Sâkip", "Humayun", "Erberk", "Kerami", "Barlas", "Egemen", "Talat", "Giyas", "Ilhan", "Gongor", "Turgay", "Mesut", "Tunc", "Hazar", "Ercument", "Sâkip", "Gurhan", "Seyyit", "Coskun", "Ferhan", "Nasrullah", "Recep", "Ikbal", "Erman", "Furkân", "Enis", "Hamdullah", "Tayfun", "Huma", "Ukbe", "Atilla", "Metin", "Kamber", "Rafet", "Hasim", "Nafiz", "Cagri", "Mirac", "Seyfullah", "Sadik", "Gongor", "Alican", "Sermet", "Sarani", "Kadi", "Ergun", "Meliksah", "Tahir", "Besim", "Turgut", "Eren", "Kalender", "Bartu", "Hifzi", "Cahid", "Seckin", "Erda", "Yalcin", "Afi", "Muhterem", "Ismet", "Saffet", "Okan", "Nusret", "Fikri", "Yasar", "Cevat", "Gaffar", "Celal", "Ezrak", "Gunay", "Tarik", "Cenk", "Emrullah", "Zâfir", "Serif", "Ede", "Mehmet", "Eren", "Anil", "Yetkin", "Hâtem", "Fahrettin", "Sururi", "Efsun", "Sevket", "Tarkan", "Irfan", "Hazim", "Coskuner", "Asim", "Ridvan", "Ergun", "Mukadder", "Talha", "Numan", "Mirkelam", "Kerim", "Faris", "Ziyad", "Aytekin", "Durmus", "Bilâl", "Cemal", "Bedirhan", "Vahâ", "Berkay", "Senol", "Durmus", "Nahil", "Vahâ", "Hasan", "Zeynel", "Muren", "Selim", "Suleyman", "Ilyas", "Dincer", "Hayati", "Atif", "Yetkin", "Aykan", "Vedat", "Gazanfer", "Memduh", "Ilker", "Seyyit", "Eymen", "Kuddusi", "Rifat", "Erman", "Ender", "Tayfun", "Ersin", "Fazullah", "Habbab", "Behzat", "Yaman", "Resul", "Sahsuvar", "Babacan", "Kadi", "Baha", "Ergin", "Babacan", "Hakem", "Sami", "Dervis", "Dervis", "Kessaf", "Cetiner", "Himmet", "Hammâd", "Veysi", "Riza", "Fikri", "Itri", "Rafet", "Zâhit", "Fatin", "Tugay", "Ozcan", "Ufuk", "Caner", "Keremsah", "Enis", "Keles", "Kadir", "Yener", "Hami", "Vefik", "Muzdad", "Akiner", "Umut", "Ozer", "Omer", "Ozden", "Fatin", "Cihan", "Dikmen", "Sadettin", "Ozden", "Remzi", "Ferruh", "Cagri", "Ilker", "Dogu", "Hudayi", "Volkan", "Dogan", "Misbah", "Cihan", "Uzeyir", "Bahtiyar", "Hakem", "Tayyar", "Gazi", "Esref", "Bahadir", "Muhtesem", "Refet", "Tolga", "Ayvaz", "Erberk", "Barkin", "Feda", "Lamih", "Ethem", "Aydin", "Fedai", "Beser", "Sadettin", "Seckin", "Gorkem", "Necati", "Mutemed", "Barlas", "Celil", "Ant", "Veli", "Feramuz", "Ferhan", "Server", "Evran", "Harun", "Muktefi", "Sahin", "Maksud", "Samil", "Ridvan", "Rifat", "Sehlevent", "Ikbal", "Refah", "Gorkem", "Dundar", "Bahtiyar", "Oktay", "Zekeriyyâ", "Ata", "Volkan", "Talay", "Adem", "Enver", "Ridvan", "Cihan", "Hudayi", "Bedreddin", "Serafettin", "Ilhan", "Muzdad", "Fikri", "Selahattin", "Erel", "Hani", "Hayali", "Sinan", "Avsar", "Avsar", "Taner", "Muammer", "Oktay", "Ebuzer", "Ecmel", "Kagan", "Ecmel", "Battal", "Dincer", "Ozcan", "Kemâl", "Celil", "Ali", "Erkâm", "Huseyin", "Remzi", "Emrullah", "Sergen", "Gokmen", "Cagrihan", "Altan", "Kadem", "Akiner", "Aytekin", "Mahir", "Guven", "Nurullah", "Mestan", "Durmus", "Behlul", "Ramazan", "Ercin", "Asim", "Mirkelam", "Zafer", "Haluk", "Safa", "Nesim", "Zâhit", "Umur", "Erman", "Ant", "Mumtaz", "Cem", "Harun", "Cemil", "Abidin", "Meliksah", "Ali", "Caglar", "Samil", "Kuddusi", "Hattâb", "Seyfettin", "Gunay", "Turkay", "Ayvaz", "Cagdas", "Dundar", "Ergin", "Berkin", "Demiralp", "Ulgen", "Daghan", "Faris", "Demirhan", "Askin", "Tevfik", "Ercument", "Fuat", "Dogu", "Egemen", "Resul", "Mevlut", "Ziya", "Muhterem", "Hulusi", "Tamer", "Kadem", "Sinasi", "Fahrettin", "Cihad", "Reha", "Rakip", "Gokmen", "Gulhan", "Ertan", "Enes", "Akalp", "Gevheri", "Sadullah", "Altemur", "Gurdal", "Irfan", "Batu", "Tuhfe", "Tunc", "Namik", "Bekir", "Atakan", "Hammâd", "Server", "Aytug", "Emin", "Himmet", "Sadberk", "Muktedir", "Suat", "Yahya", "Ceyhun", "Okan", "Cezmi", "Cuneyt", "Tufan", "Naim", "Ercan", "Bilâl", "Daghan", "Hakki", "Ferit", "Gaffar", "Direnc", "Nesim", "Akiner", "Guner", "Beser", "Salim", "Mevlut", "Selahattin", "Seyfettin", "Ozer", "Sâkip", "Tunahan", "Muslih", "Ergin", "Saffet", "Ilkay", "Hasin", "Mutasim", "Yetkin", "Alp", "Sabri", "Karahan", "Hasim", "Evren", "Ecmel", "Salih", "Yilmaz", "Faruk", "Mujdat", "Cagatay", "Hilmi", "Kadem", "Hasibi", "Tahir", "Subhi", "Taib", "Ulker", "Mustafa", "Yigit", "Hisam", "Gultekin", "Umur", "Beser", "Maad", "Samed", "Hilmi", "Batur", "Sinasi", "Ulker", "Muhsin", "Faris", "Tahir", "Seyfullah", "Mahzun", "Ersan", "Berkay", "Nadi", "Vehbi", "Ikbal", "Akiner", "Fatin", "Talat", "Tevfik", "Hasan", "Volkan", "Fehmi", "Muaz", "Haluk", "Guvenalp", "Yildirim", "Arslan", "Afi", "Cemali", "Behram", "Munir", "Hisam", "Akalp", "Haldun", "Ufuk", "Bâki", "Koray", "Namik", "Ferhan", "Affan", "Tuhfe", "Korkut", "Enderun", "Nadir", "Samil", "Muzaffer", "Gurhan", "Ahmet", "Husamettin", "Hasmet", "Hamza", "Kadi", "Zeyd", "Rasim", "Dikmen", "Mir", "Ertugrul", "Mazhar", "Ikbal", "Zeyd", "Atakan", "Emin", "Sadettin", "Ferhat", "Cevahir", "Behcet", "Nusret", "Sahsuvar", "Ziya", "Burhan", "Ulvi", "Hizir", "Turan", "Faysal", "Aytac", "Ihsan", "Kerim", "Dâver", "Suleyman", "Tugtekin", "Asim", "Sener", "Erguner", "Izzet", "Sâfi", "Kursad", "Atif", "Sayan", "Niyazi", "Turan", "Yasin", "Behcet", "Fatin", "Uzeyir", "Turkay", "Memduh", "Ferruh", "Habil", "Hamit", "Neset", "Samim", "Celasun", "Bahtiyar", "Hulki", "Vefa", "Cagrihan", "Pertev", "Zâfir", "Keles", "Muammer", "Tugrul", "Halil", "Yetkin", "Koray", "Atalay", "Hasin", "Behzat", "Selcuk", "Akin", "Aktekin", "Vedat", "Fatih", "Rifat", "Memduh", "Barlas", "Ramiz", "Aykan", "Cafer", "Dildâr", "Vahâ", "Enderun", "Alper", "Hâtem", "Gultekin", "Hilmi", "Guner", "Keles", "Remzi", "Emrah", "Yalcin", "Abidin", "Huccet", "Zâfir", "Adnân", "Yener", "Naim", "Ergin", "Humayun", "Caglar", "Mirkelam", "Zâhit", "Turkes", "Yumni", "Âmir", "Yuce", "Ertugrul", "Sahsuvar"};
    static String[] soyisim = {"Kocoglu", "Kucukler", "Oraloglu", "Kunter", "Ayverdi", "Tunceri", "Alpugan", "Ozdenak", "Tekelioglu", "Denkel", "Kocabiyik", "Keseroglu", "Topaloglu", "Pektemek", "Pekkan", "Bakircioglu", "Akal", "Dagdas", "Ozansoy", "Yazici", "Duygulu", "Kucukler", "Tasli", "Suleymanoglu", "Topcuoglu", "Yildirim", "Arslanoglu", "Ilicali", "Abaci", "Oztonga", "Tasci", "Velioglu", "Akar", "Dalkiran", "Hakyemez", "Ayaydin", "Tokgoz", "Asikoglu", "Demirbas", "Erez", "Eronat", "Erdogan", "Cetiner", "Koc", "Akar", "Aydan", "Dagdas", "Basoglu", "Oztonga", "Demirbas", "Poyrazoglu", "Erkekli", "Kavaklioglu", "Aclan", "Kuday", "Tokatlioglu", "Evliyaoglu", "Denkel", "Limoncuoglu", "Cevik", "Toraman", "Bakircioglu", "Erbulak", "Yorulmaz", "Kumcuoglu", "Cevik", "Atan", "Tasci", "Yetkiner", "Kutlay", "Sarioglu", "Gumuspala", "Agaoglu", "Abadan", "Velioglu", "Yetkiner", "Dizdar", "Kuzucu", "Kunter", "Akgul", "Pektemek", "Dagdas", "Kaplangi", "Topaloglu", "Tutuncu", "Tokatlioglu", "Erdogan", "Ayverdi", "Solmaz", "Sozeri", "Ozberk", "Ozberk", "Bolatli", "Asikoglu", "Ekici", "Kunt", "Cetin", "Erdogan", "Duygulu", "Tuglu", "Kahveci", "Samanci", "Erbulak", "Mayhos", "Elmastasoglu", "Topaloglu", "Hakyemez", "Yorulmaz", "Denkel", "Nalbantoglu", "Barbarosoglu", "Dalkiran", "Aksit", "Tazegul", "Akan", "Pektemek", "Kilicci", "Sarioglu", "Aybar", "Okumus", "Sandalci", "Balci", "Cevik", "Ayaydin", "Keseroglu", "Karabulut", "Cetin", "Tuglu", "Toraman", "Akaydin", "Karaer", "Sezek", "Sarioglu", "Topcuoglu", "Polat", "Tanrikulu", "Sinanoglu", "Sandalci", "Nalbantoglu", "Tokatlioglu", "Aksit", "Erez", "Arslanoglu", "Kaya", "Oztuna", "Yorulmaz", "Turkyilmaz", "Tugluk", "Besok", "Elciboga", "Yorulmaz", "Elmastasoglu", "Alniacik", "Gunday", "Kocyigit", "Polat", "Menemencioglu", "Demirel", "Besok", "Oztonga", "Turkdogan", "Kumcuoglu", "Turkdogan", "Atan", "Capanoglu", "Paksut", "Akan", "Ercetin", "Yalcin", "Uca", "Adan", "Keseroglu", "Koyluoglu", "Cetin", "Erbulak", "Sezek", "Kutlay", "Dogan", "Ekici", "Akyurek", "Evliyaoglu", "Limoncuoglu", "Poyrazoglu", "Yalcin", "Uca", "Kutlay", "Adal", "Ozansoy", "Eksioglu", "Tasli", "Dizdar", "Orbay", "Tekand", "Kormukcu", "Hakyemez", "Capanoglu", "Egeli", "Basoglu", "Oztuna", "Aksit", "Tugluk", "Erkekli", "Sarioglu", "Akay", "Kavaklioglu", "Kavaklioglu", "Oraloglu", "Pektemek", "Demirbas", "Sepetci", "Tutuncu", "Capanoglu", "Nalbantoglu", "Erbulak", "Oztuna", "Erdogan", "Gurmen", "Mayhos", "Balci", "Akbulut", "Solmaz", "Avan", "Kasapoglu", "Ozbey", "Erbay", "Ozdenak", "Turkdogan", "Gumuspala", "Ilicali", "Daglaroglu", "Kuday", "Tugluk", "Aksit", "Aykac", "Hakyemez", "Koyuncu", "Okur", "Aclan", "Gunday", "Cetin", "Dizdar", "Durmaz", "Topaloglu", "Aykac", "Kocyigit", "Tasci", "Koyuncu", "Catalbas", "Nebioglu", "Erginsoy", "Akay", "Tekand", "Cetiner", "Erginsoy", "Suleymanoglu", "Ozberk", "Adivar", "Erturk", "Adal", "Karabocek", "Numanoglu", "Ercetin", "Elicin", "Bicer", "Denkel", "Yazici", "Oraloglu", "Erturk", "Catalbas", "Bademci", "Cagiran", "Ozkara", "Barbarosoglu", "Ekici", "Koyluoglu", "Oztonga", "Aksit", "Kilicci", "Okumus", "Ozgorkey", "Toraman", "Akan", "Egeli", "Koyluoglu", "Arican", "Kurutluoglu", "Sandalci", "Kurutluoglu", "Erturk", "Tahincioglu", "Adivar", "Yazici", "Kavaklioglu", "Bicer", "Hamzaoglu", "Sayginer", "Tahincioglu", "Evliyaoglu", "Sarioglu", "Yalcin", "Karabulut", "Karaer", "Kuzucu", "Dusenkalkar", "Karaer", "Bicer", "Limoncuoglu", "Pekkan", "Karadas", "Kutlay", "Aksit", "Ilicali", "Kumcuoglu", "Yetkiner", "Kormukcu", "Limoncuoglu", "Orge", "Ekici", "Cevik", "Koyuncu", "Cagiran", "Durak", "Bakircioglu", "Aclan", "Akisik", "Sarioglu", "Atakol", "Akar", "Bolatli", "Sozeri", "Dalkiran", "Kuzucu", "Sinanoglu", "Ozberk", "Baykam", "Balaban", "Tekand", "Koybasi", "Cetin", "Egeli", "Tasli", "Ertepinar", "Ozgorkey", "Erdogan", "Tuglu", "Elicin", "Abaci", "Akal", "Karabulut", "Ozbir", "Cevik", "Erkekli", "Koyluoglu", "Akar", "Ayverdi", "Dalkiran", "Erginsoy", "Akbulut", "Demirbas", "Sadiklar", "Kasapoglu", "Gunday", "Akisik", "Akyuz", "Koyuncu", "Karaer", "Adan", "Menemencioglu", "Gurmen", "Dusenkalkar", "Sarioglu", "Yildizoglu", "Evliyaoglu", "Kurutluoglu", "Yildirim", "Atakol", "Akay", "Sinanoglu", "Daglaroglu", "Cevik", "Kavaklioglu", "Kocyigit", "Ozgorkey", "Oymen", "Okumus", "Erginsoy", "Poyrazoglu", "Nalbantoglu", "Turkdogan", "Akal", "Catalbas", "Gurmen", "Okur", "Tugluk", "Sinanoglu", "Babaoglu", "Akan", "Tutuncu", "Egeli", "Dusenkalkar", "Tutuncu", "Yilmazer", "Mertoglu", "Dogan", "Akbulut", "Sinanoglu", "Yesilkaya", "Besok", "Basoglu", "Oymen", "Camdali", "Koybasi", "Gumuspala", "Karaer", "Atan", "Bolatli", "Kumcuoglu", "Hakyemez", "Kucukler", "Sadiklar", "Paksut", "Okur", "Balci", "Tasci", "Tasci", "Barbarosoglu", "Okumus", "Balci", "Alniacik", "Aclan", "Arslanoglu", "Akay", "Ayaydin", "Okumus", "Adal", "Kececi", "Balci", "Bademci", "Tokatlioglu", "Yorulmaz", "Arican", "Mertoglu", "Karaduman", "Akyurek", "Kaplangi", "Onur", "Cevik", "Dagdas", "Korol", "Baykam", "Arslanoglu", "Dalkiran", "Kucukler", "Elmastasoglu", "Erkekli", "Kilicci", "Bicer", "Yilmazer", "Erkekli", "Okur", "Tahincioglu", "Oztuna", "Kormukcu", "Akay", "Karabocek", "Poyrazoglu", "Tutuncu", "Kunter", "Kaya", "Sezek", "Korol", "Asikoglu", "Durak", "Yildirim", "Gumuspala", "Aksit", "Ozdenak", "Ozdenak", "Gunday", "Pektemek", "Karabulut", "Erturk", "Dusenkalkar", "Topcuoglu", "Elicin", "Nalbantoglu", "Pocan", "Egeli", "Sayginer", "Tekand", "Mertoglu", "Suleymanoglu", "Denkel", "Arslanoglu", "Sepetci", "Pektemek", "Pekkan", "Ilicali", "Erdogan", "Solmaz", "Atan", "Dalkiran", "Karaduman", "Tunaboylu", "Kilicci", "Atan", "Poyrazoglu", "Egeli", "Bakircioglu", "Duygulu", "Akay", "Babacan", "Aksit", "Adal", "Daglaroglu", "Aybar", "Kunt", "Tasci", "Dagdas", "Bolatli", "Turkyilmaz", "Akal", "Koc", "Dusenkalkar", "Dagdas", "Ertepinar", "Tutuncu", "Tunaboylu", "Elicin", "Limoncuoglu", "Karaduman", "Erbay", "Aksit", "Kaplangi", "Kaplangi", "Erberk", "Ilicali", "Kuday", "Dogan", "Okumus", "Turkdogan", "Abaci", "Akgul", "Besok", "Egeli", "Tasli", "Durak", "Oztuna", "Besok", "Akisik", "Sarioglu", "Ozdenak", "Kunter", "Tasci", "Elmastasoglu", "Ozkara", "Ayverdi", "Barbarosoglu", "Basoglu", "Kocoglu", "Durak", "Sinanoglu", "Polat", "Sadiklar", "Akgul", "Babaoglu", "Demirel", "Agaoglu", "Abadan", "Tahincioglu", "Denkel", "Abaci", "Solmaz", "Kahveci", "Akgul", "Adivar", "Kulaksizoglu", "Bakircioglu", "Aksit", "Keseroglu", "Suleymanoglu", "Sarioglu", "Sepetci", "Capanoglu", "Akan", "Kececi", "Karaer", "Kocabiyik", "Orbay", "Aykac", "Pocan", "Bademci", "Orbay", "Ozberk", "Akgul", "Kasapoglu", "Denkel", "Avan", "Kuzucu", "Balci", "Limoncuoglu", "Akal", "Kunt", "Eksioglu", "Kirac", "Tokgoz", "Erberk", "Besok", "Sozeri", "Oraloglu", "Kocabiyik", "Oymen", "Oztonga", "Adan", "Okur", "Akgul", "Erez", "Sayginer", "Abadan", "Adan", "Erturk", "Turkyilmaz", "Elicin", "Hamzaoglu", "Aksit", "Ozgorkey", "Sayginer", "Koyluoglu", "Ozbir", "Evliyaoglu", "Turkdogan", "Kucukler", "Orbay", "Uca", "Egeli", "Cevik", "Kumcuoglu", "Akaydin", "Gonultas", "Hakyemez", "Kirac", "Eronat", "Basoglu", "Ekici", "Beserler", "Baykam", "Cevik", "Cagiran", "Oraloglu", "Besok", "Adal", "Sozeri", "Pocan", "Alpugan", "Oztuna", "Abaci", "Kavaklioglu", "Orbay", "Mayhos", "Nebioglu", "Beserler", "Daglaroglu", "Arslanoglu", "Besok", "Turkdogan", "Cevik", "Ozdenak", "Kunter", "Aykac", "Kaya", "Ozansoy", "Kaya", "Nalbantoglu", "Ozansoy", "Dalkiran", "Yildizoglu", "Cetin", "Nalbantoglu", "Okumus", "Arslanoglu", "Balci", "Sozeri", "Nebioglu", "Kececi", "Cetiner", "Okur", "Barbarosoglu", "Adal", "Kavaklioglu", "Kuzucu", "Aksit", "Balaban", "Tanrikulu", "Yalcin", "Evliyaoglu", "Baturalp", "Karabocek", "Kurutluoglu", "Tunceri", "Ozbir", "Yildizoglu", "Yetkiner", "Menemencioglu", "Elmastasoglu", "Karaer", "Ozbey", "Hakyemez", "Tugluk", "Cetiner", "Hamzaoglu", "Mertoglu", "Akman", "Sepetci", "Alpugan", "Yildirim", "Tuzun", "Kormukcu", "Cagiran", "Karadas", "Koc", "Adan", "Dizdar", "Kececi", "Paksut", "Akbulut", "Velioglu", "Dalkiran", "Hamzaoglu", "Tekand", "Pektemek", "Polat", "Poyrazoglu", "Abadan", "Karadas", "Kunt", "Catalbas", "Demirel", "Tanrikulu", "Paksut", "Sezek", "Ilicali", "Asikoglu", "Kececi", "Hamzaoglu", "Bicer", "Koybasi", "Kilicci", "Gunday", "Menemencioglu", "Sandalci", "Ilicali", "Limoncuoglu", "Adivar", "Topaloglu", "Karabulut", "Denkel", "Keseroglu", "Tutuncu", "Pekkan", "Baykam", "Tokatlioglu", "Berberoglu", "Arican", "Adan", "Bolatli", "Kormukcu", "Cagiran", "Evliyaoglu", "Aybar", "Kunt", "Durak", "Samanci", "Tugluk", "Oztonga", "Erkekli", "Tutuncu", "Yildirim", "Korol", "Cagiran", "Erbay", "Dizdar", "Erdogan", "Akyuz", "Pektemek", "Aybar", "Demirel", "Besok", "Arslanoglu", "Dalkiran", "Yilmazer", "Sarioglu", "Kaplangi", "Agaoglu", "Catalbas", "Sarioglu", "Agaoglu", "Paksut", "Yesilkaya", "Egeli", "Koybasi", "Daglaroglu", "Gunday", "Kavaklioglu", "Beserler", "Yorulmaz", "Akbulut", "Uca", "Ozdogan", "Tasci", "Asikoglu", "Sozeri", "Ercetin", "Elmastasoglu", "Samanci", "Kocabiyik", "Yorulmaz", "Besok", "Kirac", "Limoncuoglu", "Koc", "Ayaydin", "Kunter", "Denkel", "Velioglu", "Basoglu", "Kahveci", "Kocabiyik", "Kahveci", "Kaplangi", "Arican", "Pocan", "Duygulu", "Besok", "Tazegul", "Akman", "Gonultas", "Aydan", "Kucukler", "Uca", "Kahveci", "Dagdas", "Cevik", "Elmastasoglu", "Akaydin", "Sinanoglu", "Karaduman", "Tunaboylu", "Aykac", "Daglaroglu", "Orge", "Yildizoglu", "Erberk", "Denkel", "Dusenkalkar", "Ozkok", "Aykac", "Akisik", "Erkekli", "Tekand", "Numanoglu", "Erez", "Dalkiran", "Solmaz", "Gumuspala", "Ayaydin", "Tokgoz", "Cetiner", "Orge", "Kocabiyik", "Agaoglu", "Yetkiner", "Tasci", "Yesilkaya", "Elciboga", "Demirel", "Kunt", "Akbulut", "Avan", "Elicin", "Atan", "Kuzucu", "Dalkiran", "Onur", "Kocyigit", "Kasapoglu", "Aybar", "Besok", "Koyuncu", "Atakol", "Yalcin", "Samanci", "Karabulut", "Pektemek", "Arslanoglu", "Gunday", "Tokgoz", "Yalcin", "Kormukcu", "Ayverdi", "Evliyaoglu", "Alniacik", "Tahincioglu", "Tunaboylu", "Onur", "Tanrikulu", "Elmastasoglu", "Nebioglu", "Koyuncu", "Alyanak", "Alpugan", "Gurmen", "Kavaklioglu", "Cevik", "Akaydin", "Karaer", "Basoglu", "Camdali", "Adal", "Akman", "Tokgoz", "Oztuna", "Kasapoglu", "Yazici", "Akay", "Beserler", "Yalcin", "Bakircioglu", "Kucukler", "Sezek", "Pocan", "Numanoglu", "Erez", "Mertoglu", "Yildizoglu", "Cetiner", "Pektemek", "Kocyigit", "Erbulak", "Bicer", "Karaer", "Karabocek", "Suleymanoglu", "Kocoglu", "Karaer", "Turkdogan", "Koyuncu", "Ozansoy", "Balaban", "Yildirim", "Tahincioglu", "Nalbantoglu", "Erginsoy", "Elciboga", "Gumuspala", "Babaoglu", "Dogan", "Ozberk", "Sepetci", "Karabulut", "Akar", "Camdali", "Sepetci", "Ozansoy", "Akyurek", "Erginsoy", "Oymen", "Babacan", "Sezek", "Cetin", "Daglaroglu", "Akar", "Sinanoglu", "Kucukler", "Mertoglu", "Ozkok", "Yalcin", "Yorulmaz", "Ilicali", "Menemencioglu", "Yildirim", "Ozberk", "Beserler", "Ozkok", "Sadiklar", "Topcuoglu", "Karadas", "Ayverdi", "Akisik", "Eksioglu", "Yildirim", "Koc", "Paksut", "Uluhan", "Abaci", "Dalkiran", "Koc", "Akbulut", "Erginsoy", "Akay", "Polat", "Atakol", "Akar", "Akgul", "Orbay", "Onur", "Yilmazer", "Kavaklioglu", "Ilicali", "Aybar", "Yalcin", "Mayhos", "Poyrazoglu", "Orbay", "Evliyaoglu", "Erez", "Beserler", "Sayginer", "Aykac", "Eronat", "Koybasi", "Yorulmaz", "Avan", "Bakircioglu", "Dagdas", "Akman", "Tazegul", "Dalkiran", "Solmaz", "Oraloglu", "Aybar", "Sepetci", "Erginsoy", "Tokgoz", "Paksut", "Ilicali", "Camdali", "Pocan", "Orge", "Tunceri", "Koybasi", "Duygulu", "Kunt", "Kocabiyik", "Ilicali", "Koybasi", "Egeli", "Pocan", "Sarioglu", "Ertepinar", "Demirel", "Yazici", "Baykam", "Agaoglu", "Kirac", "Bolatli", "Suleymanoglu", "Numanoglu", "Besok", "Tasli", "Ertepinar", "Yesilkaya", "Akay", "Durmaz", "Durmaz", "Turkyilmaz", "Koc", "Sadiklar", "Basoglu", "Ertepinar", "Asikoglu", "Sozeri", "Capanoglu", "Basoglu", "Camdali", "Ozdogan", "Elciboga", "Dusenkalkar", "Menemencioglu", "Tanrikulu", "Paksut", "Mayhos", "Ozkok", "Tahincioglu", "Karabocek", "Aykac", "Erturk", "Aykac", "Arslanoglu", "Asikoglu", "Kulaksizoglu", "Adal", "Demirbas", "Erez", "Elicin", "Erbulak", "Kurutluoglu", "Sandalci", "Uluhan", "Kunt", "Yalcin", "Tekelioglu", "Avan", "Topcuoglu", "Ercetin", "Mertoglu", "Akal", "Ertepinar", "Alyanak", "Capanoglu", "Oymen", "Kunter", "Kumcuoglu", "Aksit", "Erginsoy", "Barbarosoglu", "Koyuncu", "Atan", "Okur", "Demirbas", "Elciboga", "Poyrazoglu", "Oztuna", "Kurutluoglu", "Limoncuoglu", "Turkyilmaz", "Kuday", "Alyanak", "Barbarosoglu", "Ozgorkey", "Erez", "Akgul", "Capanoglu", "Akyuz", "Akyuz", "Alniacik", "Erturk", "Oztuna", "Ozkara", "Durmaz", "Cevik", "Gumuspala", "Dusenkalkar", "Numanoglu", "Gurmen", "Aclan", "Pekkan", "Ozkara", "Kahveci", "Kirac", "Kilicci", "Barbarosoglu", "Alpugan", "Yildirim", "Kaya", "Ozgorkey", "Kaplangi", "Akyuz", "Ekici", "Oymen", "Kaya", "Poyrazoglu", "Ekici", "Duygulu", "Akar", "Tugluk", "Koybasi", "Yilmazer", "Bademci", "Sezek", "Evliyaoglu", "Ayverdi", "Kunt", "Akisik", "Cetiner", "Asikoglu", "Akal", "Agaoglu", "Oraloglu", "Kurutluoglu", "Gurmen", "Kahveci", "Kaya", "Basoglu", "Limoncuoglu", "Kormukcu", "Cetin", "Corekci", "Corekci", "Suleymanoglu", "Atan", "Ekici", "Ayaydin", "Sayginer", "Karabulut", "Abaci", "Yalcin", "Kucukler", "Erbay", "Ozdogan", "Koc", "Gonultas", "Ozbey", "Uca", "Duygulu", "Tahincioglu", "Akay", "Tuzun", "Duygulu", "Beserler", "Ozdogan", "Koybasi", "Bicer", "Erez", "Sezek", "Babacan", "Oymen", "Aksit", "Ozgorkey", "Kaplangi", "Koybasi", "Cetiner", "Dagdas", "Aykac", "Oraloglu", "Kuday", "Dogan", "Ozbey", "Alniacik", "Orge", "Erberk", "Tahincioglu", "Akgul", "Sepetci", "Karadas", "Akbulut", "Demirbas", "Tasci", "Paksut", "Tunceri", "Yazici", "Ekici", "Ozdenak", "Gonultas", "Demirbas", "Cetin", "Ozdogan", "Tasci", "Kurutluoglu", "Adan", "Sinanoglu", "Orbay", "Asikoglu", "Korol", "Polat", "Akisik", "Yazici", "Aclan", "Bolatli", "Besok", "Beserler", "Tunceri", "Orbay", "Orbay", "Ozberk", "Arslanoglu", "Kulaksizoglu", "Erginsoy", "Bolatli", "Turkyilmaz", "Uluhan", "Poyrazoglu", "Akar", "Sinanoglu", "Atan", "Suleymanoglu", "Capanoglu", "Ozbey", "Karaduman", "Kulaksizoglu", "Korol", "Pocan", "Ozdenak", "Bademci", "Keseroglu", "Karadas", "Akaydin", "Catalbas", "Polat", "Orbay", "Yazici", "Kuday", "Durak", "Karaduman", "Baturalp", "Erdogan", "Adan", "Oztuna", "Karadas", "Besok", "Hakyemez", "Adan", "Ekici", "Aydan", "Sarioglu", "Karabocek", "Orbay", "Akal", "Besok", "Menemencioglu", "Duygulu", "Erturk", "Samanci", "Corekci", "Koyuncu", "Adal", "Kilicci", "Poyrazoglu", "Onur", "Kocoglu", "Karaer", "Oztonga", "Kumcuoglu", "Kormukcu", "Tuglu", "Dogan", "Yesilkaya", "Nebioglu", "Koc", "Baykam", "Akar", "Karaduman", "Tunceri", "Hakyemez", "Gumuspala", "Kocoglu", "Adal", "Koyluoglu", "Catalbas", "Erturk", "Koyuncu", "Demirbas", "Suleymanoglu", "Karadas", "Tekelioglu", "Baturalp", "Erkekli", "Paksut", "Babacan", "Yesilkaya", "Adal", "Akal", "Tekelioglu", "Tasli", "Tunaboylu", "Menemencioglu", "Hamzaoglu", "Catalbas", "Kavaklioglu", "Ozdenak", "Toraman", "Gunday", "Barbarosoglu", "Atakol", "Karadas", "Turkdogan", "Topcuoglu", "Denkel", "Erdogan", "Oztonga", "Akan", "Tuglu", "Cetin", "Tunaboylu", "Duygulu", "Kormukcu", "Sozeri", "Topaloglu", "Oymen", "Ozkok", "Erbulak", "Akay", "Cevik", "Kahveci", "Balci", "Kuzucu", "Korol", "Akay", "Oztuna", "Tuzun", "Turkyilmaz", "Tunceri", "Korol", "Poyrazoglu", "Akgul", "Berberoglu", "Elciboga", "Karaduman", "Avan", "Denkel", "Ozkara", "Atakol", "Tugluk", "Kucukler", "Menemencioglu", "Elmastasoglu", "Sozeri", "Koyluoglu", "Akaydin", "Durmaz", "Catalbas", "Demirbas", "Suleymanoglu", "Tekelioglu", "Alyanak", "Bademci", "Kuday", "Demirbas", "Ayverdi", "Kececi", "Menemencioglu", "Tugluk", "Kurutluoglu", "Kilicci", "Karaduman", "Bademci", "Poyrazoglu", "Mertoglu", "Berberoglu", "Dalkiran", "Tugluk", "Tekelioglu", "Beserler", "Ercetin", "Karabulut", "Beserler", "Sarioglu", "Sepetci", "Capanoglu", "Agaoglu", "Karaer", "Sayginer", "Cetin", "Yilmazer", "Atakol", "Kececi", "Cetiner", "Kilicci", "Gunday", "Topcuoglu", "Kececi", "Akay", "Oztuna", "Oztuna", "Topaloglu", "Okur", "Kahveci", "Ilicali", "Durak", "Tokgoz", "Tanrikulu", "Tekand", "Karabulut", "Kurutluoglu", "Samanci", "Bolatli", "Kaya", "Tekand", "Orbay", "Karaduman", "Solmaz", "Mertoglu", "Ozkok", "Karabulut", "Oraloglu", "Basoglu", "Gumuspala", "Ozbir", "Tugluk", "Ozdenak", "Tuzun", "Kocabiyik", "Atan", "Kulaksizoglu", "Ozansoy", "Solmaz", "Koybasi", "Ekici", "Corekci", "Tekelioglu", "Kuzucu", "Akan", "Capanoglu", "Sadiklar", "Sayginer", "Okumus", "Dagdas", "Kirac", "Akisik", "Akaydin", "Koyuncu", "Alyanak", "Tanrikulu", "Dusenkalkar", "Adan", "Koybasi", "Capanoglu", "Berberoglu", "Durak", "Capanoglu", "Uluhan", "Ozbir", "Karaer", "Erturk", "Tasli", "Baykam", "Kunter", "Korol", "Keseroglu", "Yildizoglu", "Ilicali", "Kuday", "Tazegul", "Eksioglu", "Tekelioglu", "Kucukler", "Sandalci", "Ekici", "Berberoglu", "Sarioglu", "Akman", "Topcuoglu", "Adan", "Kormukcu", "Ayverdi", "Babacan", "Bicer", "Denkel", "Ercetin", "Berberoglu", "Ercetin", "Pocan", "Sayginer", "Babacan", "Basoglu", "Dalkiran", "Koc", "Adan", "Akar", "Durak", "Solmaz", "Catalbas", "Tunaboylu", "Adal", "Gonultas", "Abadan", "Tanrikulu", "Aydan", "Dogan", "Erbulak", "Arican", "Velioglu", "Tokatlioglu", "Kocoglu", "Erbulak", "Orbay", "Kececi", "Berberoglu", "Basoglu", "Kormukcu", "Eksioglu", "Tokgoz", "Kavaklioglu", "Tuzun", "Tuzun", "Kutlay", "Cagiran", "Arslanoglu", "Adal", "Hakyemez", "Bademci", "Yilmazer", "Akgul", "Barbarosoglu", "Kormukcu", "Topaloglu", "Aydan", "Akal", "Uluhan", "Adal", "Ozdenak", "Kocyigit", "Akal", "Elciboga", "Yildirim", "Menemencioglu", "Tazegul", "Abadan", "Alniacik", "Yetkiner", "Kuzucu", "Polat", "Erberk", "Gurmen", "Abadan", "Alniacik", "Polat", "Yorulmaz", "Gonultas", "Numanoglu", "Asikoglu", "Oymen", "Karadas", "Menemencioglu", "Koybasi", "Bakircioglu", "Akan", "Sepetci", "Pocan", "Erbulak", "Kormukcu", "Arslanoglu", "Topcuoglu", "Kaplangi", "Akyuz", "Asikoglu", "Ayaydin", "Velioglu", "Okur", "Akaydin", "Tasci", "Kunter", "Samanci", "Kahveci", "Cetiner", "Uluhan", "Gonultas", "Pekkan", "Aksit", "Kucukler", "Numanoglu", "Koyluoglu", "Sayginer", "Tuzun", "Akan", "Tekand", "Aybar", "Abadan", "Ilicali", "Cagiran", "Aydan", "Capanoglu", "Oztonga", "Paksut", "Gonultas", "Arslanoglu", "Nalbantoglu", "Uluhan", "Baykam", "Tekelioglu", "Catalbas", "Tokgoz", "Tasli", "Gunday", "Akay", "Tekand", "Dalkiran", "Akisik", "Daglaroglu", "Korol", "Kutlay", "Koc", "Kormukcu", "Tunaboylu", "Egeli", "Sezek", "Kasapoglu", "Gumuspala", "Elciboga", "Yazici", "Sozeri", "Tutuncu", "Oymen", "Ayaydin", "Cetin", "Ekici", "Samanci", "Agaoglu", "Elicin", "Orge", "Erginsoy", "Denkel", "Camdali", "Ozdenak", "Ayverdi", "Ilicali", "Kucukler", "Bademci", "Koyuncu", "Basoglu", "Dogan", "Pekkan", "Akal", "Ozansoy", "Agaoglu", "Dogan", "Oraloglu", "Topaloglu", "Karadas", "Avan", "Oymen", "Aybar", "Bolatli", "Kumcuoglu", "Nalbantoglu", "Karadas", "Ozberk", "Karabocek", "Elmastasoglu", "Yesilkaya", "Tokatlioglu", "Cevik", "Onur", "Sepetci", "Bicer", "Kececi", "Aykac", "Hakyemez", "Koyuncu", "Aykac", "Dizdar", "Atakol", "Samanci", "Kaplangi", "Ozkara", "Kucukler", "Arican", "Tuglu", "Alniacik", "Arslanoglu", "Erez", "Ayverdi", "Cevik", "Menemencioglu", "Sayginer", "Uca", "Nebioglu", "Adivar", "Koyluoglu", "Koybasi", "Tokgoz", "Nebioglu", "Dagdas", "Kutlay", "Adal", "Adan", "Pocan", "Akyurek", "Akyurek", "Ayaydin", "Sadiklar", "Tahincioglu", "Tasci", "Camdali", "Suleymanoglu", "Kavaklioglu", "Catalbas", "Ekici", "Ozgorkey", "Atakol", "Dalkiran", "Sayginer", "Gumuspala", "Dalkiran", "Erturk", "Ekici", "Koyluoglu", "Kececi", "Alyanak", "Akyurek", "Nalbantoglu", "Berberoglu", "Evliyaoglu", "Pektemek", "Kasapoglu", "Erginsoy", "Nebioglu", "Durak", "Aydan", "Kutlay", "Bicer", "Bicer", "Besok", "Kutlay", "Alpugan", "Kaya", "Ekici", "Barbarosoglu", "Atakol", "Aksit", "Korol", "Ozberk", "Karabocek", "Balaban", "Barbarosoglu", "Aksit", "Corekci", "Ozgorkey", "Nebioglu", "Kuday", "Ozberk", "Akbulut", "Tazegul", "Akbulut", "Avan", "Corekci", "Arslanoglu", "Akar", "Kirac", "Demirel", "Pekkan", "Sandalci", "Erginsoy", "Alyanak", "Sayginer", "Cetin", "Baturalp", "Erdogan", "Camdali", "Okur", "Kuday", "Tugluk", "Sozeri", "Capanoglu", "Yazici", "Nalbantoglu", "Topcuoglu", "Akisik", "Baykam", "Tugluk", "Pekkan", "Demirel", "Tokatlioglu", "Koc", "Ozkara", "Erginsoy", "Numanoglu", "Topcuoglu", "Berberoglu", "Gurmen", "Cevik", "Bakircioglu", "Mayhos", "Durak", "Atakol", "Ozkok", "Tahincioglu", "Kuday", "Bicer", "Karabulut", "Denkel", "Alyanak", "Hakyemez", "Yetkiner", "Karadas", "Ercetin", "Denkel", "Karaer", "Yalcin", "Elicin", "Keseroglu", "Akbulut", "Alyanak", "Velioglu", "Arican", "Erginsoy", "Hamzaoglu", "Aclan", "Erberk", "Dagdas", "Karaduman", "Sozeri", "Velioglu", "Yetkiner", "Numanoglu", "Kececi", "Aksit", "Ayverdi", "Oymen", "Akar", "Ercetin", "Asikoglu", "Koybasi", "Koc", "Adal", "Kilicci", "Ozansoy", "Yetkiner", "Yesilkaya", "Akyuz", "Oymen", "Ozkara", "Erdogan", "Toraman", "Bademci", "Kilicci", "Kocyigit", "Evliyaoglu", "Bakircioglu", "Gonultas", "Tekelioglu", "Koc", "Cetin", "Dizdar", "Aydan", "Kunter", "Tunaboylu", "Koyuncu", "Hamzaoglu", "Alpugan", "Dalkiran", "Tahincioglu", "Bolatli", "Numanoglu", "Sepetci", "Erkekli", "Abadan", "Kececi", "Erginsoy", "Elmastasoglu", "Besok", "Demirbas", "Kulaksizoglu", "Agaoglu", "Dizdar", "Kocyigit", "Pekkan", "Karabocek", "Limoncuoglu", "Yetkiner", "Keseroglu", "Karaduman", "Dizdar", "Avan", "Topcuoglu", "Tahincioglu", "Arslanoglu", "Basoglu", "Ozkara", "Mertoglu", "Dalkiran", "Ozansoy", "Agaoglu", "Ercetin", "Aclan", "Atan", "Numanoglu", "Aclan", "Toraman", "Tuglu", "Onur", "Arican", "Ozkara", "Aybar", "Balci", "Demirbas", "Menemencioglu", "Daglaroglu", "Dizdar", "Ozbir", "Keseroglu", "Akisik", "Tugluk", "Limoncuoglu", "Kocabiyik", "Demirbas", "Koybasi", "Karadas", "Gunday", "Sandalci", "Barbarosoglu", "Nalbantoglu", "Agaoglu", "Akar", "Balci", "Agaoglu", "Suleymanoglu", "Durmaz", "Akar", "Camdali", "Erdogan", "Alniacik", "Ilicali", "Tasci", "Turkdogan", "Kunter", "Yilmazer", "Erturk", "Solmaz", "Akgul", "Akman", "Mayhos", "Yazici", "Aydan", "Akyurek", "Karabocek", "Kececi", "Oztonga", "Ozbir", "Gonultas", "Erturk", "Barbarosoglu", "Topcuoglu", "Capanoglu", "Tunaboylu", "Cagiran", "Koybasi", "Ozkok", "Kirac", "Kumcuoglu", "Balaban", "Yetkiner", "Alniacik", "Dagdas", "Kumcuoglu", "Kucukler", "Turkdogan", "Turkdogan", "Erturk", "Eksioglu", "Gonultas", "Abadan", "Babacan", "Erez", "Aclan", "Menemencioglu", "Akyurek", "Kunt", "Basoglu", "Bademci", "Erbay", "Pocan", "Balci", "Aykac", "Koyuncu", "Sadiklar", "Dogan", "Besok", "Dusenkalkar", "Nebioglu", "Adivar", "Dogan", "Tunceri", "Egeli", "Ozbey", "Dizdar", "Ozgorkey", "Orge", "Okumus", "Adivar", "Erez", "Okur", "Okur", "Kunter", "Yorulmaz", "Eksioglu", "Orge", "Ozbir", "Sandalci", "Erberk", "Karaer", "Yetkiner", "Cevik", "Koyuncu", "Tuzun", "Kasapoglu", "Elicin", "Ozbey", "Tekand", "Kumcuoglu", "Ozkara", "Elicin", "Erturk", "Bakircioglu", "Velioglu", "Aclan", "Hamzaoglu", "Adal", "Ozbir", "Sandalci", "Arican", "Dalkiran", "Akgul", "Solmaz", "Duygulu", "Tunaboylu", "Aksit", "Hamzaoglu", "Demirel", "Paksut", "Menemencioglu", "Tekand", "Dogan", "Gumuspala", "Demirbas", "Yorulmaz", "Mertoglu", "Kavaklioglu", "Koyluoglu", "Aydan", "Orge", "Kocabiyik", "Suleymanoglu", "Demirbas", "Balaban", "Tunceri", "Durak", "Aksit", "Kurutluoglu", "Sezek", "Sadiklar", "Ozbir", "Sozeri", "Erginsoy", "Oraloglu", "Poyrazoglu", "Gunday", "Aydan", "Koybasi", "Ekici", "Sayginer", "Tuglu", "Cagiran", "Karaer", "Oztuna", "Pocan", "Kocabiyik", "Eksioglu", "Ilicali", "Abadan", "Akman", "Dusenkalkar", "Akaydin", "Akman", "Sepetci", "Ilicali", "Camdali", "Kocoglu", "Evliyaoglu", "Denkel", "Akman", "Ilicali", "Mayhos", "Arslanoglu", "Capanoglu", "Ozansoy", "Tuglu", "Cetiner", "Sayginer", "Uluhan", "Ayverdi", "Topcuoglu", "Velioglu", "Dagdas", "Kececi", "Kumcuoglu", "Toraman", "Evliyaoglu", "Tasci", "Uca", "Eksioglu", "Sozeri", "Erbulak", "Erez", "Ozdogan", "Tanrikulu", "Kunt", "Atakol", "Adal", "Akyuz", "Samanci", "Gumuspala", "Denkel", "Keseroglu", "Dalkiran", "Ozkara", "Numanoglu", "Demirel", "Agaoglu", "Agaoglu", "Kececi", "Tasci", "Ozberk", "Solmaz", "Erberk", "Aybar", "Turkdogan", "Ayverdi", "Paksut", "Camdali", "Adivar", "Capanoglu", "Toraman", "Mertoglu", "Yildirim", "Yorulmaz", "Kulaksizoglu", "Pektemek", "Erberk", "Durmaz", "Alpugan", "Asikoglu", "Kumcuoglu", "Velioglu", "Babacan", "Dalkiran", "Okur", "Erkekli", "Yetkiner", "Yorulmaz", "Abadan", "Hamzaoglu", "Koybasi", "Uca", "Gunday", "Kormukcu", "Eksioglu", "Elmastasoglu", "Elciboga", "Kutlay", "Aclan", "Erkekli", "Koyluoglu", "Ertepinar", "Kahveci", "Kaya", "Dogan", "Polat", "Paksut", "Erbay", "Toraman", "Karadas", "Akan", "Kutlay", "Oraloglu", "Kocoglu", "Karaer", "Barbarosoglu", "Bicer", "Evliyaoglu", "Avan", "Oymen", "Gunday", "Oraloglu", "Kavaklioglu", "Ozdenak", "Okumus", "Bakircioglu", "Sadiklar", "Alniacik", "Adal", "Pekkan", "Numanoglu", "Oraloglu", "Camdali", "Yalcin", "Topcuoglu", "Dusenkalkar", "Akman", "Asikoglu", "Dogan", "Bakircioglu", "Karabulut", "Pocan", "Cetin", "Tasci", "Nalbantoglu", "Akgul", "Koyuncu", "Hamzaoglu", "Elicin", "Akgul", "Tahincioglu", "Sezek", "Duygulu", "Abadan", "Besok", "Barbarosoglu", "Sandalci", "Ozgorkey", "Balci", "Hakyemez", "Yesilkaya", "Hamzaoglu", "Paksut", "Cagiran", "Akisik", "Denkel", "Akar", "Okur", "Ozdenak", "Cagiran", "Samanci", "Sarioglu", "Atakol", "Kaplangi", "Oztuna", "Kocyigit", "Kuday", "Ilicali", "Nebioglu", "Dizdar", "Gunday", "Yilmazer", "Alyanak", "Adal", "Karabocek", "Sezek", "Dagdas", "Akbulut", "Erturk", "Erginsoy", "Pektemek", "Sandalci", "Suleymanoglu", "Topaloglu", "Kucukler", "Arslanoglu", "Bakircioglu", "Turkdogan", "Kuzucu", "Uca", "Yetkiner", "Yalcin", "Elicin", "Catalbas", "Tekand", "Asikoglu", "Tanrikulu", "Tasci", "Ozberk", "Eksioglu", "Eronat", "Camdali", "Denkel", "Durmaz", "Yazici", "Yorulmaz", "Toraman", "Ozdogan", "Balci", "Kocoglu", "Sayginer", "Kormukcu", "Erbulak", "Atan", "Tekelioglu", "Erez", "Besok", "Erginsoy", "Tekelioglu", "Polat", "Babacan", "Ozdenak", "Nebioglu", "Turkyilmaz", "Akyuz", "Basoglu", "Gumuspala", "Akman", "Alniacik", "Karabocek", "Balaban", "Elmastasoglu", "Erginsoy", "Turkdogan", "Arslanoglu", "Samanci", "Sepetci", "Tutuncu", "Yildizoglu", "Agaoglu", "Tekelioglu", "Erbay", "Kaya", "Kaya", "Demirel", "Karaduman", "Durak", "Ozberk", "Adan", "Akal", "Elicin", "Erbay", "Babacan", "Cagiran", "Kucukler", "Toraman", "Barbarosoglu", "Okumus", "Kutlay", "Tokgoz", "Evliyaoglu", "Kucukler", "Aykac", "Tekand", "Koyluoglu", "Sinanoglu", "Baturalp", "Akman", "Yesilkaya", "Yazici", "Akgul", "Elicin", "Akyuz", "Gurmen", "Kurutluoglu", "Durak", "Aclan", "Balaban", "Daglaroglu", "Ozberk", "Asikoglu", "Nalbantoglu", "Daglaroglu", "Akisik", "Tokatlioglu", "Tokgoz", "Tekelioglu", "Yildizoglu", "Alniacik", "Oztuna", "Kucukler", "Pocan", "Durmaz", "Sandalci", "Yesilkaya", "Akisik", "Gumuspala", "Poyrazoglu", "Keseroglu", "Tutuncu", "Tuglu", "Sepetci", "Keseroglu", "Elicin", "Pocan", "Catalbas", "Erdogan", "Kaplangi", "Tuzun", "Ilicali", "Akan", "Durmaz", "Barbarosoglu", "Sadiklar", "Tazegul", "Gonultas", "Gumuspala", "Baturalp", "Agaoglu", "Ozdogan", "Orbay", "Bicer", "Tokgoz", "Avan", "Atakol", "Ozkok", "Basoglu", "Ercetin", "Alpugan", "Kirac", "Oztonga", "Kumcuoglu", "Nebioglu", "Solmaz", "Babacan", "Dalkiran", "Kaya", "Ozbey", "Gumuspala", "Yilmazer", "Catalbas", "Gurmen", "Tutuncu", "Yildirim", "Korol", "Sandalci", "Kilicci", "Okur", "Atan", "Besok", "Akar", "Akaydin", "Hakyemez", "Ozkok", "Egeli", "Erginsoy", "Kocabiyik", "Orge", "Sarioglu", "Tokgoz", "Yorulmaz", "Orbay", "Kurutluoglu", "Kirac", "Asikoglu", "Turkyilmaz", "Berberoglu", "Catalbas", "Kuzucu", "Kulaksizoglu", "Kocoglu", "Corekci", "Erbay", "Sozeri", "Koyluoglu", "Arslanoglu", "Ercetin", "Bakircioglu", "Berberoglu", "Karabocek", "Akar", "Ayverdi", "Tokgoz", "Orbay", "Oztuna", "Kocoglu", "Eronat", "Cetin", "Erez", "Sepetci", "Kulaksizoglu", "Capanoglu", "Gonultas", "Mayhos", "Demirel", "Uluhan", "Tasli", "Akman", "Orbay", "Kunter", "Barbarosoglu", "Sarioglu", "Yildirim", "Erbay", "Erez", "Atan", "Tutuncu", "Topaloglu", "Hakyemez", "Paksut", "Baturalp", "Yildirim", "Baturalp", "Akaydin", "Koyluoglu", "Akbulut", "Akgul", "Abadan", "Yilmazer", "Tunceri", "Sarioglu", "Ayaydin", "Dagdas", "Pektemek", "Akay", "Abaci", "Akar", "Akisik", "Adal", "Oymen", "Tugluk", "Hamzaoglu", "Erdogan", "Ozgorkey", "Kocyigit", "Elmastasoglu", "Akisik", "Kilicci", "Asikoglu", "Korol", "Dizdar", "Adal", "Tasci", "Nalbantoglu", "Sozeri", "Nalbantoglu", "Solmaz", "Karaer", "Gonultas", "Koc", "Kahveci", "Tuzun", "Cetiner", "Akgul", "Sayginer", "Limoncuoglu", "Uca", "Tekand", "Toraman", "Yildirim", "Yesilkaya", "Denkel", "Dogan", "Tokatlioglu", "Velioglu", "Kormukcu", "Numanoglu", "Tasci", "Asikoglu", "Kutlay", "Akar", "Alyanak", "Arican", "Sandalci", "Oztuna", "Tazegul", "Hamzaoglu", "Akan", "Elmastasoglu", "Kuday", "Atan", "Oztonga", "Tunaboylu", "Toraman", "Kunt", "Orbay", "Evliyaoglu", "Uca", "Adivar", "Erdogan", "Atan", "Sinanoglu", "Kulaksizoglu", "Sadiklar", "Limoncuoglu", "Okumus", "Karadas", "Gurmen", "Erkekli", "Balci", "Durmaz", "Akyurek", "Tunceri", "Besok", "Koyuncu", "Demirel", "Tasci", "Keseroglu", "Kahveci", "Bicer", "Eksioglu", "Corekci", "Yazici", "Bolatli", "Yetkiner", "Egeli", "Erberk", "Arican", "Beserler", "Karadas", "Kunter", "Yildirim", "Atan", "Akman", "Denkel", "Erbulak", "Kuzucu", "Karabulut", "Balci", "Demirbas", "Erdogan", "Alpugan", "Akisik", "Demirbas", "Eksioglu", "Adal", "Tazegul", "Solmaz", "Cagiran", "Akyuz", "Eronat", "Erkekli", "Balci", "Koybasi", "Dalkiran", "Yildirim", "Orbay", "Cetiner", "Demirel", "Eronat", "Akyurek", "Sandalci", "Aksit", "Akay", "Oztuna", "Kucukler", "Baturalp", "Tokgoz", "Pektemek", "Ekici", "Akay", "Ozansoy", "Sozeri", "Gumuspala", "Ozkara", "Aksit", "Avan", "Sepetci", "Bademci", "Akgul", "Dizdar", "Mertoglu", "Ozansoy", "Ozgorkey", "Yalcin", "Yazici", "Dizdar", "Daglaroglu", "Erdogan", "Kilicci", "Baturalp", "Erginsoy", "Pektemek", "Arslanoglu", "Kutlay", "Demirel", "Catalbas", "Bakircioglu", "Cetin", "Yilmazer", "Karaer", "Yesilkaya", "Yorulmaz", "Elmastasoglu", "Onur", "Solmaz", "Solmaz", "Gumuspala", "Ercetin", "Yesilkaya", "Adan", "Ozbey", "Yorulmaz", "Eksioglu", "Beserler", "Beserler", "Tunaboylu", "Evliyaoglu", "Egeli", "Erez", "Kurutluoglu", "Turkdogan", "Abadan", "Babacan", "Kutlay", "Ayaydin", "Ertepinar", "Yetkiner", "Babacan", "Kutlay", "Sepetci", "Berberoglu", "Tokgoz", "Tutuncu", "Beserler", "Okumus", "Tasci", "Abadan", "Velioglu", "Ozdenak", "Mayhos", "Sandalci", "Dusenkalkar", "Yorulmaz", "Okur", "Sandalci", "Bakircioglu", "Orbay", "Dusenkalkar", "Akman", "Sandalci", "Mayhos", "Erdogan", "Sadiklar", "Ozbir", "Eronat", "Tunaboylu", "Adivar", "Oymen", "Uluhan", "Karaer", "Ertepinar", "Adan", "Tuglu", "Koyluoglu", "Uluhan", "Oztonga", "Kunter", "Yorulmaz", "Polat", "Kaplangi", "Tekand", "Durmaz", "Baykam", "Uca", "Toraman", "Dogan", "Nebioglu", "Karaer", "Capanoglu", "Yalcin", "Erturk", "Yesilkaya", "Koyuncu", "Kilicci", "Beserler", "Velioglu", "Yetkiner", "Tokatlioglu", "Sarioglu", "Akar", "Abaci", "Pocan", "Adal", "Egeli", "Aykac", "Erberk", "Dogan", "Ertepinar", "Orbay", "Tasli", "Tasci", "Pocan", "Akisik", "Tekand", "Ilicali", "Mertoglu", "Pektemek", "Ayverdi", "Eksioglu", "Bademci", "Dalkiran", "Bakircioglu", "Hamzaoglu", "Solmaz", "Asikoglu", "Yildirim", "Dusenkalkar", "Sepetci", "Akbulut", "Tasli", "Barbarosoglu", "Kececi", "Kirac", "Pekkan", "Arican", "Kececi", "Beserler", "Ozberk", "Ozkok", "Baykam", "Menemencioglu", "Keseroglu", "Ayaydin", "Uluhan", "Abadan", "Ozberk", "Toraman", "Eronat", "Oztuna", "Kormukcu", "Kucukler", "Kucukler", "Bademci", "Koc", "Kutlay", "Turkdogan", "Bademci", "Yetkiner", "Kuzucu", "Poyrazoglu", "Adivar", "Pekkan", "Sozeri", "Akbulut", "Oraloglu", "Camdali", "Tokgoz", "Kececi", "Gurmen", "Tanrikulu", "Arican", "Tunceri", "Koc", "Avan", "Erbay", "Kirac", "Barbarosoglu", "Abaci", "Koc", "Kahveci", "Kormukcu", "Tokatlioglu", "Onur", "Akar", "Ozdogan", "Kuday", "Akan", "Pekkan", "Suleymanoglu", "Gumuspala", "Babaoglu", "Arslanoglu", "Sepetci", "Poyrazoglu", "Koc", "Daglaroglu", "Eronat", "Erkekli", "Baturalp", "Capanoglu", "Erberk", "Bademci", "Toraman", "Agaoglu", "Akbulut", "Ercetin", "Kocabiyik", "Akman", "Ozdogan", "Bolatli", "Sezek", "Akgul", "Cetin", "Ozberk", "Kocoglu", "Baturalp", "Durak", "Arslanoglu", "Arican", "Avan", "Kunter", "Tekand", "Akaydin", "Tugluk", "Kilicci", "Koyluoglu", "Turkyilmaz", "Ozgorkey", "Numanoglu", "Tekand", "Capanoglu", "Korol", "Ozbey", "Kaplangi", "Kasapoglu", "Dalkiran", "Gurmen", "Akisik", "Yesilkaya", "Bicer", "Pektemek", "Mertoglu", "Adal", "Erginsoy", "Kunter", "Evliyaoglu", "Koyuncu", "Basoglu", "Kocoglu", "Akan", "Basoglu", "Tokatlioglu", "Duygulu", "Turkdogan", "Koc", "Akaydin", "Dalkiran", "Akyurek", "Pekkan", "Kasapoglu", "Hamzaoglu", "Kunt", "Gonultas", "Cevik", "Cagiran", "Babaoglu", "Tasli", "Sadiklar", "Ozbey", "Gurmen", "Oymen", "Aksit", "Erkekli", "Hakyemez", "Bolatli", "Numanoglu", "Sayginer", "Kunt"};

    static String[] gruplar = {"A Rh+", "A Rh-", "B Rh+", "B Rh-", "AB Rh+", "AB Rh-"};
    static String[] cinsiyet = {"E", "K"};

    static String[] universiteler = {"Adiyaman Universitesi Tip Fakultesi", "Akdeniz Universitesi Tip Fakultesi", "Aksaray Universitesi Tip Fakultesi", "Amasya Universitesi Tip Fakultesi", "Ankara Universitesi Tip Fakultesi", "Ataturk Universitesi Tip Fakultesi", "Balikesir Universitesi Tip Fakultesi", "Bursa Uludag Universitesi Tip Fakultesi", "Cukurova Universitesi Tip Fakultesi", "Dicle Universitesi Tip Fakultesi", "Dokuz Eylul Universitesi Tip Fakultesi", "Duzce Universitesi Tip Fakultesi", "Ege Universitesi Tip Fakultesi", "Erciyes Universitesi Tip Fakultesi", "Firat Universitesi Tip Fakultesi", "Gazi Universitesi Tip Fakultesi", "Gaziantep Universitesi Tip Fakultesi", "Giresun Universitesi Tip Fakultesi", "Hacettepe Universitesi Tip Fakultesi", "Harran Universitesi Tip Fakultesi", "Hitit Universitesi Tip Fakultesi", "Inonu Universitesi Tip Fakultesi", "Kafkas Universitesi Tip Fakultesi", "Karabuk Universitesi Tip Fakultesi", "Kastamonu Universitesi Tip Fakultesi", "Kirikkale Universitesi Tip Fakultesi", "Kirklareli Universitesi Tip Fakultesi", "Kocaeli Universitesi Tip Fakultesi", "Marmara Universitesi Tip Fakultesi", "Mersin Universitesi Tip Fakultesi", "Ordu Universitesi Tip Fakultesi", "Pamukkale Universitesi Tip Fakultesi", "Sakarya Universitesi Tip Fakultesi", "Selcuk Universitesi Tip Fakultesi", "Siirt Universitesi Tip Fakultesi", "Trakya Universitesi Tip Fakultesi", "Usak Universitesi Tip Fakultesi", "Yozgat Bozok Universitesi Tip Fakultesi"};
    static String[] unvanlar = {"Prt.", "Uzm.", "Op.", "Yrd. Doc.", "Doc.", "Prof."};
    static String[] branslar = {"Anatomi", "Biyofizik", "Tibbi Biyoloji", "Tip Egitimi", "Tip Etigi ve Tip Tarihi", "Immunoloji", "Fizyoloji", "Histoloji ve Embriyoloji", "Tibbi Mikrobiyoloji", "Tip Bilisimi", "Tibbi Biyokimya", "Acil Tip", "Adli Tip", "Cocuk Ruh Sagligi", "Cocuk Sagligi ve Hastaliklari", "Dermatoloji", "Enfeksiyon Hastaliklari", "Fiziksel Tip ve Rehabilitasyon", "Gogus Hastaliklari", "Halk Sagligi", "Ic Hastaliklari", "Kardiyoloji", "Noroloji", "Nukleer Tip", "Radyasyon Onkolojisi", "Radyoloji", "Psikiyatri", "Tibbi Farmakoloji", "Tibbi Genetik", "Anestezi ve Reanimasyon", "Beyin ve Sinir Cerrahisi", "Cocuk Cerrahisi", "Genel Cerrahi", "Kalp ve Damar Cerrahisi", "Gogus Cerrahisi", "Goz Hastaliklari", "Kadin Hastaliklari ve Dogum", "Kulak Burun Bogaz", "Ortopedi ve Travmatoloji", "Tibbi Patoloji", "Uroloji", "Plastik ve Estetik Cerrahi"};

    static Hastane[] hastaneler = {
        new Hastane("Medicana Ankara", "08504603521", "Ankara", "Cankaya", "Sogutozu, 2176. Sk. No: 3, 06510 Cankaya/Ankara"),
        new Hastane("TOBB ETU Hastanesi", "03127472689", "Ankara", "Yenimahalle", "Bestepe, Yasam Cd. No:5, 06560 Yenimahalle/Ankara"),
        new Hastane("Bestepe Devlet Hastanesi", "03126483587", "Ankara", "Cankaya", "Bestepe, Bestepeler Mh, Alparslan Turkes Cd. No:57, 06560 Cankaya/Ankara"),
        new Hastane("Acibadem Bursa", "03129749724", "Bursa", "Nilufer", "Fatih Sultan Mehmet Bulvari, Sumer Sk. No:1, 16110 Nilufer/Bursa"),
        new Hastane("Ozel Doruk Bursa Hastanesi", "03126547612",
        "Bursa","Osmangazi", "Dikkaldirim Mah Cekirge Zubeydehanim Cad. No:5, 16080 Osmangazi/Bursa"),
        new Hastane("Bahcelievler Devlet Hastanesi", "03123062954",
        "Istanbul","Bahcelievler", "Kocasinan Merkez, Karadeniz Cd. No:48, 34186 Bahcelievler/Istanbul"),
        new Hastane("Istinye Devlet Hastanesi","03123659623","Istanbul", "Sariyer",
        " Istinye, Istinye Cd. No:98, 34465 Sariyer/Istanbul"),
        new Hastane("Medicana Kadikoy", "03126473685", "Istanbul",
        "Kadikoy","Zuhtupasa Mah, Recep Peker Cd. No:15, 34724 Kadikoy/Istanbul"),
        new Hastane("Eskisehir Sehir Hastanesi", "03120536532","Eskisehir", "Odunpazari", "71 Evler, Cevre Yolu, 26080 Odunpazari/Eskisehir"),
        new Hastane("Acibadem Eskisehir", "03125753256", "Eskisehir","Tepebasi", "Hosnudiye, 734 Sk No:19, 26170 Tepebasi/Eskisehir")
    };

    static String[] randevuTurleri = {"Ameliyat", "Muayene", "Kontrol"};

    static String[] ilacIsimleri = {"Acetaminophen", "Adderall", "Amitriptyline", "Amlodipine", "Amoxicillin", "Ativan", "Atorvastatin", "Azithromycin", "Benzonatate", "Brilinta", "Bunavail", "Buprenorphine", "Cephalexin", "Ciprofloxacin", "Citalopram", "Clindamycin", "Clonazepam", "Cyclobenzaprine", "Cymbalta", "Doxycycline", "Dupixent", "Entresto", "Entyvio", "Farxiga", "Fentanyl", "Fentanyl Patch", "Gabapentin", "Gilenya", "Humira", "Hydrochlorothiazide", "Hydroxychloroquine", "Ibuprofen", "Imbruvica", "Invokana", "Januvia", "Jardiance", "Kevzara", "Lexapro", "Lisinopril", "Lofexidine", "Loratadine", "Lyrica", "Melatonin", "Meloxicam", "Metformin", "Methadone", "Methotrexate", "Metoprolol", "Naloxone", "Naltrexone", "Naproxen", "Omeprazole", "Onpattro", "Otezla", "Ozempic", "Pantoprazole", "Prednisone", "Probuphine", "Rybelsus", "Secukinumab", "Sublocade", "Tramadol", "Trazodone", "Viagra", "Wellbutrin", "Xanax", "Zubsolv"};

    static String[] kullanimTurleri = {"Agizdan alinir (Kapsul)", "Agizdan alinir (Sivi)", "Deriye surulur (Losyon)",
    "Deriye surulur (Merhem)", "Agizdan alinir (Tablet)", "Agizdan alinir (surup)", "Damar yoluyla (Igne)"};

    static String[] hastalikIsimleri = {"Abse", "Adale romatizmasi", "Adenit", "Agiz yaralari", "Agrili aybasi hali", "Akciger kanseri", "Akdeniz Atesi", "Akrep sokmasi", "Akut Bobrek Iltihabi", "Akut Bronsit", "Albuminuri", "Alerji", "Altini islatmak", "Amipli Dizanteri", "Anne sutunun azligi", "Anus kasintisi", "Apandisit", "Ari sokmasi", "Arpacik", "Artrit", "Astim", "Astigmatlik", "Asiri aybasi kanamasi", "Ates", "Ayak agrilari", "Ayak burkulmasi", "Ayak cibani", "Ayak sismesi", "Ayak terlemesi", "Aybasi duzensizligi", "Aybasi kanamasi azligi", "Aybasi kanamasi yoklugu", "Aybasi kanamasinin gecikmesi", "ARDS (Akut solunum yolu guclugu sendromudur)", "Bademcik iltihabi", "Bagirsak gazi", "Bagirsak iltihabi", "Bagirsak kanamasi", "Bagirsak solucanlari", "Balgam", "Basilli Dizanteri", "Basur", "Bas agrilari", "Bas donmeleri", "Bayilmalar", "Bel agrisi", "Bel gevsekligi", "Bel soguklugu", "Ben", "Beyzbol Parmagi", "Bogaz agrisi", "Bogaz iltihabi", "Bogmaca", "Boyun tutulmasi", "Botulizm", "Bobrek agrisi", "Bobrek iltihabi", "Bobrek kumu", "Bobrek tasi", "Bocek sokmasi", "Bronsit", "Bulanti", "Burkulmalar", "Burun ahtapotu", "Burun akintisi", "Burun kanamasi", "Burun tikanikligi", "Cinsel sogukluk", "Carpinti", "Cibanlar", "Cikiklar", "Cicek", "Cift cinsiyetlilik", "Ciller", "Cocuk felci", "Cocuklarda gelisme bozukluklari", "Cok uyumak", "Curukler", "Cuzzam", "Dalak hastaliklari", "Damar sertligi", "Deri iltihabi", "Deri kanseri", "Deri kurulugu", "Deri lekeleri", "Difteri", "Dil buyumesi", "Dil felci", "Dil iltihabi", "Dil ulseri", "Dis agrisi", "Diyabet", "Dizanteri", "Dogum sancilari", "Dolama", "Dolyolu akintisi", "Donmalar", "Dudak catlamasi", "Egzama", "Ekstrasistol", "Enfarktus", "Ensefalopati", "Epistaksis", "Ergenlik sivilceleri", "Ezikler", "Fabry", "Fazla terlemek", "Felc", "Ferc kasintisi", "Fitik", "Fil hastaligi", "Fistul", "Frengi", "Gastrit", "Gazlar", "Gece korlugu", "Gegirmek", "Gevsek penis", "Gida zehirlenmeleri", "Goguste su toplamasi", "Goz agrisi", "Goz iltihabi", "Goz kanlanmasi", "Goz kasintisi", "Goz sulanmasi", "Goz tiki", "Gozbebekleri iltihabi", "Gozkapagi iltihabi", "Gozkapagi sisligi", "Grip", "Guatr", "Guatr (Yumrulu)", "Gunes carpmasi", "Gunes yanigi", "Halsizlik", "Hararet", "Hava yutma", "Havale", "Hazimsizlik", "Hemofili", "Hickirik", "HIV", "Hipokrat yuzu", "Hipotiroidi", "Hirsutizm", "Horlama", "Husye torbasi sisligi", "Idrar torbasi iltihabi", "Idrar tutamamak", "Idrar tutuklugu", "Idrar yollarinda yanma", "Idrar zorlugu", "Idrarda kan gorulmesi", "Idraryollari iltihabi", "Iktidarsizlik", "Incinmek", "Ishal", "Isilik", "Iskemi", "Isteri", "Istahsizlik", "Kabakulak", "Kabizlik", "Kalbin hizli atmasi", "Kalinbagirsak iltihabi", "Kalp agrisi", "Kalp hastaliklari", "Kalp romatizmasi", "Kalp yetmezligi", "Kan cibani", "Kan isemek", "Kan tukurmek", "Kanda kolestrol", "Kanser", "Kansizlik", "Kaonjestij Kalp Hastaligi", "Karaciger hastaliklari", "Karaciger Buyumesi", "Karaciger sismesi", "Karaciger Yaglanmasi", "Karaciger yetersizligi", "Karin agrisi", "Kasinti", "Katarakt", "Kekemelik", "Kellik", "Kemik erimesi(Osteoproz)", "Kemik iltihabi", "Kemik veremi", "Kemik yumusamasi", "Klostrofobi", "Kleptomani", "Kiriklar", "Kisirlik", "Kizamik", "Kizamikcik", "Kizil", "Kloroz", "Kolera", "Kolesterol", "Korona virus", "Kor ciban", "Kramp", "Kronik Bobrek Iltihabi", "Kronik Bronsit", "Kuduz", "Kulak agrisi", "Kulak akintisi", "Kulak cinlamasi", "Kulak iltihabi", "Kulak kiri", "Kulunc agrisi", "Kum sancilari", "Kurdesen", "Kuspalazi", "Kus Gribi", "Logusa hummasi", "Losemi", "Lumbago", "Lipom", "Lyme", "Mastitis", "Mastositoz", "Melanom", "Morfinizm", "Morfinomani", "Mide tembelligi", "Mide ulseri", "Mide yanmasi", "Migren", "Miyopluk", "Multifokal motor noropati", "Nasir", "Narkolepsi", "Nefes darligi", "Nefes kokusu", "Nefrit", "Nevralji", "Nevrasteni", "Nezle (Soguk alginligi)", "Nikris hastaligi", "Norofibromatoz", "Noropatik osteoartropati", "Onikiparmak bagirsagi ulseri", "Odem", "Osteoporoz", "Pamukcuk", "Paratifo", "Pasli dil", "Prostat buyumesi", "Prostat iltihabi", "Prostat kanseri", "Panik atak", "Parkinasan", "Parkinson", "Pnomotoraks", "Rahim egzamasi", "Rahim iltihabi", "Rahim kanamasi", "Rahim kanseri", "Rahim sarkmasi", "Rahim urlari", "Rahimde polip", "Rasitizm", "Romatizma", "Sac dokulmesi", "Sac ve sakal agarmasi", "Sackiran", "Saclarin kepeklenmesi", "Safra kesesi iltihabi", "Safra taslari", "Sag Kalp Yetmezligi", "Sagirlik", "Sakal iltihabi", "Salgin menenjit", "Saman nezlesi", "Sara", "Sarilik", "Sedef hastaligi", "Ses kaybi", "Ses kisikligi", "Sik sik idrara gitme", "Siraca", "Sitma", "Sigiller", "Sinir bozuklugu", "Sinirsel agrilar", "Sinirsel hazimsizlik", "Sinirsel kusma", "Sinuzit", "Siroz", "Sivilce", "Siyatik", "Skorbut", "Sarbon", "Seker hastaligi", "Sigelloz", "Sirpence", "Sismanlik", "Tarantula isirmasi", "Tansiyon dusuklugu", "Tansiyon yuksekligi", "Tavukkarasi", "Tasikardi", "Temriye", "Tetanos", "Tirnak batmasi", "Tirnak iltihabi", "Tifo", "Tifus", "Titremek", "Trahom", "Ucuk", "Ur", "Uykusuzluk", "Uyurgezerlik", "Uyuz", "Uremi", "Usumek", "Ulser", "Ufurum(Kalp damar sikisikligi)", "Varis", "Varis ulseri", "Veba", "Verem", "Yaniklar", "Yaralar", "Yilan sokmasi", "Yilancik", "Zatulcenp", "Zaturre", "Zayiflik", "Zehirlenme", "Zihin yorgunlugu", "Zollinger Ellison Sendromu", "Zona"};

    static String[] hastalikBelirtileri = {"Ciltte Kuruluk", "Kasinti", "Yanma Hissi", "Burun Tikanikligi", "Bas Agrisi", "Bogaz Gicikligi", "Bogazda Hafif Agri", "Yorgunluk", "Bas Donmesi", "Kulak Cinlamasi", "Eklem Agrisi"};

    static String[] raporTurleri = {"Ise giris raporu", "Is raporu", "Ilac raporu", "Evlilik raporu", "Ehliyet raporu"};

    static String[] raporAciklamalari = {"Rapor verildi."};

    static String[] hastalikTurleri = {"Kalp Hastaligi", "Cilt Hastaligi", "Goz Hastaligi", "Karaciger Hastaligi", "Bobrek Hastaligi", "Kulak Hastaligi", "Akciger Hastaligi", "Sac Hastaligi", "Burun Hastaligi", "Eklem Hastaligi", "Bagirsak Hastaligi"};

    static String[] tahlilAciklamalari = {"Tahlil sonucunda gerekli recete verilmistir."};

    static String[] tahlilTurleri = {"Idrar Tahlili", "Kan Tahlili", "Mikroskopi Tahlili", "Radyolojik Tahlili", "Patoloji Tahlili"};

    static String[] receteAciklamalari = {"Goze Sikilacak", "Buruna Sikilacak", "Kola Surulecek", "Yuze Surulecek", "Boyuna Surulecek", "Dize Surulecek", "Agizdan Alinacak", "Igneyle Alinacak"};

    static String[] receteTurleri = {"Kirmizi", "Yesil", "Mor", "Turuncu"};

    static String[] receteDozlari = {"Gunde 1", "Gunde 2", "Gunde 3"};

    static String[] recetePeriyotlari = {"1 Kez", "2 Kez", "3 Kez", "4 Kez"};
    
    static ArrayList<String> kullanilanIlacIsimleri = new ArrayList<>();

    static ArrayList<Hasta> hastalar;
    static ArrayList<Doktor> doktorlar;
    static ArrayList<Randevu> randevular;
    static ArrayList<Ilac> ilaclar;
    static ArrayList<Rapor> raporlar;
    static ArrayList<Hastalik> hastaliklar;
    static ArrayList<Tahlil> tahliller;
    static ArrayList<Recete> receteler;

    static FileWriter myWriter;


    public static void main(String[] args) {
        try {

        myWriter = new FileWriter("all_queries.sql");
        }
        catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        int hastaNum;
        int hastaneNum;
        int doktorNum;
        int randevuNum;
        int ilacNum;
        int raporNum;
        int hastalikNum;
        int tahlilNum;
        int receteNum;

        if(args.length != 1)
        {
            System.out.print("Hasta Sayisi: ");
            Scanner sc = new Scanner(System.in);
            hastaNum = sc.nextInt();
            System.out.print("Hastane Sayisi (max 10): ");
            hastaneNum = sc.nextInt();
            System.out.print("Doktor Sayisi: ");
            doktorNum = sc.nextInt();
            System.out.print("Randevu Sayisi: ");
            randevuNum = sc.nextInt();
            System.out.print("Ilac Sayisi (max 60): ");
            ilacNum = sc.nextInt();
            System.out.print("Rapor Sayisi: ");
            raporNum = sc.nextInt();
            System.out.print("Hastalik Sayisi (max 330): ");
            hastalikNum = sc.nextInt();
            System.out.print("Tahlil Sayisi: ");
            tahlilNum = sc.nextInt();
            System.out.print("Recete Sayisi: ");
            receteNum = sc.nextInt();
            return;
        }
        else
        {
            hastaNum = 40;
            hastaneNum = 5;
            doktorNum = 40;
            randevuNum = 50;
            ilacNum = 60;
            raporNum = 1000;
            hastalikNum = 300;
            tahlilNum = 1000;
            receteNum = 10;
        }

        hastalar = new ArrayList<Hasta>(hastaNum);
        doktorlar = new ArrayList<Doktor>(doktorNum);
        randevular = new ArrayList<Randevu>(randevuNum);
        ilaclar = new ArrayList<Ilac>(ilacNum);
        raporlar = new ArrayList<Rapor>(raporNum);
        hastaliklar = new ArrayList<Hastalik>(hastalikNum);
        tahliller = new ArrayList<Tahlil>(tahlilNum);
        receteler = new ArrayList<Recete>(receteNum);
    
        for ( int i=0; i<hastaNum; i++)
        {
            Hasta temp = new Hasta();
            temp.TC = randomTC();
            temp.isim = isimler[ (int) (Math.random()*(isimler.length)) ];
            temp.soyisim = soyisim[ (int) (Math.random()*(gruplar.length)) ];
            temp.kangrubu = gruplar[ (int) (Math.random()*(gruplar.length)) ];
            temp.cinsiyet = cinsiyet[ (int) (Math.random()*(cinsiyet.length)) ];
            temp.boy = (int) (Math.random()*(45)+155);
            temp.kilo = (int) (Math.random()*(60)+50);
            temp.dogumTarihi = randomDate();
            hastalar.add(temp);
        }

        for ( int i=0; i<doktorNum; i++)
        {
            Doktor temp = new Doktor();
            temp.TC = randomTC();
            temp.isim = isimler[ (int) (Math.random()*(isimler.length)) ];
            temp.soyisim = soyisim[ (int) (Math.random()*(gruplar.length)) ];
            temp.mezununiversite = universiteler[ (int) (Math.random()*(universiteler.length)) ];
            temp.unvan = unvanlar[ (int) (Math.random()*(unvanlar.length))];
            temp.brans = branslar[ (int) (Math.random()*(branslar.length)) ];
            temp.hastaneadi = hastaneler[ (int) (Math.random()*(hastaneNum)) ].ad;
            doktorlar.add(temp);
        }

        for ( int i=0; i<randevuNum; i++)
        {
            Randevu temp = new Randevu();
            temp.randevuno = randomRandevuNo();
            temp.randevuturu = randevuTurleri[ (int) (Math.random()*(randevuTurleri.length)) ];
            temp.tarih = randomDateYakin();
            temp.doktortc = doktorlar.get( (int) (Math.random()*(doktorlar.size()))).TC;
            temp.hastatc = hastalar.get( (int) (Math.random()*(hastalar.size()))).TC;
            randevular.add(temp);
        }

        for ( int i=0; i<ilacNum; i++)
        {
            Ilac temp = new Ilac();
            String isim;
            do {
                isim = ilacIsimleri[ (int) (Math.random()*(ilacIsimleri.length)) ];
            }   while ( kullanilanIlacIsimleri.contains(isim) );
            kullanilanIlacIsimleri.add(isim);
            temp.ilacAdi = isim;
            temp.kullanimSekli = kullanimTurleri[ (int) (Math.random()*(kullanimTurleri.length)) ];
            ilaclar.add(temp);
        }

        for ( int i=0; i<raporNum; i++ )
        {
            Rapor temp = new Rapor();
            Randevu temp2;
            temp.detayNo = randomDetayNo();
            do
            {
                temp2 = randevular.get( (int) (Math.random()*(randevular.size())));
                temp.randevuNo = temp2.randevuno;
            } while ( isPast( temp2.tarih ) );
            temp.raporSuresi = randomTime();
            temp.aciklama = raporAciklamalari[ (int) (Math.random()*(raporAciklamalari.length)) ];
            temp.tur = raporTurleri[ (int) (Math.random()*(raporTurleri.length)) ];
            raporlar.add(temp);
        }

        for ( int i=0; i<hastalikNum; i++ )
        {
            Hastalik temp = new Hastalik();
            temp.detayNo = randomDetayNo();
            temp.randevuNo = randevular.get((int) (Math.random()*(randevular.size()))).randevuno;
            temp.aciklama = hastalikIsimleri[ (int) (Math.random()*(hastalikIsimleri.length)) ];
            temp.belirtiler = hastalikBelirtileri[ (int) (Math.random()*(hastalikBelirtileri.length)) ];
            temp.tur = hastalikTurleri[ (int) (Math.random()*(hastalikTurleri.length))  ];
            hastaliklar.add(temp);
        }

        for (int i=0; i<tahlilNum; i++)
        {
            Tahlil temp = new Tahlil();
            Randevu temp2;
            temp.detayNo = randomDetayNo();
            do
            {
                temp2 = randevular.get( (int) (Math.random()*(randevular.size())));
                temp.randevuNo = temp2.randevuno;
            } while ( isPast( temp2.tarih ) );
            temp.testGorseli = randomTestGorseli();
            temp.aciklama = tahlilAciklamalari[ (int) (Math.random()*(tahlilAciklamalari.length)) ];
            temp.tur = tahlilTurleri[ (int) (Math.random()*(tahlilTurleri.length)) ];
            tahliller.add(temp);
        }

        for ( int i=0; i<receteNum; i++ )
        {
            Recete temp = new Recete();
            do
            {
                temp.detayNo = randomDetayNo();
                Randevu temp2;
                temp.detayNo = randomDetayNo();
                do
                {
                    temp2 = randevular.get( (int) (Math.random()*(randevular.size())));
                    temp.randevuNo = temp2.randevuno;
                } while ( isPast( temp2.tarih ) );
                temp.ilacAdi = ilaclar.get((int) (Math.random()*(ilaclar.size()))).ilacAdi;
            } while ( detayNoIlacAdiUnique(temp.detayNo, temp.ilacAdi) );
            temp.aciklama = receteAciklamalari[ (int) (Math.random()*(receteAciklamalari.length)) ];
            temp.tur = receteTurleri[ (int) (Math.random()*(receteTurleri.length)) ];
            temp.doz = receteDozlari[ (int) (Math.random()*(receteDozlari.length)) ];
            temp.periyot = recetePeriyotlari[ (int) (Math.random()*(recetePeriyotlari.length)) ];
            receteler.add(temp);
        }

        for ( int i=0; i<hastaNum; i++ )
        {
            customPrint(String.format("INSERT INTO hasta VALUES ('%s', '%s', '%s', '%s', '%s', %d, %d, STR_TO_DATE('%s', '%%d/%%m/%%Y'));\n",hastalar.get(i).TC, hastalar.get(i).isim, hastalar.get(i).soyisim, hastalar.get(i).kangrubu, 
            hastalar.get(i).cinsiyet, hastalar.get(i).boy, hastalar.get(i).kilo, hastalar.get(i).dogumTarihi));
        }
        for (int i=0; i<hastaneNum; i++)
        {
            customPrint(String.format("INSERT INTO hastane VALUES ('%s', '%s', '%s', '%s', '%s');\n",
            hastaneler[i].ad, hastaneler[i].telefon, hastaneler[i].il, hastaneler[i].ilce, hastaneler[i].adres));
        }
        for ( int i=0; i<doktorNum; i++ )
        {
            customPrint(String.format("INSERT INTO doktor VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s');\n",
            doktorlar.get(i).TC, doktorlar.get(i).isim, doktorlar.get(i).soyisim, doktorlar.get(i).mezununiversite, doktorlar.get(i).unvan, doktorlar.get(i).brans, doktorlar.get(i).hastaneadi));
        }
        for ( int i=0; i<randevuNum; i++ )
        {
            customPrint(String.format("INSERT INTO randevu VALUES ('%s', '%s', STR_TO_DATE('%s', '%%d/%%m/%%Y %%H:%%i'), '%s', '%s');\n",
            randevular.get(i).randevuno, randevular.get(i).randevuturu, randevular.get(i).tarih, randevular.get(i).doktortc,
            randevular.get(i).hastatc));
        }
        for ( int i=0; i<ilacNum; i++ )
        {
            customPrint(String.format("INSERT INTO ilac VALUES ('%s', '%s');\n",
            ilaclar.get(i).ilacAdi, ilaclar.get(i).kullanimSekli));
        }
        for ( int i=0; i<raporNum; i++ )
        {
            customPrint(String.format("INSERT INTO rapor VALUES ('%s','%s','%s','%s','%s');\n",
            raporlar.get(i).detayNo, raporlar.get(i).randevuNo, raporlar.get(i).raporSuresi, raporlar.get(i).aciklama, raporlar.get(i).tur));
        }
        for ( int i=0; i<hastalikNum; i++ )
        {
            customPrint(String.format("INSERT INTO hastalik VALUES ('%s', '%s', '%s', '%s', '%s');\n",
            hastaliklar.get(i).detayNo, hastaliklar.get(i).randevuNo, hastaliklar.get(i).aciklama, hastaliklar.get(i).belirtiler, hastaliklar.get(i).tur));
        }
        for ( int i=0; i<tahlilNum; i++ )
        {
            customPrint(String.format("INSERT INTO tahlil VALUES('%s', '%s', '%s', '%s', '%s');\n",
            tahliller.get(i).detayNo, tahliller.get(i).randevuNo, tahliller.get(i).testGorseli, tahliller.get(i).aciklama, tahliller.get(i).tur));
        }
        for ( int i=0; i<receteNum; i++ )
        {
            customPrint(String.format("INSERT INTO recete VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s');\n",
            receteler.get(i).detayNo, receteler.get(i).randevuNo, receteler.get(i).ilacAdi, receteler.get(i).aciklama, receteler.get(i).tur, receteler.get(i).doz, receteler.get(i).periyot));
        }

        try {

        myWriter.close();
        }
        catch (IOException e) 
        {
            e.printStackTrace();
        }
    }

    // EGER DOSYAYA YAZMAK ISTERSEN BU METODU DEGISTIR
    // BASILACAK HER PRINT BURAYA GIRIYO
    public static void customPrint(String printThis)
    {
        try 
        {
            myWriter.write(printThis);
        } 
        catch (IOException e) 
        {
            e.printStackTrace();
        }
    }

    public static boolean detayNoIlacAdiUnique( String detayNo, String ilacAdi )
    {
        for ( int i=0; i<receteler.size(); i++ )
        {
            if ( receteler.get(i).detayNo.equals(detayNo) &&
            receteler.get(i).ilacAdi.equals(ilacAdi) )
                return true;
        }
        return false;
    }

    public static String randomTestGorseli()
    {
        return "./loading.gif";
    }

    public static String randomTime()
    {
        int gun = (int) (Math.random()*14) + 1;
        int saat = gun * 24;
        if ( saat < 100 )
            return "0" + saat + ":00:00";
        else
            return "" + saat + ":00:00";
    }

    static ArrayList<Long> tcler = new ArrayList<>();

    public static String randomTC()
    {
        StringBuilder sb;
        long tc;
        do {
        sb = new StringBuilder();
        sb.append((int) (Math.random()*(9)+1));   
        for ( int i=0; i< 10; i++)
            sb.append((int) (Math.random()*(10)));
        tc = Long.parseLong(sb.toString());
        } while ( tcler.contains(tc) );

        tcler.add(tc);
        return sb.toString();
    }

    static ArrayList<Long> randevunolar = new ArrayList<>();

    public static String randomRandevuNo()
    {
        StringBuilder sb;
        long randevuno;
        do {
        sb = new StringBuilder();
        sb.append((int) (Math.random()*(9)+1));   
        for ( int i=0; i<8; i++)
            sb.append((int) (Math.random()*(10)));
            randevuno = Long.parseLong(sb.toString());
        } while ( randevunolar.contains(randevuno) );

        randevunolar.add(randevuno);
        return sb.toString();
    }

    static ArrayList<Long> detaynolar = new ArrayList<>();

    public static String randomDetayNo()
    {
        StringBuilder sb;
        long detayNo;
        do {
        sb = new StringBuilder();
        sb.append((int) (Math.random()*(9)+1));   
        for ( int i=0; i<7; i++)
            sb.append((int) (Math.random()*(10)));
            detayNo = Long.parseLong(sb.toString());
        } while ( detaynolar.contains(detayNo) );

        detaynolar.add(detayNo);
        return sb.toString();
    }

    public static String randomDate()
    {
        int gun = (int) (Math.random()*(30));
        int ay = (int) (Math.random()*(13));
        int yil = (int) (Math.random()*(100)+1910);

        if(gun == 0)
            gun = 1;
        if(ay == 0)
            ay = 1;

        StringBuilder sb = new StringBuilder();
        if( ay == 2 && gun > 28 )
        {
            gun = 28;
        }
        else if ( ay == 4 || ay == 6 || ay == 9 || ay == 11 )
        {
            if ( gun > 30 )
                gun = 30;
        }
        if ( gun<10 )
            sb.append("0" + gun);
        else
            sb.append(gun);

        sb.append("/");

        if ( ay<10 )
            sb.append("0" + ay);
        else
            sb.append(ay);

        sb.append("/"+yil);

        return sb.toString();
    }

    public static String randomDateYakin()
    {
        int gun = (int) (Math.random()*(30));
        int ay = (int) (Math.random()*(6) + 7);
        int yil = 2022;

        if(ay == 0)
            ay = 1;
        if(gun == 0)
            gun = 1;
        

        if(ay == 2 && gun > 28)
        {
            gun = 28;
        }
        else if ( ay == 4 || ay == 6 || ay == 9 || ay == 11 )
        {
            if ( gun > 30 )
                gun = 30;
        }

        StringBuilder sb = new StringBuilder();
        if ( gun<10 )
            sb.append("0" + gun);
        else
            sb.append(gun);

        sb.append("/");

        if ( ay<10 )
            sb.append("0" + ay);
        else
            sb.append(ay);

        sb.append("/"+yil+" ");
        int saat = (int)( Math.random()*8 + 8 );
        int temp = saat % 24;
        
        if ( temp < 10 )
        {
            sb.append("0"+temp);
            
        }
        else
        {
            sb.append(temp);
        }
        sb.append(":00");

        return sb.toString();
    }

    public static boolean isPast( String str )
    {
        int gun = Integer.parseInt(str.substring(0,2));
        int ay = Integer.parseInt(str.substring(3,5));
        int yil = Integer.parseInt(str.substring(6,10));

        if ( yil == 2023 )
            return false;
        if ( ay == 12 && gun > 17 )
            return false;
        return true;
    }
}


class Hasta
{
    public String TC; 
    public String isim;  
    public String soyisim;
    public String kangrubu;
    public String cinsiyet;
    public int boy;
    public int kilo;
    public String dogumTarihi;
 };

class Hastane
{
    public String ad; 
    public String telefon;  
    public String il;
    public String ilce;
    public String adres;

    Hastane(String ad, String telefon, String il, String ilce, String adres)
    {
        this.ad = ad;
        this.telefon = telefon;
        this.il = il;
        this.ilce = ilce;
        this.adres = adres;
    }
};

class Doktor
{
    public String TC; 
    public String isim;  
    public String soyisim;
    public String mezununiversite;
    public String unvan;
    public String brans;
    public String hastaneadi;
};

class Randevu
{
    public String randevuno; 
    public String randevuturu;  
    public String tarih;
    public String doktortc;
    public String hastatc;
};

class Ilac
{
    public String ilacAdi;
    public String kullanimSekli;
};

class Recete
{
    public String detayNo;
    public String randevuNo;
    public String ilacAdi;
    public String aciklama;
    public String tur;
    public String doz;
    public String periyot;
};

class Hastalik
{
    public String detayNo;
    public String randevuNo;
    public String aciklama;
    public String belirtiler;
    public String tur;
}

class Rapor
{
    public String detayNo;
    public String randevuNo;
    public String raporSuresi;
    public String aciklama;
    public String tur;
}

class Tahlil
{
    public String detayNo;
    public String randevuNo;
    public String testGorseli;
    public String aciklama;
    public String tur;
}