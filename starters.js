var sides = ""

const starters = [
    { "name": "Garlic Knots", "price": "$3.95" },
    { "name": "Cheesey Garlic Bread", "price": "$3.95" },
    { "name": "Mozzarella", "price": "$6.95", "count": "6" },
    { "name": "Handcut French Fries", "price": "$4.95" },
    { "name": "Onion Rings", "price": "$5.95" },
    { "name": "Poppers", "price": "$6.95" },
    { "name": "Chicken Fingers", "price": "$7.95", "count": "6" },
    { "name": "Buffalo Fingers", "price": "$7.95", "count": "6" },
    { "name": "BBQ Fingers", "price": "$7.95", "count": "6" }
]

function getCount(itemNum) {
    if (starters[itemNum].count > 0) {
        return " (" + starters[itemNum].count + ")"
    } else {
        return ""
    }
}


for (let i = 0; i < starters.length; i++) {
    sides += "<tr><td>" + starters[i].name + getCount(i) + "</td><td class='w3-right-align'>" + starters[i].price + "</td></tr>"
}

document.write(sides)