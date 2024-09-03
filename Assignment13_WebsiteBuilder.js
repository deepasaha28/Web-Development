function createcard(title,cName,views,monthsOld,duration,thumbnail){
    //Finish this function
    let viewStr 
    if(views<1000){
         viewStr = views;
    }
    else if(views>10000){
         viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }

    let html = `<div class="card">
            <div class="image">
                <img src = "${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p> ${cName} . ${viewStr} views  . ${monthsOld} months ago</p>

            </div>
      </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html      
} 

createcard("Insights of a Web Developer Hunt","Developer Deepa", 720000, 2 ,"31.22","GIG 1.png")