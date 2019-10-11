// TODO: add code here
window.addEventListener('load', function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(res){
        return res.json();
    })
    .then(function(json) {
        //console.log(json, 'Outside event.');
        let cont = document.getElementById("container");
        for (i = 0; i < json.length; i ++) {
            let astro = json[i];
            if (astro.active) {
                textColor = "green";
            } else {
                textColor = "black"
            }
            cont.innerHTML= cont.innerHTML + `
            <div class="astronaut">
            <div class="bio">
            <font color=${textColor}>
               <h3>${astro.firstName} ${astro.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astro.hoursInSpace}</li>
                  <li>Active: ${astro.active}</li>
                  <li>Skills: ${astro.skills.join(', ')}</li>
               </ul>
            </font>
            </div>
            <img class="avatar" src=${astro.picture}>
            </div>`;
        }
    });
    //console.log(res.json);
});