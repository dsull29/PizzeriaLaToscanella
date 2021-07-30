var items2 = ""

const pizzas = [

    { "name": "Chesse", "smallPrice": "$8.25", "largePrice": "$11.75" },
    { "name": "One topping", "smallPrice": "$9.10", "largePrice": "$13.25" },
    { "name": "Two topping", "smallPrice": "$9.95", "largePrice": "$14.75" },
    { "name": "Three topping", "smallPrice": "$10.80", "largePrice": "$16.25" },
    { "name": "Four topping", "smallPrice": "$11.65", "largePrice": "$17.75" },
    { "name": "Each additional topping", "smallPrice": "$0.85", "largePrice": "$1.50" },
    { "name": "Make any pizza double crust", "smallPrice": "$3.50", "largePrice": "$3.50" },
];

for (let i = 0; i < pizzas.length; i++) {
    items2 += "<tr><td>" + pizzas[i].name + "</td><td class='w3-right-align'>" + pizzas[i].smallPrice + "</td><td class='w3-right-align'>" + pizzas[i].largePrice + "</td></tr>"

};


document.write(items2)