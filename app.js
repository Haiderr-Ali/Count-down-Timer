const endDate= "23 April 2024 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input") // method to take documnet from html to js//

const clock = ()=>{
    const end = new Date(endDate)
    const now = new Date()
    const diff= (end-now)/1000;
    // converting to days
    inputs[0].value = Math.floor(diff/3600/24);
    // converting to hours
    inputs[1].value = Math.floor ((diff/3600)%24);
    // converting to minutes
    inputs[2].value = Math.floor ((diff/60)%60);
    //converting to seconds
    inputs[3].value = Math.floor ((diff%60)%60);
}

clock() // this functionis just for the page refreshment time//
// now we set interval for countdown after every 1 sec//

setInterval(
    ()=>{
        clock()
    },1000
)





/*
1 day = 24 hrs
1 hr = 60mins
60 min = 3600sec


*/