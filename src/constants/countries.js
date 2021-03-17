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

const France = addCountryInfo(
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
const England = addCountryInfo(
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
const Switzerland = addCountryInfo(
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
const Russia = addCountryInfo(
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
const Netherlands = addCountryInfo(
  "The Netherlands",
  netherlands_img,
  netherlands_vid,
  "Amsterdam",
  "The Netherlands, informally Holland, is a country primarily located in Western Europe and partly in the Caribbean. It is the largest of four constituent countries of the Kingdom of the Netherlands.[14][15][16] In Europe, the Netherlands consists of twelve provinces, bordering Germany to the east, Belgium to the south, and the North Sea to the northwest, with maritime borders in the North Sea with those countries and the United Kingdom.In the Caribbean, it consists of three special municipalities: the islands of Bonaire, Sint Eustatius and Saba.",
  "EUR",
  [neth_1, neth_2, neth_3, neth_4, neth_5,neth_6],
  ["Keukenhof", "Rijksmuseum, Amsterdam", "The Windmills of Kinderdijk",'Van Gogh Museum',' The Ijsselmeer', 'Zeelands Spectacular Dikes'],
  ["Keukenhof displays more than 700 varieties of tulips, which are at their height in April and May.","The spectacular Rijksmuseum - aka the National Museum - in Amsterdam's Museumplein (Museum Square) has been collecting rare art and antiquities since 1809. ", "On the River Noord between Rotterdam and Dordrecht is the famous village of Kinderdijk",'one of the worlds greatest artists, the spectacular Van Gogh Museum, attracting almost 1.5 million visitors each year.',' These towns flourished during Amsterdams Golden Age, when they had access to the Atlantic and prospered as fishing and trade centers', 'These massive structures - basically hi-tech dams - can control how much water enters the areas key estuaries from the North Sea. '

],
  [42.93869, -74.18819]
);
const Germany = addCountryInfo(
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
const Denmark = addCountryInfo(
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
const USA = addCountryInfo(
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

const countries = [
  England,
  Switzerland,
  France,
  Russia,
  Netherlands,
  Germany,
  Denmark,
  USA,
];

export default countries;
