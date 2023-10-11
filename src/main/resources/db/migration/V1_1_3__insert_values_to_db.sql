INSERT INTO price (firmId,date,firmName,rate) values ('74290','2023-10-04 17:00','Ластівка','37.7');

INSERT INTO category (category_Id,category_name,firm_id) values ('1','Кисло-молочні продукти','74290');
INSERT INTO category (category_Id,category_name,firm_id) values ('2','Хлібо-булочні вироби','74290');
INSERT INTO category (category_Id,category_name,firm_id) values ('3','Солодощі','74290');
INSERT INTO category (category_Id,category_name,firm_id) values ('4','Плодо-овочеві продукти','74290');

INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('1','1', 'Молочна компанія Галичина','Молоко','2,5% жирності, 900 грам, поліетилентерефталатна упаковка','https://shop.ua/1/2/123.html','35','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('2','1', 'Молочна компанія Галичина','карпатський кефір','2,5% жирності, 870 грам','https://shop.ua/1/2/123.html','43.99','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('3','1', 'Молочна компанія Галичина','Карпацький йогурт','2,2% жирності, 300 грам','https://shop.ua/1/2/123.html','22.49','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('4','1', 'Молочна компанія Галичина','Сметана','15% жирності, 300 грам','https://shop.ua/1/2/123.html','41.99','74290');

INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('5','2', 'Крафтяр','Хліб крафтяр','Борошно ПШЕНИЧНЕ в/с, вода питна, закваска (ГЛЮТЕН), сіль йодована','https://shop.ua/1/2/123.html','25.99','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('6','2', 'Крафтяр','Хліб вулкан','Борошно ПШЕНИЧНЕ в/с, вода питна, закваска (ГЛЮТЕН), сіль йодована','https://shop.ua/1/2/123.html','29.99','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('7','2', 'Крафтяр','Софіївський багет','борошно ПШЕНИЧНЕ в/с, вода, ядро соняшникового насіння, картопляні пластівці, закваска (ГЛЮТЕН), маргарин столовий 82% жиру, карамелізований екстракт ЯЧМІННОГО солоду, солод сухий ЖИТНІЙ ферментований, цукор, сіль йодована, сіль морська, часник сушений, олія соняшникова рафінована дезодорована','https://shop.ua/1/2/123.html','19.99','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('8','2', 'Пекарня Ластівки','Рулет з маком','н/ф (борошно ПШЕНИЧНЕ в/с, вода, цукор, мак (7.8%), МОЛОКО сухе знежирене, дріжджі хлібопекарські пресовані, ЯЙЦЯ курячі, маргарин (СОЯ), олія соняшникова рафінована дезодорована, поліпшувач для борошна (ГЛЮТЕН), сіль, клейковина ПШЕНИЧНА суха, ароматизатор ванілін, поліпшувач хлібопекарський (ГЛЮТЕН), ароматизатор Лимон), меланж курячих ЯЄЦЬ, мак (0.4%)','https://shop.ua/1/2/123.html','29.99','74290');

INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('9','3', 'Рошен', 'Корівка',' Склад: Цукор, продукт молокомісткий згущений (молоко знежирене (27%), цукор, замінник молочного жиру (пальмова, соняшникова олії), лактоза), патока, масло солодковершкове, ароматизатор','https://shop.ua/1/2/123.html','2.51','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('10','3', 'Рошен', 'Ромашка', ' Склад: Цукор, продукт молокомісткий згущений (молоко знежирене згущене, цукор, замінник молочного жиру (негідрогенізована пальмова олія), лактоза), какао терте, патока, жир рослинний (негідрогенізована пальмова олія), какао-порошок зі зниженим вмістом жиру 2%, бренді, какао-масло, еквівалент какао-масла (негідрогенізована олія ши), емульгатори (соєвий лецитин, Е476), ароматизатори, глазур шоколадна - 22%','https://shop.ua/1/2/123.html','5.32','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('11','3', 'Конті', ' Джек', ' Вага, гр: 290, Склад: Цукор, жир рослинний негідрогенізований (олія пальмова та її фракції, емульгатори: Е 492, Е 322; антіоксиданти: Е 304, Е 306), борошно пшеничне вищого сорту, какао зі зниженим вмістом жиру (містить 10-12 % какао масла), крохмаль кукурудзяний, емульгатори: лецитин соєвий, Е 476; олія пальмова рафінована дезодорована, сіль, порошок яєчний, розпушувачі: бікарбонат натрію, карбонат амонію; ароматизатори.','https://shop.ua/1/2/123.html','23.77','74290' );
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('12','3', 'Рошен',' Рачок', 'Вага, кг: 1, Склад: цукор-пісок, шоколадна начинка (30%) (цукор-пісок, ядра арахісу смажені терті, какао терте, маргарин молочний, жир кондитерський, ароматизатори: Ваніль, Арахіс, ідентичні натуральним; емульгатор соєвий лецитин), патока крохмальна, сироп інвертний (цукор-пісок, регулятори кислотності: молочна кислота, натрій двовуглекислий), ароматизатор Ваніль, ідентичний натуральному, барвники натуральні: кармін, екстракт паприки.','https://shop.ua/1/2/123.html','173.9','74290' );

INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('13','4', 'Грош','Огірок корнішон','Ціна вказана за кілограм','https://shop.ua/1/2/123.html','45','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('14','4', 'Грош','Помідор Україна', 'Ціна вказана за кілограм','https://shop.ua/1/2/123.html','36','74290');
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('15','4', 'Грош','Цибуля ріпчаста Україна', 'Ціна вказана за кілограм','https://shop.ua/1/2/123.html','14.5','74290' );
INSERT INTO items (item_id,category_id,vendor,name,description,url,priceRUAH,firm_id) values ('16','4', 'Грош','Буряк Україна', ' Ціна вказана за кілограм','https://shop.ua/1/2/123.html','20','74290' );