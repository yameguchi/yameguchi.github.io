"use strict";(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[8827,3047],{595:e=>{function t(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,o,i){if(n.language===a){var r=n.tokenStack=[];n.code=n.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==n.code.indexOf(o=t(a,s));)++s;return r[s]=e,o})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var o=0,i=Object.keys(n.tokenStack);!function r(s){for(var l=0;l<s.length&&!(o>=i.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var g=i[o],p=n.tokenStack[g],c="string"===typeof u?u:u.content,f=t(a,g),d=c.indexOf(f);if(d>-1){++o;var k=c.substring(0,d),m=new e.Token(a,e.tokenize(p,n.grammar),"language-"+a,p),b=c.substring(d+f.length),h=[];k&&h.push.apply(h,r([k])),h.push(m),b&&h.push.apply(h,r([b])),"string"===typeof u?s.splice.apply(s,[l,1].concat(h)):u.content=h}}else u.content&&r(u.content)}return s}(n.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},4411:(e,t,n)=>{var a=n(595);function o(e){e.register(a),e.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},e.hooks.add("before-tokenize",(function(t){if("twig"===t.language){e.languages["markup-templating"].buildPlaceholders(t,"twig",/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)}})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"twig")}))}e.exports=o,o.displayName="twig",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_twig.86c2a2e0.chunk.js.map