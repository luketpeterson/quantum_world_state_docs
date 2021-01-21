(function() {var implementors = {};
implementors["im"] = [{"text":"impl&lt;K, V, RK, RV&gt; Extend&lt;(RK, RV)&gt; for OrdMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone + From&lt;RK&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + From&lt;RV&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, R&gt; Extend&lt;R&gt; for OrdSet&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Ord + Clone + From&lt;R&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S, RK, RV&gt; Extend&lt;(RK, RV)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq + Clone + From&lt;RK&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + From&lt;RV&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, S, R&gt; Extend&lt;R&gt; for HashSet&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Hash + Eq + Clone + From&lt;R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Clone&gt; Extend&lt;A&gt; for Vector&lt;A&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Extend&lt;TokenTree&gt; for TokenStream","synthetic":false,"types":[]},{"text":"impl Extend&lt;TokenStream&gt; for TokenStream","synthetic":false,"types":[]}];
implementors["sized_chunks"] = [{"text":"impl&lt;A, T&gt; Extend&lt;A&gt; for InlineArray&lt;A, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, T&gt; Extend&lt;&amp;'a A&gt; for InlineArray&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'a + Copy,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, N&gt; Extend&lt;A&gt; for Chunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ChunkLength&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, N&gt; Extend&lt;&amp;'a A&gt; for Chunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'a + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ChunkLength&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Extend&lt;&lt;A as Array&gt;::Item&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; Extend&lt;T&gt; for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; Extend&lt;Pair&lt;T, P&gt;&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]},{"text":"impl Extend&lt;Error&gt; for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()