(this["webpackJsonpah-akoam"]=this["webpackJsonpah-akoam"]||[]).push([[0],{109:function(e,t,n){},114:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(43),i=n.n(s),l=(n(109),n(104)),r=n(9),d=(n(65),n(6)),j=n.p+"static/media/logo-white.1be624fa.svg",o=(n(114),n(0)),m=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsx)("a",{className:"col-auto  logo",href:"/",children:Object(o.jsx)("img",{src:j})}),Object(o.jsx)(d.b,{className:"aqsam col-auto",to:"/home",children:Object(o.jsxs)("span",{children:[Object(o.jsx)("i",{className:"fas fa-bars"}),Object(o.jsx)("span",{children:"\u0627\u0644\u0623\u0642\u0633\u0627\u0645"})]})}),Object(o.jsx)(d.b,{className:"recently me-auto col-auto",to:"/home",children:Object(o.jsxs)("span",{children:[Object(o.jsx)("i",{className:"fas fa-plus"}),Object(o.jsx)("span",{children:"\u0623\u0636\u064a\u0641 \u062d\u062f\u064a\u062b\u0627"}),Object(o.jsx)("i",{className:"fas fa-user"})]})})]})})})})},b=n(10),u=[{name:"\u0627\u0641\u0644\u0627\u0645",name_in_english:"movies",subdeps:[{name:"\u0623\u0641\u0644\u0627\u0645 \u0639\u0631\u0628\u0649",link:"movies/arabic-movies"},{name:"\u0623\u0641\u0644\u0627\u0645 \u0623\u062c\u0646\u0628\u0649",link:"movies/english-movies"},{name:"\u0623\u0641\u0644\u0627\u0645 \u0647\u0646\u062f\u0649",link:"movies/indian-movies"}],link:""},{name:"\u0645\u0633\u0644\u0633\u0644\u0627\u062a",name_in_english:"series",subdeps:[{name:"\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u0639\u0631\u0628\u0649",link:"series/arabic-series"},{name:"\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u0623\u062c\u0646\u0628\u0649",link:"series/english-series"},{name:"\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u0647\u0646\u062f\u0649",link:"series/indian-series"}],link:""},{name:"\u062a\u0644\u0641\u0632\u064a\u0648\u0646",name_in_english:"tv",subdeps:[{name:"\u0628\u0631\u0627\u0645\u062c \u062a\u0644\u0641\u0632\u064a\u0648\u0646\u064a\u0629",link:""},{name:"\u0645\u0633\u0631\u062d\u064a\u0627\u062a",link:""}],link:""},{name:"\u0631\u0645\u0636\u0627\u0646 2021",name_in_english:"ramadan",subdeps:[{name:"",link:""}],link:""}],h=(n(117),function(e){var t=Object(c.useState)({}),n=Object(b.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){for(var t=0;t<u.length;t++)for(var n=0;n<u[t].subdeps.length;n++)e.element.sub_dep_name_arabic==u[t].subdeps[n].name&&s(u[t].subdeps[n])}),[e,a]),e?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"my-breadcrumb flex-column flex-md-row d-flex justify-content-start",children:[Object(o.jsxs)(d.b,{to:"/",children:[Object(o.jsx)("i",{className:"fal fa-home"}),Object(o.jsx)("span",{children:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]}),Object(o.jsx)(d.b,{to:"/departments/"+a.link,children:a.name}),Object(o.jsx)(d.b,{to:"#",children:e.element.title})]})}):1}),x=(n(118),n.p+"static/media/lacasa.84f0ba4e.webp"),O=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"element-cover",style:{backgroundImage:"url(".concat(e.element.image,")")},children:Object(o.jsx)("div",{className:"container-md h-100",children:Object(o.jsxs)("div",{className:"row d-flex flex-column flex-md-row h-100",children:[Object(o.jsx)("div",{className:"col-12 col-md-3 d-md-block my-image ",children:Object(o.jsx)("img",{className:"mw-100 pe-md-2 h-100",src:e.element.image})}),Object(o.jsxs)("div",{className:"col content",children:[Object(o.jsx)("h3",{children:e.element.title}),Object(o.jsxs)("p",{children:["\u0627\u0644\u062c\u0648\u062f\u0629 : ",e.element.quality," "]}),Object(o.jsxs)("p",{children:["\u0627\u0644\u0633\u0646\u0629 : ",e.element.year," "]}),Object(o.jsx)("div",{className:"links d-flex justify-content-start",children:e.element.categories?e.element.categories.map((function(e,t){return Object(o.jsx)("span",{children:e},t)})):null})]}),Object(o.jsxs)("div",{className:"col-3 buttons d-flex flex-column pt-2 pb-2 align-items-start",children:[Object(o.jsx)("button",{className:"d-block mb-2",children:Object(o.jsxs)("a",{href:"",onClick:function(e){e.preventDefault(),window.scrollTo(0,1e5)},className:"d-flex justify-content-start p-2",children:[Object(o.jsx)("span",{children:"\u0645\u0634\u0627\u0647\u062f\u0629"}),Object(o.jsx)("i",{className:"fab fa-youtube me-auto p-2"})]})}),Object(o.jsx)("button",{className:"d-block mb-2",children:Object(o.jsxs)("a",{href:"",className:"d-flex justify-content-start p-2",children:[Object(o.jsx)("span",{children:"\u062a\u062d\u0645\u064a\u0644"}),Object(o.jsx)("i",{className:"fas fa-arrow-circle-down me-auto p-2"})]})}),Object(o.jsx)("button",{className:"d-block mb-2",children:Object(o.jsxs)("a",{href:"",className:"d-flex justify-content-start p-2",children:[Object(o.jsx)("span",{children:"\u0634\u0627\u0631\u0643"}),Object(o.jsx)("i",{className:"fas fa-share-alt me-auto p-2"})]})})]})]})})})})},p=function(e){var t=Object(r.c)((function(e){return e[0]})),n=Object(c.useState)({}),a=Object(b.a)(n,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){if(t)for(var n=0;n<t.length;n++)if(e.location.pathname.replace("/elements/","").trim()==t[n].title.trim()){i(t[n]),document.title="ah-akoam | "+t[n].title;break}}),[t,s]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"mt-2"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(h,{element:s})})}),Object(o.jsx)("div",{className:"mb-2"}),Object(o.jsx)(O,{element:s}),Object(o.jsx)("div",{className:"mb-3"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{children:" \u0642\u0635\u0629 \u0627\u0644\u0645\u0633\u0644\u0633\u0644 "}),Object(o.jsx)("p",{className:"p-4  pe-2",children:s.description})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("iframe",{width:"100%",height:"320",allowFullScreen:!0,src:s.videoLink}),Object(o.jsx)("div",{style:{marginBottom:"20px"}})]})]})]})},f=(n(51),n(44)),g=n.n(f),v=function(e){var t="";e.noBadge&&(t="custom-card hw2");var n=g()({h6Custom:e.noBadge});return e.el&&e.el.categories?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:t,style:{backgroundImage:"url(".concat(e.el.image,")")},children:[e.noBadge?null:Object(o.jsxs)("div",{className:"custom-badge",children:[Object(o.jsx)("span",{children:e.el.rating}),Object(o.jsx)("i",{className:"fas fa-star"})]}),Object(o.jsx)("div",{className:"custom-parent",children:Object(o.jsxs)("div",{className:"custom-title",children:[Object(o.jsx)("i",{className:"fas fa-play"}),Object(o.jsx)("p",{children:"\u0645\u0634\u0627\u0647\u062f\u0629"})]})}),Object(o.jsx)("div",{className:"justLine"}),Object(o.jsxs)("div",{className:"last-title",children:[Object(o.jsx)("h6",{className:n,children:e.el.title}),e.noBadge?null:Object(o.jsx)("div",{className:"custom-spans",children:e.el.categories.map((function(e,t){return Object(o.jsx)("span",{children:e},t)}))})]})]})}):Object(o.jsx)("div",{})},N=(n(119),function(e){var t=e.elements.map((function(e,t){return Object(o.jsx)(d.b,{className:"col",to:"/elements/"+e.title,children:Object(o.jsx)("div",{className:"custom-card hw1",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(o.jsx)(v,{el:e})})},t)}));return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row g-2 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5",children:t})})}),w=(n(120),function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{paddingTop:"80px"}}),Object(o.jsxs)("div",{className:"cover",children:[Object(o.jsx)("img",{src:x}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"spans",children:[Object(o.jsx)("span",{children:"WEB-DL"}),Object(o.jsxs)("span",{children:[Object(o.jsx)("i",{className:"fas fa-star"}),e.element.rating]})]}),Object(o.jsx)("h2",{children:Object(o.jsx)(d.b,{to:"/elements/"+e.element.title,children:e.element.title})}),Object(o.jsx)("h2",{}),Object(o.jsx)("p",{children:e.element.description})]})]})]})}),y=(n(121),function(e){var t=u.find((function(t){return t.name_in_english==e.depName}));return Object(o.jsx)("div",{className:"container my-dep",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:t.name}),Object(o.jsxs)("div",{className:"dropdown show",children:[Object(o.jsx)("a",{className:"dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"\u0627\u0644\u0623\u0642\u0633\u0627\u0645"}),Object(o.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:t.subdeps.map((function(e,t){return Object(o.jsx)(d.b,{className:"dropdown-item",to:"/departments/"+e.link,children:e.name},t)}))})]})]})})}),k=(n(122),n(5)),_=function(e){var t,n,a=Object(r.c)((function(e){return e[0]})),s=Object(c.useState)([]),i=Object(b.a)(s,2),l=i[0],j=i[1],m=Object(k.g)();Object(c.useEffect)((function(){if(a)if(e.params.dep&&!e.params.subdep){var t=[];a.map((function(n,c){n.dep_name_english==e.params.dep&&(t.push(n),j(t))})),0==t.length&&m.push({pathname:"/"})}else if(e.params.dep&&e.params.subdep){var n=[];a.map((function(t){t.dep_name_english==e.params.dep&&t.sub_dep_name_english==e.params.subdep&&(n.push(t),j(n))})),0==n.length&&m.push({pathname:"/"})}else m.push({pathname:"/"})}),[a]),u.map((function(c){c.name_in_english==e.params.dep&&(n=c.subdeps,t=c.name)}));var h=function(t){var n=(e.params.subdep?a.filter((function(t){return t.sub_dep_name_english==e.params.subdep})):a).filter((function(e){return e.quality==t.target.outerText}));j(n)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"parent-div",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"dep-header flex-column flex-md-row gap-3 text-center ",children:[Object(o.jsx)("div",{className:"header-logo col w-50",children:Object(o.jsx)("h3",{children:t})}),Object(o.jsxs)("div",{className:"dropdown col w-100",children:[Object(o.jsx)("a",{className:"dropdown-toggle w-100",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(o.jsx)("span",{children:"\u0627\u0644\u0627\u0642\u0633\u0627\u0645"})}),Object(o.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:n?n.map((function(e,t){return Object(o.jsx)(d.b,{className:"dropdown-item",to:"/departments/"+e.link,children:e.name},t)})):null})]}),Object(o.jsxs)("div",{className:"dropdown col w-100",onChange:function(){return console.log(11)},children:[Object(o.jsx)("a",{className:"dropdown-toggle w-100",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(o.jsx)("span",{children:"\u0627\u0644\u062c\u0648\u062f\u0629"})}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:[Object(o.jsx)("div",{onClick:function(e){return h(e)},className:"dropdown-item",children:"1080p"}),Object(o.jsx)("div",{onClick:function(e){return h(e)},className:"dropdown-item",children:"720p"}),Object(o.jsx)("div",{onClick:function(e){return h(e)},className:"dropdown-item",children:"480p"})]})]})]})})})}),Object(o.jsx)("div",{style:{margin:"10px auto"}}),Object(o.jsx)("div",{children:0!=l.length?Object(o.jsx)(N,{elements:l}):null}),Object(o.jsx)("div",{style:{margin:"10px auto"}})]})},C=n(263),S=n(261),F=(n(123),n(124),n(125),n(126),n(127),n(262)),L=n(258),q=n(259),T=n(260);F.a.use([L.a,q.a,T.a]);var B=function(){var e,t=Object(r.c)((function(e){return e[0]})),n=function(t){e||(e=t.currentTarget.clientWidth),t.currentTarget.style.width=e+50+"px"},c=function(t){return t.currentTarget.style.width=e+"px"};return t?Object(o.jsxs)("div",{className:"my-container",children:[Object(o.jsx)(C.a,{modules:[T.a,q.a],spaceBetween:5,slidesPerView:window.innerWidth<768?1:"auto",navigation:!0,loop:!0,scrollbar:{draggable:!0},children:t.map((function(e,t){return e.title.toLowerCase().includes("lacasa")?1:Object(o.jsx)(S.a,{onMouseEnter:n,onMouseLeave:c,className:"swiper-slide",children:Object(o.jsx)(d.b,{to:"/elements/"+e.title,children:Object(o.jsx)(v,{el:e,noBadge:!0})},t)},t)}))}),Object(o.jsx)("div",{style:{marginBottom:"20px"}})]}):1},E=(n(128),n(27)),P=(n(255),function(e){var t=Object(k.g)(),n=Object(E.a)({onSubmit:function(e,n){var c=n.resetForm;t.push({pathname:"/search",search:"?query=".concat(e.text)}),c()},initialValues:{text:""}});return Object(o.jsx)("form",{onSubmit:n.handleSubmit,children:Object(o.jsx)("div",{className:"inp-search",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row g-2 p-1 justify-content-center",children:[Object(o.jsx)("div",{className:"inp col-auto col-sm-8 col-md-10",children:Object(o.jsx)("input",{required:!0,onChange:n.handleChange,name:"text",className:"my-field",type:"text",placeholder:"\u0627\u0628\u062d\u062b \u0639\u0646 \u0641\u064a\u0644\u0645 \u0627\u0648 \u0645\u0633\u0644\u0633\u0644 ..."})}),Object(o.jsx)("div",{className:"search  text-start col-auto col-sm-4 col-md-2",children:Object(o.jsx)("button",{type:"submit",className:"btn",children:"\u0628\u062d\u062b"})})]})})})})}),I=(n(227),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d.b,{to:"/departments/"+e.link,children:Object(o.jsx)("button",{className:"mazeed",children:"\u0627\u0644\u0645\u0632\u064a\u062f + "})})})}),M=(n(228),function(e){return Object(o.jsx)(d.b,{to:"/elements/".concat(e.element.title),children:Object(o.jsx)("div",{className:"feature container",style:{backgroundImage:"url(".concat(e.element.image,")")},children:Object(o.jsxs)("div",{className:"content row align-items-center flex-column flex-md-row text-center",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h3",{children:e.element.title}),Object(o.jsx)("p",{className:"m-auto mb-2 w-75",children:e.element.description}),Object(o.jsx)("button",{children:"\u0634\u0627\u0647\u062f \u0627\u0644\u0627\u0646"})]}),Object(o.jsx)("img",{className:"col-auto me-auto order-first order-md-last  m-auto mb-3 mb-md-0 ",src:e.element.image,alt:""})]})})})}),D=(n(229),n(230),function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"deps custom-col",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row justify-content-center g-2 row-cols-2 row-cols-md-6 row-cols-lg-5",children:[Object(o.jsx)(d.b,{className:"col",to:"/departments/movies",children:Object(o.jsxs)("div",{className:"dep",children:[Object(o.jsx)("i",{className:"fas fa-video"}),Object(o.jsx)("span",{children:"\u0627\u0641\u0644\u0627\u0645"})]})}),Object(o.jsx)(d.b,{className:"col",to:"/departments/series",children:Object(o.jsxs)("div",{className:"dep",children:[Object(o.jsx)("i",{className:"fas fa-tv"}),Object(o.jsx)("span",{children:"\u0645\u0633\u0644\u0633\u0644\u0627\u062a"})]})}),Object(o.jsx)(d.b,{className:"col",to:"/departments/tv",children:Object(o.jsxs)("div",{className:"dep",children:[Object(o.jsx)("i",{className:"fas fa-tv-retro"}),Object(o.jsx)("span",{children:"\u062a\u0644\u0641\u0632\u064a\u0648\u0646"})]})}),Object(o.jsx)(d.b,{className:"col",to:"/departments/ramadan",children:Object(o.jsxs)("div",{className:"dep",children:[Object(o.jsx)("i",{className:"fas fa-moon"}),Object(o.jsx)("span",{children:"\u0631\u0645\u0636\u0627\u06462021"})]})})]})})})})}),V=function(){document.title="ah-akoam | home";var e=Object(r.c)((function(e){return e[0]}));return e?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{element:e[e.findIndex((function(e){return e.title.toLowerCase().includes("lacasa")}))]}),Object(o.jsx)(P,{}),Object(o.jsx)(D,{}),Object(o.jsx)(B,{}),Object(o.jsx)(y,{depName:"series"}),Object(o.jsx)(M,{element:e.filter((function(e){return"series"==e.dep_name_english}))[0]}),Object(o.jsx)(N,{elements:e.filter((function(e){return"series"==e.dep_name_english}))}),Object(o.jsx)(I,{link:"series"}),Object(o.jsx)(y,{depName:"movies"}),Object(o.jsx)(M,{element:e.filter((function(e){return"movies"==e.dep_name_english}))[0]}),Object(o.jsx)(N,{elements:e.filter((function(e){return"movies"==e.dep_name_english}))}),Object(o.jsx)(I,{link:"movies"})]}):1},J=n(20),R=n.n(J),A="add",W="remove",U=function(e){return{type:A,payload:e}},z=(n(250),function(){var e=[];return u.forEach((function(t){t.subdeps.forEach((function(t){e.push(t)}))})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"labels",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{children:[u.map((function(e,t){return""!=e.name?Object(o.jsx)(d.b,{to:"/departments/"+e.name_in_english,children:e.name},t):null})),e.map((function(e,t){return""!=e.name?Object(o.jsx)(d.b,{to:"/departments/"+e.link,children:e.name},t):null}))]})})})})}),Z=(n(251),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"to-main-page",children:Object(o.jsxs)(d.b,{className:"logo-container",to:"/home",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",width:"87px",height:"80px",children:Object(o.jsx)("path",{fillRule:"evenodd",fill:"rgb(255, 255, 255)",d:"M68.479,46.753 L55.101,55.064 L59.686,64.395 L26.302,64.395 L43.500,33.248 L48.558,41.524 L61.642,34.285 L43.500,-0.001 L0.000,80.001 L87.000,80.001 L68.479,46.753 Z"})}),Object(o.jsx)("h4",{children:"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]})})})}),G=(n(252),function(){return document.title="ah-akoam",Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(m,{}),Object(o.jsx)(Z,{}),Object(o.jsx)(P,{}),Object(o.jsx)(D,{}),Object(o.jsx)(z,{})]})}),H=function(e){var t=Object(r.c)((function(e){return e[0]}));return document.title="ah-akoam | "+(e.match.params.subdep||e.match.params.dep),t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{}),Object(o.jsx)(_,{elements:t,params:e.match.params})]}):1},K=function(e){document.title="ah-akoam | search";var t=Object(r.c)((function(e){return e[0]})),n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)([]),d=Object(b.a)(l,2),j=d[0],u=d[1],h=Object(k.g)();return Object(c.useEffect)((function(){if(t)if(""==e.location.search||"?query="==e.location.search)h.push("/");else{var n=new URLSearchParams(e.location.search).get("query").trim();i(n);var c=[];t.map((function(e){e.title.includes(s.toLowerCase()||s.toLocaleUpperCase())&&c.push(e)})),u(c)}}),[t,s]),t?Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{style:{marginTop:"80px",textAlign:"center"},children:0!=j.length?Object(o.jsx)(N,{elements:j}):Object(o.jsx)("h2",{style:{margin:"100px auto"},children:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c"})})]}):1},Q=function(){return document.title="ah-akoam | not-found",Object(o.jsxs)("div",{style:{marginTop:"80px",textAlign:"center"},children:[Object(o.jsx)("h3",{children:"\u0627\u0644\u0635\u0641\u062d\u0629 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"/",children:"\u0627\u0636\u063a\u0637 \u0647\u0646\u0627 \u0644\u0644\u0630\u0647\u0627\u0628 \u0627\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})})]})},X=function(e){return e.history.push("/"),Object(o.jsx)("div",{})},Y=n(12),$=(n(253),function(e){return Object(o.jsx)(o.Fragment,{children:e.arr.map((function(t,n){return"select"!=e.type?Object(o.jsxs)("div",{className:"txt-inp",children:[Object(o.jsx)("label",{htmlFor:t.en,children:t.ar}),Object(o.jsx)("input",{name:t.en,type:e.type,value:e.val[t.en],onChange:e.handleChange,className:"child-input"})]},n):Object(o.jsxs)("div",{className:"select-inp",children:[Object(o.jsx)("label",{htmlFor:t.en,children:t.ar}),Object(o.jsx)("select",{defaultValue:t.childrens[0],onChange:e.handleChange,name:t.en,className:"child-select",children:t.childrens.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))})]},n)}))})}),ee=function(){document.title="ah-akoam | admin ";var e,t=[{ar:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646",en:"title"},{ar:"\u0627\u0644\u0648\u0635\u0641",en:"description"},{ar:"\u0627\u0644\u062c\u0648\u062f\u0629",en:"quality"},{ar:"\u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u064a\u062f\u064a\u0648",en:"videoLink"},{ar:"\u0641\u0626\u0627\u062a \u0627\u0644\u0639\u0646\u0635\u0631",en:"categories"}],n=[{ar:"\u0633\u0646\u0629 \u0627\u0644\u0627\u0635\u062f\u0627\u0631",en:"year"},{ar:"\u0627\u0644\u062a\u0642\u064a\u064a\u0645",en:"rating"}],a=Object(E.a)({onSubmit:function(e,t){var n=t.resetForm,c=new FormData;e.categories.includes(",")?e.categories=e.categories.split(","):e.categories=[e.categories],c.append("data",JSON.stringify(e)),c.append("img",q),R.a.post("/api/elements/add",c).then((function(e){var t=e.data.data;t.created&&(P(U(t.element)),u.push(t.element),h(u),alert(t.msg)),n(),B.current.value=""}))},initialValues:{el_id:"",title:"",quality:"",description:"",rating:"",videoLink:"",categories:"",year:"",arDep:"\u0627\u0641\u0644\u0627\u0645",ar_subdep:"\u0627\u0641\u0644\u0627\u0645 \u0639\u0631\u0628\u0649",enDep:"movies",en_subdep:"arabic-movies"}}),s=Object(E.a)({onSubmit:function(e,t){t.resetForm;e.id=p.el_id,e.categories.includes(",")?e.categories=e.categories.split(","):""!=e.categories&&(e.categories=[e.categories]),R.a.patch("/api/elements/update",e).then((function(e){var t=e.data.data;t.categories=JSON.parse(t.categories);var n=d.findIndex((function(e){return e.el_id==t.el_id})),c=d;c[n]=t,h(c),alert(e.data.msg)}))},initialValues:{title:"",quality:"",description:"",rating:"",videoLink:"",categories:"",year:""}}),i=Object(E.a)({onSubmit:function(e,t){var n=t.resetForm;R.a.patch("/api/auth/resetPass",e).then((function(e){e.data.changed?(localStorage.clear(),alert(e.data.msg),I.push("/login")):(alert(e.data.msg),n())}))},initialValues:{oldPass:"",newPass:""}}),l=function(e){e.includes("add")?S("add"):e.includes("edit")?S("edit"):e.includes("delete")?S("delete"):S("password")},d=Object(r.c)((function(e){return e[0]})),j=Object(c.useState)([]),m=Object(b.a)(j,2),u=m[0],h=m[1],x=Object(c.useState)({}),O=Object(b.a)(x,2),p=O[0],f=O[1],g=Object(c.useState)("d-none"),v=Object(b.a)(g,2),N=v[0],w=v[1],y=Object(c.useState)("add"),_=Object(b.a)(y,2),C=_[0],S=_[1],F=Object(c.useState)(""),L=Object(b.a)(F,2),q=L[0],T=L[1],B=Object(c.useRef)(),P=Object(r.b)(),I=Object(k.g)();return Object(c.useEffect)((function(){d&&h(Object(Y.a)(d))}),[d]),d?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"my-sidebar",children:Object(o.jsxs)("div",{className:"settings-container",children:[Object(o.jsx)("h4",{className:"settings-header",children:"\u0627\u0644\u0627\u0639\u062f\u0627\u062f\u0627\u062a"}),Object(o.jsxs)("ul",{className:"settings",children:[Object(o.jsxs)("li",{onClick:function(){return l("add-element")},children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-layer-plus"})}),Object(o.jsx)("span",{children:"\u0627\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631"})]}),Object(o.jsxs)("li",{onClick:function(){return l("edit-element")},children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-edit"})}),Object(o.jsx)("span",{children:"\u062a\u0639\u062f\u064a\u0644 \u0639\u0646\u0635\u0631"})]}),Object(o.jsxs)("li",{onClick:function(){return l("delete-element")},children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-trash-alt"})}),Object(o.jsx)("span",{children:"\u062d\u0630\u0641 \u0639\u0646\u0635\u0631"})]}),Object(o.jsxs)("li",{onClick:function(){return l(" ")},children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-unlock"})}),Object(o.jsx)("span",{children:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"})]}),Object(o.jsxs)("li",{onClick:function(){localStorage.clear(),I.push("/home")},children:[Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-sign-out-alt"})}),Object(o.jsx)("span",{children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c"})]})]})]})}),Object(o.jsxs)("div",{className:"field-container",children:[Object(o.jsx)("form",{onSubmit:a.handleSubmit,className:"field add-element ".concat("add"==C?"d-block":"d-none"),children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"\u0627\u0636\u0641 \u0639\u0646\u0635\u0631"}),Object(o.jsx)($,{arr:t,type:"text",val:a.values,handleChange:a.handleChange}),Object(o.jsx)($,{arr:n,type:"number",val:a.values,handleChange:a.handleChange}),Object(o.jsx)($,{arr:[{ar:"\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a",en:"arDep",childrens:["\u0627\u0641\u0644\u0627\u0645","\u0645\u0633\u0644\u0633\u0644\u0627\u062a"]},{ar:"\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629",en:"enDep",childrens:["movies","series"]},{ar:"\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u0649",en:"ar_subdep",childrens:["\u0623\u0641\u0644\u0627\u0645 \u0639\u0631\u0628\u0649","\u0627\u0641\u0644\u0627\u0645 \u0627\u062c\u0646\u0628\u0649","\u0623\u0641\u0644\u0627\u0645 \u0647\u0646\u062f\u0649","\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u0639\u0631\u0628\u0649","\u0645\u0633\u0644\u0633\u0644\u0627\u062a \u0623\u062c\u0646\u0628\u0649","\u0645\u0644\u0633\u0644\u0633\u0644\u0627\u062a \u0647\u0646\u062f\u0649"]},{ar:"\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u0649 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629",en:"en_subdep",childrens:["arabic-movies","english-movies","indian-movies","arabic-series","english-series","indian-series"]}],type:"select",handleChange:a.handleChange}),Object(o.jsx)("input",{ref:B,onChange:function(e){return function(e){T(e.target.files[0])}(e)},name:"img",type:"file"}),Object(o.jsx)("button",{className:"add-btn",type:"submit",children:"\u0627\u0636\u0627\u0641\u0629"})]})}),Object(o.jsxs)("div",{className:"field edit-element ".concat("edit"==C?"d-block":"d-none"),children:[Object(o.jsx)("h4",{children:"\u062a\u0639\u062f\u064a\u0644 \u0639\u0646\u0635\u0631"}),Object(o.jsxs)("div",{className:"select-inp",children:[Object(o.jsx)("label",{children:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0639\u0646\u0635\u0631"}),Object(o.jsx)("select",{className:"child-select",onChange:function(e){return t=e.target.value,void R.a.get("/api").then((function(e){var n=e.data.data.find((function(e){return e.el_id==t}));f(n),w("d-block"),t}));var t},children:u.map((function(e,t){return Object(o.jsx)("option",{value:e.el_id,children:e.title},t)}))})]}),Object(o.jsxs)("form",{onSubmit:s.handleSubmit,className:N,children:[t.map((function(e,t){return Object(o.jsxs)("div",{className:"txt-inp",children:[Object(o.jsx)("label",{htmlFor:e.en,children:e.ar}),Object(o.jsx)("input",{type:"text",onChange:function(t){s.handleChange(t),p[e.en]=t.target.value,f(p)},value:p[e.en]||"",name:e.en,className:"child-input"})]},t)})),n.map((function(e,t){return Object(o.jsxs)("div",{className:"txt-inp",children:[Object(o.jsx)("label",{htmlFor:e.en,children:e.ar}),Object(o.jsx)("input",{onChange:function(t){s.handleChange(t),p[e.en]=t.target.value,f(p)},value:p[e.en]||"",name:e.en,className:"child-input",type:"number"})]},t)})),Object(o.jsx)("button",{className:"update-btn",type:"submit",children:"\u062a\u062d\u062f\u064a\u062b"})]})]}),Object(o.jsxs)("div",{className:"field delete-element ".concat("delete"==C?"d-block":"d-none"),children:[Object(o.jsx)("h4",{children:"\u062d\u0630\u0641 \u0639\u0646\u0635\u0631"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),R.a.delete("/api/elements/delete",{headers:{id:e}}).then((function(t){if(t.data.deleted){var n=Object(Y.a)(d);n=n.filter((function(t){return t.el_id!=e})),P({type:W,payload:e}),h(n),alert(t.data.msg)}}))},className:"select-inp",children:[Object(o.jsx)("label",{children:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0639\u0646\u0635\u0631"}),Object(o.jsx)("select",{onChange:function(t){return e=t.target.value},name:"select-deleted",className:"child-select",children:u.map((function(e,t){return Object(o.jsx)("option",{value:e.el_id,children:e.title},t)}))}),Object(o.jsx)("button",{className:"delete-btn mt-3 d-block",type:"submit",children:"\u062d\u0630\u0641"})]})]}),Object(o.jsx)("div",{className:"field password-element ".concat("password"==C?"d-block":"d-none"),children:Object(o.jsxs)("form",{onSubmit:i.handleSubmit,className:"txt-inp",children:[Object(o.jsx)("h4",{children:"\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"}),Object(o.jsx)("input",{onChange:i.handleChange,name:"oldPass",className:"child-input",value:i.values.oldPass||"",type:"password",placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0642\u062f\u064a\u0645\u0629"})," ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{onChange:i.handleChange,name:"newPass",className:"child-input",value:i.values.newPass||"",type:"password",placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629"})," ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("button",{style:{marginRight:"20px"},className:"add-btn",type:"submit",children:"\u062d\u0641\u0638"})]})})]})]}):1},te=n(63),ne=(n(254),function(){var e;document.title="ah-akoam | login";var t=Object(k.g)(),n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],i=a[1],l=Object(E.a)({onSubmit:function(e,n){var c=n.resetForm;R.a.post("/api/auth/login",e).then((function(e){e.data.success?(localStorage.setItem("token",e.data.token),c(),i(e.data.msg),setTimeout((function(){t.push("/admin")}),2e3)):i(e.data.msg),setTimeout((function(){i("")}),3e3)})).catch((function(e){return console.log(e)}))},initialValues:{email:"",password:""}});return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:l.handleSubmit,className:"login-container text-center",children:[Object(o.jsx)("h4",{children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{required:!0,onChange:l.handleChange,name:"email",value:l.values.email,type:"email",placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u0649"})," ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{required:!0,onChange:l.handleChange,name:"password",value:l.values.password,type:"password",placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"})," ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"\u062f\u062e\u0648\u0644"})]}),""!=s?Object(o.jsx)("div",(e={className:"d-block text-center"},Object(te.a)(e,"className","msg"),Object(te.a)(e,"children",s),e)):null]})}),ce=n(19),ae=n(103);var se=function(){Object(r.c)((function(e){return e[0]}));var e=Object(r.b)();return Object(k.g)(),Object(c.useEffect)((function(){return R.a.get("/api").then((function(t){e(U(t.data.data))})).catch((function(e){return console.log(e)})),function(){return console.log("component dead .. the connection will destroyed")}}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{}),Object(o.jsx)(ce.a,{guards:[function(e,t,n){var c,a=localStorage.getItem("token");try{a?Object(ae.a)(a)&&(c=!0):c=!1}catch(s){c=!1,localStorage.clear()}e.meta.auth?"/admin"==e.location.pathname&&c?n():"/login"!=e.location.pathname||c?"/admin"!=e.location.pathname||c?"/login"==e.location.pathname&&c&&n.redirect("/"):n.redirect("/login"):n():n()}],children:Object(o.jsxs)(k.d,{children:[Object(o.jsx)(ce.b,{exact:!0,path:"/",component:G}),Object(o.jsx)(ce.b,{path:"/home",component:V}),Object(o.jsx)(ce.b,{exact:!0,path:"/departments",component:X}),Object(o.jsx)(ce.b,{path:"/departments/:dep?/:subdep?",component:H}),Object(o.jsx)(ce.b,{exact:!0,path:"/search",component:K}),Object(o.jsx)(ce.b,{exact:!0,path:"/elements",component:X}),Object(o.jsx)(ce.b,{path:"/elements/:element",component:p}),Object(o.jsx)(ce.b,{path:"/admin",component:ee,meta:{auth:!0}}),Object(o.jsx)(ce.b,{path:"/login",component:ne,meta:{auth:!0}}),Object(o.jsx)(ce.b,{exact:!0,path:"/404",component:Q}),Object(o.jsx)(ce.b,{component:Q})]})})]})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,264)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=Object(Y.a)(e);return t.type==A?(0!=n.length?n[0].push(t.payload):n.push(t.payload),n):t.type==W?(n[0]=n[0].filter((function(e){return e.el_id!=t.payload})),n):e},re=Object(l.a)(le);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(r.a,{store:re,children:Object(o.jsx)(se,{})})}),document.getElementById("root")),ie()},51:function(e,t,n){},65:function(e,t,n){}},[[256,1,2]]]);
//# sourceMappingURL=main.72738fc9.chunk.js.map