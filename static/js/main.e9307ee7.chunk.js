(this.webpackJsonpcafeteria=this.webpackJsonpcafeteria||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setCategory",(function(){return j})),a.d(n,"setDate",(function(){return g})),a.d(n,"setDayOfWeek",(function(){return v})),a.d(n,"setDayOfMonth",(function(){return k})),a.d(n,"setCallingStatus",(function(){return _})),a.d(n,"getWeekMeal",(function(){return W}));var r=a(1),c=a.n(r),s=a(19),o=a.n(s),l=(a(79),a(8)),i=a(9),u=a(11),d=a(10),p=a(13),m=a(7),f=a(49),b=a.n(f),O=a(69),y=a(37),h=a.n(y),E="https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/",j=function(e){return function(t){t({type:"SET_CATEGORY",payload:e})}},g=function(e){return function(t){t({type:"SET_DATE",payload:e})}},v=function(e){return function(t){t({type:"SET_DAY_OF_WEEK",payload:e})}},k=function(e){return function(t){t({type:"SET_DAY_OF_MONTH",payload:e})}},_=function(e){return function(t){t({type:"SET_API_CALLING_STATUS",payload:e})}},W=function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var n,r,c,s,o,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Calling API..."),_(!0),n=new Date(e),r=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate(),t.prev=4,t.next=7,h.a.get(E+"breakfast/".concat(r));case 7:return c=t.sent,t.next=10,h.a.get(E+"lunch/".concat(r));case 10:return s=t.sent,t.next=13,h.a.get(E+"dinner/".concat(r));case 13:o=t.sent,l={isLoaded:!0,breakfast:c,lunch:s,dinner:o},console.log("API Request finished, date:".concat(n)),console.log(l),a({type:"GET_WEEK_MEAL",payload:l}),t.next=25;break;case 20:return t.prev=20,t.t0=t.catch(4),console.log(t.t0),alert("An error occurred while parsing data."),t.abrupt("return",null);case 25:_(!1);case 26:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.category;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"category"},c.a.createElement("div",{className:"categoryitem ".concat(0===t?"enable":"disable"),onClick:function(){e.props.setCategory(0)}},"Meal"),c.a.createElement("div",{className:"categoryitem ".concat(1===t?"enable":"disable"),onClick:function(){e.props.setCategory(1)}},"Vote"),c.a.createElement("div",{className:"categoryitem ".concat(2===t?"enable":"disable"),onClick:function(){e.props.setCategory(2)}},"Information")))}}]),a}(c.a.Component),A=Object(m.c)(Object(p.b)((function(e){return{category:e.status.category}}),n))(x),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.day;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"day ".concat(t===this.props.index?"color".concat(this.props.index+1):"disable"),onClick:function(){e.props.setDayOfWeek(e.props.index)}},this.props.text))}}]),a}(c.a.Component),T=Object(m.c)(Object(p.b)((function(e){return{day:e.status.dayOfWeek}}),n))(C),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"weeklybox"},c.a.createElement(T,{text:"Sun",index:0}),c.a.createElement(T,{text:"Mon",index:1}),c.a.createElement(T,{text:"Tue",index:2}),c.a.createElement(T,{text:"Wed",index:3}),c.a.createElement(T,{text:"Thu",index:4}),c.a.createElement(T,{text:"Fri",index:5}),c.a.createElement(T,{text:"Sat",index:6})))}}]),a}(c.a.Component),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){for(var e=this.props.data,t=[],a=0;a<e.length;a++){var n;if(null!=e[a].food)n=null==e[a].food.image_url?'https://source.unsplash.com/300x300/?food,"'.concat(e[a].food.name.replace(/\s/gi,"_"),'"'):e[a].food.image_url,t.push(c.a.createElement("div",{key:a,className:"item"},c.a.createElement("a",{target:"_blank",href:n},c.a.createElement("img",{src:n,className:"img",alt:e[a].food.name})),c.a.createElement("p",{className:"name"},e[a].food.name),c.a.createElement("p",{className:"description"},e[a].food.description)))}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"itemcontainer ".concat(this.props.color)},c.a.createElement("div",{className:"title"},this.props.title),c.a.createElement("div",null,t)))}}]),a}(c.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data;if(!this.props.status.callingAPI&&e.isLoaded){var t=e.breakfast.data.days[this.props.dayOfWeek],a=e.lunch.data.days[this.props.dayOfWeek],n=e.dinner.data.days[this.props.dayOfWeek];return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"meal"},c.a.createElement(D,{data:t.menu_items,title:"Breakfast",color:"color1"}),c.a.createElement(D,{data:a.menu_items,title:"Lunch",color:"color2"}),c.a.createElement(D,{data:n.menu_items,title:"Dinner",color:"color3"})))}return c.a.createElement(c.a.Fragment,null,"loading data...")}}]),a}(c.a.Component),F=Object(m.c)(Object(p.b)((function(e){return{status:e.status,dayOfWeek:e.status.dayOfWeek}}),n))(S),I=a(70),M=a.n(I),w=(a(102),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){null!=t&&(e.props.setDate(t),e.props.setDayOfWeek(t.getDay()),e.props.status.callingAPI||e.props.getWeekMeal(t))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.status.category,t=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"datebox color6"},"Select Period",c.a.createElement(M.a,{className:"datepicker",selected:this.props.status.date,onChange:this.handleChange})),c.a.createElement(N,null),c.a.createElement(F,{data:this.props.mealWeek,day:this.props.status.dayOfWeek}));return c.a.createElement(c.a.Fragment,null,0===e?t:"")}}]),a}(c.a.Component)),L=Object(m.c)(Object(p.b)((function(e){return{status:e.status,mealWeek:e.mealWeek}}),n))(w),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.status.callingAPI||this.props.mealWeek.isLoaded||this.props.getWeekMeal("2020/03/01"),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{className:"title"},"Avo Food")),c.a.createElement(A,null),c.a.createElement(L,null))}}]),a}(c.a.Component),Y=Object(m.c)(Object(p.b)((function(e){return{status:e.status,mealWeek:e.mealWeek}}),n))(P),G=a(73),K=a(4),R=new Date,B={status:{category:0,date:R,dayOfWeek:R.getDay(),callingAPI:!1},mealWeek:{isLoaded:!1,breakfast:"",lunch:"",dinner:""}};o.a.render(c.a.createElement(p.a,{store:Object(m.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return Object(K.a)(Object(K.a)({},e),{},{status:Object(K.a)(Object(K.a)({},e.status),{},{category:t.payload})});case"SET_DATE":return Object(K.a)(Object(K.a)({},e),{},{status:Object(K.a)(Object(K.a)({},e.status),{},{date:t.payload})});case"SET_DAY_OF_WEEK":return Object(K.a)(Object(K.a)({},e),{},{status:Object(K.a)(Object(K.a)({},e.status),{},{dayOfWeek:t.payload})});case"SET_DAY_OF_MONTH":return Object(K.a)(Object(K.a)({},e),{},{status:Object(K.a)(Object(K.a)({},e.status),{},{dayOfMonth:t.payload})});case"SET_API_CALLING_STATUS":return Object(K.a)(Object(K.a)({},e),{},{status:Object(K.a)(Object(K.a)({},e.status),{},{callingAPI:t.payload})});case"GET_WEEK_MEAL":return Object(K.a)(Object(K.a)({},e),{},{mealWeek:t.payload});default:return e}}),Object(m.a)(G.a))},c.a.createElement(Y,null)),document.getElementById("root"))},74:function(e,t,a){e.exports=a(163)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.e9307ee7.chunk.js.map