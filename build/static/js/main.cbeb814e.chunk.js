(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){t.exports={searchBlock:"filter_searchBlock__bbweJ",searchInpt:"filter_searchInpt__2DfXv"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"contactForm_form__3E6Oc",formBlock:"contactForm_formBlock__1agDH",label:"contactForm_label__2my22",inpt:"contactForm_inpt__3_i02",btn:"contactForm_btn__hBYVC"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(11),o=n.n(r),s=n(13),i=n(3),l=n(5),u=n(6),m=n(8),b=n(7),d=n(22),j=n(9),f=n.n(j),h=function(t){var e=t.contacts,n=t.removeContact;return Object(a.jsx)("ul",{className:f.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:f.a.item,children:[t.name+": "+t.number,Object(a.jsx)("button",{className:f.a.btn,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},p=n(4),O=n(2),v=n.n(O),_=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.change=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.inputSubmit=function(e){e.preventDefault(),t.props.addContact(Object(i.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.inputSubmit,className:v.a.form,children:[Object(a.jsxs)("div",{className:v.a.formBlock,children:[Object(a.jsxs)("label",{className:v.a.label,children:["Name",Object(a.jsx)("input",{className:v.a.inpt,type:"text",name:"name",value:e,onChange:this.change})]}),Object(a.jsxs)("label",{className:v.a.label,children:["Number",Object(a.jsx)("input",{className:v.a.inpt,type:"text",name:"number",value:n,onChange:this.change})]})]}),Object(a.jsx)("button",{className:v.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=n(12),g=n.n(x);function C(t){var e=t.value,n=t.changeFilter;return Object(a.jsxs)("div",{className:g.a.searchBlock,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}n(19);var y=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.contactAdd=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.name," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"));else if(0===e.name.length)alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f!!!");else{var n=Object(i.a)(Object(i.a)({},e),{},{id:Object(d.a)()});t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))}},t.onFilter=function(e){t.setState({filter:e})},t.getContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.delContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.getContacts(),e=this.state.filter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(_,{addContact:this.contactAdd}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:e,changeFilter:this.onFilter}),t.length>0&&Object(a.jsx)(h,{contacts:t,removeContact:this.delContacts})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(y,{}),document.querySelector("#root"))},9:function(t,e,n){t.exports={list:"contacts_list__2jKGf",item:"contacts_item__gdPq_",btn:"contacts_btn__1DJwz"}}},[[20,1,2]]]);
//# sourceMappingURL=main.cbeb814e.chunk.js.map