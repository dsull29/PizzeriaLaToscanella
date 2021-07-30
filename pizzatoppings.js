var items3 = ""

let toppings = ["Pepperoni", "Mushrooms", "Green Pepper", "Ham", "Broccoli", "Red Onion", "Bacon", "Black Olives", "Tomatoes", "Sausage", "Eggplant", "White Onion", "Buffalo Finger", "Spinach", "Pineapple", "BBQ Finger", "Garlic", "Ricotta", "Artichoke", "Roasted Red Peppers", "Sun-Dried Tomatoes"];


items3 = "<ul>"

for (let j = 0; j < toppings.length; j++) {
    items3 += "<li>" + toppings[j] + "</li>"

};

items3 += "</ul>"

document.write("<tr><td colspan=3>")
document.write(items3)
document.write("</td></tr>")