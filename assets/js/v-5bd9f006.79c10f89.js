"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[359],{8527:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-5bd9f006",path:"/docs/configuration/authentifications/jwt.html",title:"JWT",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/jwt.md",git:{updatedTime:1635102603e3,contributors:[{name:"tchiotludo",email:"tchiot.ludo@gmail.com",commits:1}]}}},1150:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h1><p>AKHQ uses JWT tokens to perform authentication. Please generate a secret that is at least 256 bits and change the config like this:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">token</span><span class="token punctuation">:</span>\n      <span class="token key atrule">jwt</span><span class="token punctuation">:</span>\n        <span class="token key atrule">signatures</span><span class="token punctuation">:</span>\n          <span class="token key atrule">secret</span><span class="token punctuation">:</span>\n            <span class="token key atrule">generator</span><span class="token punctuation">:</span>\n              <span class="token key atrule">secret</span><span class="token punctuation">:</span> &lt;Your secret here<span class="token punctuation">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',3),t={},p=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);