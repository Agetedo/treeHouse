import{j as e,T as o,L as t,P as l,r as c}from"./index-b4652dce.js";import{j as d}from"./cotton-label01-41cc0e62.js";import{l as m,L as u}from"./LatestArticles-b342a9fe.js";import{T as j}from"./Tend-27591216.js";import"./vision-label-image-c57c7cff.js";import"./Cost-def3e29a.js";const p="/journal-article-image.jpg",h="/svg/shop-gallery-link-arrow.svg",x=[{id:"popArt01",imageSrc:"/popular-article02-image.jpg",imageAlt:"Cotton and certification mark",linkTo:"/article02-page",date:"02.06.2023",title:"From Our Children's Safety to Workers' Rights: The Revolutionary Impact of..."},{id:"popArt02",imageSrc:"/popular-article03-image.jpg",imageAlt:"Stack of fabrics",linkTo:"/article03-page",date:"02.06.2023",title:"Secrets to Long-Lasting Children's Clothes: Tips to Keep Them..."},{id:"popArt03",imageSrc:"/popular-article04-image.jpg",imageAlt:"Fabric recycling",linkTo:"/article04-page",date:"02.06.2023",title:"Protecting Your Children: The Hidden Dangers of Synthetic Fabrics..."}];function g({caption:a,titleFirst:r,rubric:i}){return e.jsxs("div",{className:"journal__title",children:[e.jsx(o,{caption:a,titleFirst:r}),e.jsx("p",{className:"rubric",children:i})]})}function _({linkText:a}){return e.jsxs(t,{to:l.ARTICLE01PAGE,className:"read-link__button",children:[a,e.jsx("img",{src:h,alt:"#"})]})}function A({imgAlt:a,date:r,title:i,text:s,linkText:n}){return e.jsxs("section",{className:"journal-article",children:[e.jsx("img",{src:p,alt:a}),e.jsxs("div",{className:"journal-article__wrapper",children:[e.jsx("span",{className:"journal-article__date",children:r}),e.jsx("h4",{className:"journal-article__title",children:e.jsx(t,{to:l.ARTICLE01PAGE,children:i})}),e.jsx("p",{className:"journal-article__text",children:e.jsx(t,{to:l.ARTICLE01PAGE,children:s})}),e.jsx(_,{linkText:n})]})]})}const f=x.map(a=>e.jsxs("section",{className:"popular-article",children:[e.jsx("img",{src:a.imageSrc,alt:a.imageAlt}),e.jsxs("div",{className:"popular-article__items",children:[e.jsx("span",{className:"popular-article__date",children:a.date}),e.jsx("h4",{className:"popular-article__title",children:e.jsx(t,{to:a.linkTo,children:a.title})})]})]},a.id));function N({title:a}){return e.jsxs("div",{className:"popular__items",children:[e.jsx("h3",{className:"popular__title",children:a}),f]})}function k(){return e.jsxs("div",{className:"journal",children:[e.jsx("img",{id:"journalLabel01",src:d,alt:"#"}),e.jsxs("div",{className:"conteiner",children:[e.jsx(g,{caption:"Only helpful thoughts",titleFirst:"Our journal",rubric:"Here you can read our thoughts all things sustainable kids fashion. Just a bit of inspiration."}),e.jsxs("div",{className:"journal__items",children:[e.jsx(A,{imgAlt:"Woman choosing clothes in showroom",date:"02.06.2023",title:"Start Your Sustainable Fashion Journey: Practical Tips for Everyone",text:"Are you interested in making more sustainable fashion choices but feeling overwhelmed by where to start? Don't worry; you're not alone.",linkText:"Read more"}),e.jsx(N,{title:"Most popular"})]})]})]})}function T(){const[a,r]=c.useState(!1);function i(){r(!a)}return e.jsx("div",{className:"read-articles",children:e.jsxs("div",{className:"conteiner",children:[e.jsx("div",{className:"read-articles__items",children:a&&m.map(s=>e.jsxs("section",{className:"latest-article",children:[e.jsx("div",{className:"latest-article__image",children:e.jsx("img",{src:s.imageSrc,alt:s.imageAlt})}),e.jsxs("div",{className:"latest-article__wrapper",children:[e.jsx("span",{className:"latest-article__date",children:s.date}),e.jsx("h4",{className:"latest-article__title",children:e.jsx(t,{to:s.linkTitle,children:s.title})}),e.jsx("p",{className:"latest-article__text",children:s.text}),e.jsxs(t,{to:s.readLink,className:"read__link",children:[e.jsx("p",{children:s.linkText}),e.jsx("img",{src:s.readLinkSrc,alt:"#"})]})]})]},s.id))}),e.jsx("button",{id:"readMoreButton",onClick:i,children:a?"CLOSE ARTICLES":"READ MORE ARTICLES"})]})})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(u,{}),e.jsx(T,{}),e.jsx(j,{})]})}export{E as default};
