export interface Countries {
    id: number
    name: string
}

export interface Cities {
    countryId: number
    cityName: string
}

export var countries: Countries [] = [
    { id: 1, name: "Portugal"},
    { id: 2, name: "Itália"},
    { id: 3, name: "Grécia"},
    { id: 4, name: "Espanha"},
    { id: 5, name: "França"}
]

export var cities: Cities [] = [
    { countryId: 1, cityName: "Lisboa"},
    { countryId: 1, cityName: "Coimbra"},
    { countryId: 1, cityName: "Braga"},
    { countryId: 2, cityName: "Roma"},
    { countryId: 2, cityName: "Napoli"},
    { countryId: 2, cityName: "Padova"},
    { countryId: 3, cityName: "Athens"},
    { countryId: 3, cityName: "Corfu"},
    { countryId: 3, cityName: "Larissa"},
    { countryId: 4, cityName: "Madrid"},
    { countryId: 4, cityName: "Barcelona"},
    { countryId: 4, cityName: "Granada"},
    { countryId: 5, cityName: "Paris"},
    { countryId: 5, cityName: "Marselha"},
    { countryId: 5, cityName: "Lyon"},
]
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