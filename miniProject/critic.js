



fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
.then(response => response.json())
.then(response => {
    let html = "";
    let İnfo = response.countries_stat;
    let count = 1;
    İnfo.forEach(data => {
        let cases = data.cases.split(",").join("");
        if (cases > 150000 ) {
            html += `
                <tr>
                    <th scope="row">${count}</th>
                    <td>${data.country_name}</td>
                    <td>${data.cases}</td>
                    <td>${data.deaths}</td>
                </tr>
            `
            count++;
        }
        document.getElementById("body").innerHTML =html;
    });
    console.log(response.countries_stat);
})