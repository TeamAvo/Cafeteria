(this.webpackJsonpcafeteria=this.webpackJsonpcafeteria||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setCategory",(function(){return N})),a.d(n,"setDate",(function(){return w})),a.d(n,"setDayOfWeek",(function(){return A})),a.d(n,"setDayOfMonth",(function(){return C})),a.d(n,"setCallingStatus",(function(){return _})),a.d(n,"setCommentVote",(function(){return T})),a.d(n,"getWeekMeal",(function(){return F})),a.d(n,"getVote",(function(){return I})),a.d(n,"postVote",(function(){return L})),a.d(n,"postComment",(function(){return S})),a.d(n,"deleteComment",(function(){return G})),a.d(n,"getComment",(function(){return P})),a.d(n,"getGoogleID",(function(){return W})),a.d(n,"googleLogout",(function(){return Y}));var r=a(0),o=a.n(r),l=a(25),c=a.n(l),s=(a(93),a(6)),u=a(7),i=a(9),m=a(8),p=a(13),d=a(10),h=a(14),f=a.n(h),b=a(24),g=a(22),E=a.n(g),v=a(16),O=a.n(v),y=function(){return O()().tz("America/New_York").format()},j=function(){var e=parseInt(O()().tz("America/New_York").hour());return e<11?0:e<17?1:2},k=function(e){switch(e){case 0:return"Breakfast";case 1:return"Lunch";case 2:return"Dinner"}},x="https://cors-anywhere.herokuapp.com/https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/",D="https://cryptic-reaches-78660.herokuapp.com/",N=function(e){return function(t){t({type:"SET_CATEGORY",payload:e})}},w=function(e){return function(t){t({type:"SET_DATE",payload:e})}},A=function(e){return function(t){t({type:"SET_DAY_OF_WEEK",payload:e})}},C=function(e){return function(t){t({type:"SET_DAY_OF_MONTH",payload:e})}},_=function(e){return function(t){t({type:"SET_API_CALLING_STATUS",payload:e})}},T=function(e){return function(t){t({type:"SET_UPVOTE",payload:e})}},F=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r,o,l,c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Calling API..."),_(!0),n=O()(e),r=n.format("YYYY/MM/DD"),t.prev=4,t.next=7,E.a.get(x+"breakfast/".concat(r));case 7:return o=t.sent,t.next=10,E.a.get(x+"lunch/".concat(r));case 10:return l=t.sent,t.next=13,E.a.get(x+"dinner/".concat(r));case 13:c=t.sent,s={isLoaded:!0,breakfast:o,lunch:l,dinner:c},console.log("API Request finished, date:".concat(n)),console.log(s),a({type:"GET_WEEK_MEAL",payload:s}),t.next=25;break;case 20:return t.prev=20,t.t0=t.catch(4),console.log(t.t0),alert("An error occurred while parsing data."),t.abrupt("return",null);case 25:_(!1);case 26:case"end":return t.stop()}}),t,null,[[4,20]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r,o,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Get Vote Info..."),n=O()(e).tz("America/New_York").startOf("day").format(),r=O()(e).add(1,"d").tz("America/New_York").startOf("day").format(),t.prev=3,o={date1:n,date2:r},console.log(o),t.next=8,E.a.get(D+"vote/",{params:o});case 8:l=t.sent,console.log(l),a({type:"GET_VOTE_INFO",payload:{isLoaded:!0,info:l}}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Post Vote Data to API Server..."),console.log(e),t.next=5,E.a.post(D+"vote/",e);case 5:return n=t.sent,console.log(n),t.t0=a,t.next=10,I(y());case 10:t.t1=t.sent,(0,t.t0)(t.t1),alert("Your vote has been successfully submitted!"),t.next=18;break;case 15:t.prev=15,t.t2=t.catch(0),alert("You already voted on this poll. You can only vote once for each meal.");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!=e){t.next=3;break}return t.abrupt("return");case 3:return console.log("Post Comment Data to API Server..."),console.log(e),t.next=7,E.a.post(D+"comment/",e);case 7:return n=t.sent,console.log(n),t.t0=a,t.next=12,P(y());case 12:t.t1=t.sent,(0,t.t0)(t.t1),alert("Your comment has been successfully submitted!"),t.next=20;break;case 17:t.prev=17,t.t2=t.catch(0),alert("You already submitted on this meal. You can only vote once for each meal.");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!=e){t.next=3;break}return t.abrupt("return");case 3:return console.log("Request delete comment from the database..."),console.log(e),t.next=7,E.a.post(D+"delete_comment/",e);case 7:return n=t.sent,console.log(n),t.t0=a,t.next=12,P(y());case 12:t.t1=t.sent,(0,t.t0)(t.t1),alert("Your comment has been successfully removed!"),t.next=20;break;case 17:t.prev=17,t.t2=t.catch(0),alert("Incorrect password");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r,o,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Request comment data from the database..."),n=O()(e).tz("America/New_York").startOf("day").format(),r=O()(e).add(1,"d").tz("America/New_York").endOf("day").format(),t.prev=3,o={date1:n,date2:r},t.next=7,E.a.get(D+"comment/",{params:o});case 7:l=t.sent,console.log(l),a({type:"GET_COMMENT_DATA",payload:{isLoaded:!0,data:l}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e?e.profileObj.email.endsWith("@avonoldfarms.com")?a({type:"GET_GOOGLE_INFO",payload:{isAOF:!0,data:e}}):alert("You are not an Avon student. To prevent duplicate vote, please login with your Avon Old Farms School's google account."):alert("Google Login Error");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(){return function(e){e({type:"GOOGLE_LOGOUT",payload:{isAOF:!1,data:null}})}},M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.category;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"category"},o.a.createElement("div",{className:"categoryitem ".concat(0===t?"enable":"disable"),onClick:function(){e.props.setCategory(0)}},"Meal"),o.a.createElement("div",{className:"categoryitem ".concat(1===t?"enable":"disable"),onClick:function(){e.props.setCategory(1)}},"Vote"),o.a.createElement("div",{className:"categoryitem ".concat(2===t?"enable":"disable"),onClick:function(){e.props.setCategory(2)}},"Community"),o.a.createElement("div",{className:"categoryitem ".concat(3===t?"enable":"disable"),onClick:function(){e.props.setCategory(3)}},"Information")))}}]),a}(o.a.Component),V=Object(d.c)(Object(p.b)((function(e){return{category:e.status.category}}),n))(M),U=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.day;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"day ".concat(t===this.props.index?"color".concat(this.props.index+1):"disable"),onClick:function(){e.props.setDayOfWeek(e.props.index)}},this.props.text))}}]),a}(o.a.Component),z=Object(d.c)(Object(p.b)((function(e){return{day:e.status.dayOfWeek}}),n))(U),H=a(81),R=a.n(H),q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"loading"},o.a.createElement(R.a,{type:"bars",width:"100%",height:"auto"})),o.a.createElement("h4",{className:"center"},"Loading \ud83d\ude0e")))}}]),a}(o.a.Component),B=a(82),J=a.n(B),K=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data,t=[];if(e.length>0)for(var a=0;a<e.length;a++){if(null!=e[a].food)null==e[a].food.image_url?J.a:e[a].food.image_url,t.push(o.a.createElement("div",{key:a,className:"item"},o.a.createElement("p",{className:"name"},e[a].food.name),o.a.createElement("p",{className:"description"},e[a].food.description)))}else t=o.a.createElement("div",{className:"item"},o.a.createElement("h3",{className:"center"},"There is currently nothing on the menu today."));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"itemcontainer ".concat(this.props.color)},o.a.createElement("div",{className:"title"},this.props.title),o.a.createElement("div",null,t)))}}]),a}(o.a.Component),Q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.mealWeek;if(!this.props.status.callingAPI&&e.isLoaded){var t=e.breakfast.data.days[this.props.dayOfWeek],a=e.lunch.data.days[this.props.dayOfWeek],n=e.dinner.data.days[this.props.dayOfWeek];return o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"meal"},o.a.createElement(K,{data:t.menu_items,title:"Breakfast",color:"color1"}),o.a.createElement(K,{data:a.menu_items,title:"Lunch",color:"color2"}),o.a.createElement(K,{data:n.menu_items,title:"Dinner",color:"color3"})))}return o.a.createElement(q,null)}}]),a}(o.a.Component),X=Object(d.c)(Object(p.b)((function(e){return{status:e.status,dayOfWeek:e.status.dayOfWeek,mealWeek:e.mealWeek}}),n))(Q),Z=a(83),$=a.n(Z),ee=(a(118),function(e){var t=e.value,a=e.onClick;return o.a.createElement("div",{className:"datepicker color6",onClick:a},"Select Period ",o.a.createElement("br",null),t)}),te=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){null!=t&&(e.props.setDate(t),e.props.setDayOfWeek(t.getDay()),e.props.status.callingAPI||e.props.getWeekMeal(t))},e}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"datebox"},o.a.createElement($.a,{selected:new Date(O()(this.props.status.date).format("YYYY-MM-DD")),onChange:this.handleChange,customInput:o.a.createElement(ee,null)})),o.a.createElement("div",{className:"weeklybox"},o.a.createElement(z,{text:"Sun",index:0}),o.a.createElement(z,{text:"Mon",index:1}),o.a.createElement(z,{text:"Tue",index:2}),o.a.createElement(z,{text:"Wed",index:3}),o.a.createElement(z,{text:"Thu",index:4}),o.a.createElement(z,{text:"Fri",index:5}),o.a.createElement(z,{text:"Sat",index:6})),o.a.createElement(X,null))}}]),a}(o.a.Component),ae=Object(d.c)(Object(p.b)((function(e){return{status:e.status}}),n))(te),ne=a(42),re=a.n(ne),oe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data,t=k(e.meal);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"voteinfo color5"},o.a.createElement("h3",null,new Date(e.date).toDateString(),", ",t,o.a.createElement(re.a,{value:e.rate/e.total,count:5,size:50,isHalf:!0,emptyIcon:o.a.createElement("i",{className:"far fa-star color1"}),halfIcon:o.a.createElement("i",{className:"fa fa-star-half-alt color1"}),fullIcon:o.a.createElement("i",{className:"fa fa-star color1"}),activeColor:"#fff",color:"#303030",classNames:"no-click"}),o.a.createElement("h4",null,"Rate: ",(e.rate/e.total).toFixed(2)," (Total: ",e.total,")"))))}}]),a}(o.a.Component),le=a(33),ce=2.5,se=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"sendVote",value:function(){return{date:y(),meal:j(),email:this.props.gData.data.profileObj.email,rate:ce}}},{key:"render",value:function(){var e,t,a=this;if(this.props.status.voteInfo.isLoaded){e=[];for(var n=this.props.status.voteInfo.info.data,r=0;r<n.length;r++)console.log(n[r]),e.push(o.a.createElement(oe,{data:n[r],key:r}))}else e=o.a.createElement(q,null),this.props.getVote(y());var l=k(j());t=this.props.gData.isAOF?o.a.createElement("h2",null,"Hi, ",this.props.gData.data.profileObj.name,"! How was ",l," at Avon today?"):o.a.createElement("h3",null,"It seems like you are not logged in with AOF Google account.",o.a.createElement("br",null),"Please login with the AOF account to vote for your meal today.",o.a.createElement("br",null),"test");var c=o.a.createElement(le.GoogleLogin,{clientId:this.props.gData.id,buttonText:this.props.gData.text,onSuccess:this.props.getGoogleID,onFailure:this.props.getGoogleID,cookiePolicy:this.props.gData.cookiePolicy,isSignedIn:!0,theme:"dark",uxMode:"redirect"}),s=o.a.createElement(le.GoogleLogout,{clientId:this.props.gData.id,buttonText:"Logout",theme:"dark",onLogoutSuccess:this.props.googleLogout}),u=o.a.createElement(o.a.Fragment,null,o.a.createElement(re.a,{value:2.5,count:5,onChange:function(e){ce=e},size:50,isHalf:!0,emptyIcon:o.a.createElement("i",{className:"far fa-star color1"}),halfIcon:o.a.createElement("i",{className:"fa fa-star-half-alt color1"}),fullIcon:o.a.createElement("i",{className:"fa fa-star color1"}),color:"#303030",activeColor:"#fff"}),o.a.createElement("div",{className:"categoryitem enable",onClick:function(){a.props.postVote(a.sendVote())}},"Submit"));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"textbox"},o.a.createElement("div",{className:"subtitle"},"Vote"),o.a.createElement("h1",null,"How was the meal today?"),t,this.props.gData.isAOF?s:c,this.props.gData.isAOF?u:"",o.a.createElement("div",{className:"categoryitem enable",onClick:function(){a.props.getVote(y())}},"Reload Vote"),o.a.createElement("h1",null,o.a.createElement("br",null),"Today's vote result \ud83d\uddf3\ufe0f",o.a.createElement("div",null,e))))}}]),a}(o.a.Component),ue=Object(d.c)(Object(p.b)((function(e){return{status:e.status,mealWeek:e.mealWeek,gData:e.googleData}}),n))(se),ie=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"textbox"},o.a.createElement("div",{className:"subtitle"},"Information"),o.a.createElement("br",null),o.a.createElement("div",{className:"textarea"},o.a.createElement("div",null,o.a.createElement("h1",null," \u25cf About Avon Food"),o.a.createElement("h2",null,"Avon Food provides more than just meal information."),o.a.createElement("h3",null,"With Avon Food, you can share your thoughts. You can vote for the quality of the meals, you can share your thoughts with other students, and you can give feedback to school faculties."),o.a.createElement("h3",null,"Join "," ",o.a.createElement("a",{href:"https://discord.gg/t2hjWXg",target:"_top"},"Team Avo Community Server (Discord)"))),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("h1",null," \u25cf Update Log"),o.a.createElement("h3",null," \u25cb 9/14/2020 Update"),o.a.createElement("h4",null," Disable community section."),o.a.createElement("h3",null," \u25cb 9/9/2020 Update"),o.a.createElement("h4",null," Security update."),o.a.createElement("h3",null," \u25cb 9/6/2020 Update"),o.a.createElement("h4",null," Bug fixed."),o.a.createElement("h3",null," \u25cb 9/3/2020 Update"),o.a.createElement("h4",null," Now you can use vote and community functions!"),o.a.createElement("h3",null," \u25cb 9/1/2020 Update"),o.a.createElement("h4",null," Initial upload on Google Play Store.")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("h1",null," \u25cf Privacy"),o.a.createElement("h2",null,"Privacy Policy for TeamAvo"),o.a.createElement("h3",null,"One of our main priorities is the privacy of our visitors. You can read more about how we handle the user inforamtion at"," ",o.a.createElement("a",{href:"https://teamavo.github.io/PrivacyPolicy.html",target:"_blank"},"here.")),o.a.createElement("h3",null,"Although we use"," ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/MD5",target:"_top"},"MD5")," ","encryption while communicate with the server, please do not use your common password. For your security, we highly recommend you to use a different password for comment section.")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("h1",null," \u25cf Support"),o.a.createElement("h2",null,"Need help?"),o.a.createElement("h3",null,"Ask help to our Team Avo members or join our discord server!"),o.a.createElement("h3",null,o.a.createElement("ul",null,o.a.createElement("li",null,"HyunJun Park:",o.a.createElement("a",{href:"mailto:parkh@avonoldfarms.com",target:"_top"},"parkh@avonoldfarms.com")),o.a.createElement("li",null,"Spencer Li:",o.a.createElement("a",{href:"mailto:lis@avonoldfarms.com",target:"_top"},"parkh@avonoldfarms.com")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://discord.gg/vdpQ2ar"},"Team Avo Support Server (Discord)"))))),o.a.createElement("h5",null,"Last update at 9/14/2020"),o.a.createElement("h5",null,"Application Version: v1.0.5"))))}}]),a}(o.a.Component),me=a(29),pe=a(28),de=null,he=null,fe=null,be=a(77),ge=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"sendComment",value:function(){return null==de||null==he||null==fe||null==this.props.status.commentUpVote?(alert("One of the fields does not meet the requirements."),null):{date:y(),name:this.props.gData.data.profileObj.name,email:this.props.gData.data.profileObj.email,pw:be(he),meal:j(),menu:de,like:this.props.status.commentUpVote,comment:fe}}},{key:"render",value:function(){var e=this,t=this.props.status.commentUpVote,a=o.a.createElement(pe.a,{icon:me.b,size:"2x",onClick:function(){e.props.setCommentVote(!0)},color:null==t?"#f650a0":t?"#64e8de":"#505050"}),n=o.a.createElement(pe.a,{icon:me.a,size:"2x",onClick:function(){e.props.setCommentVote(!1)},color:null==t?"#f650a0":t?"#505050":"#64e8de"});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"postbox"},o.a.createElement("div",{className:"userinfo color8"},this.props.gData.data.profileObj.name," (",this.props.gData.data.profileObj.email,")"),o.a.createElement("form",{className:"textbox"},o.a.createElement("h4",null,"Like / Dislike: ",a," ",n),o.a.createElement("h4",null,"Menu:",o.a.createElement("input",{type:"text",className:"textarea menu",minLength:"3",maxLength:"35",placeholder:"Today's Menu",onChange:function(e){de=e.target.value}})),o.a.createElement("h4",null,"Comment:"),o.a.createElement("textarea",{className:"textarea",minLength:"10",maxLength:"500",placeholder:"Share your thoughts with friends and give feedback to faculties!",onChange:function(e){fe=e.target.value}}),o.a.createElement("h5",{className:"center"},"Minimum of 10 characters up to 500 characters allowed.",o.a.createElement("br",null),"Please respect others, inappropriate comments can be removed."),o.a.createElement("div",{className:"statusbox"},o.a.createElement("input",{className:"pw",type:"password",placeholder:"Password",minLength:"3",onChange:function(e){he=e.target.value}}),o.a.createElement("button",{type:"button",className:"submit color6",onClick:function(){}},"Submit")))))}}]),a}(o.a.Component),Ee=Object(d.c)(Object(p.b)((function(e){return{status:e.status,gData:e.googleData}}),n))(ge),ve=a(86),Oe=a.n(ve),ye=null,je=a(77),ke=new Oe.a,xe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"deleteComment",value:function(){if(!this.props.gData.isAOF&&null!=this.props.gData.data)return alert("To delete the comment, you should log in first."),null;if(null==ye)return alert("Please enter the password"),null;var e=je(ye);return{id:this.props.data._id,email:this.props.gData.data.profileObj.email,pw:e}}},{key:"render",value:function(){var e=o.a.createElement(pe.a,{icon:me.b}),t=o.a.createElement(pe.a,{icon:me.a}),a=o.a.createElement(pe.a,{icon:me.c,className:"ico"});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"commentbox"},o.a.createElement("div",{className:"userinfo color8"},this.props.data.name," (",this.props.data.email,")"),o.a.createElement("div",{className:"textbox"},o.a.createElement("h4",null,ke.clean(this.props.data.comment))),o.a.createElement("div",{className:"statusbox"},o.a.createElement("div",{className:"timebox color5"},"".concat(this.props.data.date.split("T")[0],", ").concat(k(this.props.data.meal),", ").concat(this.props.data.menu," "),this.props.data.like?e:t),o.a.createElement("div",{className:"sectionbox color6"},a,o.a.createElement("input",{className:"pw",type:"password",placeholder:"Password",onChange:function(e){ye=e.target.value}}),o.a.createElement("div",{className:"deletebtn",onClick:function(){}},"Delete")))))}}]),a}(o.a.Component),De=Object(d.c)(Object(p.b)((function(e){return{status:e.status,gData:e.googleData}}),n))(xe),Ne=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e,t;if(this.props.status.commentData.isLoaded){e=[];for(var a=this.props.status.commentData.data.data,n=0;n<a.length;n++)console.log(a[n]),e.push(o.a.createElement(De,{data:a[n],key:n}))}else e=o.a.createElement(q,null),this.props.getComment("2020-09-13T00:00:00-04:00");t=this.props.gData.isAOF?o.a.createElement("h2",null,"Hi, ",this.props.gData.data.profileObj.name,"! Please share your thoughts with us!"):o.a.createElement("h3",null,"Share your thoughts with other students and faculties!",o.a.createElement("br",null),"You can use this function to give back them feedback.",o.a.createElement("br",null)," ",o.a.createElement("br",null),"It seems like you are not logged in with AOF Google account.",o.a.createElement("br",null),"Please login with the AOF account to leave your comment.");var r=o.a.createElement(le.GoogleLogin,{clientId:this.props.gData.id,buttonText:this.props.gData.text,onSuccess:this.props.getGoogleID,onFailure:this.props.getGoogleID,cookiePolicy:this.props.gData.cookiePolicy,isSignedIn:!0,theme:"dark",uxMode:"redirect"}),l=o.a.createElement(le.GoogleLogout,{clientId:this.props.gData.id,buttonText:"Logout",theme:"dark",onLogoutSuccess:this.props.googleLogout});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"textbox"},o.a.createElement("div",{className:"subtitle"},"Community (Preview) "),o.a.createElement("h3",null,"The community section is currently disabled, and this is a preview page."),t,this.props.gData.isAOF?l:r,o.a.createElement("div",{className:"categoryitem enable",onClick:function(){}},"Reload"),o.a.createElement("br",null),o.a.createElement("div",{className:"comment"},this.props.gData.isAOF?o.a.createElement(Ee,null):"",e)))}}]),a}(o.a.Component),we=Object(d.c)(Object(p.b)((function(e){return{status:e.status,mealWeek:e.mealWeek,gData:e.googleData}}),n))(Ne),Ae=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.status.category;return this.props.status.callingAPI||this.props.mealWeek.isLoaded||this.props.getWeekMeal(y()),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"title"},"Avon Food")),o.a.createElement(V,null),o.a.createElement("div",null,0===e?o.a.createElement(ae,null):"",1===e?o.a.createElement(ue,null):"",2===e?o.a.createElement(we,null):"",3===e?o.a.createElement(ie,null):""))}}]),a}(o.a.Component),Ce=Object(d.c)(Object(p.b)((function(e){return{status:e.status,mealWeek:e.mealWeek}}),n))(Ae),_e=a(87),Te=a(4),Fe=O()().tz("America/New_York"),Ie={status:{category:0,date:Fe,dayOfWeek:Fe.day(),callingAPI:!1,commentUpVote:null,voteInfo:{isLoaded:!1,info:null},commentData:{isLoaded:!1,data:null}},mealWeek:{isLoaded:!1,breakfast:"",lunch:"",dinner:""},googleData:{id:"340618285609-r6colaj22eh4tn822j4723t8bolhsobb.apps.googleusercontent.com",text:"Sign in with Google",cookiePolicy:"none",isAOF:!1,data:null}};c.a.render(o.a.createElement(p.a,{store:Object(d.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{category:t.payload})});case"SET_DATE":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{date:t.payload})});case"SET_DAY_OF_WEEK":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{dayOfWeek:t.payload})});case"SET_DAY_OF_MONTH":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{dayOfMonth:t.payload})});case"SET_API_CALLING_STATUS":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{callingAPI:t.payload})});case"SET_UPVOTE":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{commentUpVote:t.payload})});case"GET_WEEK_MEAL":return Object(Te.a)(Object(Te.a)({},e),{},{mealWeek:t.payload});case"GET_GOOGLE_INFO":return Object(Te.a)(Object(Te.a)({},e),{},{googleData:Object(Te.a)(Object(Te.a)({},e.googleData),{},{isAOF:t.payload.isAOF,data:t.payload.data})});case"GET_VOTE_INFO":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{voteInfo:t.payload})});case"GET_COMMENT_DATA":return Object(Te.a)(Object(Te.a)({},e),{},{status:Object(Te.a)(Object(Te.a)({},e.status),{},{commentData:t.payload})});case"GOOGLE_LOGOUT":return Object(Te.a)(Object(Te.a)({},e),{},{googleData:Object(Te.a)(Object(Te.a)({},e.googleData),{},{isAOF:t.payload.isAOF,data:t.payload.data})});default:return e}}),Object(d.a)(_e.a))},o.a.createElement(Ce,null)),document.getElementById("root"))},82:function(e,t,a){e.exports=a.p+"static/media/LOGO.ca403d7c.png"},88:function(e,t,a){e.exports=a(197)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.9ae55c9c.chunk.js.map