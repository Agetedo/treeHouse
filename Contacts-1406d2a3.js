import{j as e,r as o,E as j}from"./index-b4652dce.js";import{F as g}from"./vision-label-image-c57c7cff.js";const f="/social-contacts-label.png",v="/svg/social-contacts-icon.svg",S=[{id:"socL01",linlText:"Instagram",linkTo:"https://www.instagram.com/"},{id:"socL02",linlText:"Facebook",linkTo:"https://www.facebook.com/"},{id:"socL03",linlText:"Vip group",linkTo:"https://web.telegram.org/"}],N="/svg/vip-group-popup-icon.svg";function _({caption:s,title:t,text:n,emailCaption:i,email:c,explication:l}){return e.jsxs("div",{className:"social-contacts__email",children:[e.jsx("img",{src:v,alt:"#"}),e.jsx("p",{className:"social-contacts__caption",children:s}),e.jsx("h2",{className:"social-contacts__title",children:t}),e.jsx("p",{className:"social-contacts__text",children:n}),e.jsx("span",{id:"socialEmail",children:i}),e.jsx("p",{id:"socialEmailAddress",children:c}),e.jsx("p",{className:"social-contacts__explication",children:l})]})}function b({text:s,children:t}){return e.jsxs("div",{id:"socialTooltip",children:[t,e.jsx("p",{className:"tooltip-text",children:e.jsx("span",{children:s})})]})}const T=S.map(s=>e.jsx("li",{className:"social-item",children:e.jsx("a",{rel:"noopener",target:"_blank",href:s.linkTo,children:s.linlText})},s.id));function C({title:s,text:t}){return e.jsxs("div",{className:"social-links",children:[e.jsx("h4",{children:s}),e.jsx("ul",{className:"social-list",children:T}),e.jsx(b,{text:t,children:e.jsx("img",{id:"vipPopupIcon",src:N,alt:"#"})})]})}function E({title:s,hours:t}){return e.jsxs("div",{className:"social-contacts__hours",children:[e.jsx("h4",{children:s}),e.jsx("p",{id:"businessHours",children:t})]})}function y(){return e.jsxs("div",{className:"social-contacts",children:[e.jsx("img",{id:"socialContactsLabel",src:f,alt:"#"}),e.jsx("div",{className:"conteiner",children:e.jsxs("section",{className:"social-contacts__items",children:[e.jsx(_,{caption:"Drop us a line!",title:"Let's be social!",text:"We're here to help, for everything and anything, chat us here!",emailCaption:"EMAIL",email:"info@mygreenkid.com",explication:"For inquiries, returns, and exchanges and any question"}),e.jsxs("div",{className:"social-contacts__links",children:[e.jsx(C,{title:"Our social",text:"“The Green Kid Parents” — is a Telegram community group for The Green Kid and Treehouse parents"}),e.jsx(E,{title:"Business hours",hours:"8am-8pm"})]})]})})]})}const F="/form-image01.jpg",L="/form-image02.jpg",w="/contacts-form-label-image.png";function k({title:s}){return e.jsx("h2",{className:"contacts-form__title",children:s})}function I({buttonSend:s}){const[t,n]=o.useState(""),[i,c]=o.useState(""),[l,d]=o.useState(""),[h,u]=o.useState("");function p(a){a.preventDefault();const r=a.target,m=new FormData(r);fetch("/some-api",{method:r.method,body:m});const x=Object.fromEntries(m.entries());console.log(x)}return e.jsx(j,{fallback:e.jsx("p",{style:{color:"red",textAlign:"center",fontSize:20,paddingTop:30},children:"There was an error while submitting the form"}),children:e.jsxs("form",{id:"contactsForm",method:"post",onSubmit:p,children:[e.jsx("input",{type:"text",id:"nameSend",name:"name",autoComplete:"off",value:t,onChange:a=>n(a.target.value),placeholder:"NAME"}),e.jsx("input",{type:"email",id:"emailSend",name:"email",autoComplete:"off",value:i,onChange:a=>c(a.target.value),placeholder:"EMAIL"}),e.jsx("input",{type:"tel",id:"telephoneSend",name:"telephone",autoComplete:"off",value:l,onChange:a=>d(a.target.value),placeholder:"PHONE"}),e.jsx("textarea",{id:"messageSend",name:"message",autoComplete:"off",value:h,onChange:a=>u(a.target.value),rows:5,cols:10,placeholder:"TEXT"}),e.jsx("button",{type:"submit",className:"send__button",children:s})]})})}function A({img01Alt:s,img02Alt:t,text:n}){return e.jsxs("div",{className:"form-images__items",children:[e.jsx("div",{id:"formImage01",children:e.jsx("img",{src:F,alt:s})}),e.jsxs("div",{id:"formImage02",children:[e.jsx("p",{children:n}),e.jsx("img",{src:L,alt:t})]})]})}function D(){return e.jsx("div",{className:"contacts-form",children:e.jsxs("div",{className:"conteiner",children:[e.jsx("img",{id:"formLabel01",src:w,alt:"#"}),e.jsx(k,{title:"For everything under the sun, write us!"}),e.jsxs("div",{className:"contacts-form__items",children:[e.jsx(I,{buttonSend:"SEND"}),e.jsx(A,{img01Alt:"An adult's hand holds a child's hand",text:"See you soon",img02Alt:"Girl with long hair"})]}),e.jsx("img",{id:"formLabel02",src:g,alt:"#"})]})})}function G(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(D,{})]})}export{G as default};
