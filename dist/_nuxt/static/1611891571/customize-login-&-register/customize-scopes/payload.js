__NUXT_JSONP__("/customize-login-&-register/customize-scopes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{slug:"customize-scopes",description:"",title:"Customize scopes",position:9,category:"Customize Login & Register",toc:[{id:s,depth:2,text:t}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"Some approach to handle permissions is to use scopes on tokens."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"The package consider this and you can set an amount of scopes that would be set when a user is login or register, you can add an array of scopes that would be added to the user token."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"In "},{type:b,tag:j,props:{},children:[{type:a,value:"config\u002Fjson-api-auth.php"}]},{type:a,value:u}]},{type:a,value:f},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F*\n|--------------------------------------------------------------------------\n| Json Api Authentication Scopes\n|--------------------------------------------------------------------------\n|\n| Passport & Sanctum use scopes to validate abilities,\n| Optionally you can add scopes here, that would be added on Login and register\n|\n*\u002F"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'scopes'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"h2",props:{id:s},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#being-more-granular-about-scopes",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:t}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"If you need to handle more complex logic to assign scopes you can always customize the behavior in "},{type:b,tag:j,props:{},children:[{type:a,value:"app\u002Fcontrollers\u002FJsonApiAuth\u002FTraits\u002FHasToShowApiTokens.php"}]},{type:a,value:u}]},{type:a,value:f},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"protected"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"class-name","type-declaration"]},children:[{type:a,value:"User"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"$token"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"-\u003E"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'json-api-auth.token_id'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n,o]},children:[{type:a,value:"'json-api-auth.scopes'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F In this line you can customize how to assign scopes to a user token"}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:";"}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:f}]}]}]}]},dir:"\u002Fen\u002Fcustomize-login-&-register",path:"\u002Fen\u002Fcustomize-login-&-register\u002Fcustomize-scopes",extension:".md",createdAt:"2021-01-26T17:26:39.801Z",updatedAt:"2021-01-28T00:59:42.798Z",to:"\u002Fcustomize-login-&-register\u002Fcustomize-scopes"},prev:{slug:"customize-tokens",title:"Customize tokens",to:"\u002Fcustomize-login-&-register\u002Fcustomize-tokens"},next:{slug:"logout",title:"Logout",to:"\u002Flogout\u002Flogout"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","function","p","code","(",")","comment","string","single-quoted-string","operator",",","variable","being-more-granular-about-scopes","Being more granular about scopes",":","div","nuxt-content-highlight","pre","language-php","line-numbers","\n\n","keyword","createToken","$user","\n    ","\n        ","config")));