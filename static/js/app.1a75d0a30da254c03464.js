webpackJsonp([1],{"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.315a8d5.png"},Ave4:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("EEr4"),r=(n("E7Yq"),n("wUn1"),n("knr3")),s=n.n(r),o=new a.Subject;s.a.bind("left",function(){return o.next()});var c=new a.Subject;s.a.bind("right",function(){return c.next()});var u=new a.Subject,l=new a.Subject,h={data:function(){return{name:""}},mounted:function(){var t=this;l.subscribe(function(e){var n=e.name;t.name=n})}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topbar"},[i("img",{attrs:{src:n("7Otq")}}),t._v(" "),i("span",{staticClass:"station-name"},[t._v(t._s(t.name))])])},staticRenderFns:[]};var m=n("VU/8")(h,d,!1,function(t){n("rfEp")},null,null).exports,f=n("T2eB"),p={props:["station","width","height"],mounted:function(){var t=this,e=new Twitch.Player("twitch-player-"+this.station.channel,{width:this.width,height:this.height,layout:"video",theme:"dark",autoplay:!1,channel:this.station.channel});u.subscribe(function(){e.pause()}),l.filter(function(e){return e.name===t.station.name}).subscribe(function(){e.play()})}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"twitch-player-"+this.station.channel}})},staticRenderFns:[]},w=n("VU/8")(p,v,!1,null,null,null).exports,g={props:["station"],mounted:function(){setTimeout(function(){var t=this;twttr.ready(function(e){e.widgets.createTimeline({sourceType:"widget",widgetId:"956207397726388226"},t.$refs.timeline,{width:800,height:600,chrome:"nofooter noborders",dnt:!0,linkColor:"#beff9d"})})}.bind(this),3e3)}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"timeline",staticStyle:{height:"600px"}})},staticRenderFns:[]},_=n("VU/8")(g,b,!1,null,null,null).exports,y=n("c/Tr"),x=n.n(y),C={name:"Jammers",data:function(){return{jammers:[]}},props:["station"],mounted:function(){this.jammers=x()(new Array(50),function(t,e){return{name:"😇-"+e,picture:"http://i.pravatar.cc/60?u="+e,active:Math.floor(10*Math.random())%3==0}})}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jammers"},this._l(this.jammers,function(t){return e("div",{key:t.name,staticClass:"jammer",class:{active:t.active}},[e("img",{attrs:{src:t.picture,alt:""}})])}))},staticRenderFns:[]};var E=n("VU/8")(C,j,!1,function(t){n("wces")},null,null).exports,S={name:"Station",components:{Carousel3d:f.Carousel3d,Slide:f.Slide,TwitchPlayer:w,TwitterTimeline:_,Jammers:E},computed:{width:function(){return.75*Math.max(document.documentElement.clientWidth,window.innerWidth||0)},height:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},videoWidth:function(){return this.width-30},videoHeight:function(){return Math.floor(9*this.width/16)}},data:function(){return{stations:[{type:"twitter",name:"Twitter"},{type:"twitch",channel:"dakuokh",name:"Kaohsiung"},{type:"twitch",channel:"melbggj",name:"Melbourne"},{type:"twitch",channel:"igda_taiwan",name:"Taipei (CLBC)"},{type:"twitch",channel:"igda_japan",name:"Japan"}]}},methods:{onBeforeSlideChange:function(t){u.next()},onAfterSlideChange:function(t){var e=this.stations[t];l.next({name:e.name})}},mounted:function(){var t=this;l.next({name:this.stations[0].name}),o.subscribe(function(){t.$refs.carousel.goPrev()}),c.subscribe(function(){t.$refs.carousel.goNext()})}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("carousel-3d",{ref:"carousel",attrs:{"controls-visible":!0,width:t.width,height:t.height,autoplay:!0,"autoplay-timeout":6e5},on:{"before-slide-change":t.onBeforeSlideChange,"after-slide-change":t.onAfterSlideChange}},t._l(t.stations,function(e,i){return n("slide",{key:e.name,staticClass:"station",attrs:{index:i}},["twitch"===e.type?n("twitch-player",{attrs:{station:e,width:t.videoWidth,height:t.videoHeight}}):t._e(),t._v(" "),"twitter"===e.type?n("twitter-timeline",{attrs:{station:e}}):t._e(),t._v(" "),"jammers"===e.type?n("jammers",{attrs:{station:e}}):t._e()],1)}))},staticRenderFns:[]};var $={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footbar"},[e("span",{staticClass:"url"},[this._v("ggj18.sligrid.com")])])}]};var k={name:"App",components:{Topbar:m,Station:n("VU/8")(S,T,!1,function(t){n("gbpe")},"data-v-05401d0a",null).exports,Footbar:n("VU/8")({name:"Footbar"},$,!1,function(t){n("Ave4")},null,null).exports}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Topbar"),this._v(" "),e("Station"),this._v(" "),e("Footbar")],1)},staticRenderFns:[]};var A=n("VU/8")(k,F,!1,function(t){n("kXcw")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:A},template:"<App/>"})},gbpe:function(t,e){},kXcw:function(t,e){},rfEp:function(t,e){},wces:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a75d0a30da254c03464.js.map