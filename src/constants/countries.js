import england_img from '../assets/england.jpg'
import switzerland_img from '../assets/switzerland.jpg'
import france_img from '../assets/france.jpg'
import russia_img from '../assets/russia.jpg'
import netherlands_img from '../assets/netherlands.jpg'
import germany_img from '../assets/germany.jpg'
import denmark_img from '../assets/denmark.jpg'
import usa_img from '../assets/usa.jpg'

function addCountryInfo(name, img, capital, info, currency){
  return {
    name: name,
    img: img,
    capital: capital,
    info: info,
    currency: currency
  }
}

const France = addCountryInfo('France',france_img, 'Paris','France, officially the French Republic (French: République française),[1] is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories.[XIII] The metropolitan area of France extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. ', 'EUR')
const England = addCountryInfo('England', england_img,'London','England is a country that is part of the United Kingdom.It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.', 'GBP')
const Switzerland = addCountryInfo('Switzerland', switzerland_img, 'Bern','Switzerland, officially the Swiss Confederation, is a country situated at the confluence of Western, Central, and Southern Europe. It is a federal republic composed of 26 cantons, with federal authorities based in Bern.[note 1][2][1] Switzerland is a landlocked country bordered by Italy to the south, France to the west, Germany to the north, and Austria and Liechtenstein to the east. It is geographically divided among the Swiss Plateau, the Alps, and the Jura, spanning a total area of 41,285 km2 (15,940 sq mi), and land area of 39,997 km2 (15,443 sq mi). While the Alps occupy the greater part of the territory, the Swiss population of approximately 8.5 million is concentrated mostly on the plateau, where the largest cities and economic centres are located, among them Zürich, Geneva and Basel. ', 'CHF');
const Russia = addCountryInfo('Russia',russia_img, 'Moskow','Russia is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over 17,125,191 square kilometres (6,612,073 sq mi), consisting of more than one-eighth of the Earths inhabited land area, extending to eleven time zones, and has bordering sixteen sovereign nations. Russia has a population of 146.7 million; and is the ninth-most populous country, as well as the most populous country in Europe. Moscow, the capital, is the largest city in Europe, while Saint Petersburg is the second-largest city and the countrys cultural centre. ', 'RUB');
const Netherlands = addCountryInfo('The Netherlands',netherlands_img,'Amsterdam','The Netherlands, informally Holland, is a country primarily located in Western Europe and partly in the Caribbean. It is the largest of four constituent countries of the Kingdom of the Netherlands.[14][15][16] In Europe, the Netherlands consists of twelve provinces, bordering Germany to the east, Belgium to the south, and the North Sea to the northwest, with maritime borders in the North Sea with those countries and the United Kingdom.In the Caribbean, it consists of three special municipalities: the islands of Bonaire, Sint Eustatius and Saba.', 'EUR');
const Germany = addCountryInfo('Germany',germany_img, 'Berlin', 'Germany, officially the Federal Republic of Germany, is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. ', 'EUR')
const Denmark = addCountryInfo('Denmark',denmark_img,'Copenhagen','Denmark, officially the Kingdom of Denmark, is a Nordic country in Northern Europe. Denmark proper, which is the southernmost of the Scandinavian countries, consists of a peninsula, Jutland, and an archipelago of 443 named islands,[14] with the largest being Zealand, Funen and the North Jutlandic Island. The islands are characterised by flat, arable land and sandy coasts, low elevation and a temperate climate. Denmark lies southwest of Sweden and south of Norway, and is bordered to the south by Germany. ', 'DKK')
const USA = addCountryInfo('USA',usa_img, 'Washington','The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions.[h] At 3.8 million square miles (9.8 million square kilometers), it is the worlds third- or fourth-largest country by total area.[d] With a population of more than 328 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city is New York City.', 'USD')

const countries = [England, Switzerland, France, Russia, Netherlands, Germany, Denmark, USA];

export default countries
