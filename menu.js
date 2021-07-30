var myData = JSON.parse(menu)
console.log(myData)

function getStarters() {
    const starters = [
        { "name": "Garlic Knots", "price": "$3.95" },
        { "name": "Cheesey Garlic Bread", "price": "$3.95" },
        { "name": "Mozzarella", "price": "$6.95", "count": "6" },
    ]

    var sides = ""
    for (let i = 0; i < starters.length; i++) {
        sides += "<tr><td>" + starters[i].name + "</td><td>" + starters[i].price + "</td></tr>"
    }
    document.write(sides)
}