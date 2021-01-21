(function() {var implementors = {};
implementors["bitmaps"] = [{"text":"impl&lt;Size&gt; RefUnwindSafe for Bitmap&lt;Size&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Size as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Size&gt; RefUnwindSafe for Iter&lt;'a, Size&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Size as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["im"] = [{"text":"impl&lt;K, V, S&gt; RefUnwindSafe for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; RefUnwindSafe for HashSet&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; RefUnwindSafe for OrdMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for OrdSet&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for Vector&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for Iter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for ConsumingIter&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for DiffIter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for DiffItem&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; RefUnwindSafe for OrdMapPool&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Iter&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for DiffIter&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Keys&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Values&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for DiffItem&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for OrdSetPool&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for Iter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for RangedIter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for ConsumingIter&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for DiffIter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; RefUnwindSafe for HashMapPool&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; RefUnwindSafe for OccupiedEntry&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; RefUnwindSafe for VacantEntry&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Iter&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for IterMut&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for ConsumingIter&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Keys&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; RefUnwindSafe for Values&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; RefUnwindSafe for Entry&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for HashSetPool&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for Iter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for ConsumingIter&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for RRBPool&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for Iter&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for IterMut&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; RefUnwindSafe for ConsumingIter&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for Chunks&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for ChunksMut&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for Focus&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A&gt; RefUnwindSafe for FocusMut&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["maybe_owned"] = [{"text":"impl&lt;'a, T&gt; RefUnwindSafe for MaybeOwned&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; RefUnwindSafe for MaybeOwnedMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl RefUnwindSafe for TokenStream","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LexError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Span","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Punct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ident","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TokenTree","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Delimiter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Spacing","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IntoIter","synthetic":true,"types":[]}];
implementors["quantum_world_state"] = [{"text":"impl&lt;T&gt; RefUnwindSafe for QWSElementWrapper&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QWSElementID","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QWSTransactionID","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for QuantumWorldState","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for QWSDataView&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; !RefUnwindSafe for QWSElementsIterator&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for QWSTransaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QWSMetaData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QWSElementStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QWSError","synthetic":true,"types":[]}];
implementors["sized_chunks"] = [{"text":"impl&lt;'a, A, T&gt; RefUnwindSafe for Drain&lt;'a, A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; RefUnwindSafe for Iter&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; RefUnwindSafe for InlineArray&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A, N&gt; RefUnwindSafe for Drain&lt;'a, A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, N&gt; RefUnwindSafe for Iter&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, N&gt; RefUnwindSafe for Chunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, N&gt; RefUnwindSafe for Drain&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A, N&gt; RefUnwindSafe for Iter&lt;'a, A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A, N&gt; RefUnwindSafe for IterMut&lt;'a, A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, N&gt; RefUnwindSafe for OptionDrain&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A, N&gt; RefUnwindSafe for OptionIter&lt;'a, A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, A, N&gt; RefUnwindSafe for OptionIterMut&lt;'a, A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, N&gt; RefUnwindSafe for SparseChunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ChunkLength&lt;A&gt;&gt;::SizedType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as Bits&gt;::Store: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["syn"] = [{"text":"impl RefUnwindSafe for Attribute","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MetaList","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MetaNameValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Field","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FieldsNamed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FieldsUnnamed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Variant","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VisCrate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VisPublic","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VisRestricted","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprArray","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprAssign","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprAssignOp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprAsync","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprAwait","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprBinary","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprBlock","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprBox","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprBreak","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprCall","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprCast","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprClosure","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprContinue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprField","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprForLoop","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprGroup","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprIf","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprIndex","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprLet","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprLit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprLoop","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprMacro","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprMatch","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprMethodCall","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprParen","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprPath","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprRange","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprReference","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprRepeat","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprReturn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprTry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprTryBlock","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprTuple","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprUnary","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprUnsafe","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprWhile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExprYield","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Index","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BoundLifetimes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConstParam","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Generics","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LifetimeDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PredicateEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PredicateLifetime","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PredicateType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TraitBound","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeParam","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WhereClause","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for ImplGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Turbofish&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for TypeGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Lifetime","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitBool","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitByte","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitByteStr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitChar","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitFloat","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitInt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LitStr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Macro","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataEnum","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataStruct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataUnion","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeriveInput","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Abi","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BareFnArg","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeArray","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeBareFn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeGroup","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeImplTrait","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeInfer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeMacro","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeNever","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeParen","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypePath","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypePtr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeReference","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeSlice","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeTraitObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeTuple","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Variadic","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AngleBracketedGenericArguments","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Binding","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Constraint","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ParenthesizedGenericArguments","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Path","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathSegment","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for QSelf","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AttrStyle","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Meta","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NestedMeta","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Fields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Visibility","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Expr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Member","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenericParam","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TraitBoundModifier","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeParamBound","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WherePredicate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Lit","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StrStyle","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MacroDelimiter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Data","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BinOp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnOp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReturnType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Type","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenericArgument","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathArguments","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Underscore","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Abstract","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for As","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Async","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Auto","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Await","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Become","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Box","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Break","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Const","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Continue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Crate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Default","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Do","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Dyn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Else","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Enum","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Extern","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Final","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Fn","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for For","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for If","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Impl","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for In","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Let","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Loop","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Macro","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Match","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Mod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Move","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Mut","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Override","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Priv","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Pub","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ref","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Return","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SelfType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SelfValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Static","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Struct","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Super","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Trait","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Try","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Type","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Typeof","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Union","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Unsafe","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Unsized","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Use","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Virtual","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Where","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for While","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Yield","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Add","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AddEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for And","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AndAnd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AndEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for At","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bang","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Caret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CaretEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Colon","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Colon2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Comma","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Div","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DivEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Dollar","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Dot","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Dot2","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Dot3","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DotDotEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Eq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EqEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ge","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Gt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Le","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Lt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MulEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ne","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Or","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OrOr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Pound","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Question","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RArrow","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LArrow","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Rem","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FatArrow","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Semi","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Shl","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShlEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Shr","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ShrEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Star","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sub","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SubEq","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Tilde","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Brace","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bracket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Paren","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TokenBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Cursor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; RefUnwindSafe for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; RefUnwindSafe for Pairs&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; RefUnwindSafe for PairsMut&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; RefUnwindSafe for IntoPairs&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for IntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; RefUnwindSafe for Pair&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for Lookahead1&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for ParseBuffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'a&gt; RefUnwindSafe for StepCursor&lt;'c, 'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Nothing","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()