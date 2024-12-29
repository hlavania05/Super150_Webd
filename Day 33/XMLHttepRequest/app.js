let req = new XMLHttpRequest();
req.open("GET", "https://api.tvmaze.com/search/shows?q=girls");
req.send();

req.onload = function(){
    let data = JSON.parse(req);
    console.log(data);
}

req.onerror = function(err){
    console.log(err)
}