(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),s=n(5),l=n(4),i=n(1),u=(n(12),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.timerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({date:new Date}),console.log(e.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;e.clockName!==t&&console.log("Renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(i.Component);function d(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!1,clockName:d()},e.classNameId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",(function(){e.setState({hasClock:!0}),document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})}))})),this.classNameId=window.setInterval((function(){e.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.classNameId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{clockName:n})]})}}]),n}(i.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a9933dbb.chunk.js.map