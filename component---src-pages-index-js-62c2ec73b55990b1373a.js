"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[293],{7939:function(e,t,a){a.d(t,{A:function(){return m}});var l=a(6540),n=a(4810);var r=()=>{const e=(0,n.GR)("2282118961");return l.createElement("div",{className:"header-module--headercontainer--e1df1"},l.createElement("div",{className:"header-module--title--65f8e"},l.createElement("span",null,"Dev Blog")),l.createElement("nav",{className:"header-module--nav--4c29e"},e.allStrapiCategory.nodes.map((e=>l.createElement("span",{key:e.slug},l.createElement(n.N_,{to:`/${e.slug}`},e.name))))))};var c=()=>l.createElement("div",{className:"footer-module--footercontainer--bb9ef"},l.createElement("div",{className:"footer-module--title--13230"},l.createElement("span",null,"Dev Blog")));var m=e=>{let{pageTitle:t,children:a}=e;return l.createElement("div",{className:"layout-module--container--66d73"},l.createElement(r,null),l.createElement("div",{className:"layout-module--bodycontainer--2a536"},l.createElement("main",{className:"layout-module--content--33f2b"},a),l.createElement(c,null)))}},530:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return E}});var l={};a.r(l),a.d(l,{l3:function(){return m},Qy:function(){return d},Q6:function(){return o},zs:function(){return u},uv:function(){return s}});var n=a(6540),r=a(4810),c=a(7939),m="card-module--cardbody--06ddd",d="card-module--cardimg--3913a",o="card-module--cardmeta--1ee2c",u="card-module--cardtitle--548a7",s="card-module--cardwrapper--3b704";var i=e=>{let{imgurl:t,title:a,updatedAt:r,tag:c}=e;return n.createElement("article",{className:s},n.createElement("figure",{className:d},n.createElement("img",{src:`http://127.0.0.1:1337${t}`,alt:""})),n.createElement("div",{className:m},n.createElement("h2",{className:u},a),n.createElement("section",{className:o},n.createElement("span",{className:l.cardtag},`#${c}`),n.createElement("span",{className:l.carddate},r))))};const v=()=>n.createElement("title",null,"Home Page - Strapi Gatsby Blog");var E=e=>{let{data:t}=e;const{allStrapiBlog:{nodes:a}}=t;return console.log({nodes:a}),n.createElement(c.A,{pageTitle:"Home Page"},n.createElement("div",{className:"home-module--postlist--b6cbb"},a.map((e=>{var t;return n.createElement(r.N_,{className:"home-module--postlink--d79f4",to:`/article/${e.slug}`},n.createElement("div",{key:e.id,className:"home-module--cardbox--7e1a0"},n.createElement(i,{title:null==e?void 0:e.title,imgurl:null==e||null===(t=e.cover)||void 0===t?void 0:t.url,updatedAt:null==e?void 0:e.updatedAt,tag:null==e?void 0:e.tags[0].tagname})))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-62c2ec73b55990b1373a.js.map