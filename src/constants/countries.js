import england_img from "../assets/england.jpg";
import switzerland_img from "../assets/switzerland.jpg";
import france_img from "../assets/france.jpg";
import russia_img from "../assets/russia.jpg";
import netherlands_img from "../assets/netherlands.jpg";
import germany_img from "../assets/germany.jpg";
import denmark_img from "../assets/denmark.jpg";
import usa_img from "../assets/usa.jpg";

import england_vid from "../assets/video/england.mp4";
import switzerland_vid from "../assets/video/switzerland.mp4";
import france_vid from "../assets/video/france.mp4";
import russia_vid from "../assets/video/russia.mp4";
import netherlands_vid from "../assets/video/netherlands.mp4";
import germany_vid from "../assets/video/germany.mp4";
import denmark_vid from "../assets/video/denmark.mp4";
import usa_vid from "../assets/video/usa.mp4";

import eng_1 from "../assets/eng_1.jpg";
import eng_2 from "../assets/eng_2.jpg";
import eng_3 from "../assets/eng_3.jpg";
import eng_4 from "../assets/eng_4.jpg";
import eng_5 from "../assets/eng_5.jpg";
import eng_6 from "../assets/eng_6.jpg";

import swiss_1 from "../assets/swiss_1.jpg";
import swiss_2 from "../assets/swiss_2.jpg";
import swiss_3 from "../assets/swiss_3.jpg";
import swiss_4 from "../assets/swiss_4.jpg";
import swiss_5 from "../assets/swiss_5.jpg";
import swiss_6 from "../assets/swiss_6.jpg";

import france_1 from "../assets/france_1.jpg";
import france_2 from "../assets/france_2.jpg";
import france_3 from "../assets/france_3.jpg";
import france_4 from "../assets/france_4.jpg";
import france_5 from "../assets/france_5.jpg";
import france_6 from "../assets/france_6.jpg";

import russia_1 from "../assets/russia_1.jpg";
import russia_2 from "../assets/russia_2.jpg";
import russia_3 from "../assets/russia_3.jpg";
import russia_4 from "../assets/russia_4.jpg";
import russia_5 from "../assets/russia_5.jpg";
import russia_6 from "../assets/russia_6.jpg";

import neth_1 from "../assets/neth_1.jpg";
import neth_2 from "../assets/neth_2.jpg";
import neth_3 from "../assets/neth_3.jpg";
import neth_4 from "../assets/neth_4.jpg";
import neth_5 from "../assets/neth_5.jpg";
import neth_6 from "../assets/neth_6.jpg";

import germany_1 from "../assets/germany_1.jpg";
import germany_2 from "../assets/germany_2.jpg";
import germany_3 from "../assets/germany_3.jpg";
import germany_4 from "../assets/germany_4.jpg";
import germany_5 from "../assets/germany_5.jpg";
import germany_6 from "../assets/germany_6.jpg";

import denmark_1 from "../assets/denmark_1.jpg";
import denmark_2 from "../assets/denmark_2.jpg";
import denmark_3 from "../assets/denmark_3.jpg";
import denmark_4 from "../assets/denmark_4.jpg";
import denmark_5 from "../assets/denmark_5.jpg";
import denmark_6 from "../assets/denmark_6.jpg";

import usa_1 from "../assets/usa_1.jpg";
import usa_2 from "../assets/usa_2.jpg";
import usa_3 from "../assets/usa_3.jpg";
import usa_4 from "../assets/usa_4.jpg";
import usa_5 from "../assets/usa_5.jpg";
import usa_6 from "../assets/usa_6.jpg";

function addCountryInfo(
  label,
  name,
  img,
  vid,
  capital,
  info,
  currency,
  galleryImage,
  galleryHeader,
  galleryInfo,
  [x, y]
) {
  return {
    label: label,
    name: name,
    img: img,
    vid: vid,
    capital: capital,
    info: info,
    currency: currency,
    galleryImage: galleryImage,
    galleryHeader: galleryHeader,
    galleryInfo: galleryInfo,
    location: [x, y],
  };
}

const FranceEN = addCountryInfo(
  "France",
  "France",
  france_img,
  france_vid,
  "Paris",
  "France, officially the French Republic (French: République française),[1] is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories.[XIII] The metropolitan area of France extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. ",
  "EUR",
  [france_1, france_2, france_3,france_4, france_5, france_6],
  ["Eiffel Tower", "Louvre Museum", "Cathédrale Notre-Dame de Chartres",'Palace of Versailles','Côte dAzur', 'Mont Saint-Michel'],
  ["This structure of 8,000 metallic parts was designed by Gustave Eiffel","The Louvre ranks among the top European collections of fine arts.", "The UNESCO-listed cathedral exemplifies the glory of medieval Gothic architecture.",'More than just a royal residence, Versailles was designed to show off the glory of the French monarchy. ','this glamorous seaside destination is known as the French Riviera, words that have a ring of sun-drenched decadence.','The main tourist attraction, the Abbaye de Saint-Michel is a marvel of medieval architecture with soaring Gothic spires.'],
  [48.85341, 2.3488]
);

const FranceRU = addCountryInfo(
  "France",
  "Франция",
  france_img,
  france_vid,
  "Париж",
  "Франция, официально Французская Республика (франц.République française),[1] - страна, расположенная в основном в Западной Европе, состоящая из метрополии Франции и нескольких заморских регионов и территорий.Метрополия Франции простирается от Рейна до Атлантического океана и от Средиземного моря до Ла-Манша и Северного моря. Заморские территории включают Французскую Гвиану в Южной Америке и несколько островов в Атлантическом, Тихом и Индийском океанах. Франция граничит с Бельгией, Люксембургом и Германией на северо-востоке, Швейцарией, Монако и Италией на востоке, Андоррой и Испанией на юге, а также Нидерландами, Суринамом и Бразилией на Американском Континенте.",
  "EUR",
  [france_1, france_2, france_3,france_4, france_5, france_6],
  ["Эйфелева башня", "Музей Лувра", "Собор Notre-Dame de Chartres", "Версальский дворец", "Побережье дазур", "Мон Сен-Мишель"],
  ["Эта конструкция из 8000 металлических деталей была спроектирована Гюставом Эйфелем","Лувр входит в число лучших европейских коллекций изобразительного искусства.", "Собор, внесенный в список Всемирного наследия ЮНЕСКО, олицетворяет славу средневековой готической архитектуры.", "Версаль был не просто королевской резиденцией, он был создан, чтобы показать славу французской монархии.", "Это гламурное приморское место известно как Французская Ривьера, слова, которые имеют кольцо залитого солнцем декаданса.", "Главная достопримечательность аббатства Сен-Мишель-это чудо средневековой архитектуры с высокими готическими шпилями."],
  [48.85341, 2.3488]
);

