(this["webpackJsonpto-do-react-code"]=this["webpackJsonpto-do-react-code"]||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),i=(a(19),a(11)),l=a(6),u=a(7),o=a(13),m=a(12),d=(a(20),a(8)),p=a(9),f=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(d.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItems(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))},h=(a(26),a(3)),v=a(10);h.b.add(v.a);var E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({currenItem:{text:e.target.value,key:Date.now()}})},n.addItem=function(e){e.preventDefault();var t=n.state.currenItem;if(console.log(t),""!==t.text){var a=[].concat(Object(i.a)(n.state.items),[t]);n.setState({items:a,currenItem:{text:"",key:""}})}},n.deleteItems=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.setUpdate=function(e,t){var a=n.state.items;a.map((function(a){a.key===t&&(a.text=e)})),n.setState({items:a})},n.state={items:[],currenItem:{text:"",key:""}},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{className:"Task-Manager"},"Task Manager"),r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text...",value:this.state.currenItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(f,{items:this.state.items,deleteItems:this.deleteItems,setUpdate:this.setUpdate}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.97afa901.chunk.js.map