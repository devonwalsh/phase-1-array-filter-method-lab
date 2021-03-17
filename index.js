function findMatching (driverNames, matchString) {
    return driverNames.filter(name => name.toLowerCase() === matchString.toLowerCase())
}

function fuzzyMatch (driverNames, matchString) {
    return driverNames.filter(name => name.startsWith(matchString))
}

function matchName (driverNames, matchString) {
    return driverNames.filter(element => element.name === matchString)
}