const FranceDE = addCountryInfo(
  "France",
  "Frankreich",
  france_img,
  france_vid,
  "Paris",
  "Frankreich, offiziell die Französische Republik (französisch: République française),[1] ist ein Land, das hauptsächlich in Westeuropa liegt und aus dem französischen Mutterland und mehreren überseeischen Regionen und Gebieten besteht.[XIII] Die Metropolregion Frankreichs erstreckt sich vom Rhein bis zum Atlantik und vom Mittelmeer bis zum Ärmelkanal und der Nordsee. Die Überseegebiete umfassen Französisch-Guayana in Südamerika und mehrere Inseln im Atlantik, Pazifik und Indischen Ozean. Frankreich grenzt im Nordosten an Belgien, Luxemburg und Deutschland, im Osten an die Schweiz, Monaco und Italien, im Süden an Andorra und Spanien sowie in Amerika an die Niederlande, Suriname und Brasilien.",
  "EUR",
  [france_1, france_2, france_3,france_4, france_5, france_6],
  ["Eiffelturm", "Louvre", "Kathedrale Unserer lieben Frau von Chartres", "Palast von Versailles", 'Küste dAzur', 'Mont-Saint-Michel'],
  ["Diese Struktur von 8.000 Metallteilen wurde von Gustave Eiffel entworfen","Der Louvre zählt zu den wichtigsten europäischen Sammlungen der bildenden Künste.", "Die UNESCO-geschützte Kathedrale ist ein Beispiel für den Ruhm der mittelalterlichen gotischen Architektur.", 'Versailles war mehr als nur eine königliche Residenz und sollte den Ruhm der französischen Monarchie zeigen.', 'dieses glamouröse Reiseziel am Meer ist bekannt als die französische Riviera, Wörter, die einen Ring von sonnenverwöhnten Dekadenz haben.', 'Die wichtigste Touristenattraktion, die Abbaye de Saint-Michel, ist ein Wunder der mittelalterlichen Architektur mit hoch aufragenden gotischen Türmen.'],
  [48.85341, 2.3488]
);

const FranceFR = addCountryInfo(
  "France",
  "France",
  france_img,
  france_vid,
  "Paris",
  "La France, officiellement la République française[1], est un pays principalement situé en Europe occidentale, composé de la France métropolitaine et de plusieurs régions et territoires d'outre-mer.[XIII] L'aire métropolitaine de la France s'étend du Rhin à l'océan Atlantique et de la mer Méditerranée à la Manche et à la mer du Nord. Les territoires d'outre-mer comprennent la Guyane française en Amérique du Sud et plusieurs îles dans les océans Atlantique, Pacifique et Indien. La France est limitrophe de la Belgique, du Luxembourg et de l'Allemagne au nord-est, de la Suisse, de Monaco et de l'Italie à l'est, d'Andorre et de l'Espagne au sud, ainsi que des Pays-Bas, du Suriname et du Brésil dans les Amériques.",
  "EUR",
  [france_1, france_2, france_3,france_4, france_5, france_6],
  ["Tour Eiffel", "Musée du Louvre", "Cathédrale Notre-Dame de Chartres", 'Château de Versailles', 'dAzur Coast', 'Mont Saint-Michel'],
  ["Cette structure de 8 000 pièces métalliques a été conçue par Gustave Eiffel", " Le Louvre se classe parmi les meilleures collections européennes des beaux-arts.", "La cathédrale classée au patrimoine mondial de l'UNESCO illustre la gloire de l'architecture gothique médiévale.", "Plus qu'une simple résidence royale, Versailles a été conçu pour montrer la gloire de la monarchie française. ", "cette destination balnéaire glamour est connue sous le nom de Côte d'Azur, des mots qui ont un anneau de décadence ensoleillée.", "La principale attraction touristique, l'Abbaye de Saint-Michel est une merveille de l'architecture médiévale avec des flèches gothiques flamboyantes."],
  [48.85341, 2.3488]
);

const EnglandEN = addCountryInfo(
  "England",
  "England",
  england_img,
  england_vid,
  "London",
  "England is a country that is part of the United Kingdom.It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.",
  "GBP",
  [eng_1, eng_2, eng_3, eng_4, eng_5, eng_6],
  ["Stonehenge", "The Cotswolds", "Big Ben",'Tower of London', 'The Roman Baths and Georgian City of Bath', 'Chester Zoo'],
  ["Europe's best-known prehistoric monument", "The beauty of the Cotswolds has much to do with its quaint villages and towns, such as Castle Combe, Chipping Norton, and Tetbury.", "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster",'Prison, palace, treasure vault, observatory, and menagerie: the Tower of London has done it all and its one of the top attractions in London. ', 'While most famous for the magnificent 2,000-year-old Roman Baths built around the citys rejuvenating hot springs, its equally well known for its honey-colored Georgian Townhouses, such as those located on Royal Crescent.',
  'Chester Zoo is Englands most visited attraction outside of London and is one of the best places to visit in England for families.'],
  [51.50853, -0.12574]
);

const EnglandRU = addCountryInfo(
  "England",
  "Англия",
  england_img,
  england_vid,
  "Лондон",
  "Англия-это страна, которая является частью Соединенного Королевства.Он разделяет сухопутные границы с Уэльсом на западе и Шотландией на севере. Ирландское море лежит к северо - западу от Англии, а Кельтское-к юго-западу. Англия отделена от континентальной Европы Северным морем на востоке и Ла-Маншем на юге. Страна занимает пять восьмых острова Великобритании, лежащего в Северной Атлантике, и включает в себя более 100 небольших островов, таких как острова Силли и остров Уайт.",
  "GBP",
  [eng_1, eng_2, eng_3, eng_4, eng_5, eng_6],
  ["Стоунхендж", "Котсуолдс", "Биг-Бен","Лондонский Тауэр", "Римские бани и Георгианский город Бат", "Честерский зоопарк"],
  ["Самый известный доисторический памятник Европы", "Красота Котсуолдса имеет много общего с его причудливыми деревнями и городами, такими как Касл-Комб, Чиппинг-Нортон и Тетбери", "Биг-Бен-это прозвище Большого колокола бьющих часов в северной части Вестминстерского дворца", "Тюрьма, дворец, сокровищница, обсерватория и зверинец: Лондонский Тауэр сделал все это и является одной из главных достопримечательностей Лондона", 'В то время как самый известный за великолепного 2000-летней римской бани, построенные вокруг города омолаживающими горячими источниками, столь же хорошо известный своими медового цвета георгианском стиле, такие как те, которые расположены на королевский полумесяц',
  'Честерский зоопарк-самый посещаемый аттракцион Англии за пределами Лондона и является одним из лучших мест для посещения в Англии в семьях.'],
  [51.50853, -0.12574]
);

const EnglandDE = addCountryInfo(
  "England",
  "England",
  england_img,
  england_vid,
  "London",
  "England ist ein Land, das Teil der Vereinigten Staaten ist Kingdom.It das Land grenzt im Westen an Wales und im Norden an Schottland. Die irische See liegt nordwestlich von England und die keltische See im Südwesten. England ist von Kontinentaleuropa durch die Nordsee im Osten und den Ärmelkanal im Süden getrennt. Das Land umfasst fünf Achtel der Insel Großbritannien, die im Nordatlantik liegt, und umfasst über 100 kleinere Inseln wie die Inseln Scilly und Isle of Wight.",
  "GBP",
  [eng_1, eng_2, eng_3, eng_4, eng_5, eng_6],
  ["Stonehenge", "The Cotswolds", "Big Ben", "Tower of London", "Die römischen Bäder und die Georgische Stadt Bath", 'Chester Zoo'],
  ["Europe' s best-known prehistoric monument", "Die Schönheit der Cotswolds hat viel zu tun mit seinen malerischen Dörfern und Städtchen, die wie Castle Combe, Chipping Norton, und Tetbury.", "Big Ben ist der Spitzname für die Große Glocke der markanten Uhr am nördlichen Ende des Palastes von Westminster", " Gefängnis, Palast, Schatzkammer, Observatorium und Menagerie: Der Tower of London hat alles getan und es ist eine der Top-Attraktionen in London. ', 'Während die meisten berühmt für die prachtvollen 2000 Jahre alten römischen Bäder gebaut, um die Stadt rejuvenating hot springs, seiner ebenso bekannt für seine honigfarbene georgianische Stadthäuser, wie diejenigen, die sich auf der Royal Crescent.", 'Chester Zoo ist Englands meistbesuchte Attraktion außerhalb von London und ist einer der besten Orte in England für Familien zu besuchen.'],
  [51.50853, -0.12574]
);

