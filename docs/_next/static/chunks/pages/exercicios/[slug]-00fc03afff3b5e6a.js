(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{5862:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r,i,o,a,u,c,s,l,d,f,h,p=t(1163),g=t(7294),x=t(2834),m=t(3775),b=t(1383),j=t(4589),y={default:14,selected:10},v={diff:function(n,e){return n-e},half:function(n){return .5*n},ratio:function(n,e){return n/e},ProportionalValue:function(n,e){return n*e}},Z=j.ZP.span(r||(r=(0,b.Z)(["\n    padding: 1rem;\n    border-radius: 7px;\n    color: rgba(255, 255, 255, 1);\n    background-color: rgba(0, 0, 255, 1);\n    cursor: pointer;\n"]))),w=j.ZP.span(i||(i=(0,b.Z)(['\n    position: relative;\n    display: flex;\n    margin-right: 1rem;\n    padding-left: 2rem;\n    cursor: pointer;\n    \n    &:before,\n    &:after {\n        content: "";\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 0;\n        width: ',"px;\n        height: ","px;\n        margin-top: ","px;\n        margin-right: inherit;\n        border-radius: 100%;\n        border: solid 1px rgba(128, 128, 128, 1);\n    }\n\n    &:after {\n        width: ","px;\n        height: ","px;\n        border: none;\n        transform: translate3d(",");\n        background-color: ",";\n    }\n\n    &.choosed-",":after{\n        background-color: rgba(0, 0, 255, 1);\n    }\n"])),function(n){return n.size||y.default},function(n){return n.size||y.default},function(n){return -1*v.half(n.size||y.default)},function(n){return n.size?v.ProportionalValue(n.size,v.ratio(y.selected,n.size)):y.selected},function(n){return n.size?v.ProportionalValue(n.size,v.ratio(y.selected,n.size)):y.selected},function(n){var e=v.diff(y.selected,v.half(n.size||y.default));return"".concat(e,"px, ").concat(e,"px, 0")},function(n){return n.filled&&"rgba(0, 0, 255, 1)"},function(n){return n.choosedId}),k=j.ZP.aside(o||(o=(0,b.Z)(["\n    position: relative;\n    display: flex;\n    display: grid;\n    grid-auto-flow: column;\n"]))),P=j.ZP.article(a||(a=(0,b.Z)(["\n    flex-grow: 1;\n    grid-row: 1;\n    grid-column: 1;\n    visibility: hidden;\n    visibility: ",";\n"])),function(n){return n.visible&&"visible"}),S=j.ZP.section(u||(u=(0,b.Z)(["\n    margin-bottom: 1rem;\n"]))),_=j.ZP.hgroup(c||(c=(0,b.Z)(["\n"]))),z=j.ZP.ul(s||(s=(0,b.Z)(["\n    list-style-type: none;\n    margin: unset;\n    padding: unset unset unset 0.625rem;\n"]))),E=j.ZP.li(l||(l=(0,b.Z)(["\n    display: flex;\n    margin-bottom: 0.25rem;\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    cursor: ",";\n\n    &.right {\n        background-color: rgba(0, 255, 0, .33);\n    }\n\n    &.wrong {\n        background-color: rgba(255, 0, 0, .33);\n    }\n"])),function(n){return n.clickable&&"pointer"}),C=j.ZP.div(d||(d=(0,b.Z)(["\n    grid-row: 2;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n"]))),q=j.ZP.div(f||(f=(0,b.Z)(["\n    display: flex;\n    flex-grow: 1;\n"]))),A=(0,j.ZP)(Z)(h||(h=(0,b.Z)(["\n    margin-right: 1rem;\n"]))),N=t(5893),I=(0,g.memo)(function(n){var e=n.data,t=(0,g.useState)(0),r=t[0],i=t[1],o=(0,g.useState)(0),a=o[0],u=o[1],c=(0,g.useState)(!1),s=c[0],l=c[1],d=(0,g.useState)(new Map),f=d[0],h=d[1],p=function(n){u(n),f.set(r,n)},x=function(){l(!0),f.set(r,a),h(new Map(f))},m=function(){l(!1),i(r+1)},b=function(){l(!1),i(r-1)};return(0,g.useEffect)(function(){},[e,r]),(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(k,{children:[e.map(function(n,e){return(0,N.jsxs)(P,{visible:r===e,children:[(0,N.jsxs)(_,{children:[(0,N.jsx)("h2",{children:n.tema}),(0,N.jsx)("h3",{children:n.subtema})]}),(0,N.jsxs)(S,{children:[(0,N.jsxs)(_,{children:[(0,N.jsx)("h4",{children:n.questao.enunciado.objetivo}),(0,N.jsx)("h5",{children:n.questao.enunciado.titulo})]}),(0,N.jsx)(z,{children:n.questao.enunciado.opcoes.map(function(n,e){return(0,N.jsx)(E,{clickable:!1,children:n.texto},e)})})]}),(0,N.jsx)(S,{children:(0,N.jsx)(z,{children:n.questao.alternativas.map(function(e,t){return(0,N.jsxs)(E,{clickable:!0,className:s&&e.id===n.questao.resposta?"right":s&&e.id!==n.questao.resposta?"wrong ":"",onClick:function(){return p(e.id)},children:[(0,N.jsxs)(w,{className:"choosed-".concat(f.get(r)&&e.id===f.get(r)&&e.id),choosedId:f.get(r)&&e.id===f.get(r)&&e.id,size:14,children:[e.letra,"."]}),(0,N.jsx)("span",{children:e.texto})]},e.id)})})})]},e)}),(0,N.jsxs)(C,{children:[(0,N.jsx)(A,{onClick:function(){return x()},children:"Verificar Resposta"}),(0,N.jsxs)(q,{children:[r>0&&(0,N.jsx)(A,{onClick:function(){return b()},children:"Anterior"}),r<e.length-1&&(0,N.jsx)(A,{onClick:function(){return m()},children:"Pr\xf3ximo"})]})]})]})})});function O(){var n=(0,p.useRouter)(),e=n.pathname,t=n.query.slug,r=(0,g.useContext)(x.o).exercicios,i=(0,g.useState)([]),o=i[0],a=i[1],u=(0,g.useState)([]),c=u[0],s=u[1];return(0,g.useEffect)(function(){s([{title:e,href:e},{title:t,href:t}])},[t]),(0,g.useEffect)(function(){a(r.filter(function(n){return n.disciplina===t}))},[r]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h2",{children:["Exerc\xedcio - ",t]}),(0,N.jsx)(m.Z,{items:c}),(0,N.jsx)(I,{data:o})]})}},3775:function(n,e,t){"use strict";var r=t(1664),i=t.n(r),o=t(7294),a=t(9298),u=t(3403),c=t(5893);function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}e.Z=(0,o.memo)(function(n){var e=n.items,t=(0,o.useState)([]),r=t[0],l=t[1],d=function(n){return"".concat(n)},f=function(n){return/\//.test(n)},h=function(n){return f(n)?n.split("/")[1]:n};return(0,o.useEffect)(function(){var n=[{title:(0,c.jsx)(i(),{href:"/",children:(0,c.jsx)(u.Z,{})})}];if(!e.find(function(n){return!n.title})){var t,r=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return s(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(n,e)}}(n))){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){u=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}(e);try{for(r.s();!(t=r.n()).done;){var o,a=t.value;n.push({title:(0,c.jsx)(i(),{href:"".concat((o=d(a.title),f(o)?"/".concat(h(o)):h(o))),children:h(d(a.title))})})}}catch(n){r.e(n)}finally{r.f()}}l(n)},[e]),(0,c.jsx)("aside",{style:{marginBottom:"1.5rem",paddingLeft:"0.625rem"},children:(0,c.jsx)(a.Z,{items:r})})})},685:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercicios/[slug]",function(){return t(5862)}])}},function(n){n.O(0,[824,365,73,774,888,179],function(){return n(n.s=685)}),_N_E=n.O()}]);