(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3),r=n.n(i),c=(n(2),n(4)),l=n(5),s=n(7),u=n(6),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={toDo:[{id:1,value:"Clean Room"},{id:2,value:"Clean Other Room"}],id:2,inputValue:""},e.addItem=function(){if(""!==e.state.inputValue){var t=e.state.inputValue,n=e.state.id+1,o=e.state.toDo,a={id:n,value:t};o.push(a),e.setState({toDo:o,id:n,inputValue:""}),console.log(e.state.toDo,e.state.id)}else alert("Input is Empty")},e.updateInputValue=function(t){e.setState({inputValue:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("h1",{className:"badge badge-primary m-2"},a.a.createElement("div",{algin:"center"},a.a.createElement("input",{class:"form-control",onChange:this.updateInputValue}),a.a.createElement("button",{className:"btn btn-dark m-2",onClick:this.addItem},"ADD"),this.state.toDo.map((function(t){return a.a.createElement("div",{key:t.id,id:t.id},a.a.createElement("h1",null,t.value),a.a.createElement("button",{className:"btn btn-danger m-2",onClick:function(){return e.onDelete(t.id)}},"Delete"))}))))}},{key:"onDelete",value:function(e){var t=this.state.toDo.filter((function(t){return t.id!==e}));console.log(t),this.setState({toDo:t})}}]),n}(o.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(13);r.a.render(a.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ToDoReact",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ToDoReact","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()},2:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f61afc9b.chunk.js.map