const EnglandFR = addCountryInfo(
  "England",
  "Angleterre",
  england_img,
  england_vid,
  "Londres",
  "L'Angleterre est un pays qui fait partie des États-Unis Kingdom.It partage des frontières terrestres avec le pays de Galles à l'ouest et l'Écosse au nord. La mer d'Irlande se trouve au nord-ouest de l'Angleterre et la mer Celtique au sud-ouest. L'Angleterre est séparée de l'Europe continentale par la mer du Nord à l'est et la Manche au sud. Le pays couvre les cinq huitièmes de l'île de Grande-Bretagne, qui se trouve dans l'Atlantique Nord, et comprend plus de 100 petites îles, telles que les îles de Scilly et l'île de Wight.",
  "GBP",
  [eng_1, eng_2, eng_3, eng_4, eng_5, eng_6],
  ["Stonehenge", "Les Cotswolds", "Big Ben", "Tour de Londres", "Les Thermes romains et la ville géorgienne de Bath", "Zoo de Chester"],
  ["Monument préhistorique le plus connu d'Europe", " La beauté des Cotswolds a beaucoup à voir avec ses villages et villes pittoresques, tels que Castle Combe, Chipping Norton et Tetbury.", "Big Ben est le surnom de la Grande Cloche de l'horloge frappante à l'extrémité nord du palais de Westminster", " Prison, palais, coffre au trésor, observatoire et ménagerie: la Tour de Londres a tout fait et c'est l'une des principales attractions de Londres. ", "Bien que le plus célèbre pour les magnifiques Thermes romains de 2 000 ans construits autour des sources chaudes rajeunissantes de la ville, il est également connu pour ses maisons de ville géorgiennes de couleur miel, telles que celles situées sur Royal Crescent.", "Le zoo de Chester est l'attraction la plus visitée d'Angleterre en dehors de Londres et est l'un des meilleurs endroits à visiter en Angleterre pour les familles."],
  [51.50853, -0.12574]
);

const SwitzerlandEN = addCountryInfo(
  "Switzerland",
  "Switzerland",
  switzerland_img,
  switzerland_vid,
  "Bern",
  "Switzerland, officially the Swiss Confederation, is a country situated at the confluence of Western, Central, and Southern Europe. It is a federal republic composed of 26 cantons, with federal authorities based in Bern.[note 1][2][1] Switzerland is a landlocked country bordered by Italy to the south, France to the west, Germany to the north, and Austria and Liechtenstein to the east. It is geographically divided among the Swiss Plateau, the Alps, and the Jura, spanning a total area of 41,285 km2 (15,940 sq mi), and land area of 39,997 km2 (15,443 sq mi). While the Alps occupy the greater part of the territory, the Swiss population of approximately 8.5 million is concentrated mostly on the plateau, where the largest cities and economic centres are located, among them Zürich, Geneva and Basel. ",
  "CHF",
  [swiss_1, swiss_2, swiss_3, swiss_4, swiss_5, swiss_6],
  ["The Matterhorn", "Chateau de Chillon, Montreux", "Bern",'Interlaken', 'Lucerne', 'Lake Geneva'],
  ["Switzerland's iconic pointed peak is one of the highest mountains in the Alps.","Lord Byron, Jean Jacques Rousseau, and Victor Hugo are among the luminaries who have written about this architectural treasure.","The Swiss capital of Bern exudes old world charm, and the city's medieval old town is a UNESCO World Heritage Site.",'Nestled between Lake Thun to the west and Lake Brienz to the east, Interlaken is one of Switzerlands most popular summer holiday resorts.','Famed for its music concerts, this quintessential Swiss town lures renowned soloists, conductors, and orchestras to its annual International Music Festival.', 'Lake Geneva, Europes largest Alpine lake, straddles the Swiss/French border, and laps at the shores of some of Switzerlands most popular cities.'],
  [46.94797, 7.44745]
);

const SwitzerlandRU = addCountryInfo(
  "Switzerland",
  "Швейцария",
  switzerland_img,
  switzerland_vid,
  "Берн",
  "Швейцария, официально Швейцарская конфедерация, - страна, расположенная на стыке Западной, Центральной и Южной Европы. Это федеративная республика, состоящая из 26 кантонов, с федеральными властями, базирующимися в Берне.Швейцария-страна, не имеющая выхода к морю, граничащая с Италией на юге, Францией на западе, Германией на севере и Австрией и Лихтенштейном на востоке. Он географически разделен между Швейцарским плато, Альпами и Юрой, занимая общую площадь 41 285 км2 (15 940 кв. миль) и площадь суши 39 997 км2 (15 443 кв. миль). В то время как Альпы занимают большую часть территории, швейцарское население около 8,5 миллионов человек сосредоточено в основном на плато, где расположены крупнейшие города и экономические центры, в том числе Цюрих, Женева и Базель.",
  "CHF",
  [swiss_1, swiss_2, swiss_3, swiss_4, swiss_5, swiss_6],
  ["Маттерхорн", "Шильонский замок, Монтре", "Берн","Интерлакен", "Люцерн", "Женевское озеро"],
  ["Культовый остроконечный пик Швейцарии-одна из самых высоких гор в Альпах","Лорд Байрон, Жан-Жак Руссо и Виктор Гюго-одни из корифеев, написавших об этом архитектурном сокровище","Столица Швейцарии Берн излучает очарование старого света, а средневековый старый город Города является объектом Всемирного наследия ЮНЕСКО", "Расположенный между озером Тун на западе и озером Бриенц на востоке, Интерлакен является одним из самых популярных летних курортов Швейцарии", " Знаменитый своими музыкальными концертами, этот квинтэссенционный швейцарский город привлекает внимание солисты, дирижеры, и оркестры на его ежегодном Международном музыкальном фестивале", "Женевское озеро, самое большое альпийское озеро Европы, пересекает швейцарско-французскую границу и плещется у берегов некоторых из самых популярных городов Швейцарии"],
  [46.94797, 7.44745]
);

const SwitzerlandDE = addCountryInfo(
  "Switzerland",
  "Switzerland",
  switzerland_img,
  switzerland_vid,
  "Bern",
  "Die Schweiz, offiziell die Schweizerische Eidgenossenschaft, ist ein Land am Zusammenfluss von West -, Mittel-und Südeuropa. Es ist eine aus 26 Kantonen bestehende Bundesrepublik mit Sitz in Bern.[Anmerkung 1] [2] [1] Die Schweiz grenzt im Süden an Italien, im Westen an Frankreich, im Norden an Deutschland und im Osten an Österreich und Liechtenstein. Es ist geographisch auf das Schweizer Plateau, die Alpen und den Jura aufgeteilt und erstreckt sich über eine Gesamtfläche von 41.285 km2 und eine Landfläche von 39.997 km2. Während die Alpen den größten Teil des Territoriums einnehmen, konzentriert sich die Schweizer Bevölkerung von rund 8,5 Millionen hauptsächlich auf das Plateau, wo sich die größten Städte und Wirtschaftszentren befinden, darunter Zürich, Genf und Basel.",
  "CHF",
  [swiss_1, swiss_2, swiss_3, swiss_4, swiss_5, swiss_6],
  ["The Matterhorn", "Chateau de Chillon, Montreux", "Bern",'Interlaken', 'Luzern', 'Lake Geneva'],
  ["Switzerland' s iconic pointed peak ist einer der höchsten Berge der Alpen.", "Lord Byron, Jean Jacques Rousseau und Victor Hugo gehören zu den Koryphäen, die über diesen architektonischen Schatz geschrieben haben.", "Die Schweizer Hauptstadt Bern strahlt Charme der alten Welt, und die mittelalterliche Altstadt der Stadt ist ein UNESCO-Weltkulturerbe.", 'Eingebettet zwischen dem Thunersee im Westen und dem Brienzersee im Osten ist Interlaken einer der beliebtesten Sommerferienorte der Schweiz.', 'Berühmt für seine Musikkonzerte, lockt diese Quintessenz Schweizer Stadt renommierte Solisten, Dirigenten, und Orchester zu seinem jährlichen Internationalen Musikfestival', 'Der Genfersee, Europas größter Alpensee, erstreckt sich über die schweizerisch-französische Grenze und liegt an den Ufern einiger der beliebtesten Städte der Schweiz.'],
  [46.94797, 7.44745]
);

