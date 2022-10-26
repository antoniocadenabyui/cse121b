function getSource(id){
    $.ajax({
       url:"https://api.spoonacualr.com/recipes/"+id+"/information?apiKey=913a34284f5142c099a9f9455c31c306",
       success:function(res){
        document.getElementById('sourceLink').innerHTML = res.sourceUrl
        document.getElementById('sourceLink').href = res.sourceUrl
       }
    });
}
function getRecepe(q){
    $.ajax({
        url:"https://api.spoonacular.com/recepies/search?apiKey=913a34284f5142c099a9f9455c31c306&number=1&query="+q,
        success:function(res){
            document.getElementById('output').innerHTML = "<h1>"+res.results[0].title+
            "</h1><br><img src='"+res.baseUri+res.results[0].image+
            "'width='400'/> <br> ready in"+res.results[0].readyInMinutes+" minutes"
            getSource(res.results[0].id)
        }
    })
}