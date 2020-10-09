console.log("news console is running");
var head="topic_headlines"
var ntopic="";

//grabing the cardholder from the DOM
var cardholder1 = document.getElementById("cardholder");
var tech1= document.getElementById("tech");
console.log(cardholder1);
tech1.addEventListener("click",()=>{
    head="topic_headlines"
    ntopic="&topic=technology";



});
fetch(`https://google-news.p.rapidapi.com/v1/topic_headlines?country=in&lang=en`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-news.p.rapidapi.com",
		"x-rapidapi-key": "8eafe33d03msh3247ed6f7a67551p174caajsn39a98581c059"
	}
})
.then(response => {
    // console.log(response);
    return response.json();
}).then(data=>{
    console.log(data.articles[0].title);
    article=data.articles;
    var newhtml="";
    console.log(data);
    article.forEach((element,index) => {
        console.log("i am in foreach ",element);
        news=`<div class="card my-5">
                        <div class="card-header">
                            ${element.source.title}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <a href=${element.link} class="btn btn-primary">Read More</a>
                        </div>

                    </div>`
        newhtml+=news;
        console.log(newhtml);
    });
                    cardholder1.innerHTML=newhtml;
                    console.log(cardholder1);
})








// for technology page
technology=document.getElementById("technology");
fetch(`https://google-news.p.rapidapi.com/v1/topic_headlines?country=IN&lang=en&topic=technology`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-news.p.rapidapi.com",
		"x-rapidapi-key": "8eafe33d03msh3247ed6f7a67551p174caajsn39a98581c059"
	}
})
.then(response => {
    // console.log(response);
    return response.json();
}).then(data=>{
    console.log(data.articles[0].title);
    article=data.articles;
    var newhtml="";
    console.log(data);
    article.forEach((element,index) => {
        console.log("i am in foreach ",element);
        news=`<div class="card my-5">
                        <div class="card-header">
                            ${element.source.title}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <a href=${element.link} class="btn btn-primary">Read More</a>
                        </div>

                    </div>`
        newhtml+=news;
        console.log(newhtml);
    });
                    technology.innerHTML=newhtml;
})