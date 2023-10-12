/*
export interface Countries {
    id: number;
    name: string;
}

export interface Cities {
    id: number;
    countryId: number;
    cityName: string;
}

export var countries: Countries [] = [
    { id: 1, name: "Portugal"},
    { id: 2, name: "Itália"},
    { id: 3, name: "Grécia"},
    { id: 4, name: "Espanha"},
    { id: 5, name: "França"}
]

export var cities: Cities [] = [
    { id: 1, countryId: 1, cityName: "Lisboa"},
    { id: 2, countryId: 1, cityName: "Coimbra"},
    { id: 3, countryId: 1, cityName: "Braga"},
    { id: 4, countryId: 2, cityName: "Roma"},
    { id: 5, countryId: 2, cityName: "Napoli"},
    { id: 6, countryId: 2, cityName: "Padova"},
    { id: 7, countryId: 3, cityName: "Athens"},
    { id: 8, countryId: 3, cityName: "Corfu"},
    { id: 9, countryId: 3, cityName: "Larissa"},
    { id: 10, countryId: 4, cityName: "Madrid"},
    { id: 11, countryId: 4, cityName: "Barcelona"},
    { id: 12, countryId: 4, cityName: "Granada"},
    { id: 13, countryId: 5, cityName: "Paris"},
    { id: 14, countryId: 5, cityName: "Marselha"},
    { id: 15, countryId: 5, cityName: "Lyon"},
]
*/
export interface Countries {
    id: number,
    name: string,
    cities: string[];
}

export const countries: Countries[] =  [

    { id: 1, name: "Portugal", cities: ["Braga", "Coimbra", "Lisboa"]},
    { id: 2, name: "Itália", cities: ["Napoles", "Pisa",  "Roma"]},
    { id: 3, name: "Grécia", cities: ["Athens", "Corfu",  "Larissa"]},
    { id: 4, name: "Espanha", cities: ["Barcelona", "Granada", "Madrid"]},
    { id: 5, name: "França", cities: ["Lyon", "Marselha", "Paris"]}
]
