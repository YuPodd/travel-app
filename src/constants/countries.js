import england_img from '../assets/england.jpg'
import switzerland_img from '../assets/switzerland.jpg'
import france_img from '../assets/france.jpg'
import russia_img from '../assets/russia.jpg'
import netherlands_img from '../assets/netherlands.jpg'
import germany_img from '../assets/germany.jpg'
import denmark_img from '../assets/denmark.jpg'
import usa_img from '../assets/usa.jpg'

//images to the carousel
import eng_1 from '../assets/eng_1.jpg'
import eng_2 from '../assets/eng_2.jpg'
import eng_3 from '../assets/eng_3.jpg'

import swiss_1 from '../assets/swiss_1.jpg'
import swiss_2 from '../assets/swiss_2.jpg'
import swiss_3 from '../assets/swiss_3.jpg'

import france_1 from '../assets/france_1.jpg'
import france_2 from '../assets/france_2.jpg'
import france_3 from '../assets/france_3.jpg'

import russia_1 from '../assets/russia_1.jpg'
import russia_2 from '../assets/russia_2.jpg'
import russia_3 from '../assets/russia_3.jpg'

import neth_1 from '../assets/neth_1.jpg'
import neth_2 from '../assets/neth_2.jpg'
import neth_3 from '../assets/neth_3.jpg'

import germany_1 from '../assets/germany_1.jpg'
import germany_2 from '../assets/germany_2.jpg'
import germany_3 from '../assets/germany_3.jpg'

import denmark_1 from '../assets/denmark_1.jpg'
import denmark_2 from '../assets/denmark_2.jpg'
import denmark_3 from '../assets/denmark_3.jpg'

import usa_1 from '../assets/usa_1.jpg'
import usa_2 from '../assets/usa_2.jpg'
import usa_3 from '../assets/usa_3.jpg'

function addCountryInfo(name, img, gallery, capital, [x, y], info){
    return {
        name: name,
        img: img,
        gallery: gallery,
        capital: capital,
        location: [x, y],
        info: info,
    }
}

const France = addCountryInfo('France',france_img,[france_1, france_2, france_3], 'Paris', [48.8534100, 2.3488000],'France, officially the French Republic (French: République française),[1] is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories.[XIII] The metropolitan area of France extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. ')
const England = addCountryInfo('England', england_img, [eng_1, eng_2, eng_3],'London', [51.5085300, -0.1257400],'England is a country that is part of the United Kingdom.It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.')
const Switzerland = addCountryInfo('Switzerland', switzerland_img, [swiss_1, swiss_2, swiss_3],'Bern', [46.94797, 7.44745],'Switzerland, officially the Swiss Confederation, is a country situated at the confluence of Western, Central, and Southern Europe. It is a federal republic composed of 26 cantons, with federal authorities based in Bern.[note 1][2][1] Switzerland is a landlocked country bordered by Italy to the south, France to the west, Germany to the north, and Austria and Liechtenstein to the east. It is geographically divided among the Swiss Plateau, the Alps, and the Jura, spanning a total area of 41,285 km2 (15,940 sq mi), and land area of 39,997 km2 (15,443 sq mi). While the Alps occupy the greater part of the territory, the Swiss population of approximately 8.5 million is concentrated mostly on the plateau, where the largest cities and economic centres are located, among them Zürich, Geneva and Basel. ');
const Russia = addCountryInfo('Russia', russia_img,[russia_1, russia_2, russia_3], 'Moskow', [55.7522200, 37.6155600],'Russia is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over 17,125,191 square kilometres (6,612,073 sq mi), consisting of more than one-eighth of the Earths inhabited land area, extending to eleven time zones, and has bordering sixteen sovereign nations. Russia has a population of 146.7 million; and is the ninth-most populous country, as well as the most populous country in Europe. Moscow, the capital, is the largest city in Europe, while Saint Petersburg is the second-largest city and the countrys cultural centre. ');
const Netherlands = addCountryInfo('The Netherlands',netherlands_img,[neth_1, neth_2, neth_3],'Amsterdam', [42.9386900, -74.1881900],'The Netherlands, informally Holland, is a country primarily located in Western Europe and partly in the Caribbean. It is the largest of four constituent countries of the Kingdom of the Netherlands.[14][15][16] In Europe, the Netherlands consists of twelve provinces, bordering Germany to the east, Belgium to the south, and the North Sea to the northwest, with maritime borders in the North Sea with those countries and the United Kingdom.In the Caribbean, it consists of three special municipalities: the islands of Bonaire, Sint Eustatius and Saba.');
const Germany = addCountryInfo('Germany',germany_img, [germany_1, germany_2, germany_3],'Berlin', [52.5243700, 13.4105300], 'Germany, officially the Federal Republic of Germany, is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. ')
const Denmark = addCountryInfo('Denmark',denmark_img, [denmark_1, denmark_2, denmark_3],'Copenhagen', [55.6759, 12.5655],'Denmark, officially the Kingdom of Denmark, is a Nordic country in Northern Europe. Denmark proper, which is the southernmost of the Scandinavian countries, consists of a peninsula, Jutland, and an archipelago of 443 named islands,[14] with the largest being Zealand, Funen and the North Jutlandic Island. The islands are characterised by flat, arable land and sandy coasts, low elevation and a temperate climate. Denmark lies southwest of Sweden and south of Norway, and is bordered to the south by Germany. ')
const USA = addCountryInfo('USA',usa_img, [usa_1, usa_2, usa_3],'Washington', [40.1739600, -80.2461700],'The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions.[h] At 3.8 million square miles (9.8 million square kilometers), it is the worlds third- or fourth-largest country by total area.[d] With a population of more than 328 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city is New York City.')

const countries = [England, Switzerland, France, Russia, Netherlands, Germany, Denmark, USA];

export default countries