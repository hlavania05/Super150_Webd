axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})