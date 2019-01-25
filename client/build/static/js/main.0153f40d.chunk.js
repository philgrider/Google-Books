(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(59)},29:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),c=a(61),s=a(63),i=a(62),m=a(21),u=a(7),d=a(8),f=a(11),h=a(9),E=a(12);a(29);var v=function(e){return l.a.createElement("button",Object.assign({className:"btn btn-success"},e,{type:"button"}),l.a.createElement("i",{className:"fa fa-save"})," Save")};var b=function(e){return e.children,l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"d-flex justify-content-center"},"Google Books Search"),l.a.createElement("p",{className:"d-flex justify-content-center"},"Search for and Save Books of Interest"))},p=a(6),k=a.n(p),g={getBooks:function(){return k.a.get("/api/books")},getBook:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},deleteBook:function(e){return k.a.delete("/api/books/"+e)},saveBook:function(e){return k.a.post("/api/books",e)}};function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function B(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(50);function x(e){var t=e.children;return l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"card border"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",{className:"mb-0"},"Results")),t))}function j(e){var t=e.children;return l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top w-100 d-block",alt:""}),l.a.createElement("div",{className:"card-body"},t))}a(52);function w(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Book"),l.a.createElement("input",Object.assign({className:"form-control"},e)))}function O(e){return l.a.createElement("button",Object.assign({},e,{className:"btn btn-success"}),l.a.createElement("i",{className:"fa fa-search"})," ",e.children)}var S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],savedBooks:[],title:"",author:"",synopsis:""},a.loadBooks=function(){g.getBooks().then(function(e){return a.setState({savedBooks:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.saveBook=function(e){a.loadBooks();for(var t=!1,n=0;n<a.state.savedBooks.length;n++)if(a.state.savedBooks[n].title===e.volumeInfo.title){t=!0;break}!1===t&&g.saveBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&g.getBook(a.state.title).then(function(e){a.setState({books:e.data.items,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(N,null,l.a.createElement(B,null,l.a.createElement(y,{size:"md-12"},l.a.createElement(b,null),l.a.createElement("form",null,l.a.createElement("div",{className:"card-body border"},l.a.createElement("h4",{className:"d-flex justify-content-center card-title"},"Book Search"),l.a.createElement(w,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),l.a.createElement(O,{disabled:!this.state.title,onClick:this.handleFormSubmit},"Search")))),this.state.books.length?l.a.createElement(x,null,this.state.books.map(function(t){return l.a.createElement(j,{key:t.id},l.a.createElement("div",null,l.a.createElement("img",{className:"float-left m-1",alt:"",style:{height:"200px",width:"130px"},src:t.volumeInfo.imageLinks.smallThumbnail}),l.a.createElement("h4",{className:"card-title",style:{marginleft:0}},t.volumeInfo.title),l.a.createElement("h6",null,"Written By: ",t.volumeInfo.authors),l.a.createElement("p",{className:"card-text"},t.volumeInfo.description),l.a.createElement("a",{className:"float-none",href:t.volumeInfo.infoLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"btn btn-primary mr-2",type:"button"},l.a.createElement("i",{className:"fa fa-folder-open"})," View")),l.a.createElement(v,{onClick:function(){return e.saveBook(t)}})))})):l.a.createElement("h3",null,"No Results to Display")))}}]),t}(n.Component);a(54);var I=function(e){return l.a.createElement("button",Object.assign({className:"btn btn-primary"},e,{type:"button"}),l.a.createElement("i",{className:"fa fa-remove"})," Delete")},C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.loadBooks=function(){g.getBooks().then(function(e){a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(N,null,l.a.createElement(B,null,l.a.createElement(y,{size:"md-12"},l.a.createElement(b,null)),this.state.books.length?l.a.createElement(x,null,this.state.books.map(function(t){return l.a.createElement(j,{key:t._id},l.a.createElement("div",null,l.a.createElement("img",{className:"float-left m-1",alt:"",style:{height:"200px",width:"130px"},src:t.image}),l.a.createElement("h4",{className:"card-title",style:{marginleft:0}},t.title),l.a.createElement("h6",null,"Written By: ",t.author),l.a.createElement("p",{className:"card-text"},t.description),l.a.createElement("a",{className:"float-none",href:t.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"btn btn-success mr-2",type:"button"},l.a.createElement("i",{className:"fa fa-folder-open"})," View")),l.a.createElement(I,{onClick:function(){return e.deleteBook(t._id)}})))})):l.a.createElement("h3",null,"No Results to Display")))}}]),t}(n.Component);var D=function(){return l.a.createElement(N,{fluid:!0},l.a.createElement(B,null,l.a.createElement(y,{size:"md-12"},l.a.createElement(b,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var z=function(){return l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-md navigation-clean nav-color"},l.a.createElement("div",{className:"container text-light"},l.a.createElement("a",{className:"navbar-brand text-light",href:"/"},"Google Books"),l.a.createElement("button",{className:"navbar-toggler text-light","data-toggle":"collapse","data-target":"#navcol-1"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse d-xl-flex",id:"navcol-1"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement("a",{className:"nav-link active d-xl-flex text-light",href:"/"},"Search")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement("a",{className:"nav-link  text-light",href:"/saved"},"Saved"))))))};var F=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:S}),l.a.createElement(i.a,{exact:!0,path:"/books",component:S}),l.a.createElement(i.a,{exact:!0,path:"/saved/",component:C}),l.a.createElement(i.a,{component:D}))))};r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.0153f40d.chunk.js.map