(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(14),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),h=(n(16),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleInfo=function(){n.setState({showInfo:!n.state.showInfo})},n.state={count:0,showInfo:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.info,t=e.img,n=e.title,a=e.author,i=this.props.deleteItem;return o.a.createElement("div",{className:"book"},o.a.createElement("img",{src:t,width:"150px",alt:"book"}),o.a.createElement("div",null,o.a.createElement("h4",null,"Title : ",n),o.a.createElement("h6",null,"By : ",a),o.a.createElement("button",{onClick:i}," delete item"),o.a.createElement("button",{onClick:this.handleInfo},"show info"),!0===this.state.showInfo?o.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quis?"):null))}}]),t}(a.Component)),d=[{id:1,img:"https://m.media-amazon.com/images/I/91G2aMQuu9L._SX140_.jpg",title:"Harry Potter and the Sorcerer's Stone",author:"J.K. ROWLING"},{id:2,img:"https://m.media-amazon.com/images/I/712nNwaEpzL._SX140_.jpg",title:"Harry Potter and the Order of the Phoenix",author:"J.K. ROWLING"},{id:3,img:"https://m.media-amazon.com/images/I/81TRwlSwXKL._SX140_.jpg",title:"Harry Potter and the Goblet of Fire",author:"J.K. ROWLING"}],f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).filterData=function(e){var t=n.state.books.filter(function(t){return t.id!==e});n.setState({books:t})},n.state={books:d},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",null,"Best selling books this week"),this.state.books.map(function(t){return o.a.createElement(h,{key:t.id,info:t,deleteItem:function(){return e.filterData(t.id)}})}))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.b1fa64d9.chunk.js.map