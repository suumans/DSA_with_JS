function minCoin(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0
    if (amount < 0) return -1

    let minCoinCount = Infinity

    for (const coin of coins) {
        const result = minCoin(coins, amount - coin, memo)
        if (result !== -1) {
            minCoinCount = Math.min(minCoinCount, 1 + result) 
        }
    }

    // alternative

    // for (const coin of coins) {
    //     let recentCount = 1 + minCoin(coins, amount - coin, memo)
    //     minCoinCount = Math.min(minCoinCount, recentCount)
    // }
    memo[amount] = minCoinCount === Infinity ? -1 : minCoinCount
    return minCoinCount
}