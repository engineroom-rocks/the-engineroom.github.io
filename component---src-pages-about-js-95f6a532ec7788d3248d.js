(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(143),i=n(150),o=n(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"about"}),r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"Engine Room: A Product-Centric Meetup for Technical Humans"),"/** The End Goal */",r.a.createElement("br",null),r.a.createElement("h2",null,"The End Goal"),r.a.createElement("p",null,"Our vision is to enable a community that facilitates knowledge transfer and formation of social ties across organisations building software products."),r.a.createElement("p",null,"To be nitty-gritty, our primary objectives are to provide:"),r.a.createElement("ol",null,r.a.createElement("li",null,"An inter-role and inter-company communication platform for the local technical community"),r.a.createElement("li",null,"A social platform for sharing technical knowledge amongst software engineers"),r.a.createElement("li",null,"A space for locally present tech companies to demo their solutions and products to the technical community")),"/** The End Goal */",r.a.createElement("br",null),r.a.createElement("h2",null,"Our Concept of Operations"),r.a.createElement("p",null,"We conduct monthly meetups for the tech product engineering community regarding all things at the engineering level."),r.a.createElement("ol",null,r.a.createElement("li",null,"Open-Space Format Discussion + Ice Breaker",r.a.createElement("p",null,r.a.createElement("small",null,"Many meetups lose sight of the “meet” part. We’re here to change that."))),r.a.createElement("li",null,"Community Sharings",r.a.createElement("p",null,r.a.createElement("small",null,"Everybody has a story to tell. Everybody has something to learn."))),r.a.createElement("li",null,"Guest/Products Talks",r.a.createElement("p",null,r.a.createElement("small",null,"One challenge in professional engineering is finding the time to explore and understand “what’s out there”."))),r.a.createElement("li",null,"Retrospectives",r.a.createElement("p",null,r.a.createElement("small",null,"We think of our meetup as an evolving product/service for you, and in line with best practices in software engineering, we’d like to iteratively improve it for you.")))),"/** Who’s Invited */",r.a.createElement("br",null),r.a.createElement("h2",null,"Who’s Invited?"),r.a.createElement("p",null,"The EngineRoom was created for technical humans with their skin already in the game as a primary consideration. Hence, we’d like to keep it restricted to working professionals regardless of experience who can say any of the following about themselves:"),r.a.createElement("ul",null,r.a.createElement("li",null,"I create APIs"),r.a.createElement("li",null,"I craft UIs"),r.a.createElement("li",null,"I design UXs"),r.a.createElement("li",null,"I automate things"),r.a.createElement("li",null,"I lead/guide/direct a technical team")),"/** Sponsorships */",r.a.createElement("br",null),r.a.createElement("h2",null,"Sponsor Opportunities"),r.a.createElement("p",null,"If you'd like to collaborate, do hit us up at ",r.a.createElement("a",{href:"mailto:the.engineroom.sg@gmail.com"},"the.engineroom.sg@gmail.com"),". We are specifically looking for sponsors for the following. "),r.a.createElement("ul",null,r.a.createElement("li",null,"Food & beverages"),r.a.createElement("li",null,"Swag"),r.a.createElement("li",null,"Venue"),r.a.createElement("li",null,"Donations")),r.a.createElement(l.Link,{to:"/"},"Go back")))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),l=n(4),i=n.n(l),o=n(142),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(144),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Engine Room"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),l=n(4),i=n.n(l),o=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(149),r=n(0),l=n.n(r),i=n(4),o=n.n(i),c=n(151),s=n.n(c),u=n(143);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title;return l.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Engine Room",description:"A Product-Centric Meetup for Technical Humans",author:"@zephinzer and @stacyyg"}}}}},150:function(e,t,n){"use strict";var a=n(145),r=n(0),l=n.n(r),i=n(4),o=n.n(i),c=n(143),s=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};n(147);var u=function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px"}},l.a.createElement("main",null,t)))},data:a})};u.propTypes={children:o.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-about-js-95f6a532ec7788d3248d.js.map