(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[969],{4129:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-7446a652",path:"/faq/",title:"FAQ",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"How do I [..] ?",slug:"how-do-i",children:[{level:3,title:"How do I add my own keybindings?",slug:"how-do-i-add-my-own-keybindings",children:[]}]},{level:2,title:"What is null-ls and why do you use it?",slug:"what-is-null-ls-and-why-do-you-use-it",children:[]}],filePathRelative:"faq/README.md",git:{updatedTime:1627979177e3,contributors:[]}}},4226:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var e=a(6252);const t=(0,e.uE)('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="how-do-i" tabindex="-1"><a class="header-anchor" href="#how-do-i" aria-hidden="true">#</a> How do I [..] ?</h2><h3 id="how-do-i-add-my-own-keybindings" tabindex="-1"><a class="header-anchor" href="#how-do-i-add-my-own-keybindings" aria-hidden="true">#</a> How do I add my own keybindings?</h3><ul><li>View all defaults by pressing <code>&lt;leader&gt;Lk</code></li><li>change the leader key</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">&quot;space&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Add your own binding</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- save the buffer</span>\nlvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;C-s&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:w&lt;cr&gt;&quot;</span>\n<span class="token comment">-- move the cursor without leaving insert mode</span>\nlvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>insert_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;A-h&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;Left&gt;&quot;</span>\nlvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>insert_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;A-l&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;Right&gt;&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>Remove or un-map a default binding</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- disable completely</span>\nlvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;C-Up&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>\n<span class="token comment">-- define a new behavior</span>\nlvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;C-q&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:q&lt;cr&gt;&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',9),o=(0,e.Uk)("You can also use the NeoVim API directly using "),l={href:"https://neovim.io/doc/user/api.html#nvim_set_keymap()",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("nvim_set_keymap"),u=(0,e.uE)('<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_set_keymap</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;C-Space&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;compe#complete()&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> noremap <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> silent <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> expr <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Or you can use the native vim way for those tricky bindings that you are not sure how to translate just yet</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- Search and replace word under cursor using &lt;F2&gt;</span>\nvim<span class="token punctuation">.</span>cmd <span class="token string">[[ nnoremap &lt;F2&gt; :%s/&lt;c-r&gt;&lt;c-w&gt;/&lt;c-r&gt;&lt;c-w&gt;/gc&lt;c-f&gt;$F/i ]]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="what-is-null-ls-and-why-do-you-use-it" tabindex="-1"><a class="header-anchor" href="#what-is-null-ls-and-why-do-you-use-it" aria-hidden="true">#</a> What is <code>null-ls</code> and why do you use it?</h2><p>For C/C++ we have the <code>clangd</code> by <code>llvm</code> which can also use its siblings&#39; abilities <code>clang-tidy</code> and <code>clang-format</code> to support additional linting and formatting. But something like <code>pyright</code> doesn&#39;t support formatting, so we use <code>null-ls</code> to register <code>black</code> and <code>flake8</code> for example, as a &quot;fake&quot; language server.</p><p>Since it&#39;s not using a separate binary it&#39;s called <code>null-ls</code> or <em>null language server</em>.</p>',6),i={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[o,(0,e.Wm)("a",l,[p,(0,e.Wm)(a)])])]),u],64)}}}}]);