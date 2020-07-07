(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),m=(a(16),a(10)),c=a(2),s=a(3),o=a(6),d=a(5),u=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,n=e.imgUrl,l=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:n,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var p=a(4),b=a(1),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={values:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},touched:{title:!1,description:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1}},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{values:Object(b.a)(Object(b.a)({},e.values),{},Object(p.a)({},n,i))})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.values,a=t.title,n=t.description,l=t.imgUrl,r=t.imdbUrl,m=t.imdbId,c=this.state.values,s=this.props.addMovie;return i.a.createElement("form",{name:"addMovie",onSubmit:function(e){return s(e,c)}},i.a.createElement("h1",{className:"form__header"},"Add new movie"),i.a.createElement("label",null,i.a.createElement("span",{className:"label"},"Title:"),i.a.createElement("input",{type:"text",name:"title",onChange:function(t){return e.handleChange(t)},value:a,placeholder:"write the title"})),i.a.createElement("label",null,i.a.createElement("span",{className:"label"},"Description:"),i.a.createElement("input",{type:"textarea",name:"description",onChange:function(t){return e.handleChange(t)},value:n,placeholder:"write the description"})),i.a.createElement("label",null,i.a.createElement("span",{className:"label"},"Poster link:"),i.a.createElement("input",{type:"text",name:"imgUrl",onChange:function(t){return e.handleChange(t)},value:l,placeholder:"paste the link to poster"})),i.a.createElement("label",null,i.a.createElement("span",{className:"label"},"IMDB link:"),i.a.createElement("input",{type:"text",name:"imdbUrl",onChange:function(t){return e.handleChange(t)},value:r,placeholder:"paste the link to IMDB"})),i.a.createElement("label",null,i.a.createElement("span",{className:"label"},"Description:"),i.a.createElement("input",{type:"textarea",name:"imdbId",onChange:function(t){return e.handleChange(t)},value:m,placeholder:"paste the IMDB ID"})),i.a.createElement("br",null),i.a.createElement("button",{type:"submit",className:"form__submit-button"},"Submit"),i.a.createElement("br",null),i.a.createElement("h2",{className:"preview-header"},"Preview:"),i.a.createElement(u,Object.assign({key:c.imdbId},c)))}}]),a}(n.Component),v=a(9),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={movies:v},e.addMovie=function(t,a){t.preventDefault(),e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[a])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(h,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(g,{addMovie:this.addMovie})))}}]),a}(n.Component);r.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.e8c1d8b9.chunk.js.map