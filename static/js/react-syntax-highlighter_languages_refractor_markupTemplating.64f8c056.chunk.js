"use strict";(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[3047],{595:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,u=i.length;-1!==t.code.indexOf(o=n(a,u));)++u;return i[u]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(u){for(var c=0;c<u.length&&!(o>=r.length);c++){var l=u[c];if("string"===typeof l||l.content&&"string"===typeof l.content){var p=r[o],s=t.tokenStack[p],f="string"===typeof l?l:l.content,g=n(a,p),k=f.indexOf(g);if(k>-1){++o;var h=f.substring(0,k),m=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),v=f.substring(k+g.length),d=[];h&&d.push.apply(d,i([h])),d.push(m),v&&d.push.apply(d,i([v])),"string"===typeof l?u.splice.apply(u,[c,1].concat(d)):l.content=d}}else l.content&&i(l.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.64f8c056.chunk.js.map