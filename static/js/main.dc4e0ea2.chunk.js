(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(8),c=a.n(r),s=(a(15),a(6)),i=a(1),l=a(2),m=a(4),u=a(3),p=a(5),d=function(e){return n.a.createElement("header",null,n.a.createElement("h1",{className:"header__title"},e.title))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).toDoItemRef=n.a.createRef(),a.createToDo=function(e){e.preventDefault();var t={item:a.toDoItemRef.current.value};a.props.addToDo(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"toDoListForm"},n.a.createElement("form",{onSubmit:this.createToDo},n.a.createElement("input",{className:"toDoListForm__input",placeholder:"Task",ref:this.toDoItemRef}),n.a.createElement("button",{className:"toDoListForm__button",type:"submit"}," Add Task ")))}}]),t}(n.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details.item;return n.a.createElement("li",{className:"toDoList__item"},n.a.createElement("p",{className:"toDoList__text"},t),n.a.createElement("div",{className:"toDoList__buttons"},n.a.createElement("button",{className:"toDoList__button"},"\u2714"),n.a.createElement("button",{className:"toDoList__button toDoList__button--delete",onClick:function(){return e.props.removeToDo(e.props.index)}},"\u2718")))}}]),t}(n.a.Component),f=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={items:[],completeItems:[],removedItems:[]},a.addToDo=function(e){var t=Object(s.a)(a.state.items);t.push(e),a.setState({items:t})},a.removeToDo=function(e){var t=Object(s.a)(a.state.items);t.splice(e,1),a.setState({items:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(d,{title:"To-Do List"}),n.a.createElement(b,{addToDo:this.addToDo}),n.a.createElement("ul",{className:"toDoList"},Object.keys(this.state.items).map(function(t){return n.a.createElement(h,{key:t,index:t,details:e.state.items[t],removeToDo:e.removeToDo})})))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.dc4e0ea2.chunk.js.map