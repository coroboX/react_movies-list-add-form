(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),s=(a(17),a(11)),c=a(4),m=a(5),o=a(7),d=a(6),u=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,n=e.imgUrl,l=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var b=a(2),p=a(1),g=a(3),v=a.n(g),f=(a(21),{values:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},touched:{title:!1,description:!0,imgUrl:!1,imdbUrl:!1,imdbId:!1},errors:{title:null,description:null,imgUrl:null,imdbUrl:null,imdbId:null}}),E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state=f,e.resetState=function(){e.setState(f)},e.isTextValid=function(e){return-1!==e.search(/\w/)},e.isUrlValid=function(e){return e&&/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(e)},e.manageTextFieldError=function(t,a){e.isTextValid(a)||e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(b.a)({},t,"".concat(t," field should not be empty")))})}))},e.manageUrlError=function(t,a){e.isUrlValid(a)||e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(b.a)({},t,"".concat(t," URL should be correct")))})}))},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{values:Object(p.a)(Object(p.a)({},e.values),{},Object(b.a)({},n,r)),touched:Object(p.a)(Object(p.a)({},e.touched),{},Object(b.a)({},n,!0)),errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(b.a)({},n,null))})}))},e.handleBlur=function(t){var a=e.state.values[t].trim();e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{values:Object(p.a)(Object(p.a)({},e.values),{},Object(b.a)({},t,a))})})),("imgUrl"===t||"imdbUrl"===t)&&e.isTextValid(a)?e.manageUrlError(t,a):e.manageTextFieldError(t,a)},e.isFormValid=function(){var t=e.state,a=t.errors,n=t.touched,r=Object.values(a).some((function(e){return!0===!!e})),l=Object.values(n).every((function(e){return!0===e}));return!r&&l},e.handleSubmit=function(t,a,n){t.preventDefault(),e.isFormValid()&&(a(n),e.resetState())},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.values,n=t.touched,l=t.errors,i=a.title,s=a.description,c=a.imgUrl,m=a.imdbUrl,o=a.imdbId,d=a,h=this.props.addMovie,b=function(e){return l[e]&&n[e]};return r.a.createElement("form",{name:"addMovie",onSubmit:function(t){return e.handleSubmit(t,h,d)}},r.a.createElement("h1",{className:"form__header"},"Add new movie"),r.a.createElement("label",{className:"labelName"},r.a.createElement("span",{className:"label__title"},"Title:"),r.a.createElement("input",{type:"text",name:"title",className:v()({"wrong-input":b("title")}),onChange:this.handleChange,onBlur:function(t){return e.handleBlur(t.target.name)},value:i,placeholder:"Enter the title"}),b("title")&&r.a.createElement("span",{className:"error"},l.title)),r.a.createElement("label",{className:"labelName"},r.a.createElement("span",{className:"label__title"},"Description:"),r.a.createElement("input",{type:"textarea",name:"description",className:v()({"wrong-input":b("description")}),onChange:this.handleChange,value:s,placeholder:"Enter the description"}),b("description")&&r.a.createElement("span",{className:"error"},l.description)),r.a.createElement("label",{className:"labelName"},r.a.createElement("span",{className:"label__title"},"Poster link:"),r.a.createElement("input",{type:"text",name:"imgUrl",className:v()({"wrong-input":b("imgUrl")}),onChange:this.handleChange,onBlur:function(t){return e.handleBlur(t.target.name)},value:c,placeholder:"paste the link to poster"}),b("imgUrl")&&r.a.createElement("span",{className:"error"},l.imgUrl)),r.a.createElement("label",{className:"labelName"},r.a.createElement("span",{className:"label__title"},"IMDB link:"),r.a.createElement("input",{type:"text",name:"imdbUrl",className:v()({"wrong-input":b("imdbUrl")}),onChange:this.handleChange,onBlur:function(t){return e.handleBlur(t.target.name)},value:m,placeholder:"paste the link to IMDB"}),b("imdbUrl")&&r.a.createElement("span",{className:"error"},l.imdbUrl)),r.a.createElement("label",{className:"labelName"},r.a.createElement("span",{className:"label__title"},"IMDB ID:"),r.a.createElement("input",{type:"textarea",name:"imdbId",className:v()({"wrong-input":b("imdbId")}),onChange:this.handleChange,onBlur:function(t){return e.handleBlur(t.target.name)},value:o,placeholder:"paste the IMDB ID"}),b("imdbId")&&r.a.createElement("span",{className:"error"},l.imdbId)),r.a.createElement("button",{disabled:!this.isFormValid(),type:"submit",className:"form__submit-button"},"Submit"),r.a.createElement("h2",{className:"preview-header"},"Preview:"),r.a.createElement(u,Object.assign({key:d.imdbId},d)))}}]),a}(n.Component),j=a(10),w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:j},e.addMovie=function(t){e.setState((function(e){return{movies:[t].concat(Object(s.a)(e.movies))}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(h,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(E,{addMovie:this.addMovie})))}}]),a}(n.Component);i.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.057245d4.chunk.js.map