const SwitzerlandFR = addCountryInfo(
  "Switzerland",
  "Suisse",
  switzerland_img,
  switzerland_vid,
  "Berne",
  "La Suisse, officiellement la Confédération suisse, est un pays situé au confluent de l'Europe occidentale, Centrale et méridionale. C'est une république fédérale composée de 26 cantons, avec des autorités fédérales basées à Berne.[note 1][2][1] la Suisse est un pays enclavé, bordé par l'Italie au sud, de la France à l'ouest, l'Allemagne au nord, l'Autriche et le Liechtenstein à l'est. Il est géographiquement divisé entre le Plateau suisse, les Alpes et le Jura, couvrant une superficie totale de 41 285 km2 (15 940 km2) et une superficie de 39 997 km2 (15 443 km2). Alors que les Alpes occupent la plus grande partie du territoire, la population suisse d'environ 8,5 millions d'habitants se concentre principalement sur le plateau, où se trouvent les plus grandes villes et centres économiques, parmi lesquels Zürich, Genève et Bâle.",
  "CHF",
  [swiss_1, swiss_2, swiss_3, swiss_4, swiss_5, swiss_6],
  ["Le Cervin", "Château de Chillon, Montreux", "Berne",'Interlaken', 'Lucerne', 'le Lac de Genève'],
  ["Le pic pointu emblématique de la Suisse est l'une des plus hautes montagnes des Alpes.", "Lord Byron, Jean Jacques Rousseau et Victor Hugo sont parmi les sommités qui ont écrit sur ce trésor architectural.", "La capitale suisse de Berne respire le charme du vieux monde, et la vieille ville médiévale de la ville est un site du patrimoine mondial de l'UNESCO.", "Niché entre le lac de Thoune à l'ouest et le lac de Brienz à l'est, Interlaken est l'une des stations de vacances d'été les plus populaires de Suisse.", "Célèbre pour ses concerts de musique, cette ville suisse par excellence attire des solistes renommés, des chefs d'orchestre, et orchestres à son Festival international annuel de Musique.", "Le lac Léman, le plus grand lac alpin d'Europe, chevauche la frontière franco-suisse et longe les rives de certaines des villes les plus populaires de Suisse."],
  [46.94797, 7.44745]
);

const RussiaEN = addCountryInfo(
  "Russia",
  "Russia",
  russia_img,
  russia_vid,
  "Moskow",
  "Russia is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over 17,125,191 square kilometres (6,612,073 sq mi), consisting of more than one-eighth of the Earths inhabited land area, extending to eleven time zones, and has bordering sixteen sovereign nations. Russia has a population of 146.7 million; and is the ninth-most populous country, as well as the most populous country in Europe. Moscow, the capital, is the largest city in Europe, while Saint Petersburg is the second-largest city and the countrys cultural centre. ",
  "RUB",
  [russia_1, russia_2, russia_3, russia_4, russia_5, russia_6],
  ["Kremlin", "Bolshoi Theatre", "Red Square",'Mount Elbrus','Lake Baikal','Valley of Geysers'],
  ["15th-century fortified complex that covers an area of 275,000 square meters surrounded by walls built in the 1400s.", "The Bolshoi Theater is home to the largest and one of the oldest ballet and opera companies in the world","A massive space of 330 meters by 70 meters, the square is flanked by the Kremlin, Lenin's Mausoleum, two cathedrals, and the State Historical Museum",'At 5,642 meters (18,510 ft), Elbrus is included as one of the Seven Summits, the highest summits on each of the planet’s seven continents, attracting both experienced and novice mountain climbers.', ' Lake Baikal is the deepest and oldest lake on Earth.','The Valley of Geysers is the second largest geyser field in the world.'],
  [55.75222, 37.61556]
);

const RussiaRU = addCountryInfo(
  "Russia",
  "Россия",
  russia_img,
  russia_vid,
  "Москва",
  "Россия-трансконтинентальная страна, охватывающая Восточную Европу и Северную Азию. Это самая большая страна в мире, занимающая более 17 125 191 квадратных километров (6 612 073 квадратных миль), состоящая из более чем одной восьмой обитаемой территории Земли, простирающейся до одиннадцати часовых поясов и граничащей с шестнадцатью суверенными государствами. Россия имеет население 146,7 миллиона человек и занимает девятое место по численности населения, а также является самой густонаселенной страной в Европе. Москва, столица, является крупнейшим городом Европы, а Санкт-Петербург-вторым по величине городом и культурным центром страны.",
  "RUB",
  [russia_1, russia_2, russia_3, russia_4, russia_5, russia_6],
  ["Кремль", "Большой театр", "Красная площадь","Гора Эльбрус","Озеро Байкал","Долина гейзеров"],
  ["Укрепленный комплекс 15 века, занимающий площадь 275 000 квадратных метров, окруженный стенами, построенными в 1400-х годах", "Большой театр является домом для самой большой и одной из старейших балетных и оперных трупп в мире","Массивное пространство размером 330 на 70 метров, площадь окружена Кремлем, Мавзолеем Ленина, двумя соборами и Государственным историческим музеем", "На высоте 5642 метра Эльбрус входит в число Семи вершин, самых высоких вершин на планете Земля, привлекающий как опытных, так и начинающих альпинистов.", "Озеро Байкал-самое глубокое и древнее озеро на Земле", "Долина Гейзеров-второе по величине гейзерное поле в мире"],
  [55.75222, 37.61556]
);

const RussiaDE = addCountryInfo(
  "Russia",
  "Russland",
  russia_img,
  russia_vid,
  "Moskau",
  "Russland ist ein transkontinentales Land, das Osteuropa und Nordasien umfasst. Es ist das größte Land der Welt; mit einer Fläche von über 17,125,191 Quadratkilometern (6,612,073 Quadratmeilen), bestehend aus mehr als einem Achtel der bewohnten Landfläche der Erde, erstreckt sich auf elf Zeitzonen und grenzt an sechzehn souveräne Nationen. Russland hat eine Bevölkerung von 146,7 Millionen; und ist das neuntgrößte Land, sowie das bevölkerungsreichste Land in Europa. Moskau, die Hauptstadt, ist die größte Stadt Europas, während Sankt Petersburg die zweitgrößte Stadt und das kulturelle Zentrum des Landes ist.",
  "RUB",
  [russia_1, russia_2, russia_3, russia_4, russia_5, russia_6],
  ["Kreml", "Bolschoi-Theater", "Roter Platz", "Berg Elbrus", "Baikalsee", "Tal der Geysire"],
  ["Jahrhundert befestigten Komplex, der eine Fläche von 275.000 Quadratmetern umfasst, umgeben von Mauern in den 1400er Jahren gebaut.", "Das Bolschoi-Theater beherbergt die größte und eine der ältesten Ballett - und Opernkompanien der Welt","Ein massiver Raum von 330 mal 70 Metern, der Platz wird vom Kreml, Lenins Mausoleum, zwei Kathedralen und dem Staatlichen Historischen Museum flankiert", 'Mit 5.642 Metern ist Elbrus einer der sieben Gipfel, der höchste Gipfel auf jedem der sieben Kontinente des Planeten, der sowohl erfahrene als auch unerfahrene Bergsteiger anzieht.', 'Der Baikalsee ist der tiefste und älteste See der Erde.', 'Das Tal der Geysire ist das zweitgrößte Geysirfeld der Welt.'],
  [55.75222, 37.61556]
);

