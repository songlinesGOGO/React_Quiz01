(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(16),i=t.n(s),o=t(14),c=t.n(o),l=(t(34),t(17)),u=t(18),m=t(22),w=t(19),h=t(23),d=t(10),C=[{question:"Which animal can use coins to buy vending machine snacks?",answers:[{answer:"Pandas in China",isCorrect:!1},{answer:"Macaques in Japan",isCorrect:!0},{answer:"Crows in Russia",isCorrect:!1},{answer:"Chimpanzees in Cameroon",isCorrect:!1}]},{question:"How many times did The Beatles used the word \u201clove\u201d in their songs?",answers:[{answer:"372",isCorrect:!1},{answer:"448",isCorrect:!1},{answer:"584",isCorrect:!1},{answer:"613",isCorrect:!0}]},{question:"Which animal can breathe through their butts?",answers:[{answer:"Chickens",isCorrect:!1},{answer:"Crabs",isCorrect:!1},{answer:"Whales",isCorrect:!1},{answer:"Turtles",isCorrect:!0}]},{question:"Where can you find a basketball court?",answers:[{answer:"On top of the U.S. Supreme Court building",isCorrect:!0},{answer:"On the basement floor of the Russian Ministry of Defense",isCorrect:!1},{answer:"In the Japanese royal palace",isCorrect:!1},{answer:"Next to the Ministry of Education in Canada",isCorrect:!1}]},{question:"Which animal hold hands when they sleep to keep from drifting apart?",answers:[{answer:"Dolphins",isCorrect:!1},{answer:"Crabs",isCorrect:!1},{answer:"Otters",isCorrect:!0},{answer:"Penguins",isCorrect:!1}]},{question:"In which country is it illegal to own only one guinea pig?",answers:[{answer:"France",isCorrect:!1},{answer:"Switzerland",isCorrect:!0},{answer:"U.S.",isCorrect:!1},{answer:"Austria",isCorrect:!1}]},{question:"How many calories kissing burns a minute?",answers:[{answer:"1 calories",isCorrect:!1},{answer:"2 calories",isCorrect:!0},{answer:"3 calories",isCorrect:!1},{answer:"4 calories",isCorrect:!1}]},{question:"How many HIV patients have been cured of it as of July 2022?",answers:[{answer:"4",isCorrect:!1},{answer:"5",isCorrect:!0},{answer:"6",isCorrect:!1},{answer:"7",isCorrect:!1}]}],p=t(13);function v(e){var a=Object(n.useState)(0),t=Object(p.a)(a,2),s=t[0],i=t[1],o=Object(n.useState)(0),c=Object(p.a)(o,2),l=c[0],u=c[1],m=Object(n.useState)(!1),w=Object(p.a)(m,2),h=w[0],d=w[1];return r.a.createElement("div",null,h?r.a.createElement("div",{className:"score-section"},r.a.createElement("p",null,"You scored ",l," out of ",e.value),r.a.createElement("p",{className:"score-tryagain"},r.a.createElement("a",{href:"/"},"TRY AGAIN"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"question-section"},r.a.createElement("div",{className:"question-count"},r.a.createElement("span",null,"Question ",s),"/",e.value),r.a.createElement("div",{className:"question-text"},C[s].question)),r.a.createElement("div",{className:"answer-section"},C[s].answers.map(function(a,t){return r.a.createElement("button",{key:t,onClick:function(){return function(a){var t=s+1;i(t),t<e.value?i(t):d(!0),a&&u(l+1)}(a.isCorrect)}},a.answer)}))))}var E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(w.a)(a).call(this,e))).state={value:""},t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},this.state.value?r.a.createElement("div",null,r.a.createElement(v,{value:this.state.value})):r.a.createElement("div",{className:"question-section"},r.a.createElement("div",{className:"question-select"},r.a.createElement("span",null,"Select the number of questions:"),r.a.createElement("div",{value:this.state.value,onChange:this.handleChange,className:"input"},r.a.createElement("input",{type:"radio",value:"4",name:"4",style:{marginLeft:0}}),"4",r.a.createElement("input",{type:"radio",value:"4",name:"6"}),"6",r.a.createElement("input",{type:"radio",value:"4",name:"8"}),"8"),r.a.createElement("div",{className:"question-sentence"},"Need a bit of happier mood for you today?",r.a.createElement("br",null),"Try Happy Trivia Quiz and brighten your mood \ud83d\ude01"))))}}]),a}(r.a.Component),f=t(7),b=t(59),y=t(57),g=t(58);var N=Object(f.a)({root:{margin:0},color:{backgroundColor:"#9656a1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10,padding:25},whiteColor:{color:"#fff",fontFamily:"Futura"}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,{position:"static",className:a.color},r.a.createElement(y.a,{variant:"regular"},r.a.createElement(g.a,{variant:"h3",className:a.whiteColor},"Happy Trivia Quiz"))))}),q=t(21),k=t.n(q),O=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,"React Quiz App"),"copyright\xa0",r.a.createElement(k.a,null),"\xa0",r.a.createElement("a",{href:"http://www.yoshikok.org",target:"_blank",rel:"noopener noreferrer"},"yoshikok.org"))};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{query:"(min-width: 767px)"},r.a.createElement("div",{className:"pc_tablet"},r.a.createElement(N,null),r.a.createElement(E,null),r.a.createElement(O,null))),r.a.createElement(c.a,{query:"(max-width: 766px)"},r.a.createElement("div",{className:"mobile"},r.a.createElement(N,null),r.a.createElement(E,null),r.a.createElement(O,null)))))}},[[25,2,1]]]);
//# sourceMappingURL=main.bfe8a9da.chunk.js.map