var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/region/ame");
request.send();
request.onload=function(){
     var data = Json.parse(request.response);
     
     let asianCountries = countries.filter(country => {
        return country.continent === 'Asia';
    })

    console.log(asianCountries);
}