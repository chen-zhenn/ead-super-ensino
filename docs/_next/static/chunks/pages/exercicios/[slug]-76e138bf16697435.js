(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{5862:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return nn}});var t,i,o,a,s,c,d,u,l,f,g,p,h,m,x,b,y,j,Z,v,w=r(1163),k=r(7294),P=r(2834),z=r(3775),S=r(1383),_=r(4589),E={bg:"rgba(248, 250, 252, 1)",light:"rgba(255, 255, 255, 1)",grey:"rgba(239, 239, 237, 1)",dark:"rgba(228, 228, 226, 1)",mid:"rgba(206, 206, 204, 1)",featured:"rgba(65, 130, 242, 1)",featuredPrimary:"rgba(48, 156, 219, 1)",featuredSecondary:"rgba(55, 229, 249, 1)"},C={default:14,selected:10},q={diff:function(n,e){return n-e},half:function(n){return .5*n},ratio:function(n,e){return n/e},ProportionalValue:function(n,e){return n*e}},A=_.ZP.span(t||(t=(0,S.Z)(["\n    padding: 1rem;\n    border-radius: 7px;\n    color: ",";\n    background-color: ",";\n    cursor: pointer;\n    transition: background-color .5s ease;\n\n    &:hover {\n        background-color: ","; \n    }\n"])),E.light,E.featured,E.featuredSecondary),N=_.ZP.span(i||(i=(0,S.Z)(['\n    position: relative;\n    display: flex;\n    margin-right: 1rem;\n    padding-left: 2rem;\n    cursor: pointer;\n    \n    &:before,\n    &:after {\n        content: "";\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 0;\n        width: ',"px;\n        height: ","px;\n        margin-top: ","px;\n        margin-right: inherit;\n        border-radius: 100%;\n        border: solid 1px ",";\n    }\n\n    &:after {\n        width: ","px;\n        height: ","px;\n        border: none;\n        transform: translate3d(",");\n        background-color: ",";\n    }\n\n    &.choosed-",":after{\n        background-color: ",";\n    }\n"])),function(n){return n.size||C.default},function(n){return n.size||C.default},function(n){return -1*q.half(n.size||C.default)},E.mid,function(n){return n.size?q.ProportionalValue(n.size,q.ratio(C.selected,n.size)):C.selected},function(n){return n.size?q.ProportionalValue(n.size,q.ratio(C.selected,n.size)):C.selected},function(n){var e=q.diff(C.selected,q.half(n.size||C.default));return"".concat(e,"px, ").concat(e,"px, 0")},function(n){return n.filled&&E.featured},function(n){return n.choosedId},E.featured),I=_.ZP.ul(o||(o=(0,S.Z)(["\n    list-style-type: none;\n    margin: unset;\n    padding: unset;\n"]))),O=_.ZP.div(a||(a=(0,S.Z)(["\n"]))),V=_.ZP.header(s||(s=(0,S.Z)([""]))),X=_.ZP.aside(c||(c=(0,S.Z)(["\n    position: relative;\n    display: ",";\n    display: ",";\n    grid-auto-flow: column;\n"])),function(n){return n.steps&&"flex"},function(n){return n.steps&&"grid"}),M=_.ZP.aside(d||(d=(0,S.Z)(["\n    display: grid;\n"]))),T=_.ZP.div(u||(u=(0,S.Z)(["\n    grid-row: 1;\n    grid-column: 1;\n    align-self: center;\n    width: 100%;\n    height: 3px;\n    background-color: ",";\n    transform-origin: top left;\n    transform: scaleX(0);\n    transition: transform .16s ease-in-out; \n    visibility: hidden;\n    z-index: -3;\n\n    @media(min-width: ",") {\n        transform: scaleX(",");\n        visibility: visible;\n    }\n"])),E.featured,"992px",function(n){return n.perc}),R=(0,_.ZP)(I)(l||(l=(0,S.Z)(["\n    grid-row: 1;\n    grid-column: 1;\n    display: flex;\n    flex-wrap: wrap;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    z-index: 5;\n"]))),B=_.ZP.li(f||(f=(0,S.Z)(["\n    display: flex;\n    align-items: center;\n    padding-top: 0.625rem;\n    padding-bottom: 0.625rem;\n"]))),F=_.ZP.span(g||(g=(0,S.Z)(["\n    overflow: hidden;\n    position: relative;\n    justify-self: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    margin-right: 0.625rem;\n    border: ",";\n    border-radius: 50%;\n    font-weight: 700;\n    color: ",';\n\n    &:before,\n    &:after {\n        content: "";\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        color: inherit;\n        transition: transform 0.5s ease-in-out, background-color 0.75s ease-in-out;\n        z-index: -1;\n    }\n\n    &:before {\n        background-color: ',";\n        transform: ",";\n    }\n\n    &:after {\n        background-color: ",";\n        transform: ",";\n    }\n"])),function(n){return n.done&&"solid 1px ".concat(E.featured)},function(n){return n.done?E.light:E.dark},function(n){return n.done?E.featured:E.grey},function(n){return n.done?"scale(0)":"scale(.75)"},function(n){return n.done?E.featured:E.grey},function(n){return n.done?"scale(.75)":"scale(0)"}),L=_.ZP.span(p||(p=(0,S.Z)(["\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    font-size: 1.25rem;\n    font-weight: 500;\n    background-color: ",";\n    color: ",";\n"])),E.light,function(n){return n.done?E.featured:E.grey}),U=_.ZP.article(h||(h=(0,S.Z)(["\n    flex-grow: 1;\n    grid-row: 1;\n    grid-column: 1;\n    padding-right: 1.875rem;\n    padding-left: 1.875rem;\n    background-color: ",";\n    visibility: hidden;\n    visibility: ",";\n"])),E.bg,function(n){return n.visible&&"visible"}),$=_.ZP.section(m||(m=(0,S.Z)(["\n    margin-bottom: 1rem;\n"]))),D=_.ZP.hgroup(x||(x=(0,S.Z)(["\n"]))),G=(0,_.ZP)(I)(b||(b=(0,S.Z)(["\n    padding: unset unset unset 0.625rem;\n"]))),H=_.ZP.li(y||(y=(0,S.Z)(["\n    display: flex;\n    margin-bottom: 0.25rem;\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    cursor: ",";\n\n    &.right {\n        background-color: rgba(0, 255, 0, .33);\n    }\n\n    &.wrong {\n        background-color: rgba(255, 0, 0, .33);\n    }\n"])),function(n){return n.clickable&&"pointer"}),J=_.ZP.div(j||(j=(0,S.Z)(["\n    grid-row: 2;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n"]))),K=_.ZP.div(Z||(Z=(0,S.Z)(["\n    display: flex;\n    flex-grow: 1;\n"]))),Q=(0,_.ZP)(A)(v||(v=(0,S.Z)(["\n    margin-right: 1rem;\n    color: ",";\n    background-color: ",";\n    pointer-events: ",";\n"])),function(n){return n.disabled&&E.mid},function(n){return n.disabled&&E.grey},function(n){return n.disabled&&"none"}),W=r(5893),Y=(0,k.memo)(function(n){var e=n.data,r=(0,k.useState)(0),t=r[0],i=r[1],o=(0,k.useState)(0),a=o[0],s=o[1],c=(0,k.useState)(!1),d=c[0],u=c[1],l=(0,k.useState)(new Map),f=l[0],g=l[1],p=function(n){s(n),f.set(t,n)},h=function(){u(!0),f.set(t,a),g(new Map(f))},m=function(){u(!1),i(t+1),s(0)},x=function(){u(!1),i(t-1),s(0)};return(0,W.jsxs)(O,{children:[(0,W.jsx)(V,{children:(0,W.jsxs)(M,{children:[(0,W.jsx)(T,{perc:t/e.length}),(0,W.jsx)(R,{children:e.map(function(n,e){return(0,W.jsxs)(B,{children:[(0,W.jsx)(F,{done:t>=e,children:e+1}),(0,W.jsx)(L,{done:t>=e,children:n.tema})]},e)})})]})}),(0,W.jsxs)(X,{steps:!0,children:[e.map(function(n,e){return(0,W.jsxs)(U,{visible:t===e,children:[(0,W.jsx)(D,{children:(0,W.jsx)("h3",{children:n.subtema})}),(0,W.jsxs)($,{children:[(0,W.jsxs)(D,{children:[(0,W.jsx)("h4",{children:n.questao.enunciado.objetivo}),(0,W.jsx)("h5",{children:n.questao.enunciado.titulo})]}),(0,W.jsx)(G,{children:n.questao.enunciado.opcoes.map(function(n,e){return(0,W.jsx)(H,{clickable:!1,children:n.texto},e)})})]}),(0,W.jsx)($,{children:(0,W.jsx)(G,{children:n.questao.alternativas.map(function(e,r){return(0,W.jsxs)(H,{clickable:!0,className:d&&e.id===n.questao.resposta?"right":d&&e.id!==n.questao.resposta?"wrong ":"",onClick:function(){return p(e.id)},children:[(0,W.jsxs)(N,{className:f.get(t)&&e.id===f.get(t)&&"choosed-".concat(e.id),choosedId:f.get(t)&&e.id===f.get(t)&&e.id,filled:e.id===a,size:14,children:[e.letra,"."]}),(0,W.jsx)("span",{children:e.texto})]},e.id)})})})]},e)}),(0,W.jsxs)(J,{children:[(0,W.jsx)(Q,{disabled:!a&&!f.get(t),onClick:function(){return h()},children:"Verificar Resposta"}),(0,W.jsxs)(K,{children:[t>0&&(0,W.jsx)(Q,{disabled:!a&&!f.get(t),onClick:function(){return x()},children:"Anterior"}),t<e.length-1&&(0,W.jsx)(Q,{disabled:!a&&!f.get(t),onClick:function(){return m()},children:"Pr\xf3ximo"})]})]})]})]})});function nn(){var n=(0,w.useRouter)(),e=n.pathname,r=n.query.slug,t=(0,k.useContext)(P.o).exercicios,i=(0,k.useState)([]),o=i[0],a=i[1],s=(0,k.useState)([]),c=s[0],d=s[1];return(0,k.useEffect)(function(){d([{title:e,href:e},{title:r,href:r}])},[r]),(0,k.useEffect)(function(){a(t.filter(function(n){return n.disciplina===r}))},[t]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("h2",{children:["Exerc\xedcio - ",r]}),(0,W.jsx)(z.Z,{items:c}),(0,W.jsx)(Y,{data:o})]})}},3775:function(n,e,r){"use strict";var t=r(1664),i=r.n(t),o=r(7294),a=r(9298),s=r(3403),c=r(5893);function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}e.Z=(0,o.memo)(function(n){var e=n.items,r=(0,o.useState)([]),t=r[0],u=r[1],l=function(n){return"".concat(n)},f=function(n){return/\//.test(n)},g=function(n){return f(n)?n.split("/")[1]:n};return(0,o.useEffect)(function(){var n=[{title:(0,c.jsx)(i(),{href:"/",children:(0,c.jsx)(s.Z,{})})}];if(!e.find(function(n){return!n.title})){var r,t=function(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return d(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if("Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(n,e)}}(n))){r&&(n=r);var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){s=!0,o=n},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}(e);try{for(t.s();!(r=t.n()).done;){var o,a=r.value;n.push({title:(0,c.jsx)(i(),{href:"".concat((o=l(a.title),f(o)?"/".concat(g(o)):g(o))),children:g(l(a.title))})})}}catch(n){t.e(n)}finally{t.f()}}u(n)},[e]),(0,c.jsx)("aside",{style:{marginBottom:"1.5rem",paddingLeft:"0.625rem"},children:(0,c.jsx)(a.Z,{items:t})})})},685:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercicios/[slug]",function(){return r(5862)}])}},function(n){n.O(0,[824,365,73,774,888,179],function(){return n(n.s=685)}),_N_E=n.O()}]);