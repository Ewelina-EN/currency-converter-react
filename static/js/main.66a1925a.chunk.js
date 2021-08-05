(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{20:function(e,n,t){"use strict";t.r(n);var r,c,o,i,a,u,l,s,d,b,j,h,x,f=t(1),p=t.n(f),g=t(9),m=t.n(g),O=t(4),k=t(3),y=t(2),v=y.c.legend(r||(r=Object(k.a)(["\n    border: 1px solid ",";\n    background-color: ",";\n    color: ","; \n    padding: 10px;\n    border-radius: 5px;\n"])),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.firefly}),(function(e){return e.theme.color.white})),w=t(0),z=function(e){return Object(w.jsx)(v,{children:"KALKULATOR WALUTOWY"})},F=y.c.span(c||(c=Object(k.a)(["\n    color: ",";\n    display: inline-block;\n    width: 100%;\n    max-width: 150px;\n    margin-right: 5px;\n    text-align: center;\n"])),(function(e){return e.theme.color.black})),C=y.c.input(o||(o=Object(k.a)(["\n    border: 1px solid ",";\n    border-color: ",";\n    padding: 10px;\n    width: 100%;\n    max-width: 400px;\n    border-radius: 5px;\n"])),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black})),S=function(e){var n=e.amount,t=e.setAmount;return Object(w.jsxs)("label",{children:[Object(w.jsx)(F,{children:"Kwota do przeliczenia*:"}),Object(w.jsx)(C,{value:n,onChange:function(e){var n=e.target;return t(n.value)},type:"number",min:"0",step:"0.01",placeholder:"Kwota PLN",required:!0})]})},A=y.c.span(i||(i=Object(k.a)(["\n    color: ",";\n    display: inline-block;\n    width: 100%;\n    max-width: 150px;\n    margin-right: 5px;\n    text-align: center;\n"])),(function(e){return e.theme.color.black})),E=y.c.select(a||(a=Object(k.a)(["\n    border: 1px solid ",";\n    border-color: ",";\n    padding: 10px;\n    width: 100%;\n    max-width: 400px;\n    border-radius: 5px;\n"])),(function(e){return e.theme.color.lightGrey}),(function(e){return e.theme.color.black})),L=function(e){var n=e.currency,t=e.rates,r=e.setCurrency;return Object(w.jsxs)("label",{children:[Object(w.jsx)(A,{children:"Przelicz na*:"}),Object(w.jsx)(E,{value:n,onChange:function(e){var n=e.target;return r(n.value)},children:t.map((function(e){return Object(w.jsx)("option",{value:e.short,children:e.short},e.short)}))})]})},P=y.c.button(u||(u=Object(k.a)(["\n    border: none;\n    margin: 10px;\n    background-color: ",";\n    color: ",";\n    padding: 10px;\n    border-radius: 5px;\n        &:hover {\n            filter: brightness(110%);\n        }\n        &:active {\n            filter: brightness(120%);\n        }\n"])),(function(e){return e.theme.color.firefly}),(function(e){return e.theme.color.white})),D=function(e){var n=e.resetForm;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(P,{children:"Przelicz"}),Object(w.jsx)(P,{type:"reset",className:"button",onClick:n,children:"Wyczy\u015b\u0107"})]})},K=y.c.p(l||(l=Object(k.a)(["\n    color: ",";\n    text-align: center;\n"])),(function(e){return e.theme.color.white})),T=function(e){return Object(w.jsxs)(K,{children:["Kursy walut pobierane s\u0105 z Europejskiego Banku Centralnego. Aktualne na dzie\u0144: ",Object(w.jsx)("strong",{children:e.rates.date}),". Pola z oznaczeniem * wymagaj\u0105 wype\u0142nienia."]})},I=y.c.p(s||(s=Object(k.a)(["\n    background-color: ",";\n    border: 2px solid ","; ;\n    color: ","; \n    max-width: 700px;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 10px;\n    text-align: center;\n"])),(function(e){return e.theme.color.firefly}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.white})),B=function(e){var n=e.result;return Object(w.jsxs)(I,{children:["WYNIK:"," ",Object(w.jsxs)("strong",{children:[n.targetAmount," ",n.currency]})]})},N=y.c.p(d||(d=Object(k.a)(["\n    text-align: end;\n    padding: 0 30px;\n    margin: auto 20px;\n"]))),W=function(e){return e.toLocaleDateString(void 0,{day:"numeric",weekday:"long",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})},J=function(){var e=function(){var e=Object(f.useState)(new Date),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(f.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return Object(w.jsxs)(N,{children:["Dzisiaj jest"," ",W(e)]})},G=y.c.form(b||(b=Object(k.a)(["\n    width: 100%;\n    max-width: 600px;\n"]))),U=y.c.fieldset(j||(j=Object(k.a)(["\n    text-align: center;\n    margin: 20px auto;\n    padding: 20px 0 20px;\n    border: 2px solid ",";\n    border-radius: 10px;\n    background-color: ",";\n"])),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.azure})),Y=y.c.fieldset(h||(h=Object(k.a)(["\n    text-align: center;\n    margin: 20px auto;\n    padding: 20px 20px 20px;\n    border: 2px solid ",";\n    border-radius: 10px;\n    background-color: ",";\n"])),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.azure})),q=function(){return Object(w.jsx)(Y,{children:"Chwila cierpliwo\u015bci...\u0141aduj\u0119 kursy walut z Europejskiego Banku Centralnego \u23f3"})},H=y.c.fieldset(x||(x=Object(k.a)(["\n    text-align: center;\n    margin: 20px auto;\n    padding: 20px 0 20px;\n    border: 2px solid ",";\n    border-radius: 10px;\n    background-color: ",";\n"])),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.azure})),M=function(){return Object(w.jsx)(H,{children:"\ud83d\udee0\ufe0f Hmm... Co\u015b posz\u0142o nie tak. Spr\xf3buj jeszcze raz p\xf3\u017aniej..."})};var R,Q=function(){var e={targetAmount:" ",currency:" "},n=function(){var e=Object(f.useState)({state:"loading",date:null,rates:[{short:"loading"}]}),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(f.useEffect)((function(){setTimeout((function(){fetch("https://api.exchangerate.host/latest?base=PLN").then((function(e){if(!e.ok)throw new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){for(var n=[],t=0,c=Object.entries(e.rates);t<c.length;t++){var o=Object(O.a)(c[t],2),i=o[0],a=o[1];n.push({short:i,rate:a})}r({state:"ok",date:e.date,rates:n})})).catch((function(){return r({state:"error"})}))}),2e3)}),[]),t}(),t=Object(f.useState)(e),r=Object(O.a)(t,2),c=r[0],o=r[1],i=Object(f.useState)(""),a=Object(O.a)(i,2),u=a[0],l=a[1],s=Object(f.useState)(e.currency),d=Object(O.a)(s,2),b=d[0],j=d[1];return"loading"===n.state?q():"error"===n.state?M():Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(G,{onSubmit:function(e){e.preventDefault(),function(e,t){var r=n.rates.find((function(n){return n.short===e})).rate;o({targetAmount:(t*r).toFixed(2),currency:e})}(b,u)},children:[Object(w.jsxs)(U,{children:[Object(w.jsx)(z,{}),Object(w.jsx)(J,{}),Object(w.jsx)("p",{children:Object(w.jsx)(S,{amount:u,setAmount:l})}),Object(w.jsx)("p",{children:Object(w.jsx)(L,{rates:n.rates,currency:b,setCurrency:j})}),Object(w.jsx)("p",{children:Object(w.jsx)(D,{resetForm:function(){o(e),l(0)}})})]}),Object(w.jsx)(T,{rates:n}),Object(w.jsx)(B,{result:c})]})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))},X=t.p+"static/media/background.57674f4d.jpg",Z=Object(y.b)(R||(R=Object(k.a)(["\nhtml {\n    box-sizing: border-box;\n}\n\n*, ::after, ::before {\n    box-sizing: inherit;\n}\n\n#root {\n    font-family: 'Jaldi', sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background-image: url(\"",'");\n    background-size: cover;\n    background-position: center;\n}\n'])),X);m.a.render(Object(w.jsx)(p.a.StrictMode,{children:Object(w.jsxs)(y.a,{theme:{color:{black:"#000000",white:"#FFFFFF",firefly:"#0F2637",lightGrey:"#E7ECE6",azure:"#adffff9e"}},children:[Object(w.jsx)(Z,{}),Object(w.jsx)(Q,{})]})}),document.getElementById("root")),V()}},[[20,1,2]]]);
//# sourceMappingURL=main.66a1925a.chunk.js.map