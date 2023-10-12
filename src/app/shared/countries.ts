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

/*
export function filterCities(cities: string[]): {
    let selectedCountry = profile.get('country').value;
    let filteredCities = citiesList.filter(city => city.countryId === countryId);
}
*/
/*export class Countries{
    constructor(public id: number,
                public name: string) {}
    ngOnInit() {
    {[this.id = 1,
    this.name = "Portugal"
    ]}
    {[this.id = 2,
        this.name = "Italia"
    ]}    
    {[this.id = 3,
        this.name = "Espanha"
    ]}    
    {[this.id = 4,
        this.name = "França"
    ]}
    {[this.id = 5,
        this.name = "Grécia"
    ]}      
    }
}*/