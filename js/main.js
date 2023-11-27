let discountNotUsed = true;
let discountCodesavailable = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



function Calcoloprezzolavoro(event) {
    event.preventDefault();

    let hoursrequested = document.getElementById("hours").value;
    hoursrequested = parseInt(hoursrequested);

    let worktype = document.getElementById("worktype");
    let worktypevalue = worktype.options[worktype.selectedIndex].value;


    if (worktypevalue == "Backend Development") {
        let jobhourprice = hoursrequested * 20.50;
        console.log(jobhourprice);
    }
    else if (worktypevalue == "Frontend Development") {
        let jobhourprice = hoursrequested * 15.30;
        console.log(jobhourprice);
    }
    else if (worktypevalue == "Project Analysis") {
        let jobhourprice = hoursrequested * 33.60;
        console.log(jobhourprice);
    }

    let discountcode = document.getElementById("Discount").value;

    if (!discountNotUsed) alert("Riprova ad inserire il discount code");

    for (i = 0; i < discountCodesavailable.length; i++) {
        if (discountcode === discountCodesavailable[i] && discountNotUsed == true){
            jobhourprice = jobhourprice * 0.75;
            console.log(jobhourprice);
        }
}



}

