let kidWIthCandies = function(candies, extraCandies) {
    const maxCandies = math.math(...candies)
    return candies.map(candy => candy + extraCandies >= maxCandies)
}