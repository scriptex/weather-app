(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),u=(n(12),n(1)),m=n(2),o=n.n(m),i=n(5),d=function(){var e=Object(i.a)(o.a.mark(function e(t,n,a){var l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&units=metric&appid=ac4bbd3c23dc38c5831469c1976a79ff").then(function(e){return e.json()}).catch(function(e){var t=e.message;return a(t)});case 2:l=e.sent,n(l);case 4:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}(),s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),m=Object(u.a)(c,2),o=m[0],i=m[1],s=Object(a.useState)(""),E=Object(u.a)(s,2),p=E[0],h=E[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n?(h(""),d(n,i,h)):h("Please type a city.")}},l.a.createElement("input",{type:"text",placeholder:"Type a city...",value:n,onChange:function(e){return r(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Go")),function(e){if(!Object.keys(e).length)return null;if(200!==e.cod)return l.a.createElement("h2",null,e.message);var t=e.name,n=e.sys,a=e.coord,r=e.weather,c=e.main,u=e.wind;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t,", ",n.country),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Coordinates:"),l.a.createElement("td",null,"[",a.lat,", ",a.lon,"]")),r.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("img",{src:"".concat("//openweathermap.org/img/w/").concat(e.icon).concat(".png"),alt:e.description})),l.a.createElement("td",null,e.main))}),l.a.createElement("tr",null,l.a.createElement("td",null,"Current temp:"),l.a.createElement("td",null,c.temp,"\xb0 C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Maximum temp:"),l.a.createElement("td",null,c.temp_max,"\xb0 C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Minimum temp:"),l.a.createElement("td",null,c.temp_min,"\xb0 C")),l.a.createElement("tr",null,l.a.createElement("td",null,"Humidity:"),l.a.createElement("td",null,c.humidity," %")),l.a.createElement("tr",null,l.a.createElement("td",null,"Pressure:"),l.a.createElement("td",null,c.pressure," hpa")),l.a.createElement("tr",null,l.a.createElement("td",null,"Wind speed:"),l.a.createElement("td",null,u.speed," m/s")),l.a.createElement("tr",null,l.a.createElement("td",null,"Wind direction:"),l.a.createElement("td",null,e.wind.deg)))))}(o),p&&l.a.createElement("h3",null,p))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(16)}},[[6,2,1]]]);
//# sourceMappingURL=main.ea5b9870.chunk.js.map