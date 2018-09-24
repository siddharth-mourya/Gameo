
const xbox = document.querySelector('.xbox');
const pc = document.querySelector('.pc');
const ps3 = document.querySelector('.ps3');
const ipad = document.querySelector('.ipad');
const wiiu = document.querySelector('.wiiu');
const iPhone = document.querySelector('.iPhone');
const h2inner = document.querySelector(".platform")

let xboxi;
let pci;
let ps3i;
let ipadi;
let wiiui;
let iphonei;



let counted;



xbox.addEventListener("click",function (){
    
    showItem("Xbox 360");
});
pc.addEventListener("click",function (){
    showItem("PC");
});
ps3.addEventListener("click",function (){
    showItem("PlayStation 3");
});
ipad.addEventListener("click",function (){
    showItem("iPad");
});
wiiu.addEventListener("click",function (){
    showItem("Wii U");
});
iPhone.addEventListener("click",function (){
    showItem("iPhone");
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
                            
                            
                            $(scorex).html("score : " +game[x].score);
                            let scorewidth=(game[x].score)*10+"%";
                            console.log(scorewidth);
                            $(scorex).css("width", scorewidth);
                         
        }
        console.log("Outside For");
    }
};

//---------------------------------------------------------------for xbox =-----------------------------




function showItem(searchfor)
{	
    console.log("................................... i is" + i);
    
    //("i.show-more-load").css("display","block");
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://starlord.hackerearth.com/gamesext", true);
    xmlhttp.send();
    var game;
    count=0;
    
    $("h2.Platform").text(searchfor);
    $("i.search-load").css("display","block");
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {	
        $(".search-load").css("display","block");
        game = JSON.parse(this.responseText);
        i=0;
        console.log("in function");
        for(x in game)
        {
          console.log()
          
        if(count > 8)
        { 
            counted=i;
            break;
        }
        i++;                if(game[i].platform==searchfor)
                            {
                            console.log("found " + searchfor + " game")
                            let platformx="p.view-platform"+count;
                            let genrex="p.view-genre"+count;
                            let scorex="div.view-score"+count ;
                            let yearx="p.view-year"+ count ;
                            let titlex="h3.view-title"+ count ;
                            let editorx="div.editor-display"+count;
                            
                            
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

                            count++;
                        }
                         
        }
        console.log("Outside For");
        $("i.search-load").css("display","none");
        //$("i.show-more-load").css("display","none");
    }
    
   
   };
}







function showMore(searchfor)
{	
    console.log("................................... i is" + i);
    
    //("i.show-more-load").css("display","block");
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://starlord.hackerearth.com/gamesext", true);
    xmlhttp.send();
    var game;

    
   
    
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {	
        $(".search-load").css("display","block");
        game = JSON.parse(this.responseText);
        i=0;
        count=0;
        console.log("in function");
        for(counted in game)
        {
          console.log()
          
        if(count > 8)
        { 
            if(searchfor=="PlayStation 3")
            {
                ps3i=i;
            }
            else if(searchfor=="Xbox 360")
            {
                xboxi=i;
            }
            else if(searchfor=="iPad")
            {
                ipadi=i;
            }
            else if(searchfor=="iPhone")
            {
                iphonei=i;
            }
            else if(searchfor=="Wii U")
            {
                wiiui=i;
            }
            else if(searchfor=="PC")
            {
                pci=i;
            }
            break;
        }
        i++;                if(game[i].platform==el.innerHTML)
                            {
                            console.log("found " + searchfor + " game")
                            let platformx="p.view-platform"+count;
                            let genrex="p.view-genre"+count;
                            let scorex="div.view-score"+count ;
                            let yearx="p.view-year"+ count ;
                            let titlex="h3.view-title"+ count ;
                            let editorx="div.editor-display"+count;
                            
                            
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

                            count++;
                        }
                         
        }
        console.log("Outside For");
        $("i.search-load").css("display","none");
        //$("i.show-more-load").css("display","none");
    }
    
   
   };
}