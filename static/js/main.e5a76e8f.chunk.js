(this.webpackJsonpcafeteria=this.webpackJsonpcafeteria||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setCategory",(function(){return j})),a.d(n,"setDate",(function(){return v})),a.d(n,"setDayOfWeek",(function(){return k})),a.d(n,"setDayOfMonth",(function(){return _})),a.d(n,"setCallingStatus",(function(){return T})),a.d(n,"getWeekMeal",(function(){return x})),a.d(n,"setVote",(function(){return A})),a.d(n,"getVote",(function(){return D})),a.d(n,"postVote",(function(){return F})),a.d(n,"getGoogleID",(function(){return I}));var r=a(0),o=a.n(r),c=a(22),s=a.n(c),l=(a(84),a(9)),u=a(10),i=a(12),p=a(11),d=a(13),m=a(8),f=a(20),O=a.n(f),b=a(33),h=a(28),g=a.n(h),E="https://cors-anywhere.herokuapp.com/https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/",y="https://cryptic-reaches-78660.herokuapp.com/",j=function(e){return function(t){t({type:"SET_CATEGORY",payload:e})}},v=function(e){return function(t){t({type:"SET_DATE",payload:e})}},k=function(e){return function(t){t({type:"SET_DAY_OF_WEEK",payload:e})}},_=function(e){return function(t){t({type:"SET_DAY_OF_MONTH",payload:e})}},T=function(e){return function(t){t({type:"SET_API_CALLING_STATUS",payload:e})}},x=function(e){return function(){var t=Object(b.a)(O.a.mark((function t(a){var n,r,o,c,s,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Calling API..."),T(!0),n=new Date(e),r=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate(),t.prev=4,t.next=7,g.a.get(E+"breakfast/".concat(r));case 7:return o=t.sent,t.next=10,g.a.get(E+"lunch/".concat(r));case 10:return c=t.sent,t.next=13,g.a.get(E+"dinner/".concat(r));case 13:s=t.sent,l={isLoaded:!0,breakfast:o,lunch:c,dinner:s},console.log("API Request finished, date:".concat(n)),console.log(l),a({type:"GET_WEEK_MEAL",payload:l}),t.next=25;break;case 20:return t.prev=20,t.t0=t.catch(4),console.log(t.t0),alert("An error occurred while parsing data."),t.abrupt("return",null);case 25:T(!1);case 26:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(t){t({type:"SET_VOTE_INFO",payload:e})}},D=function(e){return function(){var t=Object(b.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Get Vote Info..."),t.next=3,g.a.get(y,{params:e});case 3:n=t.sent,console.log(n),a({type:"GET_VOTE_INFO",payload:{isLoaded:!0,info:n}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return Object(b.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Post Vote Data to API Server..."),console.log(e),t.next=4,g.a.post(y,e);case 4:a=t.sent,console.log(a);case 6:case"end":return t.stop()}}),t)})))},I=function(e){return function(){var t=Object(b.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e?e.profileObj.email.endsWith("@avonoldfarms.com")?a({type:"GET_GOOGLE_INFO",payload:{isAOF:!0,data:e}}):alert("You are not an Avon student. To prevent duplicate vote, please login with your Avon Old Farms School's google account."):alert("Google Login Error");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.category;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"category"},o.a.createElement("div",{className:"categoryitem ".concat(0===t?"enable":"disable"),onClick:function(){e.props.setCategory(0)}},"Meal"),o.a.createElement("div",{className:"categoryitem ".concat(1===t?"enable":"disable"),onClick:function(){e.props.setCategory(1)}},"Vote"),o.a.createElement("div",{className:"categoryitem ".concat(2===t?"enable":"disable"),onClick:function(){e.props.setCategory(2)}},"Information")))}}]),a}(o.a.Component),N=Object(m.c)(Object(d.b)((function(e){return{category:e.status.category}}),n))(W),w=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.day;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"day ".concat(t===this.props.index?"color".concat(this.props.index+1):"disable"),onClick:function(){e.props.setDayOfWeek(e.props.index)}},this.props.text))}}]),a}(o.a.Component),C=Object(m.c)(Object(d.b)((function(e){return{day:e.status.dayOfWeek}}),n))(w),S=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){for(var e=this.props.data,t=[],a=0;a<e.length;a++){var n;if(null!=e[a].food)n=null==e[a].food.image_url?"https://source.unsplash.com/300x300/?".concat(e[a].food.name):e[a].food.image_url,t.push(o.a.createElement("div",{key:a,className:"item"},o.a.createElement("div",{className:"img"},o.a.createElement("a",{target:"_blank",href:n},o.a.createElement("img",{src:n,alt:e[a].food.name}))),o.a.createElement("p",{className:"name"},e[a].food.name),o.a.createElement("p",{className:"description"},e[a].food.description)))}return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"itemcontainer ".concat(this.props.color)},o.a.createElement("div",{className:"title"},this.props.title),o.a.createElement("div",null,t)))}}]),a}(o.a.Component),G=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.mealWeek;if(!this.props.status.callingAPI&&e.isLoaded){var t=e.breakfast.data.days[this.props.dayOfWeek],a=e.lunch.data.days[this.props.dayOfWeek],n=e.dinner.data.days[this.props.dayOfWeek];return o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"meal"},o.a.createElement(S,{data:t.menu_items,title:"Breakfast",color:"color1"}),o.a.createElement(S,{data:a.menu_items,title:"Lunch",color:"color2"}),o.a.createElement(S,{data:n.menu_items,title:"Dinner",color:"color3"})))}return o.a.createElement(o.a.Fragment,null,"loading data...")}}]),a}(o.a.Component),L=Object(m.c)(Object(d.b)((function(e){return{status:e.status,dayOfWeek:e.status.dayOfWeek,mealWeek:e.mealWeek}}),n))(G),V=a(74),M=a.n(V),P=(a(106),function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){null!=t&&(e.props.setDate(t),e.props.setDayOfWeek(t.getDay()),e.props.status.callingAPI||e.props.getWeekMeal(t))},e}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"datebox color6"},"Select Period",o.a.createElement(M.a,{className:"datepicker",selected:this.props.status.date,onChange:this.handleChange})),o.a.createElement("div",{className:"weeklybox"},o.a.createElement(C,{text:"Sun",index:0}),o.a.createElement(C,{text:"Mon",index:1}),o.a.createElement(C,{text:"Tue",index:2}),o.a.createElement(C,{text:"Wed",index:3}),o.a.createElement(C,{text:"Thu",index:4}),o.a.createElement(C,{text:"Fri",index:5}),o.a.createElement(C,{text:"Sat",index:6})),o.a.createElement(L,null))}}]),a}(o.a.Component)),Y=Object(m.c)(Object(d.b)((function(e){return{status:e.status}}),n))(P),H=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data.time,t="".concat(e.year,"/").concat(e.month,"/").concat(e.day);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"voteinfo color5"},o.a.createElement("h3",null,"Date: ",t,o.a.createElement("br",null),"Meal: ",e.meal,o.a.createElement("br",null),"Vote: ",this.props.data.vote)))}}]),a}(o.a.Component),K=a(77),q=a(55),R=a(53),U=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"req",value:function(){var e=new Date(this.props.status.dateEST);return{y1:e.getFullYear(),y2:e.getFullYear(),m1:e.getMonth()-1,m2:e.getMonth()-1,d1:0,d2:30}}},{key:"sendVote",value:function(e){var t,a=new Date(this.props.status.dateEST);return a.getHours()<5?t=2:a.getHours()<11?t=0:a.getHours()<16&&(t=1),{time:{year:a.getFullYear(),month:a.getMonth()-1,day:a.getDate()-1,meal:t},email:this.props.gData.data.profileObj.email,vote:e}}},{key:"render",value:function(){var e,t=this,a=[];if(this.props.status.voteInfo.isLoaded)for(var n=this.props.status.voteInfo.info.data,r=0;r<n.length;r++)console.log(n[r]),a.push(o.a.createElement(H,{data:n[r],key:r}));else this.props.getVote(this.req());e=this.props.gData.isAOF?o.a.createElement("h2",null,"Hi, ",this.props.gData.data.profileObj.name,"! How was food at Avon today?"):o.a.createElement("h3",null,"It seems like you are not logged in with AOF Google account.",o.a.createElement("br",null),"Please login with the AOF account to vote for your meal today.");var c=o.a.createElement(K.GoogleLogin,{clientId:"340618285609-r6colaj22eh4tn822j4723t8bolhsobb.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.props.getGoogleID,onFailure:this.props.getGoogleID,cookiePolicy:"single_host_origin"}),s=o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{icon:q.b,size:"2x",onClick:function(){t.props.postVote(t.sendVote(!0)),t.props.setVote(!1)}}),o.a.createElement(R.a,{icon:q.a,size:"2x",onClick:function(){t.props.postVote(t.sendVote(!1)),t.props.setVote(!1)}}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"textbox"},o.a.createElement("h1",null,"How was the meal today?"),e,this.props.gData.isAOF?s:c,o.a.createElement("h1",null,o.a.createElement("br",null),"Vote result of this month",o.a.createElement("div",null,a))))}}]),a}(o.a.Component),z=Object(m.c)(Object(d.b)((function(e){return{status:e.status,mealWeek:e.mealWeek,gData:e.googleData}}),n))(U),B=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Info"))}}]),a}(o.a.Component),J=Object(m.c)(Object(d.b)((function(e){return{status:e.status,mealWeek:e.mealWeek}}),n))(B),Z=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.status.category;return this.props.status.callingAPI||this.props.mealWeek.isLoaded||this.props.getWeekMeal("2020/03/01"),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"title"},"Avo Food")),o.a.createElement(N,null),o.a.createElement("div",null,0===e?o.a.createElement(Y,null):"",1===e?o.a.createElement(z,null):"",2===e?o.a.createElement(J,null):""))}}]),a}(o.a.Component),Q=Object(m.c)(Object(d.b)((function(e){return{status:e.status,mealWeek:e.mealWeek}}),n))(Z),X=a(78),$=a(4),ee=new Date,te={status:{category:0,date:ee,dateEST:(new Date).toLocaleString("en-US",{timeZone:"America/New_York"}),dayOfWeek:ee.getDay(),callingAPI:!1,voteInfo:{isLoaded:!1,info:null}},mealWeek:{isLoaded:!1,breakfast:"",lunch:"",dinner:""},googleData:{isAOF:!1,data:null}};s.a.render(o.a.createElement(d.a,{store:Object(m.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{category:t.payload})});case"SET_DATE":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{date:t.payload})});case"SET_DAY_OF_WEEK":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{dayOfWeek:t.payload})});case"SET_DAY_OF_MONTH":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{dayOfMonth:t.payload})});case"SET_API_CALLING_STATUS":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{callingAPI:t.payload})});case"GET_WEEK_MEAL":return Object($.a)(Object($.a)({},e),{},{mealWeek:t.payload});case"GET_GOOGLE_INFO":return Object($.a)(Object($.a)({},e),{},{googleData:t.payload});case"SET_VOTE_INFO":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{voteInfo:Object($.a)(Object($.a)({},e.status.voteInfo),{},{isLoaded:t.payload})})});case"GET_VOTE_INFO":return Object($.a)(Object($.a)({},e),{},{status:Object($.a)(Object($.a)({},e.status),{},{voteInfo:t.payload})});default:return e}}),Object(m.a)(X.a))},o.a.createElement(Q,null)),document.getElementById("root"))},79:function(e,t,a){e.exports=a(169)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.e5a76e8f.chunk.js.map