const RussiaFR = addCountryInfo(
  "Russia",
  "Russie",
  russia_img,
  russia_vid,
  "Moscou",
  "La Russie est un pays transcontinental couvrant l'Europe de l'Est et l'Asie du Nord. C'est le plus grand pays du monde; couvrant plus de 17,125,191 kilomètres carrés (6,612,073 sq mi), composé de plus d'un huitième de la superficie des terres habitées, s'étendant à onze fuseaux horaires, et a limitrophe seize nations souveraines. La Russie a une population de 146,7 millions d'habitants; et est le neuvième pays le plus peuplé, ainsi que le pays le plus peuplé d'Europe. Moscou, la capitale, est la plus grande ville d'Europe, tandis que Saint-Pétersbourg est la deuxième plus grande ville et le centre culturel du pays.",
  "RUB",
  [russia_1, russia_2, russia_3, russia_4, russia_5, russia_6],
  ["Kremlin", "Théâtre Bolchoï", "Place Rouge", "Mont Elbrus", "Lac Baïkal", "Vallée des Geysers"],
  ["complexe fortifié du XVe siècle qui couvre une superficie de 275 000 mètres carrés entouré de murs construits dans les années 1400.", "Le théâtre Bolchoï abrite la plus grande et l'une des plus anciennes compagnies de ballet et d'opéra au monde","Un espace massif de 330 mètres sur 70 mètres, la place est flanquée du Kremlin, du Mausolée de Lénine, de deux cathédrales et du Musée historique d'État", " À 5 642 mètres (18 510 pieds), Elbrus est inclus comme l'un des Sept Les sommets, les plus hauts sommets de chacun des sept continents de la planète, attirent les alpinistes expérimentés et novices.", "Le lac Baïkal est le lac le plus profond et le plus ancien de la Terre.", 'La vallée des Geysers est le deuxième plus grand champ de geyser au monde.'],
  [55.75222, 37.61556]
);

const NetherlandsEN = addCountryInfo(
  "The Netherlands",
  "The Netherlands",
  netherlands_img,
  netherlands_vid,
  "Amsterdam",
  "The Netherlands, informally Holland, is a country primarily located in Western Europe and partly in the Caribbean. It is the largest of four constituent countries of the Kingdom of the Netherlands.[14][15][16] In Europe, the Netherlands consists of twelve provinces, bordering Germany to the east, Belgium to the south, and the North Sea to the northwest, with maritime borders in the North Sea with those countries and the United Kingdom.In the Caribbean, it consists of three special municipalities: the islands of Bonaire, Sint Eustatius and Saba.",
  "EUR",
  [neth_1, neth_2, neth_3, neth_4, neth_5,neth_6],
  ["Keukenhof", "Rijksmuseum, Amsterdam", "The Windmills of Kinderdijk",'Van Gogh Museum',' The Ijsselmeer', 'Zeelands Spectacular Dikes'],
  ["Keukenhof displays more than 700 varieties of tulips, which are at their height in April and May.","The spectacular Rijksmuseum - aka the National Museum - in Amsterdam's Museumplein (Museum Square) has been collecting rare art and antiquities since 1809. ", "On the River Noord between Rotterdam and Dordrecht is the famous village of Kinderdijk",'one of the worlds greatest artists, the spectacular Van Gogh Museum, attracting almost 1.5 million visitors each year.',' These towns flourished during Amsterdams Golden Age, when they had access to the Atlantic and prospered as fishing and trade centers', 'These massive structures - basically hi-tech dams - can control how much water enters the areas key estuaries from the North Sea. '],
  [42.93869, -74.18819]
);

const NetherlandsRU = addCountryInfo(
  "The Netherlands",
  "The Netherlands",
  "Нидерланды",
  netherlands_img,
  netherlands_vid,
  "Амстердам",
  "Нидерланды, неофициально Голландия, - это страна, расположенная в основном в Западной Европе и частично в Карибском бассейне. Это самая большая из четырех стран, входящих в состав Королевства Нидерландов.[14][15][16] В Европе Нидерланды состоят из двенадцати провинций, граничащих с Германией на востоке, Бельгией на юге и Северным морем на северо-западе, с морскими границами в Северном море с этими странами и Соединенным Королевством.В Карибском море он состоит из трех особых муниципалитетов: острова Бонайре, Синт-Эстатиус и Саба.",
  "EUR",
  [neth_1, neth_2, neth_3, neth_4, neth_5,neth_6],
  ["Кекенхоф", "Рейксмузеум, Амстердам", "Ветряные мельницы Киндердейка","Музей Ван Гога"," Эйссельмер", "Захватывающие дамбы Зеландии"],
  ["В Кекенхофе выставлено более 700 сортов тюльпанов, которые находятся в самом разгаре в апреле и мае","Впечатляющий Рейксмузеум - он же Национальный музей - на Музейной площади Амстердама собирает редкие произведения искусства и предметы старины с 1809 года. ", "На реке Норд между Роттердамом и Дордрехтом находится знаменитая деревня Киндердейк", "один из величайших художников мира, впечатляющий музей Ван Гога, привлекающий почти 1,5 миллиона посетителей каждый год", "Эти города процветали во времена Золотого века Амстердама, когда они имели доступ к Атлантике и процветали как рыболовные и торговые центры", "Эти массивные сооружения - в основном высокотехнологичные плотины-могут контролировать, сколько воды поступает в районы ключевых эстуариев из Северного моря"],
  [42.93869, -74.18819]
);

const NetherlandsDE = addCountryInfo(
  "The Netherlands",
  "The Netherlands",
  "Niederlande",
  netherlands_img,
  netherlands_vid,
  "Amsterdam",
  "Die Niederlande, informell Holland, ist ein Land, das hauptsächlich in Westeuropa und teilweise in der Karibik liegt. Es ist das größte von vier konstituierenden Ländern des Königreichs der Niederlande.[14][15][16] In Europa, die Niederlande bestehen aus zwölf Provinzen, grenzt an Deutschland im Osten, Belgien im Süden, und die Nordsee im Nordwesten, mit Seegrenzen in der Nordsee mit diesen Ländern und den Vereinigten Staaten. Kingdom.In die Karibik, es besteht aus drei speziellen Gemeinden: die Inseln Bonaire, Sint Eustatius und Saba.",
  "EUR",
  [neth_1, neth_2, neth_3, neth_4, neth_5,neth_6],
  ["Keukenhof", "Rijksmuseum, Amsterdam", "Die Windmühlen von Kinderdijk", "Van Gogh Museum", "Das Ijsselmeer", "Neuseelands spektakuläre Deiche"],
  ["Keukenhof zeigt mehr als 700 Tulpensorten, die im April und Mai auf ihrem Höhepunkt sind.","Die spektakuläre Rijksmuseum - aka the National Museum in Amsterdam' s Museumplein (Museumsplatz) wurde das sammeln von seltenen Kunst-und Antiquitäten seit 1809. ", "Auf dem Fluss Noord zwischen Rotterdam und Dordrecht ist das berühmte Dorf Kinderdijk", " einer der weltweit größten Künstler, die spektakuläre Van Gogh Museum, zieht fast 1,5 Millionen Besucher pro Jahr.", "Diese Städte blühten während Amsterdams Goldenes Zeitalter, als sie Zugang zum Atlantik hatten und als Fischerei - und Handelszentren florierten", " Diese massiven Strukturen-im Grunde High - Tech-Staudämme-können kontrollieren, wie viel Wasser von der Nordsee in die wichtigsten Flussmündungen der Gebiete gelangt. "],
  [42.93869, -74.18819]
);

