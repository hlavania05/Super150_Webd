fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    return response.json();
})
.then(function(fullData){
    console.log(fullData)
})
.catch(function(err){
    console.log(err)
})