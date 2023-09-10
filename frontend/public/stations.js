const numberOfStations = {
  bakerloo: 25,
  central: 49,
  circle: 35,
  district: 60,
  hammersmithCity: 29,
  jubilee: 27,
  metropolitan: 34,
  northern: 50,
  piccadilly: 53,
  victoria: 16,
  waterlooCity: 2,
  total: 380,
}

const bakerloo = [
  'Harrow & Wealdstone',
  'Kenton',
  'South Kenton',
  'North Wembley',
  'Wembley Central',
  'Stonebridge Park',
  'Harlesden',
  'Willesden Junction',
  'Kensal Green',
  "Queen's Park",
  'Kilburn Park',
  'Maida Vale',
  'Warwick Avenue',
  'Paddington',
  'Edgware Road',
  'Marylebone',
  'Baker Street',
  "Regent's Park",
  'Oxford Circus',
  'Piccadilly Circus',
  'Charing Cross',
  'Embankment',
  'Waterloo',
  'Lambeth North',
  'Elephant & Castle',
]; // 25

const central = [
  'West Ruislip',
  'Ruislip Gardens',
  'South Ruislip',
  'Northolt',
  'Greenford',
  'Perivale',
  'Hanger Lane',
  'Ealing Broadway',
  'West Acton',
  'North Acton',
  'East Acton',
  'White City',
  "Shepherd's Bush",
  'Holland Park',
  'Notting Hill Gate',
  'Queensway',
  'Lancaster Gate',
  'Marble Arch',
  'Bond Street',
  'Oxford Circus',
  'Tottenham Court Road',
  'Holborn',
  'Chancery Lane',
  "St Paul's",
  'Bank',
  'Liverpool Street',
  'Bethnal Green',
  'Mile End',
  'Stratford',
  'Leyton',
  'Leytonstone',
  'Snaresbrook',
  'South Woodford',
  'Woodford',
  'Wanstead',
  'Redbridge',
  'Gants Hill',
  'Newbury Park',
  'Barkingside',
  'Fairlop',
  'Hainault',
  'Grange Hill',
  'Chigwell',
  'Roding Valley',
  'Buckhurst Hill',
  'Loughton',
  'Debden',
  'Theydon Bois',
  'Epping',
]; // 49

const circle = [
  'Hammersmith',
  'Goldhawk Road',
  'Shepherds Bush Market',
  'Wood Lane',
  'Latimer Road',
  'Ladbroke Grove',
  'Westbourne Park',
  'Royal Oak',
  'Paddington',
  'Edgware Road',
  'Baker Street',
  'Great Portland Street',
  'Euston Square',
  "King's Cross St Pancras",
  'Farringdon',
  'Barbican',
  'Moorgate',
  'Liverpool Street',
  'Aldgate',
  'Tower Hill',
  'Monument',
  'Cannon Street',
  'Mansion House',
  'Blackfriars',
  'Temple',
  'Embankment',
  'Westminster',
  "St James's Park",
  'Victoria',
  'Sloane Square',
  'South Kensington',
  'Gloucester Road',
  'High Street Kensington',
  'Notting Hill Gate',
  'Bayswater',
]; // 35

const district = [
  'Ealing Broadway',
  'Ealing Common',
  'Acton Town',
  'Chiswick Park',
  'Richmond',
  'Kew Gardens',
  'Gunnersbury',
  'Turnham Green',
  'Stamford Brook',
  'Ravenscourt Park',
  'Hammersmith',
  'Barons Court',
  'West Kensington',
  'Kensington(Olympia)',
  'Wimbledon',
  'Wimbledon Park',
  'Southfields',
  'East Putney',
  'Putney Bridge',
  'Parsons Green',
  'Fulham Broadway',
  'West Brompton',
  "Earl's Court",
  'Edgware Road',
  'Paddington',
  'Bayswater',
  'Notting Hill Gate',
  'High Street Kensington',
  'Gloucester Road',
  'South Kensington',
  'Sloane Square',
  'Victoria',
  "St James's Park",
  'Westminster',
  'Embankment',
  'Temple',
  'Blackfriars',
  'Mansion House',
  'Cannon Street',
  'Monument',
  'Tower Hill',
  'Aldgate East',
  'Whitechapel',
  'Stepney Green',
  'Mile End',
  'Bow Road',
  'Bromley-by-Bow',
  'West Ham',
  'Plaistow',
  'Upton Park',
  'East Ham',
  'Barking',
  'Upney',
  'Becontree',
  'Dagenham Heathway',
  'Dagenham East',
  'Elm Park',
  'Hornchurch',
  'Upminster Bridge',
  'Upminster',
]; // 60

const hammersmithCity = [
  'Hammersmith',
  'Goldhawk Road',
  "Shepherd's Bush Market",
  'Wood Lane',
  'Latimer Road',
  'Ladbroke Grove',
  'Westbourne Park',
  'Royal Oak',
  'Paddington',
  'Edgware Road',
  'Baker Street',
  'Great Portland Street',
  'Euston Square',
  "King's Cross St Pancras",
  'Farringdon',
  'Barbican',
  'Moorgate',
  'Liverpool Street',
  'Aldgate East',
  'Whitechapel',
  'Stepney Green',
  'Mile End',
  'Bow Road',
  'Bromley-by-Bow',
  'West Ham',
  'Plaistow',
  'Upton Park',
  'East Ham',
  'Barking',
]; // 29

const jubilee = [
  'Stanmore',
  'Canons Park',
  'Queensbury',
  'Kingsbury',
  'Wembley Park',
  'Neasden',
  'Dollis Hill',
  'Willesden Green',
  'Kilburn',
  'West Hampstead',
  'Finchley Road',
  'Swiss Cottage',
  "St John's Wood",
  'Baker Street',
  'Bond Street',
  'Green Park',
  'Westminster',
  'Waterloo',
  'Southwark',
  'London Bridge',
  'Bermondsey',
  'Canada Water',
  'Canary Wharf',
  'North Greenwich',
  'Canning Town',
  'West Ham',
  'Stratford',
]; // 27