const NetherlandsFR = addCountryInfo(
  "The Netherlands",
  "Néerlandais",
  netherlands_img,
  netherlands_vid,
  "Amsterdam",
  "Les Pays-Bas, officieusement la Hollande, est un pays principalement situé en Europe occidentale et en partie dans les Caraïbes. C'est le plus grand des quatre pays constitutifs du Royaume des Pays-Bas.En Europe, les Pays-Bas se composent de douze provinces, bordant l 'Allemagne à l' est, Belgique au sud, et la mer du Nord au nord-ouest, avec des frontières maritimes dans la mer du Nord avec ces pays et les États-Unis. Kingdom.In les Caraïbes, il se compose de trois municipalités spéciales: les îles de Bonaire, Saint-Eustache et Saba.",
  "EUR",
  [neth_1, neth_2, neth_3, neth_4, neth_5,neth_6],
  ["Keukenhof", "Rijksmuseum, Amsterdam", "Les Moulins à vent de Kinderdijk", "Musée Van Gogh", "L'Ijsselmeer", "Les Digues spectaculaires de Zélande"],
  ["Keukenhof présente plus de 700 variétés de tulipes, qui sont à leur apogée en avril et mai.", "Le spectaculaire Rijksmuseum-alias le Musée national - sur la Museumplein (Place du musée) d'Amsterdam collectionne des œuvres d'art et des antiquités rares depuis 1809. ", "Sur la rivière Noord entre Rotterdam et Dordrecht est le célèbre village de Kinderdijk", " l'un des plus grands artistes du monde, le spectaculaire musée Van Gogh, attirant près de 1,5 million de visiteurs chaque année.", "Ces villes ont prospéré pendant l'âge d'or d'Amsterdam, quand ils avaient accès à l'Atlantique et prospéraient comme centres de pêche et de commerce", " Ces structures massives - essentiellement des barrages de haute technologie-peuvent contrôler la quantité d'eau qui pénètre dans les zones estuaires clés de la mer du Nord. "],
  [42.93869, -74.18819]
);

const GermanyEN = addCountryInfo(
  "Germany",
  "Germany",
  germany_img,
  germany_vid,
  "Berlin",
  "Germany, officially the Federal Republic of Germany, is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. ",
  "EUR",
  [germany_1, germany_2, germany_3, germany_4, germany_5, germany_6],
  ["Kölner Dom", "The Black Forest", " Neuschwanstein",'Miniatur Wunderland','Berlins Museum Island','Bamberg'],
  ["Europe's best-known prehistoric monument", "The beauty of the Cotswolds has much to do with its quaint villages and towns, such as Castle Combe, Chipping Norton, and Tetbury.", "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster",'Miniatur Wunderland, the worlds largest model railway, is an attraction that appeals equally to young and old alike','Museumsinsel includes many of the citys oldest and most important museums.', 'Bamberg, the old imperial city and the most important town in Upper Franconia, is one of the best preserved of Germanys many charming old towns and one of the best to explore on foot.'],
  [52.5243700, 13.4105300]
);

const GermanyRU = addCountryInfo(
  "Germany",
  "Германия",
  germany_img,
  germany_vid,
  "Берлин",
  "Германия, официально Федеративная Республика Германия, является страной на пересечении Центральной и Западной Европы. Он расположен между Балтийским и Северным морями на севере и Альпами на юге; его площадь составляет 357 022 квадратных километра (137 847 квадратных миль), а население составляет более 83 миллионов человек в 16 входящих в него государствах. На севере граничит с Данией, на востоке-с Польшей и Чехией, на юге-с Австрией и Швейцарией, на западе-с Францией, Люксембургом, Бельгией и Нидерландами.",
  "EUR",
  [germany_1, germany_2, germany_3, germany_4, germany_5, germany_6],
  ["Кельнский собор", "Черный лес", "Нойшванштайн",'Миниатюрная Страна Чудес','Музейный Остров Берлина','Бамберг'],
  ["Самый известный в Европе доисторический памятник", "Красота Котсуолдса во многом связана с его причудливыми деревушками и городками, такими как Касл-Комб, Чиппинг-Нортон и Тетбери.", "Биг Бен-это прозвище Большого колокола бьющих часов в северной части Вестминстерского дворца", "Miniatur Wunderland, крупнейшая в мире модель железной дороги, является достопримечательностью, которая одинаково привлекает как молодых, так и старых", "Museumsinsel включает в себя многие из старейших и самых важных музеев города", "Бамберг, старый имперский город и самый важный город в Верхней Франконии, является одним из самых хорошо сохранившихся из многих очаровательных старых городов Германии и одним из лучших для изучения пешком"],
  [52.5243700, 13.4105300]
);

const GermanyDE = addCountryInfo(
  "Germany",
  "Deutschland",
  germany_img,
  germany_vid,
  "Berlin",
  "Deutschland, offiziell die Bundesrepublik Deutschland, ist ein Land an der Schnittstelle von Mittel-und Westeuropa. Es liegt zwischen der Ostsee und der Nordsee im Norden und den Alpen im Süden; mit einer Fläche von 357.022 Quadratkilometern (137,847 sq mi), mit einer Bevölkerung von über 83 Millionen innerhalb seiner 16 Mitgliedsstaaten. Es grenzt im Norden an Dänemark, im Osten an Polen und die Tschechische Republik, im Süden an Österreich und die Schweiz sowie im Westen an Frankreich, Luxemburg, Belgien und die Niederlande.",
  "EUR",
  [germany_1, germany_2, germany_3, germany_4, germany_5, germany_6],
  ["Kölner Dom", "Der Schwarzwald", "Neuschwanstein", "Miniatur Wunderland", "Berliner Museumsinsel", " Bamberg"],
  ["Europe' s best-known prehistoric monument", "Die Schönheit der Cotswolds hat viel zu tun mit seinen malerischen Dörfern und Städtchen, die wie Castle Combe, Chipping Norton, und Tetbury.", "Big Ben ist der Spitzname für die Große Glocke der markanten Uhr am nördlichen Ende des Palace of Westminster",'Miniatur Wunderland, die weltweit größte Modell-Eisenbahn, ist eine Attraktion, die gleichermaßen anspricht jung und alt','Museumsinsel umfasst viele der ältesten Städte und wichtigsten Museen.', 'Bamberg, die alte Kaiserstadt und die wichtigste Stadt Oberfrankens, ist einer der besterhaltenen von Germanys vielen charmanten Altstädten und einer der besten zu Fuß zu erkunden.'],
  [52.5243700, 13.4105300]
);

const GermanyFR = addCountryInfo(
  "Germany",
  "Allemagne",
  germany_img,
  germany_vid,
  "Berlin",
  "L'allemagne, officiellement la République Fédérale d'Allemagne, est un pays au carrefour de l'Europe Centrale et Occidentale. Il est situé entre la mer Baltique et la mer du Nord au nord, et les Alpes au sud; couvrant une superficie de 357 022 kilomètres carrés (137 847 milles carrés), avec une population de plus de 83 millions dans ses 16 États constitutifs. Elle est limitrophe du Danemark au nord, de la Pologne et de la République tchèque à l'est, de l'Autriche et de la Suisse au sud, et de la France, du Luxembourg, de la Belgique et des Pays-Bas à l'ouest.",
  "EUR",
  [germany_1, germany_2, germany_3, germany_4, germany_5, germany_6],
  ["Cathédrale De Cologne", "La Forêt Noire", "Neuschwanstein", "Miniature Wunderland", "Berlin Museum Island", "Bamberg"],
  ["Monument préhistorique le plus connu d'Europe", " La beauté des Cotswolds a beaucoup à voir avec ses villages et villes pittoresques, tels que Castle Combe, Chipping Norton et Tetbury.", "Big Ben est le surnom de la Grande Cloche de l'horloge frappante à l'extrémité nord du Palais de Westminster", "Miniatur Wunderland, le plus grand chemin de fer miniature au monde, est une attraction qui plaît autant aux jeunes qu'aux moins jeunes", " Museumsinsel comprend de nombreux musées parmi les plus anciens et les plus importants de la ville.", "Bamberg, l'ancienne ville impériale et la ville la plus importante en haute-Franconie, est l'un des mieux conservés d'Allemagne beaucoup de charmantes vieilles villes et l'un des meilleurs à explorer à pied."],
  [52.5243700, 13.4105300]
);

