(this.webpackJsonppokemons=this.webpackJsonppokemons||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(8),i=c.n(r),a=(c(14),c(4)),o=c.n(a),l=c(9),j=c(7),d=c(2),u=c.p+"static/media/logo.0444b39a.png",p=c.p+"static/media/ball-1.49e2fb42.png",m=c(0),b=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"header-logo_ball",children:Object(m.jsx)("img",{src:p,alt:"ball"})}),Object(m.jsx)("div",{className:"header-logo__pokeman",children:Object(m.jsx)("img",{src:u,alt:"pokemon"})})]})},h=c.p+"static/media/Heart1.c0316ea0.png",O=function(e){var t=e.setFilter,c=n.a.useState(!1),s=Object(d.a)(c,2),r=s[0],i=s[1],a=n.a.useState(!1),o=Object(d.a)(a,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{className:"categories",children:[Object(m.jsxs)("div",{className:"categories-favorites__wrapper",onClick:function(){return t("favorite")},children:[Object(m.jsx)("img",{className:"categories-img",src:h,alt:"heart"}),Object(m.jsx)("div",{className:"categories-favorites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]}),Object(m.jsx)("div",{className:"title",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(m.jsxs)("ul",{className:"categoriesList",children:[Object(m.jsxs)("li",{onClick:function(){return i(!r)},children:["\u041a\u043b\u0430\u0441\u0441\u044b",r&&Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){t("grass")},children:"Grass"}),Object(m.jsx)("li",{onClick:function(){t("normal")},children:"Normal"}),Object(m.jsx)("li",{onClick:function(){t("fire")},children:"Fire"}),Object(m.jsx)("li",{onClick:function(){t("water")},children:"Water"}),Object(m.jsx)("li",{onClick:function(){t("bug")},children:"Bug"})]})]}),Object(m.jsxs)("li",{onClick:function(){return j(!l)},children:["C\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",l&&Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Overgroth"}),Object(m.jsx)("li",{children:"Fire"})]})]})]})]})};var f=function(e){var t=e.id,c=e.name,s=e.type,n=e.image,r=e.deepState;return Object(m.jsxs)("button",{className:"pokemon-cart",onClick:function(){r(t)},children:[Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["\u2116",t]})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:n,alt:"pokemon"})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("strong",{className:"pokemon-cart__name",children:[" ",c]}),Object(m.jsxs)("div",{children:["Class: ",s]})]})]})},x=function(e){var t=e.pokemonsList,c=e.deepState,s=e.filter,r=(e.favorites,n.a.useState("")),i=Object(d.a)(r,2),a=i[0],o=i[1],l=n.a.useState(["name"]),j=Object(d.a)(l,1)[0];return Object(m.jsxs)("div",{className:"selectItems",children:[Object(m.jsx)("div",{className:"search-wrapper",children:Object(m.jsx)("label",{htmlFor:"search-form",children:Object(m.jsx)("input",{type:"search",name:"search-form",id:"search-form",className:"search-input",placeholder:"Search for...",value:a,onChange:function(e){return o(e.target.value)}})})}),function(e){return e.filter((function(e){return e.types[0].type.name===s||"All"===s||!0===e.favor?j.some((function(t){return e[t].toString().toLowerCase().indexOf(a.toLowerCase())>-1})):void 0}))}(t).map((function(e,t){return Object(m.jsx)(f,{id:e.id,name:e.name,image:e.sprites.other.dream_world.front_default,type:e.types[0].type.name,deepState:c},t)}))]})};var v=function(e){var t=e.pokiDescription;return Object(m.jsxs)("div",{className:"view-description",children:[Object(m.jsx)("div",{className:"view-description__name",children:t.name}),Object(m.jsx)("div",{className:"view-description__image",children:Object(m.jsx)("img",{src:t.sprites.other.dream_world.front_default,alt:""})}),Object(m.jsxs)("div",{className:"view-description__type",children:["Class:",t.types[0].type.name]}),Object(m.jsx)("div",{className:"view-description__heart",onClick:function(){return t.favor=!0},children:Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"view-description__heart",src:h,alt:"heart"})})})]})};var k=function(e){var t=e.myState,c=e.pokiDescription,s=e.setFavorites;return Object(m.jsx)("div",{className:"view",children:t&&Object(m.jsx)(v,{pokiDescription:c,setFavorites:s})})},g=function(e){var t=e.pokemonsList,c=n.a.useState(),s=Object(d.a)(c,2),r=s[0],i=s[1],a=n.a.useState("All"),o=Object(d.a)(a,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(b,{}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(O,{className:"categories",setFilter:j}),Object(m.jsx)(x,{pokemonsList:t,deepState:i,filter:l}),Object(m.jsx)(k,{myState:r,pokiDescription:t[r-1]})]})]})};var N=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),i=Object(d.a)(r,2),a=i[0],u=i[1],p=function(){var e=Object(j.a)(o.a.mark((function e(){var t,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){e.forEach(function(){var e=Object(j.a)(o.a.mark((function e(t){var s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.name));case 2:return s=e.sent,e.next=5,s.json();case 5:return r=e.sent,n((function(e){return[].concat(Object(l.a)(e),[r])})),e.next=9,c.sort((function(e,t){return e.id-t.id}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,u(s.next),r(s.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){p()}),[]),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(g,{pokemonsList:c})})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.727f861a.chunk.js.map