async function getCrimes(){
    const response = await fetch("crimes.json");

    if(response.ok) {
        console.log("Vi har fått OK !");
    
        const crimes = await response.json();
        const crimelist = document.createElement("ul");

        crimes.forEach(function(crime){
            
            for (const property in crime){
                const crimeElement = document.createElement("li");
                "key: " ? property + "value: " ? crime[property]
            }
            
            
        });
    } else {
        console.log("Det är något som inte stämmer");
        console.log(response.status);
    }
}

// setTimeout(function(){
// const crimes = getCrimes();
// console.log(crimes);
// },1000);
