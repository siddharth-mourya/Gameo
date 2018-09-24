let urlapi= "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=534a20fe8fb745c9a88958473656005c";

const newsdiv=document.querySelector(".newsdiv");

var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", urlapi , true);
    xmlhttp.send();
    var gamenews
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {	
        gamenews = JSON.parse(this.responseText);
        let i=1, x=0;
        console.log("in function");
       
        for(articles in gamenews)
        {
           console.log("Inside For");
           console.log(x);
           console.log(gamenews.articles[i].description);
           if(i>7)
           {
               console.log("breaking");
                break;
           }
           
           i++;

           let newsi="p.news"+i;
           $(newsi).text(gamenews.articles[i].description);
        }
        console.log("Outside For");
    }
    
    
    };             