const metropolitan = [
  'Amersham',
  'Chesham',
  'Chalfont & Latimer',
  'Chorleywood',
  'Rickmansworth',
  'Watford',
  'Croxley',
  'Moor Park',
  'Northwood',
  'Northwood Hills',
  'Pinner',
  'North Harrow',
  'Uxbridge',
  'Hillingdon',
  'Ickenham',
  'Ruislip',
  'Ruislip Manor',
  'Eastcote',
  'Rayners Lane',
  'West Harrow',
  'Harrow-on-the-Hill',
  'Northwick Park',
  'Preston Road',
  'Wembley Park',
  'Finchley Road',
  'Baker Street',
  'Great Portland Street',
  'Euston Square',
  "King's Cross St Pancras",
  'Farringdon',
  'Barbican',
  'Moorgate',
  'Liverpool Street',
  'Aldgate',
]; // 34

const northern = [
  'Edgware',
  'Burnt Oak',
  'Colindale',
  'Hendon Central',
  'Brent Cross',
  'Golders Green',
  'Hampstead',
  'Belsize Park',
  'Chalk Farm',
  'High Barnet',
  'Totteridge & Whetstone',
  'Woodside Park',
  'West Finchley',
  'Mill Hill East',
  'Finchley Central',
  'East Finchley',
  'Highgate',
  'Archway',
  'Tufnell Park',
  'Kentish Town',
  'Camden Town',
  'Mornington Crescent',
  'Euston',
  'Warren Street',
  'Goodge Street',
  'Tottenham Court Road',
  'Leicester Square',
  'Charing Cross',
  'Embankment',
  'Waterloo',
  "King's Cross St Pancras",
  'Angel',
  'Old Street',
  'Moorgate',
  'Bank',
  'London Bridge',
  'Borough',
  'Elephant & Castle',
  'Kennington',
  'Oval',
  'Stockwell',
  'Clapham North',
  'Clapham Common',
  'Clapham South',
  'Balham',
  'Tooting Bec',
  'Tooting Broadway',
  'Colliers Wood',
  'South Wimbledon',
  'Morden',
]; // 50

const piccadilly = [
  'Heathrow Terminal 5',
  'Heathrow Terminal 4',
  'Heathrow Terminals 2 & 3',
  'Hatton Cross',
  'Hounslow West',
  'Hounslow Central',
  'Hounslow East',
  'Osterley',
  'Boston Manor',
  'Northfields',
  'South Ealing',
  'Uxbridge',
  'Hillingdon',
  'Ickenham',
  'Ruislip',
  'Ruislip Manor',
  'Eastcote',
  'Rayners Lane',
  'South Harrow',
  'Sudbury Hill',
  'Sudbury Town',
  'Alperton',
  'Park Royal',
  'North Ealing',
  'Ealing Common',
  'Acton Town',
  'Turnham Green',
  'Hammersmith',
  'Barons Court',
  "Earl's Court",
  'Gloucester Road',
  'South Kensington',
  'Knightsbridge',
  'Hyde Park Corner',
  'Green Park',
  'Piccadilly Circus',
  'Leicester Square',
  'Covent Garden',
  'Holborn',
  'Russell Square',
  "King's Cross St Pancras",
  'Caledonian Road',
  'Holloway Road',
  'Arsenal',
  'Finsbury Park',
  'Manor House',
  'Turnpike Lane',
  'Wood Green',
  'Bounds Green',
  'Arnos Grove',
  'Southgate',
  'Oakwood',
  'Cockfosters',
]; // 53

const victoria = [
  'Walthamstow Central',
  'Blackhorse Road',
  'Tottenham Hale',
  'Seven Sisters',
  'Finsbury Park',
  'Highbury & Islington',
  "King's Cross St Pancras",
  'Euston',
  'Warren Street',
  'Oxford Circus',
  'Green Park',
  'Victoria St',
  'Pimlico',
  'Vauxhall',
  'Stockwell',
  'Brixton',
]; // 16

const waterlooCity = [
  'Waterloo',
  'Bank',
]; // 2

export const allLineNames = [
  'Central',
  'Bakerloo',
  'Circle',
  'District',
  'Hammersmith & City',
  'Jubilee',
  'Metropolitan',
  'Northern',
  'Piccadilly',
  'Victoria',
  'Waterloo & City',
];

export const allLinesArrays = {
  bakerloo,
  central,
  circle,
  district,
  hammersmithCity,
  jubilee,
  metropolitan,
  northern,
  piccadilly,
  victoria,
  waterlooCity,
};

export const customStationsArrays = {
  bakerlooCustom: [],
  centralCustom: [],
  circleCustom: [],
  districtCustom: [],
  hammersmithCityCustom: [],
  jubileeCustom: [],
  metropolitanCustom: [],
  northernCustom: [],
  piccadillyCustom: [],
  victoriaCustom: [],
  waterlooCityCustom: [],
};

export const customStationThemes = {
  bakerlooTheme: '',
  centralTheme: '',
  circleTheme: '',
  districtTheme: '',
  hammersmithCityTheme: '',
  jubileeTheme: '',
  metropolitanTheme: '',
  northernTheme: '',
  piccadillyTheme: '',
  victoriaTheme: '',
  waterlooCityTheme: '',
};

// Below is examples of how to export and import variables from a module using export and export default from ES6

// export default customStationsArrays;
// // import someName from './stations.js';

// export const someValue = 4;
// // import  { someValue as someOtherName } from './stations.js';