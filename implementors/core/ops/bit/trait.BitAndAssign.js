(function() {var implementors = {};
implementors["bitmaps"] = [{"text":"impl&lt;Size:&nbsp;Bits&gt; BitAndAssign&lt;Bitmap&lt;Size&gt;&gt; for Bitmap&lt;Size&gt;","synthetic":false,"types":[]}];
implementors["maybe_owned"] = [{"text":"impl&lt;'min, L, R&gt; BitAndAssign&lt;MaybeOwned&lt;'min, R&gt;&gt; for MaybeOwned&lt;'min, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Clone + BitAndAssign&lt;R&gt; + BitAndAssign&lt;&amp;'min R&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'min, L, R&gt; BitAndAssign&lt;MaybeOwnedMut&lt;'min, R&gt;&gt; for MaybeOwnedMut&lt;'min, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: BitAndAssign&lt;R&gt; + BitAndAssign&lt;&amp;'min R&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()