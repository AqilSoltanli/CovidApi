



  

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e3a6557338msh0130ae76c77dd7cp1f3973jsne750065bf893',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };

    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then(response => response.json())
        .then(response => {
            
            let info = response.countries_stat;
            GetData = function(){

                var inp = document.querySelector('.country').value;

                info.forEach(data => {

                    if (data.country_name.toLowerCase() === inp.toLowerCase()) {
                        $("#recovered").text(data.total_recovered);
                    }
                    else if(data.country_name.toLowerCase() === inp.toLowerCase()){
                        $("#confirmed").text(data.total_cases);
                    }
                    else if(data.country_name.toLowerCase() === inp.toLowerCase()){
                        $("#deaths").text(data.total_deaths);
                    }
                });
            } 
            
            
        let Total = response.world_total;

        $("#recovered").text(Total.total_recovered);
        $("#confirmed").text(Total.total_cases);
        $("#deaths").text(Total.total_deaths);

        })
        .catch(err => console.error(err));
        













