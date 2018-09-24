//main Script to get data to a variable.
const searchBtn = document.querySelector('.searchbtn');
const searchItem = document.querySelector('.searchitem');
const demo = document.querySelector("#demo");
const notfound1 = document.querySelector(".notfound-div");

//search cards selectors
const title = document.querySelector('.search-title');
const platform = document.querySelector('.search-platform');
const url = document.querySelector('.search-url');
const genre = document.querySelector('.search-genre');
const year = document.querySelector('.search-year');
const score = document.querySelector('.search-score');
const cardcontainer = document.querySelector('#search-card-container');
const editor = document.querySelector('.editor-choice');


searchBtn.addEventListener("click",function (){
    searchingItem(searchItem);
});

let flag=0;
function searchingItem(searchItem)
{	
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://starlord.hackerearth.com/gamesext", true);
    xmlhttp.send();
    var game
    $("i.search-load").css("display","block");
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {	
        game = JSON.parse(this.responseText);
        let i=1;
        console.log("in function");
        for(x in game)
        {
           console.log("Inside For");
           if(game[x].title==searchItem.value)
           {
               flag=1;
                console.log("Inside IF");
                if(game[x].editor=="y")
                {
                    editor.style.display="block";
                }
                else{
                    editor.style.display="none";
                }
                cardcontainer.style.display="block";
                title.innerHTML=game[x].title;
                platform.innerHTML=game[x].platform;
                year.innerHTML=game[x].release_year;
                genre.innerHTML=game[x].genre;
                url.setAttribute("href","http://ign.com"+game[x].url);
                score.innerHTML="score : " + game[x].score;
                score.setAttribute("style","width:" +(game[x].score)*10+"%");
                console.log(game[x].title)


                break;
           }
          
           
        }
        console.log("outside for");
        $("i.search-load").css("display","none");
        if(flag==0)
        {
            notfound1.style.display="block";
            console.log("notfound");
          
            $("h2.notfound").html("Sorry , Nothing Found Related to this !!!!!");
          
        }
       
    }
    
    
    };             

}


console.log("end of script");