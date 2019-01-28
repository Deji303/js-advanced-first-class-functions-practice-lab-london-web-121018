// Code your solution in this file!

function logDriverNames (drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const compareFunction = (a, b) => {
  return a.revenue < b.revenue ? -1 : 1
}

function driversByRevenue (drivers) {
  newD = drivers.slice(0, drivers.length)
  newD.sort(compareFunction)
  return newD
}

function driversByName (drivers) {
  newD = drivers.slice(0, drivers.length)
  newD.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })

  return newD
}

function totalRevenue (drivers) {
  return drivers.reduce((total, driver) => driver.revenue + total, 0)
}

function averageRevenue (drivers) {
    return totalRevenue (drivers)/drivers.length 
}
