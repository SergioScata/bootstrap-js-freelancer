
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






    
}