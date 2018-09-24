const showmorebtn = document.querySelector('.showmorebtn');

showmorebtn.addEventListener("click",function (){
    showmore();
});

let i=1;
var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://starlord.hackerearth.com/gamesext", true);
    xmlhttp.send();
    var game
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {	
        game = JSON.parse(this.responseText);
        
        console.log("in function");
        for(x in game)
        {
          console.log()
          
        if(i>9)
        {
            break;
        }
        i++;
          
                            let platformx="p.view-platform"+x;
                            let genrex="p.view-genre"+x;
                            let scorex="div.view-score"+x;
                            let yearx="p.view-year"+x;
                            let titlex="h3.view-title"+x;
                            let urlx="a.view-url"+x;
                            let editorx="div.editor-display"+x;
                            
                            console.log(editorx)
                            if(game[x].editors_choice=="Y")
                            {
                                console.log(game[x].editors_choice)
                                $(editorx).css("display", "block");
                            }
                            else
                            {
                                console.log(game[x].editors_choice)
                                $(editorx).css("display", "none");
                            }
                            console.log(platformx);
                            $(platformx).text(game[x].platform);

                            console.log(genrex);
                            $(genrex).text(game[x].genre);
                            
                            console.log(yearx);
                            $(yearx).text(game[x].release_year);
                            
                            console.log(titlex);
                            $(titlex).text(game[x].title);
                            
                            console.log("http://ign.com"+url);
                            $(urlx).attr("href","http://ign.com"+game[x].url)
                            

                            
                            $(scorex).html("score : " +game[x].score);
                            let scorewidth=(game[x].score)*10+"%";
                            console.log(scorewidth);
                            $(scorex).css("width", scorewidth);
                         
        }
        console.log("Outside For");
    }
    
    
};



let temp;
function showmore()
{	
    console.log("................................... i is" + i);
    temp=i;
    $("i.show-more-load").css("display","block");
    temp=temp+9;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://starlord.hackerearth.com/gamesext", true);
    xmlhttp.send();
    var game
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {	
        game = JSON.parse(this.responseText);
        
        console.log("in function");
        for(x in game)
        {
          console.log()
          
        if(i> temp)
        {
            break;
        }
        i++;
          
                            let platformx="p.view-platform"+x;
                            let genrex="p.view-genre"+x;
                            let scorex="div.view-score"+x;
                            let yearx="p.view-year"+x;
                            let titlex="h3.view-title"+x;
                            let editorx="div.editor-display"+x;
                            
                            
                            if(game[i].editors_choice=="Y")
                            {
                                console.log(game[i].editors_choice)
                                $(editorx).css("display", "block");
                            }
                            else
                            {
                                console.log(game[i].editors_choice)
                                $(editorx).css("display", "none");
                            }
                            console.log(game[i].platform);
                            $(platformx).text(game[i].platform);

                            console.log(game[i].genre);
                            $(genrex).text(game[i].genre);
                            
                            console.log(game[i].release_year);
                            $(yearx).text(game[i].release_year);
                            
                            console.log(game[i].title);
                            $(titlex).text(game[i].title);
                            
                            
                            $(scorex).html("score : " +game[i].score);
                            let scorewidth=(game[i].score)*10+"%";
                            console.log(game[i].score);
                            $(scorex).css("width", scorewidth);
                         
        }
        console.log("Outside For");
        $("i.show-more-load").css("display","none");
    }
    
   
   };
}