/**
 *
 * @param {City} startCity
 * @param {City} destinationCity
 * @returns {Array<string>}
 */
function dijkstraShortestPath(startCity, destinationCity) {
  const cheapestPriceTable = {};
  const cheapestPreviousStopoverCityTable = {};

  let unvisitedCities = [];
  const visitedCities = {};

  cheapestPriceTable[startCity.name] = 0;
  let currentCity = startCity;

  while (currentCity) {
    visitedCities[currentCity.name] = true;
    unvisitedCities = unvisitedCities.filter(
      (city) => city.name !== currentCity.name
    );

    for (const [adjacentCity, price] of currentCity.routes) {
      if (!visitedCities[adjacentCity.name]) {
        unvisitedCities.push(adjacentCity);
      }

      let priceTroughCurrentCity = cheapestPriceTable[currentCity.name] + price;

      if (
        !cheapestPriceTable[adjacentCity.name] ||
        priceTroughCurrentCity < cheapestPriceTable[adjacentCity.name]
      ) {
        cheapestPriceTable[adjacentCity.name] = priceTroughCurrentCity;
        cheapestPreviousStopoverCityTable[adjacentCity.name] = currentCity.name;
      }
    }

    if (unvisitedCities.length) {
      currentCity = unvisitedCities.reduce((a, b) => {
        if (cheapestPriceTable[a.name] < cheapestPriceTable[b.name]) {
          return a;
        }
        return b;
      });
    } else {
      currentCity = undefined;
    }
  }

  const shortestPath = [];

  let currentCityName = destinationCity.name;

  while (currentCityName !== startCity.name) {
    shortestPath.push(currentCityName);

    currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
  }

  shortestPath.push(startCity.name);

  return shortestPath.reverse();
}

class City {
  name;
  routes;

  constructor(name) {
    this.name = name;
    this.routes = new Map();
  }

  /**
   *
   * @param {City} city
   * @param {number} price
   */
  addRoute(city, price) {
    this.routes.set(city, price);
  }
}

// Example setup
const atlanta = new City("Atlanta");
const boston = new City("Boston");
const chicago = new City("Chicago");
const denver = new City("Denver");
const elPaso = new City("El Paso");

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);

console.log("dijkstra: ", dijkstraShortestPath(atlanta, elPaso));