const DenmarkEN = addCountryInfo(
  "Denmark",
  "Denmark",
  denmark_img,
  denmark_vid,
  "Copenhagen",
  "Denmark, officially the Kingdom of Denmark, is a Nordic country in Northern Europe. Denmark proper, which is the southernmost of the Scandinavian countries, consists of a peninsula, Jutland, and an archipelago of 443 named islands,[14] with the largest being Zealand, Funen and the North Jutlandic Island. The islands are characterised by flat, arable land and sandy coasts, low elevation and a temperate climate. Denmark lies southwest of Sweden and south of Norway, and is bordered to the south by Germany. ",
  "DKK",
  [denmark_1, denmark_2, denmark_3, denmark_4, denmark_5, denmark_6],
  ["Tivoli Gardens, Copenhagen", "Hans Christian Andersen Museum, Odense", "The Farøe Islands",'Nyhavn, Copenhagen','LEGO House, Billund','Lyngby Open-Air Museum'],
  ["Europe's best-known prehistoric monument", "The beauty of the Cotswolds has much to do with its quaint villages and towns, such as Castle Combe, Chipping Norton, and Tetbury.", "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster",'Nyhavn (New Harbor) is a great place to stroll or grab a slice of Copenhagen café culture.','The LEGO House in Billund, the birthplace of the iconic LEGO brick, is a family attraction that all ages will enjoy. ','Occupying 35 hectares, there are authentic farmhouses, agricultural buildings, dwellings, and mills from across the country in this "living museum."'],
  [55.6759, 12.5655]
);

const DenmarkRU = addCountryInfo(
  "Denmark",
  "Дания",
  denmark_img,
  denmark_vid,
  "Копенгаген",
  "Дания, официально Королевство Дания, является скандинавской страной в Северной Европе. Собственно Дания, самая южная из скандинавских стран, состоит из полуострова Ютландия и архипелага из 443 названных островов, самыми крупными из которых являются Зеландия, Фюн и Северный Ютландский остров. Для островов характерны равнинные, пахотные земли и песчаные берега, невысокая высота над уровнем моря и умеренный климат. Дания расположена к юго-западу от Швеции и к югу от Норвегии, а на юге граничит с Германией.",
  "DKK",
  [denmark_1, denmark_2, denmark_3, denmark_4, denmark_5, denmark_6],
  ["Сады Тиволи, Копенгаген", "Музей Ганса Христиана Андерсена, Оденсе", "Фарерские острова", "Нюхавн, Копенгаген", "Дом ЛЕГО, Биллунд", "Музей под открытым небом Люнгби"],
  ["Самый известный доисторический памятник Европы", "Красота Котсуолдса имеет много общего с его причудливыми деревнями и городами, такими как Касл-Комб, Чиппинг-Нортон и Тетбери", "Биг-Бен-это прозвище Большого колокола бьющих часов в северной части Вестминстерского дворца", "Нюхавн (Новая гавань) - отличное место, чтобы прогуляться или захватить кусочек копенгагенской культуры кафе", " Дом LEGO в Биллунне, родина культового кирпича LEGO, - это семейная достопримечательность, которая привлекает всех возрастов. буду наслаждаться. ", "Занимая 35 гектаров, в этом  'живом музее' находятся подлинные фермерские дома, сельскохозяйственные постройки, жилища и мельницы со всей страны"],
  [55.6759, 12.5655]
);

const DenmarkDE = addCountryInfo(
  "Denmark",
  "Nemark",
  denmark_img,
  denmark_vid,
  "Kopenhagen",
  "Dänemark, offiziell das Königreich Dänemark, ist ein nordisches Land in Nordeuropa. Dänemark richtige, das ist die südlichste der skandinavischen Länder, besteht aus einer Halbinsel, Jütland, und ein Archipel von 443 genannten Inseln, [14] mit dem größten ist Zealand, Fünen und die nordjütländische Insel. Die Inseln zeichnen sich durch flaches Ackerland und sandige Küsten, niedrige Höhen und gemäßigtes Klima aus. Dänemark liegt südwestlich von Schweden und südlich von Norwegen und grenzt im Süden an Deutschland.",
  "DKK",
  [denmark_1, denmark_2, denmark_3, denmark_4, denmark_5, denmark_6],
  ["Tivoli Gärten, Kopenhagen", "Hans Christian Andersen Museum, Odense", "Die Farøe Inseln",'Nyhavn, Kopenhagen','LEGO House, Billund','Lyngby Open-Air-Museum'],
  ["Europe' s best-known prehistoric monument", "Die Schönheit der Cotswolds hat viel zu tun mit seinen malerischen Dörfern und Städtchen, die wie Castle Combe, Chipping Norton, und Tetbury.", "Big Ben ist der Spitzname für die Große Glocke der markanten Uhr am nördlichen Ende des Palastes von Westminster", " Nyhavn (New Harbor) ist ein großartiger Ort, um spazieren zu gehen oder ein Stück Kopenhagener Café-Kultur zu ergattern.", "Das LEGO-Haus in Billund, der Geburtsort des legendären LEGO-Ziegels, ist eine Familienattraktion, die alle Altersgruppen genießen werden. ", 'Besetzen 35 Hektar, es gibt authentische Bauernhäuser, landwirtschaftliche Gebäude, Wohnungen, und Mühlen aus dem ganzen Land in diesem "lebenden Museum."'],
  [55.6759, 12.5655]
);

const DenmarkFR = addCountryInfo(
  "Denmark",
  "Danemark",
  denmark_img,
  denmark_vid,
  "Copenhague",
  "Le Danemark, officiellement le Royaume du Danemark, est un pays nordique d'Europe du Nord. Le Danemark proprement dit, qui est le plus méridional des pays scandinaves, se compose d'une péninsule, le Jutland, et un archipel de 443 îles nommées,[14] avec la plus grande étant la Zélande, Fionie et l'île du Jutland du Nord. Les îles sont caractérisées par des terres arables plates et des côtes sablonneuses, une faible altitude et un climat tempéré. Le Danemark se trouve au sud-ouest de la Suède et au sud de la Norvège, et est bordé au sud par l'Allemagne.",
  "DKK",
  [denmark_1, denmark_2, denmark_3, denmark_4, denmark_5, denmark_6],
  ["Jardins de Tivoli, Copenhague", "Musée Hans Christian Andersen, Odense", "Les îles Farøe", "Nyhavn, Copenhague", "LEGO House, Billund", "Musée en plein air de Lyngby"],
  ["Monument préhistorique le plus connu d'Europe", " La beauté des Cotswolds a beaucoup à voir avec ses villages et villes pittoresques, tels que Castle Combe, Chipping Norton et Tetbury.", "Big Ben est le surnom de la Grande Cloche de l'horloge frappante à l'extrémité nord du Palais de Westminster", " Nyhavn (New Harbor) est un endroit idéal pour se promener ou prendre une tranche de la culture des cafés de Copenhague.", "La maison LEGO à Billund, le lieu de naissance de l'emblématique brique LEGO, est une attraction familiale que tous les âges apprécieront. ", "Occupant 35 hectares, il y a des fermes authentiques, des bâtiments agricoles, des habitations et des moulins de tout le pays dans ce 'musée vivant.'"],
  [55.6759, 12.5655]
);

