// Step 1: the restaurant's numbers

const restaurantName = "Burger Republic";
let ordersPerDay = 45;
const averageOrder = 200;
const commissionPercent = 20;
const dailyCosts = 5000;

console.log(`${restaurantName}: today's dashboard`);

const revenue = ordersPerDay * averageOrder;
const commission = revenue * commissionPercent / 100;
const profit = revenue - commission - dailyCosts;

console.log(`Revenue: EGP ${revenue}`);
console.log(`Talabat's commission: EGP ${commission}`);
console.log(`Profit: EGP ${profit}`);

if (profit >= 3000) {
    console.log("Great day");
} else if (profit >= 0) {
    console.log("Normal day");
} else {
    console.log("Losing money");
}

// Function to calculate daily profit
function dailyProfit(orders) {
    const revenue = orders * averageOrder;
    const commission = revenue * commissionPercent / 100;
    return revenue - commission - dailyCosts;
}

// Step 5: The next 7 days, 3 more orders each day
let weekProfit = 0;

for (let day = 1; day <= 7; day++) {
    const dayProfit = dailyProfit(ordersPerDay);

    console.log(`Day ${day}: EGP ${dayProfit}`);

    weekProfit = weekProfit + dayProfit;
    ordersPerDay = ordersPerDay + 3;
}

console.log(`Week profit: EGP ${weekProfit}`);