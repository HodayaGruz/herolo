(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t(46)},39:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"movies",function(){return he});var o=t(0),i=t.n(o),a=t(11),c=t.n(a),u=t(5),l=t(1),s=(t(39),t(6)),p=t(10),d=t.n(p),f=t(20),b=t(12),m=t(13),v=t(15),h=t(14),O=t(16),g=t(3),x=t(2),j=t(8);function y(){var e=Object(x.a)(["\n    padding: 10px 20px;\n    margin: 10px;\n    cursor: pointer;\n    background-color: ",";\n    border-radius: 6px;\n    color: #ffffff;\n    font-size: 15px;\n    font-weight: bold;\n    text-decoration: none;\n\n    :hover {\n        opacity: 0.9;\n    }\n"]);return y=function(){return e},e}function E(){var e=Object(x.a)(["\n    font-weight: bold;\n    color: ",";\n    font-size: 20px;\n"]);return E=function(){return e},e}function w(){var e=Object(x.a)(["\n    z-index: 99;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n    background-color: black;\n    opacity: 0.2;\n    display: ","\n"]);return w=function(){return e},e}function k(){var e=Object(x.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100;\n    padding: 20px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    width: 60%;\n    height: 75%;\n    background-color: white;\n    display: ","\n"]);return k=function(){return e},e}var D=l.b.div(k(),function(e){return e.isOpen?"block":"none"}),C=l.b.div(w(),function(e){return e.isOpen?"block":"none"}),M=l.b.span(E(),function(e){return e.theme.colors.blue}),I=l.b.div(y(),function(e){var n=e.theme,t=e.red,r=e.gray;return n.colors[t?"red":r?"gray":"blue"]});function S(){var e=Object(x.a)(["\n    margin-left: 10px;\n"]);return S=function(){return e},e}function T(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);return T=function(){return e},e}function R(){var e=Object(x.a)(["\n    dispaly: flex; \n    flex-direction: column;\n    border: 1px solid ",";\n    margin-bottom: 10px;\n    padding: 10px;\n    max-width: 600px;\n    box-shadow: 3px 2px 13px 0px rgba(179,179,179,1);\n    background-color: ","\n"]);return R=function(){return e},e}var A=l.b.div(R(),function(e){return e.theme.colors.blue},function(e){return e.theme.colors.white}),_=l.b.div(T()),U=l.b.span(S()),z=function(e){var n=e.Title,t=e.openEdit,r=e.openDelete,o=e.Director;return i.a.createElement(A,null,i.a.createElement(M,null,n.replace(/[^A-Za-z ]/g,"").toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")),i.a.createElement(U,null,"produced by ".concat(o)),i.a.createElement(_,null,i.a.createElement(I,{onClick:t},"Edit"),i.a.createElement(I,{onClick:r},"Delete")))},G=t(7);function V(){var e=Object(x.a)(["\n    color: red;\n"]);return V=function(){return e},e}function W(){var e=Object(x.a)(["\n    color: ",";\n    font-weight: bold;\n"]);return W=function(){return e},e}function Y(){var e=Object(x.a)(["\n    font-size: 14px;\n    margin: 10px 10px 0px 5px;\n    border: 0;\n    border-bottom: 1px solid black;\n\n    :focus {\n        outline: none;\n        border-bottom: 1px solid ",";\n    }\n\n\n"]);return Y=function(){return e},e}function q(){var e=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n"]);return q=function(){return e},e}var L=l.b.div(q()),P=l.b.input.attrs({type:"text"})(Y(),function(e){return e.theme.colors.blue}),B=l.b.span(W(),function(e){return e.theme.colors.blue}),N=l.b.span(V()),F=function(e){var n=e.value,t=e.onChange,r=e.err,o=e.name;return i.a.createElement(L,null,i.a.createElement(B,null,n&&o),i.a.createElement(P,{placeholder:o,value:n,onChange:t}),i.a.createElement(N,null,r))};function H(){var e=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: space-evenly;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 100%;\n"]);return H=function(){return e},e}function J(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-top: 10px;\n"]);return J=function(){return e},e}var $=l.b.div(J()),Z=l.b.div(H()),K=["Title","Genre","Year","Runtime","Director"],Q=function(e){function n(e){var t;return Object(b.a)(this,n),(t=Object(v.a)(this,Object(h.a)(n).call(this,e))).state={movie:t.props.movie,error:{}},t.save=t.save.bind(Object(g.a)(Object(g.a)(t))),t.setData=t.setData.bind(Object(g.a)(Object(g.a)(t))),t.validation=t.validation.bind(Object(g.a)(Object(g.a)(t))),t}return Object(O.a)(n,e),Object(m.a)(n,[{key:"componentDidUpdate",value:function(e){e.movie.imdbID!==this.props.movie.imdbID&&this.setState({movie:this.props.movie,error:{}})}},{key:"validation",value:function(){var e=this.state.movie,n=e.Title,t=e.Genre,r=e.Year,o=e.Runtime,i=e.Director,a={};return n&&""!==n?this.props.movie.Title!==n&&this.props.movies.find(function(e){return Object(j.trim)(e.Title)===Object(j.trim)(n)})&&(a.Title="This name is already exist."):a.Title="Require.",t&&""!==t||(a.Genre="Require."),r&&""!==r?/^\d{4}$/.test(r)||(a.Year="Not a valid year."):a.Year="Require.",i&&""!==i||(a.Director="Require."),o&&""!==o||(a.Runtime="Require."),!(a.Runtime||a.Director||a.Year||a.Genre||a.Title)||(this.setState({error:a}),!1)}},{key:"save",value:function(){this.validation()&&(this.props.movie&&this.props.movie.imdbID?this.props.updateMovie(this.state.movie):this.props.addMovie(Object(G.a)({},this.state.movie,{imdbID:"id".concat(new Date)})),this.props.onClose())}},{key:"setData",value:function(e,n){this.setState({movie:Object(G.a)({},this.state.movie,Object(s.a)({},e,n))})}},{key:"render",value:function(){var e=this,n=this.state.error;return i.a.createElement("div",null,i.a.createElement(D,{isOpen:this.props.isOpen},i.a.createElement(Z,null,K.map(function(t){return i.a.createElement(F,{key:t,err:n[t],value:e.state.movie[t],name:t,onChange:function(n){return e.setData(t,n.target.value)}})}),i.a.createElement($,null,i.a.createElement(I,{onClick:this.save},"Save"),i.a.createElement(I,{gray:!0,onClick:this.props.onClose},"Cancel")))),i.a.createElement(C,{isOpen:this.props.isOpen}))}}]),n}(o.Component),X=Object(u.b)(function(e){return{movies:e.movies}},{addMovie:function(e){return{type:"ADD_MOVIE",payload:e}},updateMovie:function(e){return{type:"UPDATE_MOVIE",payload:e}}})(Q);function ee(){var e=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n"]);return ee=function(){return e},e}function ne(){var e=Object(x.a)(["\n    height: 150px;\n    width: 40%\n"]);return ne=function(){return e},e}function te(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-top: 10px;\n"]);return te=function(){return e},e}var re=l.b.div(te()),oe=Object(l.b)(D)(ne()),ie=l.b.div(ee()),ae=Object(u.b)(function(){return{}},{deleteMovie:function(e){return{type:"DELETE_MOVIE",payload:e}}})(function(e){var n=e.deleteMovie,t=e.movie,r=e.onClose,o=e.isOpen;return i.a.createElement("div",null,i.a.createElement(oe,{isOpen:o},i.a.createElement(ie,null,"Are you sure you want to delete?",i.a.createElement(re,null,i.a.createElement(I,{red:!0,onClick:function(){return function(e,n,t){n(e.imdbID),t()}(t,n,r)}},"Delete"),i.a.createElement(I,{gray:!0,onClick:r},"Cancel")))),i.a.createElement(C,{isOpen:o}))});function ce(){var e=Object(x.a)(["\n    font-size: 25px;\n    flex-grow: 1;\n"]);return ce=function(){return e},e}function ue(){var e=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    max-width: 630px;\n"]);return ue=function(){return e},e}function le(){var e=Object(x.a)(["\n    padding: 30px;\n    box-sizing: border-box;\n    width: 100%\n    height: 100%;\n    background-color: ","\n"]);return le=function(){return e},e}var se=l.b.div(le(),function(e){return e.theme.colors.backgroundGray}),pe=l.b.div(ue()),de=l.b.div(ce()),fe=function(e){function n(e){var t;return Object(b.a)(this,n),(t=Object(v.a)(this,Object(h.a)(n).call(this,e))).fetchMovies=Object(f.a)(d.a.mark(function e(){var n,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=Batman&page=1&apikey=30730504");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,o=r.Search.map(function(){var e=Object(f.a)(d.a.mark(function e(n){var t,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?i=".concat(n.imdbID,"&apikey=30730504"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,console.log(Object(j.pick)(r,["imdbID","Title","Genre","Year","Runtime","Director"])),e.abrupt("return",Object(j.pick)(r,["imdbID","Title","Genre","Year","Runtime","Director"]));case 8:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()),e.t0=t.props,e.next=10,Promise.all(o);case 10:e.t1=e.sent,e.t0.fetchMovies.call(e.t0,e.t1);case 12:case"end":return e.stop()}},e,this)})),t.state={openEdit:!1,openDelete:!1,movie:{}},t.fetchMovies=t.fetchMovies.bind(Object(g.a)(Object(g.a)(t))),t.modalOpener=t.modalOpener.bind(Object(g.a)(Object(g.a)(t))),t}return Object(O.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){0===this.props.movies.length&&this.fetchMovies()}},{key:"modalOpener",value:function(e,n){var t;this.setState((t={},Object(s.a)(t,e,!0),Object(s.a)(t,"movie",n),t))}},{key:"render",value:function(){var e=this;return i.a.createElement(se,null,i.a.createElement(pe,null,i.a.createElement(M,{as:de},"My Batman Movies"),i.a.createElement(I,{onClick:function(){return e.modalOpener("openEdit",{})}},"Add Movie")),this.props.movies.map(function(n){return i.a.createElement(z,Object.assign({key:n.imdbID,openEdit:function(){return e.modalOpener("openEdit",n)},openDelete:function(){return e.modalOpener("openDelete",n)}},n))}),i.a.createElement(X,{movie:this.state.movie,isOpen:this.state.openEdit,onClose:function(){return e.setState({openEdit:!1,movie:{}})}}),i.a.createElement(ae,{movie:this.state.movie,isOpen:this.state.openDelete,onClose:function(){return e.setState({openDelete:!1,movie:{}})}}))}}]),n}(o.Component),be=Object(u.b)(function(e){return{movies:e.movies}},{fetchMovies:function(e){return{type:"FETCH_MOVIES_SUCSSES",payload:e}}})(fe),me=t(9),ve=t(30),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(console.log(e,n),n.type){case"FETCH_MOVIES_SUCSSES":return n.payload;case"UPDATE_MOVIE":var t=e.findIndex(function(e){return e.imdbID===n.payload.imdbID});return e[t]=Object(G.a)({},n.payload),console.log("innnn",e[t],t),e;case"ADD_MOVIE":return Object(ve.a)(e).concat([n.payload]);case"DELETE_MOVIE":return e.filter(function(e){return e.imdbID!==n.payload});default:return e}},Oe=Object(me.c)(Object(me.b)(Object(G.a)({},r))),ge={colors:{backgroundGray:"#e1e4ea",gray:"#877f7f",white:"white",blue:"#79bbff",red:"#d31723"}},xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(function(){return i.a.createElement(u.a,{store:Oe},i.a.createElement(l.a,{theme:ge},i.a.createElement(be,null)))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/myapp",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/myapp","/service-worker.js");xe?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):je(n,e)})}}()}},[[32,2,1]]]);
//# sourceMappingURL=main.1cfd41f6.chunk.js.map