const USAEN = addCountryInfo(
  "USA",
  "USA",
  usa_img,
  usa_vid,
  "Washington",
  "The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions.[h] At 3.8 million square miles (9.8 million square kilometers), it is the worlds third- or fourth-largest country by total area.[d] With a population of more than 328 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city is New York City.",
  "USD",
  [usa_1, usa_2, usa_3,usa_4, usa_5, usa_6],
  ["Grand Canyon", "Niagara Falls", "Times Square",'Statue of Liberty',' White House', 'Walt Disney World Resort'],
  ["Europe's best-known prehistoric monument", "The beauty of the Cotswolds has much to do with its quaint villages and towns, such as Castle Combe, Chipping Norton, and Tetbury.", "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster",'A universal symbol of freedom, the Statue of Liberty is Americas most familiar icon and the largest statue in the world. ', 'The White House is the official residence of the President of the United States, and should be on the top of your list of things to see in Washington. ', 'This mega amusement park in Orlando is the top family attraction in America, and has been catering to both young and old for decades. '],
  [40.17396, -80.24617]
);

const USARU = addCountryInfo(
  "USA",
  "США",
  usa_img,
  usa_vid,
  "Вашингтон",
  "Соединенные Штаты Америки (США), широко известные как Соединенные Штаты (США или США) или Америка, - это страна, расположенная в основном в Северной Америке. Он состоит из 50 штатов, федерального округа, пяти крупных самоуправляющихся территорий, 326 индейских резерваций и некоторых мелких владений.Занимая 3,8 миллиона квадратных миль (9,8 миллиона квадратных километров), она является третьей или четвертой по величине страной в мире по общей площади.С населением более 328 миллионов человек это третья по численности населения страна в мире. Столица страны-Вашингтон, округ Колумбия, а самый густонаселенный город-Нью-Йорк.",
  "USD",
  [usa_1, usa_2, usa_3,usa_4, usa_5, usa_6],
  ["Гранд-Каньон", "Ниагарский водопад", "Таймс-сквер", "Статуя Свободы", "Белый дом", "Уолт Дисней Уорлд Резорт"],
  ["Самый известный доисторический памятник Европы", "Красота Котсуолдса имеет много общего с его причудливыми деревнями и городами, такими как Касл-Комб, Чиппинг-Нортон и Тетбери", "Биг-Бен-это прозвище Большого Колокола бьющих часов в северной части Вестминстерского дворца", "Универсальный символ свободы, Статуя Свободы-Самая известная икона Америки и самая большая статуя в мире", "Белый дом-официальная резиденция президента Соединенных Штатов, и он должен быть на вершине вашего списока достопримечательностей Вашингтона. ", "Этот мега-парк развлечений в Орландо является главным семейным аттракционом в Америке и уже несколько десятилетий обслуживает как молодых, так и старых"],
  [40.17396, -80.24617]
);

const USADE = addCountryInfo(
  "USA",
  "USA",
  usa_img,
  usa_vid,
  "Washington",
  "Die Vereinigten Staaten von Amerika (USA), allgemein bekannt als die Vereinigten Staaten (USA oder USA) oder Amerika, ist ein Land, das hauptsächlich in Nordamerika liegt. Es besteht aus 50 Staaten, einem Bundesdistrikt, fünf großen Selbstverwaltungsgebieten, 326 Indianerreservaten und einigen kleineren Besitztümern.[h] Bei 3,8 Millionen Quadrat-Meilen (9,8 Millionen Quadrat-Kilometer), es ist der weltweit Dritte oder viertgrößte Land durch Gesamtfläche.[d] Mit einer Bevölkerung von mehr als 328 Millionen Menschen ist es das drittgrößte Land der Welt. Die Landeshauptstadt ist Washington, D. C., und die bevölkerungsreichste Stadt ist New York City.",
  "USD",
  [usa_1, usa_2, usa_3,usa_4, usa_5, usa_6],
  ["Grand Canyon", "Niagarafälle", "Times Square", "Freiheitsstatue", "Weißes Haus", "Walt Disney World Resort"],
  ["Europe' s best-known prehistoric monument", "Die Schönheit der Cotswolds hat viel zu tun mit seinen malerischen Dörfern und Städtchen, die wie Castle Combe, Chipping Norton, und Tetbury.", "Big Ben ist der Spitzname für die Große Glocke der markanten Uhr am nördlichen Ende des Palastes von Westminster", " Ein universelles Symbol der Freiheit, die Freiheitsstatue ist die bekannteste Ikone und die größte Statue der Welt. ", "Das Weiße Haus ist die offizielle Residenz des Präsidenten der Vereinigten Staaten und sollte ganz oben auf Ihrer Liste der Sehenswürdigkeiten in Washington stehen. ", "Dieser Mega-Vergnügungspark in Orlando ist die größte Familienattraktion in Amerika und richtet sich seit Jahrzehnten sowohl an Jung als auch Alt. "],
  [40.17396, -80.24617]
);

const USAFR = addCountryInfo(
  "USA",
  "USA",
  usa_img,
  usa_vid,
  "Washington",
  "Les États-Unis d'Amérique (États-Unis), communément appelés États-Unis (États-Unis ou États-Unis) ou Amérique, sont un pays principalement situé en Amérique du Nord. Il se compose de 50 États, d'un district fédéral, de cinq grands territoires autonomes, de 326 réserves indiennes et de quelques possessions mineures.[h] Avec 3,8 millions de miles carrés (9,8 millions de kilomètres carrés), c'est le troisième ou quatrième plus grand pays du monde en superficie totale.[d] Avec une population de plus de 328 millions d'habitants, c'est le troisième pays le plus peuplé du monde. La capitale nationale est Washington, D. C., et la ville la plus peuplée est New York City.",
  "USD",
  [usa_1, usa_2, usa_3,usa_4, usa_5, usa_6],
  ["Grand Canyon", "Niagara Falls", "Times Square", "Statue de la Liberté", "Maison Blanche", "Walt Disney World Resort"],
  ["Monument préhistorique le plus connu d'Europe", " La beauté des Cotswolds a beaucoup à voir avec ses villages et villes pittoresques, tels que Castle Combe, Chipping Norton et Tetbury.", "Big Ben est le surnom de la Grande Cloche de l'horloge frappante à l'extrémité nord du Palais de Westminster", " Symbole universel de la liberté, la Statue de la Liberté est l'icône la plus familière des Amériques et la plus grande statue du monde. ", "La Maison Blanche est la résidence officielle du président des États-Unis, et devrait être en haut de votre liste de choses à voir à Washington. ", "Ce méga parc d'attractions à Orlando est la principale attraction familiale en Amérique et s'adresse aux jeunes et aux moins jeunes depuis des décennies. "],
  [40.17396, -80.24617]
);



export default function getCoutryList(lang) {
  switch (lang) {
    case 'en':
      return [FranceEN, EnglandEN, SwitzerlandEN, RussiaEN, NetherlandsEN, GermanyEN, DenmarkEN, USAEN];
    case 'ru':
      return [FranceRU, EnglandRU, SwitzerlandRU, RussiaRU, NetherlandsRU, GermanyRU, DenmarkRU, USARU];
    case 'de':
      return [FranceDE, EnglandDE, SwitzerlandDE, RussiaDE, NetherlandsDE, GermanyDE, DenmarkDE, USADE];
    case 'fr':
      return [FranceFR, EnglandFR, SwitzerlandFR, RussiaFR, NetherlandsFR, GermanyFR, DenmarkFR, USAFR];
  }
};
