function dogYears(planetName,dogAge){
    let planets = {
        'earth':1,
        'mercury':0.2408467,
        'venus':0.61519726,
        'mars':1.8808158,
        'jupiter':11.862615,
        'saturn':29.447498,
        'uranus':84.016846,
        'neptune':164.79132,
    };
    let dogyear =31557600;
let year=dogAge/dogyear;
let newYear=year/planets[planetName];
let newDogYear=newYear*7;
return Number(newDogYear.toFixed(2));
}
