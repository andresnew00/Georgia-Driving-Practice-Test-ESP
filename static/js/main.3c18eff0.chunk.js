(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/steering-wheel.d05e8607.png"},17:function(e,t,n){e.exports=n(38)},22:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),s=n.n(o),i=(n(22),n(3)),c=n(10),u=n(11),l=n(12),d=n(15),p=n(13),m=n(16),h=n(1),w=[{question:"Cuando manejas de noche, debes bajar las luces cuando:",answers:[{type:"Incorrect",content:"Cuando las luces del otro vehiculo estan bajas"},{type:"Correct",content:"Cuando te encuentras con otro vehiculo"},{type:"Incorrect",content:"Cuando te acercas a una interseccion"}]},{question:"La ley de manos libres de Georgia le aplica a que de lo siguiente:",answers:[{type:"Correct",content:"Todos los conductores no importa la edad."},{type:"Incorrect",content:"Conductores Ancianos"},{type:"Incorrect",content:"Conductores menores de 21"}]},{question:"La ley de 'Move-Over' implica que los conductores:",answers:[{type:"Correct",content:"Moverse al menos una linea alejado de un vehiculo de emergencia que esta estacionado, o si no puede moverse, bajar la velocidad por debajo del limite de velocidad."},{type:"Incorrect",content:"Mantenerce en la linea derecha si manejas un tractor o trailer"},{type:"Incorrect",content:"Quitar vehiculos fuera de las lineas de trafico que siguen un accidente."}]},{question:"Si te ves envuelta en un accidente, uno de los requerimientos principales es:",answers:[{type:"Correct",content:"Bridar ayuda a los heridos."},{type:"Incorrect",content:"Notificar al setretario de estado."},{type:"Incorrect",content:"Notificar a tu corredor de seguros."}]},{question:"Que deberias hacer cuando ves una senal de trafico amarilla parpadeando en la siguiente interseccion?",answers:[{type:"Correct",content:"Baja la velocidad y procede con precaucion."},{type:"Incorrect",content:"Acelera antes de que la luz cambie a rojo."},{type:"Incorrect",content:"detenerse por completo antes de proceder."}]}],v=n(4);var f=function(e){return r.a.createElement("h2",{className:"question"},e.content)};var y=function(e){return r.a.createElement("div",{className:"questionCount"},"Pregunta ",r.a.createElement("span",null,e.counter)," de ",r.a.createElement("span",null,e.total))};var q=function(e){return r.a.createElement("li",{className:"answerOption"},r.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),r.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))};var g=function(e){return r.a.createElement(v.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},r.a.createElement("div",{key:e.questionId},r.a.createElement(y,{counter:e.questionId,total:e.questionTotal}),r.a.createElement(f,{content:e.question}),r.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map(function(t){return r.a.createElement(q,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})}))))};var C=function(e){return r.a.createElement(v.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},r.a.createElement("div",null,"Tu puntuacion es ",r.a.createElement("strong",null,e.totalScore," / 100 "),"!"))},E=n(14),S=n.n(E),b=(n(36),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},totalScore:0},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=w.map(function(t){return e.shuffleArray(t.answers)});this.setState({question:w[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<w.length?setTimeout(function(){return t.setNextQuestion()},300):setTimeout(function(){return t.setResults(t.getResults())},300)}},{key:"valueOfQuesion",value:function(){return 100/w.length}},{key:"setUserAnswer",value:function(e){this.setState(function(t,n){return{answersCount:Object(c.a)({},t.answersCount,Object(i.a)({},e,(t.answersCount[e]||0)+1)),answer:e}}),"Correct"===e&&this.setState({totalScore:this.state.totalScore+this.valueOfQuesion()})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:w[e].question,answerOptions:w[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map(function(t){return e[t]}),a=Math.max.apply(null,n);return t.filter(function(t){return e[t]===a})}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return r.a.createElement(g,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:w.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return r.a.createElement(C,{totalScore:this.state.totalScore})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,"Practica para el examen de manejo de Georgia")),this.state.result?this.renderResult():this.renderQuiz())}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.3c18eff0.chunk.js.map