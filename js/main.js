let Codesavailable = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function Calculateprice(event) {
    event.preventDefault();
    let hours = document.getElementById("hours").value;
    let worktype = document.getElementById("worktype").value;
    let Discountcode = document.getElementById("Discount").value;

    let price = 0;
    price = parseFloat(price);
    if (worktype == "Backend Development") {
        price = hours * 20.5;
        worktype = "Backend Development"
    } else if (worktype == "Frontend Development") {
        price = hours * 15.3;
        worktype = "Frontend Development"
    } else if (worktype == "Project Analysis") {
        price = hours * 33.6;
        worktype = "Project Analysis"
    }

    if (Codesavailable.includes(Discountcode)) {
        price = price / 100 * 75;
    }

    else if (Codesavailable.length >= 1 && !Codesavailable.includes(Discountcode)) {
        document.getElementById("errormessage").classList.remove("d-none");
        
    }
    price =price.toFixed(2);
console.log(price);



document.getElementById("finalprice").innerHTML = "The Price is: " + price + " €";

}