var items = ""

const specialpizzas = [

    { "name": "Piero's White", "smallPrice": "$12.75", "largePrice": "$17.75", "description": "A creamy Parmesan sauce, baked with mozzarella & red onion then topped with prosciutto & fresh basil." },
    { "name": "Spinach Pie", "smallPrice": "$12.95", "largePrice": "$17.95", "description": "Ricotta and chopped Garlic topped with mozzarella and spinach" },
    { "name": "The Margherita", "smallPrice": "$12.75", "largePrice": "$17.75", "description": "A touch of tomato sauce, fresh sliced tomatoes, fresh mozzarella, grated Romano cheese & fresh basil." },
    { "name": "Italian Country Side", "smallPrice": "$10.80", "largePrice": "$16.25", "description": "Tomato sauce & mozzarella topped with pepperoni, sausage & roasted red peppers." },
    { "name": "Veggie Plus", "smallPrice": "$10.80", "largePrice": "$16.25", "description": "Tomato sauce & mozzarella topped with artichoke hearts, eggplant & roasted red peppers." },
    { "name": "La Toscanella Topping", "smallPrice": "$12.75", "largePrice": "$17.75", "description": "Tomato sauce & mozzarella topped with diced red onion, garlic, extra virgin olive oil & Italian parsley." },
    { "name": "Classic Trio", "smallPrice": "$10.80", "largePrice": "$16.25", "description": "Tomato sauce & mozzarella topped with spinach, fresh sliced tomatoes, & white onions." },
    { "name": "Supreme Combo", "smallPrice": "$13.95", "largePrice": "$20.75", "description": "Tomato sauce & mozzarella topped with pepperoni, sausage, mushroom, black olive, green pepper & white onion." },
    { "name": "Chicken Pesto", "smallPrice": "$12.95", "largePrice": "$17.95", "description": "Our homemade pesto topped with mozzarella and fresh chicken." },
    { "name": "Chicken Caeser Pizza", "smallPrice": "$12.75", "largePrice": "$17.75", "description": "Our classic white pizza baked with grilled chicken and topped with lettuce, our homemade croutons and Caeser dressing." }
]

for (let i = 0; i < specialpizzas.length; i++) {
    items += "<tr><td>" + specialpizzas[i].name + "</td><td class='w3-right-align'>" + specialpizzas[i].smallPrice + "</td><td class='w3-right-align'>" + specialpizzas[i].largePrice + "</td></tr>" +
        "<tr class='w3-padding-small'><td colspan='3' class='w3-text-grey'>" + specialpizzas[i].description + "</td></tr>"
}


document.write(items)