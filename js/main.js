
function Calcoloprezzolavoro(event){
    event.preventDefault();
   
   
    let jobhourprice = 0;
    let worktype = document.getElementById("worktype");
    let worktypevalue = worktype.options[worktype.selectedIndex].value;


    if(worktypevalue == "Backend Development"){
        jobhourprice = 20,50;
    }
    else if(worktypevalue == "Frontend Development"){
        jobhourprice = 15.30;
    }
    else if(worktypevalue == "Project Analysis"){
        jobhourprice = 33.60;
    }

    console.log(jobhourprice);

    let hoursrequested = document.getElementById("hours").value;
    parseInt(hoursrequested);
    let pricewithoutdiscount= hoursrequested * jobhourprice;
    parseInt(pricewithoutdiscount);
    console.log(pricewithoutdiscount);
}