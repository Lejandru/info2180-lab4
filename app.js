window.addEventListener('load', function(){

    let form = document.getElementById("searchers");
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        let test = document.getElementById('searches').value;
           var trim = test.trim();
           var param = {query:`${trim}`};
           console.log(trim);
           urlParam = new URLSearchParams(Object.entries(param));
        fetch(`superheroes.php?`+ urlParam)
            .then(response =>{
                if (response.ok){
                    return response.text();
                }else{
                }
            })
            .then(data =>{
                document.querySelector('#results').innerHTML = data;
                });
                })
            })