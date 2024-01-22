"use strict";(self.webpackChunkdatavisual=self.webpackChunkdatavisual||[]).push([[49558],{549558:function(se,P,j){j.r(P),j.d(P,{getJavaScriptWorker:function(){return ne},getTypeScriptWorker:function(){return ie},setupJavaScript:function(){return re},setupTypeScript:function(){return te}});var l=j(734589),E=function(t,r,e,i){function u(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(a){try{s(i.next(a))}catch(d){o(d)}}function f(a){try{s(i.throw(a))}catch(d){o(d)}}function s(a){a.done?n(a.value):u(a.value).then(c,f)}s((i=i.apply(t,r||[])).next())})},W=function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,u,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(a){return f([s,a])}}function f(s){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,u&&(n=s[0]&2?u.return:s[0]?u.throw||((n=u.return)&&n.call(u),0):u.next)&&!(n=n.call(u,s[1])).done)return n;switch(u=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,u=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){e.label=s[1];break}if(s[0]===6&&e.label<n[1]){e.label=n[1],n=s;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(s);break}n[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(a){s=[6,a],u=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},V=function(){function t(r,e){var i=this;this._modeId=r,this._defaults=e,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(function(){return i._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return i._updateExtraLibs()})}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},t.prototype._updateExtraLibs=function(){return E(this,void 0,void 0,function(){var r,e;return W(this,function(i){switch(i.label){case 0:return this._worker?(r=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return e=i.sent(),this._updateExtraLibsToken!==r?[2]:(e.updateExtraLibs(this._defaults.getExtraLibs()),[2])}})})},t.prototype._getClient=function(){var r=this;if(!this._client){this._worker=l.j6.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then(function(i){return r._worker?r._worker.withSyncedResources(l.j6.getModels().filter(function(u){return u.getModeId()===r._modeId}).map(function(u){return u.uri})):i})),this._client=e}return this._client},t.prototype.getLanguageServiceWorker=function(){for(var r=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var u;return this._getClient().then(function(n){u=n}).then(function(n){if(r._worker)return r._worker.withSyncedResources(e)}).then(function(n){return u})},t}(),g={};g["lib.d.ts"]=!0,g["lib.dom.d.ts"]=!0,g["lib.dom.iterable.d.ts"]=!0,g["lib.es2015.collection.d.ts"]=!0,g["lib.es2015.core.d.ts"]=!0,g["lib.es2015.d.ts"]=!0,g["lib.es2015.generator.d.ts"]=!0,g["lib.es2015.iterable.d.ts"]=!0,g["lib.es2015.promise.d.ts"]=!0,g["lib.es2015.proxy.d.ts"]=!0,g["lib.es2015.reflect.d.ts"]=!0,g["lib.es2015.symbol.d.ts"]=!0,g["lib.es2015.symbol.wellknown.d.ts"]=!0,g["lib.es2016.array.include.d.ts"]=!0,g["lib.es2016.d.ts"]=!0,g["lib.es2016.full.d.ts"]=!0,g["lib.es2017.d.ts"]=!0,g["lib.es2017.full.d.ts"]=!0,g["lib.es2017.intl.d.ts"]=!0,g["lib.es2017.object.d.ts"]=!0,g["lib.es2017.sharedmemory.d.ts"]=!0,g["lib.es2017.string.d.ts"]=!0,g["lib.es2017.typedarrays.d.ts"]=!0,g["lib.es2018.asyncgenerator.d.ts"]=!0,g["lib.es2018.asynciterable.d.ts"]=!0,g["lib.es2018.d.ts"]=!0,g["lib.es2018.full.d.ts"]=!0,g["lib.es2018.intl.d.ts"]=!0,g["lib.es2018.promise.d.ts"]=!0,g["lib.es2018.regexp.d.ts"]=!0,g["lib.es2019.array.d.ts"]=!0,g["lib.es2019.d.ts"]=!0,g["lib.es2019.full.d.ts"]=!0,g["lib.es2019.object.d.ts"]=!0,g["lib.es2019.string.d.ts"]=!0,g["lib.es2019.symbol.d.ts"]=!0,g["lib.es2020.bigint.d.ts"]=!0,g["lib.es2020.d.ts"]=!0,g["lib.es2020.full.d.ts"]=!0,g["lib.es2020.intl.d.ts"]=!0,g["lib.es2020.promise.d.ts"]=!0,g["lib.es2020.sharedmemory.d.ts"]=!0,g["lib.es2020.string.d.ts"]=!0,g["lib.es2020.symbol.wellknown.d.ts"]=!0,g["lib.es5.d.ts"]=!0,g["lib.es6.d.ts"]=!0,g["lib.esnext.d.ts"]=!0,g["lib.esnext.full.d.ts"]=!0,g["lib.esnext.intl.d.ts"]=!0,g["lib.esnext.promise.d.ts"]=!0,g["lib.esnext.string.d.ts"]=!0,g["lib.esnext.weakref.d.ts"]=!0,g["lib.scripthost.d.ts"]=!0,g["lib.webworker.d.ts"]=!0,g["lib.webworker.importscripts.d.ts"]=!0,g["lib.webworker.iterable.d.ts"]=!0;var x=function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,u){i.__proto__=u}||function(i,u){for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(i[n]=u[n])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function i(){this.constructor=r}r.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),k=function(t,r,e,i){function u(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(a){try{s(i.next(a))}catch(d){o(d)}}function f(a){try{s(i.throw(a))}catch(d){o(d)}}function s(a){a.done?n(a.value):u(a.value).then(c,f)}s((i=i.apply(t,r||[])).next())})},_=function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,u,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(a){return f([s,a])}}function f(s){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,u&&(n=s[0]&2?u.return:s[0]?u.throw||((n=u.return)&&n.call(u),0):u.next)&&!(n=n.call(u,s[1])).done)return n;switch(u=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,u=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){e.label=s[1];break}if(s[0]===6&&e.label<n[1]){e.label=n[1],n=s;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(s);break}n[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(a){s=[6,a],u=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},L;(function(t){t[t.None=0]="None",t[t.Block=1]="Block",t[t.Smart=2]="Smart"})(L||(L={}));function T(t,r,e){if(e===void 0&&(e=0),typeof t=="string")return t;if(t===void 0)return"";var i="";if(e){i+=r;for(var u=0;u<e;u++)i+="  "}if(i+=t.messageText,e++,t.next)for(var n=0,o=t.next;n<o.length;n++){var c=o[n];i+=T(c,r,e)}return i}function C(t){return t?t.map(function(r){return r.text}).join(""):""}var A=function(){function t(r){this._worker=r}return t.prototype._textSpanToRange=function(r,e){var i=r.getPositionAt(e.start),u=r.getPositionAt(e.start+e.length),n=i.lineNumber,o=i.column,c=u.lineNumber,f=u.column;return{startLineNumber:n,startColumn:o,endLineNumber:c,endColumn:f}},t}(),H=function(){function t(r){this._worker=r,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return t.prototype.isLibFile=function(r){return r&&r.path.indexOf("/lib.")===0?!!g[r.path.slice(1)]:!1},t.prototype.getOrCreateModel=function(r){var e=l.j6.getModel(r);return e||(this.isLibFile(r)&&this._hasFetchedLibFiles?l.j6.createModel(this._libFiles[r.path.slice(1)],"typescript",r):null)},t.prototype._containsLibFile=function(r){for(var e=0,i=r;e<i.length;e++){var u=i[e];if(this.isLibFile(u))return!0}return!1},t.prototype.fetchLibFilesIfNecessary=function(r){return k(this,void 0,void 0,function(){return _(this,function(e){switch(e.label){case 0:return this._containsLibFile(r)?[4,this._fetchLibFiles()]:[2];case 1:return e.sent(),[2]}})})},t.prototype._fetchLibFiles=function(){var r=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(function(e){return e.getLibFiles()}).then(function(e){r._hasFetchedLibFiles=!0,r._libFiles=e})),this._fetchLibFilesPromise},t}(),F;(function(t){t[t.Warning=0]="Warning",t[t.Error=1]="Error",t[t.Suggestion=2]="Suggestion",t[t.Message=3]="Message"})(F||(F={}));var B=function(t){x(r,t);function r(e,i,u,n){var o=t.call(this,n)||this;o._libFiles=e,o._defaults=i,o._selector=u,o._disposables=[],o._listener=Object.create(null);var c=function(a){if(a.getModeId()===u){var d=function(){var m=o._defaults.getDiagnosticsOptions().onlyVisible;m?a.isAttachedToEditor()&&o._doValidate(a):o._doValidate(a)},p,b=a.onDidChangeContent(function(){clearTimeout(p),p=setTimeout(d,500)}),h=a.onDidChangeAttached(function(){var m=o._defaults.getDiagnosticsOptions().onlyVisible;m&&(a.isAttachedToEditor()?d():l.j6.setModelMarkers(a,o._selector,[]))});o._listener[a.uri.toString()]={dispose:function(){b.dispose(),h.dispose(),clearTimeout(p)}},d()}},f=function(a){l.j6.setModelMarkers(a,o._selector,[]);var d=a.uri.toString();o._listener[d]&&(o._listener[d].dispose(),delete o._listener[d])};o._disposables.push(l.j6.onDidCreateModel(function(a){return c(a)})),o._disposables.push(l.j6.onWillDisposeModel(f)),o._disposables.push(l.j6.onDidChangeModelLanguage(function(a){f(a.model),c(a.model)})),o._disposables.push({dispose:function(){for(var a=0,d=l.j6.getModels();a<d.length;a++){var p=d[a];f(p)}}});var s=function(){for(var a=0,d=l.j6.getModels();a<d.length;a++){var p=d[a];f(p),c(p)}};return o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),l.j6.getModels().forEach(function(a){return c(a)}),o}return r.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},r.prototype._doValidate=function(e){return k(this,void 0,void 0,function(){var i,u,n,o,c,f,s,a,d,p=this;return _(this,function(b){switch(b.label){case 0:return[4,this._worker(e.uri)];case 1:return i=b.sent(),e.isDisposed()?[2]:(u=[],n=this._defaults.getDiagnosticsOptions(),o=n.noSyntaxValidation,c=n.noSemanticValidation,f=n.noSuggestionDiagnostics,o||u.push(i.getSyntacticDiagnostics(e.uri.toString())),c||u.push(i.getSemanticDiagnostics(e.uri.toString())),f||u.push(i.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(u)]);case 2:return s=b.sent(),!s||e.isDisposed()?[2]:(a=s.reduce(function(h,m){return m.concat(h)},[]).filter(function(h){return(p._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(h.code)===-1}),d=a.map(function(h){return h.relatedInformation||[]}).reduce(function(h,m){return m.concat(h)},[]).map(function(h){return h.file?l.Sf.parse(h.file.fileName):null}),[4,this._libFiles.fetchLibFilesIfNecessary(d)]);case 3:return b.sent(),e.isDisposed()?[2]:(l.j6.setModelMarkers(e,this._selector,a.map(function(h){return p._convertDiagnostics(e,h)})),[2])}})})},r.prototype._convertDiagnostics=function(e,i){var u=i.start||0,n=i.length||1,o=e.getPositionAt(u),c=o.lineNumber,f=o.column,s=e.getPositionAt(u+n),a=s.lineNumber,d=s.column,p=[];return i.reportsUnnecessary&&p.push(l.eB.Unnecessary),i.reportsDeprecated&&p.push(l.eB.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(i.category),startLineNumber:c,startColumn:f,endLineNumber:a,endColumn:d,message:T(i.messageText,`
`),code:i.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,i.relatedInformation)}},r.prototype._convertRelatedInformation=function(e,i){var u=this;if(i){var n=[];return i.forEach(function(o){var c=e;if(o.file){var f=l.Sf.parse(o.file.fileName);c=u._libFiles.getOrCreateModel(f)}if(c){var s=o.start||0,a=o.length||1,d=c.getPositionAt(s),p=d.lineNumber,b=d.column,h=c.getPositionAt(s+a),m=h.lineNumber,y=h.column;n.push({resource:c.uri,startLineNumber:p,startColumn:b,endLineNumber:m,endColumn:y,message:T(o.messageText,`
`)})}}),n}},r.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case F.Error:return l.ZL.Error;case F.Message:return l.ZL.Info;case F.Warning:return l.ZL.Warning;case F.Suggestion:return l.ZL.Hint}return l.ZL.Info},r}(A),U=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),r.prototype.provideCompletionItems=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,f,s,a,d,p;return _(this,function(b){switch(b.label){case 0:return o=e.getWordUntilPosition(i),c=new l.e6(i.lineNumber,o.startColumn,i.lineNumber,o.endColumn),f=e.uri,s=e.getOffsetAt(i),[4,this._worker(f)];case 1:return a=b.sent(),e.isDisposed()?[2]:[4,a.getCompletionsAtPosition(f.toString(),s)];case 2:return d=b.sent(),!d||e.isDisposed()?[2]:(p=d.entries.map(function(h){var m,y=c;if(h.replacementSpan){var w=e.getPositionAt(h.replacementSpan.start),M=e.getPositionAt(h.replacementSpan.start+h.replacementSpan.length);y=new l.e6(w.lineNumber,w.column,M.lineNumber,M.column)}var K=[];return((m=h.kindModifiers)===null||m===void 0?void 0:m.indexOf("deprecated"))!==-1&&K.push(l.Mj.CompletionItemTag.Deprecated),{uri:f,position:i,offset:s,range:y,label:h.name,insertText:h.name,sortText:h.sortText,kind:r.convertKind(h.kind),tags:K}}),[2,{suggestions:p}])}})})},r.prototype.resolveCompletionItem=function(e,i){return k(this,void 0,void 0,function(){var u,n,o,c,f,s;return _(this,function(a){switch(a.label){case 0:return u=e,n=u.uri,o=u.position,c=u.offset,[4,this._worker(n)];case 1:return f=a.sent(),[4,f.getCompletionEntryDetails(n.toString(),c,u.label)];case 2:return s=a.sent(),s?[2,{uri:n,position:o,label:s.name,kind:r.convertKind(s.kind),detail:C(s.displayParts),documentation:{value:r.createDocumentationString(s)}}]:[2,u]}})})},r.convertKind=function(e){switch(e){case v.primitiveType:case v.keyword:return l.Mj.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return l.Mj.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return l.Mj.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return l.Mj.CompletionItemKind.Function;case v.enum:return l.Mj.CompletionItemKind.Enum;case v.module:return l.Mj.CompletionItemKind.Module;case v.class:return l.Mj.CompletionItemKind.Class;case v.interface:return l.Mj.CompletionItemKind.Interface;case v.warning:return l.Mj.CompletionItemKind.File}return l.Mj.CompletionItemKind.Property},r.createDocumentationString=function(e){var i=C(e.documentation);if(e.tags)for(var u=0,n=e.tags;u<n.length;u++){var o=n[u];i+=`

`+I(o)}return i},r}(A);function I(t){var r="*@"+t.name+"*";if(t.name==="param"&&t.text){var e=t.text.split(" "),i=e[0],u=e.slice(1);r+="`"+i+"`",u.length>0&&(r+=" \u2014 "+u.join(" "))}else t.text&&(r+=" \u2014 "+t.text);return r}var z=function(t){x(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e.signatureHelpTriggerCharacters=["(",","],e}return r._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case l.Mj.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case l.Mj.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case l.Mj.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},r.prototype.provideSignatureHelp=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,f,s,a;return _(this,function(d){switch(d.label){case 0:return o=e.uri,c=e.getOffsetAt(i),[4,this._worker(o)];case 1:return f=d.sent(),e.isDisposed()?[2]:[4,f.getSignatureHelpItems(o.toString(),c,{triggerReason:r._toSignatureHelpTriggerReason(n)})];case 2:return s=d.sent(),!s||e.isDisposed()?[2]:(a={activeSignature:s.selectedItemIndex,activeParameter:s.argumentIndex,signatures:[]},s.items.forEach(function(p){var b={label:"",parameters:[]};b.documentation={value:C(p.documentation)},b.label+=C(p.prefixDisplayParts),p.parameters.forEach(function(h,m,y){var w=C(h.displayParts),M={label:w,documentation:{value:C(h.documentation)}};b.label+=w,b.parameters.push(M),m<y.length-1&&(b.label+=C(p.separatorDisplayParts))}),b.label+=C(p.suffixDisplayParts),a.signatures.push(b)}),[2,{value:a,dispose:function(){}}])}})})},r}(A),G=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideHover=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,f,s,a,d;return _(this,function(p){switch(p.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=p.sent(),e.isDisposed()?[2]:[4,c.getQuickInfoAtPosition(n.toString(),o)];case 2:return f=p.sent(),!f||e.isDisposed()?[2]:(s=C(f.documentation),a=f.tags?f.tags.map(function(b){return I(b)}).join(`  

`):"",d=C(f.displayParts),[2,{range:this._textSpanToRange(e,f.textSpan),contents:[{value:"```typescript\n"+d+"\n```\n"},{value:s+(a?`

`+a:"")}]}])}})})},r}(A),J=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentHighlights=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,f,s=this;return _(this,function(a){switch(a.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=a.sent(),e.isDisposed()?[2]:[4,c.getOccurrencesAtPosition(n.toString(),o)];case 2:return f=a.sent(),!f||e.isDisposed()?[2]:[2,f.map(function(d){return{range:s._textSpanToRange(e,d.textSpan),kind:d.isWriteAccess?l.Mj.DocumentHighlightKind.Write:l.Mj.DocumentHighlightKind.Text}})]}})})},r}(A),Z=function(t){x(r,t);function r(e,i){var u=t.call(this,i)||this;return u._libFiles=e,u}return r.prototype.provideDefinition=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,f,s,a,d,p,b,h;return _(this,function(m){switch(m.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=m.sent(),e.isDisposed()?[2]:[4,c.getDefinitionAtPosition(n.toString(),o)];case 2:return f=m.sent(),!f||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(f.map(function(y){return l.Sf.parse(y.fileName)}))];case 3:if(m.sent(),e.isDisposed())return[2];for(s=[],a=0,d=f;a<d.length;a++)p=d[a],b=l.Sf.parse(p.fileName),h=this._libFiles.getOrCreateModel(b),h&&s.push({uri:b,range:this._textSpanToRange(h,p.textSpan)});return[2,s]}})})},r}(A),Q=function(t){x(r,t);function r(e,i){var u=t.call(this,i)||this;return u._libFiles=e,u}return r.prototype.provideReferences=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,f,s,a,d,p,b,h,m;return _(this,function(y){switch(y.label){case 0:return o=e.uri,c=e.getOffsetAt(i),[4,this._worker(o)];case 1:return f=y.sent(),e.isDisposed()?[2]:[4,f.getReferencesAtPosition(o.toString(),c)];case 2:return s=y.sent(),!s||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map(function(w){return l.Sf.parse(w.fileName)}))];case 3:if(y.sent(),e.isDisposed())return[2];for(a=[],d=0,p=s;d<p.length;d++)b=p[d],h=l.Sf.parse(b.fileName),m=this._libFiles.getOrCreateModel(h),m&&a.push({uri:h,range:this._textSpanToRange(m,b.textSpan)});return[2,a]}})})},r}(A),X=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentSymbols=function(e,i){return k(this,void 0,void 0,function(){var u,n,o,c,f,s=this;return _(this,function(a){switch(a.label){case 0:return u=e.uri,[4,this._worker(u)];case 1:return n=a.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(u.toString())];case 2:return o=a.sent(),!o||e.isDisposed()?[2]:(c=function(d,p,b){var h={name:p.text,detail:"",kind:S[p.kind]||l.Mj.SymbolKind.Variable,range:s._textSpanToRange(e,p.spans[0]),selectionRange:s._textSpanToRange(e,p.spans[0]),tags:[],containerName:b};if(p.childItems&&p.childItems.length>0)for(var m=0,y=p.childItems;m<y.length;m++){var w=y[m];c(d,w,h.name)}d.push(h)},f=[],o.forEach(function(d){return c(f,d)}),[2,f])}})})},r}(A),v=function(){function t(){}return t.unknown="",t.keyword="keyword",t.script="script",t.module="module",t.class="class",t.interface="interface",t.type="type",t.enum="enum",t.variable="var",t.localVariable="local var",t.function="function",t.localFunction="local function",t.memberFunction="method",t.memberGetAccessor="getter",t.memberSetAccessor="setter",t.memberVariable="property",t.constructorImplementation="constructor",t.callSignature="call",t.indexSignature="index",t.constructSignature="construct",t.parameter="parameter",t.typeParameter="type parameter",t.primitiveType="primitive type",t.label="label",t.alias="alias",t.const="const",t.let="let",t.warning="warning",t}(),S=Object.create(null);S[v.module]=l.Mj.SymbolKind.Module,S[v.class]=l.Mj.SymbolKind.Class,S[v.enum]=l.Mj.SymbolKind.Enum,S[v.interface]=l.Mj.SymbolKind.Interface,S[v.memberFunction]=l.Mj.SymbolKind.Method,S[v.memberVariable]=l.Mj.SymbolKind.Property,S[v.memberGetAccessor]=l.Mj.SymbolKind.Property,S[v.memberSetAccessor]=l.Mj.SymbolKind.Property,S[v.variable]=l.Mj.SymbolKind.Variable,S[v.const]=l.Mj.SymbolKind.Variable,S[v.localVariable]=l.Mj.SymbolKind.Variable,S[v.variable]=l.Mj.SymbolKind.Variable,S[v.function]=l.Mj.SymbolKind.Function,S[v.localFunction]=l.Mj.SymbolKind.Function;var D=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:L.Smart,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},r.prototype._convertTextChanges=function(e,i){return{text:i.newText,range:this._textSpanToRange(e,i.span)}},r}(A),Y=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentRangeFormattingEdits=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,f,s,a,d=this;return _(this,function(p){switch(p.label){case 0:return o=e.uri,c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),f=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),[4,this._worker(o)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsForRange(o.toString(),c,f,D._convertOptions(u))];case 2:return a=p.sent(),!a||e.isDisposed()?[2]:[2,a.map(function(b){return d._convertTextChanges(e,b)})]}})})},r}(D),$=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}",`
`]},enumerable:!1,configurable:!0}),r.prototype.provideOnTypeFormattingEdits=function(e,i,u,n,o){return k(this,void 0,void 0,function(){var c,f,s,a,d=this;return _(this,function(p){switch(p.label){case 0:return c=e.uri,f=e.getOffsetAt(i),[4,this._worker(c)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsAfterKeystroke(c.toString(),f,u,D._convertOptions(n))];case 2:return a=p.sent(),!a||e.isDisposed()?[2]:[2,a.map(function(b){return d._convertTextChanges(e,b)})]}})})},r}(D),q=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideCodeActions=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,f,s,a,d,p,b,h=this;return _(this,function(m){switch(m.label){case 0:return o=e.uri,c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),f=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),s=D._convertOptions(e.getOptions()),a=u.markers.filter(function(y){return y.code}).map(function(y){return y.code}).map(Number),[4,this._worker(o)];case 1:return d=m.sent(),e.isDisposed()?[2]:[4,d.getCodeFixesAtPosition(o.toString(),c,f,a,s)];case 2:return p=m.sent(),!p||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:(b=p.filter(function(y){return y.changes.filter(function(w){return w.isNewFile}).length===0}).map(function(y){return h._tsCodeFixActionToMonacoCodeAction(e,u,y)}),[2,{actions:b,dispose:function(){}}])}})})},r.prototype._tsCodeFixActionToMonacoCodeAction=function(e,i,u){for(var n=[],o=0,c=u.changes;o<c.length;o++)for(var f=c[o],s=0,a=f.textChanges;s<a.length;s++){var d=a[s];n.push({resource:e.uri,edit:{range:this._textSpanToRange(e,d.span),text:d.newText}})}var p={title:u.description,edit:{edits:n},diagnostics:i.markers,kind:"quickfix"};return p},r}(D),ee=function(t){x(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideRenameEdits=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,f,s,a,d,p,b,h,m,y,w;return _(this,function(M){switch(M.label){case 0:return o=e.uri,c=o.toString(),f=e.getOffsetAt(i),[4,this._worker(o)];case 1:return s=M.sent(),e.isDisposed()?[2]:[4,s.getRenameInfo(c,f,{allowRenameOfImportPath:!1})];case 2:if(a=M.sent(),a.canRename===!1)return[2,{edits:[],rejectReason:a.localizedErrorMessage}];if(a.fileToRename!==void 0)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(c,f,!1,!1,!1)];case 3:if(d=M.sent(),!d||e.isDisposed())return[2];for(p=[],b=0,h=d;b<h.length;b++)if(m=h[b],y=l.Sf.parse(m.fileName),w=l.j6.getModel(y),w)p.push({resource:y,edit:{range:this._textSpanToRange(w,m.textSpan),text:u}});else throw new Error("Unknown URI "+y+".");return[2,{edits:p}]}})})},r}(A),O,N;function te(t){N=R(t,"typescript")}function re(t){O=R(t,"javascript")}function ne(){return new Promise(function(t,r){if(!O)return r("JavaScript not registered!");t(O)})}function ie(){return new Promise(function(t,r){if(!N)return r("TypeScript not registered!");t(N)})}function R(t,r){var e=new V(r,t),i=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return e.getLanguageServiceWorker.apply(e,n)},u=new H(i);return l.Mj.registerCompletionItemProvider(r,new U(i)),l.Mj.registerSignatureHelpProvider(r,new z(i)),l.Mj.registerHoverProvider(r,new G(i)),l.Mj.registerDocumentHighlightProvider(r,new J(i)),l.Mj.registerDefinitionProvider(r,new Z(u,i)),l.Mj.registerReferenceProvider(r,new Q(u,i)),l.Mj.registerDocumentSymbolProvider(r,new X(i)),l.Mj.registerDocumentRangeFormattingEditProvider(r,new Y(i)),l.Mj.registerOnTypeFormattingEditProvider(r,new $(i)),l.Mj.registerCodeActionProvider(r,new q(i)),l.Mj.registerRenameProvider(r,new ee(i)),new B(u,t,r,i),i}}}]);
