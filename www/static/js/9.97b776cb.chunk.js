(this.webpackJsonpengaze=this.webpackJsonpengaze||[]).push([[9],{316:function(e,a,t){e.exports=t.p+"static/media/user.7a21cbe9.svg"},318:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r={socialMedia:"Please add atleast one social media",name:"Name is required",email:"Email is required",cardName:"Card Name is required",category:"Card Category is required",required:"is required",invalidEmail:"Please enter a valid email",notMatch:"Password and Confirm Password not match",passwordFormat:"At least 6 characters with at least 1 Small & Upper case character, a number & symbol",firstName:"First name is required",lastName:"Last name is required",mobile:"Mobile number is required",isMobileInvalid:"Mobile number contain 10 digits",dateOfBirth:"Date Of Birth is required",summary:"Summary is required",schoolName:"School name is required",area:"Area is required",city:"City is required",fromGrade:"From class is required",toGrade:"To Class is required",competitionName:"Competition name is required",year:"Year is required",standing:"Standing position is required",videoUrl:"Video is required",title:"Title is required",explanation:"Explanation is required",tags:"Tags are required",participants:"Please add atlease one participant",teamName:"Please enter your team name",projectName:"Please enter your project name",problemToSolve:"Please specify the problem to solve",reasonToSolveProblem:"Please specify the reason to solve the problem",approachToSolveProblem:"Please specify your approach to solve the problem",technologyUsed:"Please specify the list of technologies you want to use"}},319:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return n}));var r=function(e){return 0===Object.keys(e).length},n=function(e){return Object.keys(e).length>0}},324:function(e,a,t){e.exports=t.p+"static/media/Card-4.5ac9e53d.png"},329:function(e,a,t){e.exports=t.p+"static/media/Card-1.7a8785b4.png"},330:function(e,a,t){e.exports=t.p+"static/media/Card-2.edd858ac.png"},331:function(e,a,t){e.exports=t.p+"static/media/Card-3.01e03a02.png"},332:function(e,a,t){e.exports=t.p+"static/media/Card-5.dae690ee.png"},333:function(e,a,t){e.exports=t.p+"static/media/Card-6.8b9075cc.jpg"},342:function(e,a,t){"use strict";var r=t(95),n=t(0),i=t.n(n),c=t(574),l=t(561),s=t(581),o=t(569),d=t(410),u=t(580);a.a=function(e){var a=Object(n.useState)({dribble:"Dribble url",facebook:"Facebook username",linkedin:"LinkedIn url",behance:"Behance url",instagram:"Instagram username",pinterest:"Pinterest username",twitter:"Twitter url",youtubeChannel:"Youtube channel url"}),t=Object(r.a)(a,1)[0],m=Object(n.useState)(e.value),p=Object(r.a)(m,2),b=p[0],f=p[1];Object(n.useEffect)((function(){f(e.value)}),[e.value]);return i.a.createElement(c.a,{key:e.name,trigger:i.a.createElement(l.a,{src:e.src,style:{height:"70px",width:"70px"},className:e.className}),flowing:!0,hoverable:!0},i.a.createElement(s.a.Column,{textAlign:"center"},i.a.createElement(o.a,{type:"text",transparent:!0,size:"large",placeholder:t[e.platform],className:"border-bottom",style:{color:"#fff"},onChange:function(e){return a=e.target.value,void f(a);var a},value:b}),i.a.createElement(d.a,{name:"check",style:{color:"green"},className:"ml-3",onClick:function(){return e.updateSocialUrl(b)}})),"/"!==window.location.pathname&&i.a.createElement(s.a.Column,{className:"pt-3 pb-2"},i.a.createElement(u.a,{color:"blue",size:"tiny",disabled:!e.value,onClick:function(){return e.addToCard()}},e.isActive?"Move From Card":"Add To Card")))}},343:function(e,a,t){e.exports=t.p+"static/media/Behance.0019100c.svg"},344:function(e,a,t){e.exports=t.p+"static/media/Dribble.bf2afd78.svg"},345:function(e,a,t){e.exports=t.p+"static/media/Facebook.1f1d3206.svg"},346:function(e,a,t){e.exports=t.p+"static/media/Instagram.f414b0ea.svg"},347:function(e,a,t){e.exports=t.p+"static/media/Linkedin.a573f23e.svg"},348:function(e,a,t){e.exports=t.p+"static/media/Pinterest.69a65581.svg"},349:function(e,a,t){e.exports=t.p+"static/media/Twitter.f5afd4b3.svg"},350:function(e,a,t){e.exports=t.p+"static/media/Youtube.d8b5d210.svg"},527:function(e,a,t){},555:function(e,a,t){},576:function(e,a,t){"use strict";t.r(a);var r=t(95),n=t(0),i=t.n(n),c=t(32),l=t(580),s=t(40),o=t(311),d=t(308),u=t(98),m=t(374),p=t(571),b=t(410),f=(t(527),["dribble","facebook","linkedin","behance","instagram","pinterest","twitter","youtubeChannel"]),g=t(68),v=t(342),h=t(316),E=t.n(h),y=t(329),x=t.n(y),k=t(330),C=t.n(k),O=t(331),j=t.n(O),A=t(324),U=t.n(A),N=t(332),w=t.n(N),S=t(333),M=t.n(S),q=t(343),D=t.n(q),P=t(344),z=t.n(P),T=t(345),I=t.n(T),F=t(346),G=t.n(F),L=t(347),B=t.n(L),Y=t(348),R=t.n(Y),W=t(349),J=t.n(W),V=t(350),H=t.n(V),K=Object(c.b)(null,(function(e){return{onUpdateCardDetails:function(a,t){return e(s.n(a,t))}}}))((function(e){var a=Object(n.useState)({category:"",facebookUrl:"",instagramUrl:"",linkedinUrl:"",tiktokUrl:"",youtubeChannelUrl:"",isFacebookActive:!1,isInstagramActive:!1,isLinkedinActive:!1,isTiktokActive:!1,isYoutubeChannelActive:!1}),t=Object(r.a)(a,2),c=t[0],s=t[1],h=Object(n.useState)({}),y=Object(r.a)(h,2),k=y[0],O=y[1],A=Object(n.useState)(!1),N=Object(r.a)(A,2),S=N[0],q=N[1],P=Object(n.useState)({Personal:x.a,Professional:C.a,Meetup:j.a,Travel:U.a,Social:w.a,Work:M.a,Office:x.a}),T=Object(r.a)(P,1)[0],F={behance:D.a,dribble:z.a,facebook:I.a,instagram:G.a,linkedin:B.a,pinterest:R.a,twitter:J.a,youtubeChannel:H.a};Object(n.useEffect)((function(){console.log("===",e.cardDetails);var a=Object(u.a)({},e.cardDetails);a.social.thumbnailId="",s(a.social)}),[e.cardDetails]);return i.a.createElement("div",{className:"card mt-4",style:{borderRadius:"15px",backgroundImage:"url(".concat(T[e.cardDetails.category],")")}},i.a.createElement("div",{className:"text-center mt-1 font-weight-bold"},e.cardDetails.category),i.a.createElement(o.a,{className:"text-right mb-2"},i.a.createElement(m.a,{className:"mt-1",style:{fontSize:"28px"}}),i.a.createElement("div",{className:"text-center"},i.a.createElement("div",{className:"profile-pic"},i.a.createElement("img",{src:E.a,className:"rounded-circle",alt:"not available",style:{height:"60px",width:"60px"}})),i.a.createElement("div",{className:"name mt-3"},e.userDetails.name))),i.a.createElement(o.a,{className:"social-details",md:12,sm:12},i.a.createElement("div",{className:"social-icons"},i.a.createElement(p.a,{horizontal:!0,className:"m-0"},c.isFacebookActive&&i.a.createElement("img",{src:I.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isInstagramActive&&i.a.createElement("img",{src:G.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isLinkedinActive&&i.a.createElement("img",{src:B.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isTiktokActive&&i.a.createElement("img",{src:I.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isDribbleActive&&i.a.createElement("img",{src:z.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isBehanceActive&&i.a.createElement("img",{src:D.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isPinterestActive&&i.a.createElement("img",{src:R.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isTwitterActive&&i.a.createElement("img",{src:J.a,alt:"Engaze",style:{height:"40px",width:"40px"}}),c.isYoutubeChannelActive&&i.a.createElement("img",{src:H.a,alt:"Engaze",style:{height:"40px",width:"40px"}})))),i.a.createElement("div",{className:"text-right",onClick:function(){return e.id,void q((function(e){return!e}))}},i.a.createElement(b.a,{name:"angle down",style:{fontSize:"25px"}})),S&&i.a.createElement(o.a,null,i.a.createElement(d.a,null,f.map((function(e){return i.a.createElement(o.a,{xs:4,md:4,key:e},i.a.createElement(v.a,{src:F[e],platform:e,value:c["".concat(e,"Url")]||"",isActive:c["is".concat(Object(g.c)(e),"Active")],addToCard:function(){return function(e){var a=Object(u.a)({},c);if(a[e]=!a[e],s(a),k.socialMedia){var t=Object(g.g)(k);delete t.socialMedia,O(t)}}("is".concat(Object(g.c)(e),"Active"))},updateSocialUrl:function(a){return function(e,a){var t=Object(u.a)({},c);if(t[a]=e,s(t),k.socialMedia){var r=Object(g.g)(k);delete r.socialMedia,O(r)}}(a,"".concat(e,"Url"))}}))}))),i.a.createElement("br",null),i.a.createElement("div",{className:"text-center mb-3"},i.a.createElement(l.a,{className:"pl-4 pr-4",size:"tiny",icon:"check",style:{color:"green",borderRadius:"8px"},onClick:function(){return q((function(e){return!e})),void e.onUpdateCardDetails(e.cardDetails.id,c)}}))))})),Q=function(e){return i.a.createElement("div",{className:"cards"},e.cards.map((function(a){return i.a.createElement(K,{key:a.id,cardDetails:a,userDetails:e.userDetails})})))},X=t(573),Z=t(572),$=t(570),_=t(318),ee=t(319),ae=Object(c.b)((function(e){return{socialUrl:e.myCards.socialUrl}}),(function(e){return{onGetSocialUrl:function(){return e(s.g())},onAddCard:function(a){return e(s.a(a))}}}))((function(e){var a=Object(n.useState)([{key:"af",value:"Meetup",text:"Meetup"},{key:"ax",value:"Personal",text:"Personal"},{key:"al",value:"al",text:"Professional"},{key:"dz",value:"dz",text:"Travel"},{key:"as",value:"as",text:"Social"},{key:"ad",value:"ad",text:"Work"},{key:"ao",value:"ao",text:"Office"}]),t=Object(r.a)(a,1)[0],c={behance:D.a,dribble:z.a,facebook:I.a,instagram:G.a,linkedin:B.a,pinterest:R.a,twitter:J.a,youtubeChannel:H.a},s=Object(n.useState)({name:"",category:"",thumbnailId:"",facebookUrl:"",instagramUrl:"",linkedinUrl:"",tiktokUrl:"",youtubeChannelUrl:"",twitterUrl:"",snapchatUrl:"",whatsappUrl:"",githubUrl:"",stackoverflowUrl:"",dribbleUrl:"",behanceUrl:"",upiAddress:"",paypalUrl:"",upworkUrl:"",fiverrUrl:"",isFacebookActive:!1,isInstagramActive:!1,isLinkedinActive:!1,isTiktokActive:!1,isYoutubeChannelActive:!1,isTwitterActive:!1,isSnapchatActive:!1,isWhatsappActive:!1,isGithubActive:!1,isStackoverflowActive:!1,isDribbleActive:!1,isBehanceActive:!1,isUpiActive:!1,isPaypalActive:!1,isUpworkActive:!1,isFiverrActive:!1}),m=Object(r.a)(s,2),p=m[0],b=m[1],h=Object(n.useState)({}),E=Object(r.a)(h,2),y=E[0],x=E[1];Object(n.useEffect)((function(){e.onGetSocialUrl()}),[]),Object(n.useEffect)((function(){if(Object(ee.b)(e.socialUrl)){var a=Object(u.a)({},p,{},e.socialUrl);b(a)}}),[e.socialUrl]);var k=function(){var a=Object(g.g)(y);Object(g.d)(p.category)&&(a.category="".concat(_.a.category)),function(){var e=!1;for(var a in p)!0===p[a]&&(e=!0);return e}()||(a.socialMedia="".concat(_.a.socialMedia)),x(a),Object(ee.a)(a)&&(e.toggleAddCardModal(),e.onAddCard(p))};return i.a.createElement(Z.a,null,i.a.createElement("div",{className:"card-type mt-2"},i.a.createElement("h5",null,"Card Category"),i.a.createElement($.a,{error:!!y.category,fluid:!0,placeholder:"Select Card Category",options:t,onChange:function(e){return function(e){var a=Object(u.a)({},p);if(a.category=e.target.textContent,b(a),y.category){var t=Object(g.g)(y);delete t.category,x(t)}}(e)}}),y.category&&i.a.createElement("span",{className:"text-danger pl-1"},y.category)),i.a.createElement("br",null),i.a.createElement("div",{className:"social-links"},i.a.createElement("h3",null,"Social Links"),y.socialMedia&&i.a.createElement("span",{className:"text-danger pl-1"},y.socialMedia),i.a.createElement(d.a,null,f.map((function(e){return i.a.createElement(o.a,{xs:4,md:4,key:e},i.a.createElement(v.a,{src:c[e],platform:e,value:p["".concat(e,"Url")]||"",isActive:p["is".concat(Object(g.c)(e),"Active")],addToCard:function(){return function(e){var a=Object(u.a)({},p);if(a[e]=!a[e],b(a),y.socialMedia){var t=Object(g.g)(y);delete t.socialMedia,x(t)}}("is".concat(Object(g.c)(e),"Active"))},updateSocialUrl:function(a){return function(e,a){var t=Object(u.a)({},p);if(t[a]=e,b(t),y.socialMedia){var r=Object(g.g)(y);delete r.socialMedia,x(r)}}(a,"".concat(e,"Url"))}}))})))),i.a.createElement("div",{className:"text-right mt-4"},i.a.createElement(l.a,{onClick:function(){return k()}},"Add")))})),te=function(e){return i.a.createElement(X.a,{dimmer:!0,open:e.isAddCardModalOpen,onClose:e.toggleAddCardModal,className:"add-card-details",closeIcon:!0,id:"modal"},i.a.createElement(X.a.Content,null,i.a.createElement(X.a.Description,null,i.a.createElement(ae,{toggleAddCardModal:function(){return e.toggleAddCardModal()}})),i.a.createElement("br",null)))};t(555),a.default=Object(c.b)((function(e){return{cards:e.myCards.cards,userDetails:e.home.userDetails}}),(function(e){return{onGetCards:function(){return e(s.e())},onEmptyCards:function(){return e(s.c())}}}))((function(e){var a=Object(n.useState)(!1),t=Object(r.a)(a,2),c=t[0],s=t[1],u=function(){s((function(e){return!e}))};return Object(n.useEffect)((function(){return e.onGetCards(),function(){e.onEmptyCards()}}),[]),i.a.createElement(o.a,{className:"my-cards pt-4 pb-5"},i.a.createElement(te,{isAddCardModalOpen:c,toggleAddCardModal:function(){return u()}}),i.a.createElement(d.a,{className:"mb-3"},i.a.createElement(o.a,{xs:8},i.a.createElement("h3",{className:"text-white pl-1"},"My Cards")),i.a.createElement(o.a,{className:"add-icon text-right"},i.a.createElement(l.a,{size:"tiny",icon:"add",style:{color:"#000",borderRadius:"8px"},onClick:function(){return u()}}))),i.a.createElement(Q,{cards:e.cards,userDetails:e.userDetails}))}))}}]);
//# sourceMappingURL=9.97b776cb.chunk.js.map