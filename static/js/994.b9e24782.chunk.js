"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[994],{994:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(4165),r=t(5861),s=t(885),i=t(2791),o=t(7940),c=t(1413),l=t(5987),u=t(1694),m=t.n(u),d=t(162),p=t(184),f=["bsPrefix","variant","animation","size","as","className"],h=i.forwardRef((function(e,n){var t=e.bsPrefix,a=e.variant,r=e.animation,s=e.size,i=e.as,o=void 0===i?"div":i,u=e.className,h=(0,l.Z)(e,f);t=(0,d.vE)(t,"spinner");var b="".concat(t,"-").concat(r);return(0,p.jsx)(o,(0,c.Z)((0,c.Z)({ref:n},h),{},{className:m()(u,b,s&&"".concat(b,"-").concat(s),a&&"text-".concat(a))}))}));h.displayName="Spinner";var b=h,v=t(9870),x=function(){var e=(0,i.useState)(!0),n=(0,s.Z)(e,2),t=n[0],c=n[1],l=(0,i.useState)(!1),u=(0,s.Z)(l,2),m=u[0],d=u[1],f=(0,i.useContext)(v.Z),h=(0,o.s0)(),x="AIzaSyDkgp2CGJkhyNzuF3WebKJvyjudjDu0aac",g=(0,i.useRef)(),j=(0,i.useRef)(),y=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var r,s,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=g.current.value,s=j.current.value,localStorage.setItem("userId",r.slice(0,r.indexOf("@"))),d(!0),i=t?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(x):"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(x),fetch(i,{method:"POST",body:JSON.stringify({email:r,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return d(!1),e.ok?e.json():e.json().then((function(e){var n="Authentication failed!";throw e&&e.error&&e.error.message&&(n=e.error.message),new Error(n)}))})).then((function(e){var n=new Date((new Date).getTime()+1e3*+e.expiresIn);f.loginHandler(e.idToken,n.toString()),h(-1,{replace:!0})})).catch((function(e){alert(e.message)}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsx)("section",{className:"auth-section container mt-5 p-5",children:(0,p.jsxs)("form",{className:"auth-form",onSubmit:y,children:[(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"emailInput",className:"form-label",children:"Email"}),(0,p.jsx)("input",{type:"email",className:"form-control",id:"emailInput","aria-describedby":"emailHelp",ref:g})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"passwordInput",className:"form-label",children:"\u5bc6\u78bc"}),(0,p.jsx)("input",{type:"password",className:"form-control",id:"passwordInput",ref:j})]}),m?(0,p.jsx)("div",{className:"d-flex m-5 justify-content-center",children:(0,p.jsx)(b,{animation:"border",variant:"warning"})}):(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"button",className:"btn btn-toggleMode border-0",onClick:function(){c((function(e){return!e}))},children:t?"Create Account":"Login with existing account"})}),!m&&(0,p.jsx)("button",{type:"submit",className:"btn btn-submit",children:t?"Signin":"Signup"})]})})}}}]);
//# sourceMappingURL=994.b9e24782.chunk.js.map