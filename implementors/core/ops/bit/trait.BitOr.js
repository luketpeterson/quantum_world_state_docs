(function() {var implementors = {};
implementors["bitmaps"] = [{"text":"impl&lt;Size:&nbsp;Bits&gt; BitOr&lt;Bitmap&lt;Size&gt;&gt; for Bitmap&lt;Size&gt;","synthetic":false,"types":[]}];
implementors["maybe_owned"] = [{"text":"impl&lt;'min, L, R, OUT:&nbsp;'min&gt; BitOr&lt;MaybeOwned&lt;'min, R&gt;&gt; for MaybeOwned&lt;'min, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: BitOr&lt;R, Output = OUT&gt; + BitOr&lt;&amp;'min R, Output = OUT&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'min L: BitOr&lt;R, Output = OUT&gt; + BitOr&lt;&amp;'min R, Output = OUT&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'min, L, R, OUT:&nbsp;'min&gt; BitOr&lt;MaybeOwnedMut&lt;'min, R&gt;&gt; for MaybeOwnedMut&lt;'min, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: BitOr&lt;R, Output = OUT&gt; + BitOr&lt;&amp;'min R, Output = OUT&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'min L: BitOr&lt;R, Output = OUT&gt; + BitOr&lt;&amp;'min R, Output = OUT&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl BitOr&lt;B0&gt; for B0","synthetic":false,"types":[]},{"text":"impl BitOr&lt;B1&gt; for B0","synthetic":false,"types":[]},{"text":"impl&lt;Rhs:&nbsp;Bit&gt; BitOr&lt;Rhs&gt; for B1","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; BitOr&lt;U&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;B:&nbsp;Bit, U:&nbsp;Unsigned&gt; BitOr&lt;UTerm&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()