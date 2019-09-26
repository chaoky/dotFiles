module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function i(){}function r(e,t,n,i,r){for(var o=0,s=t.length,a=0,l=0;o<s;o++){var u=t[o];if(u.removed){if(u.value=e.join(i.slice(l,l+u.count)),l+=u.count,o&&t[o-1].added){var f=t[o-1];t[o-1]=t[o],t[o]=f}}else{if(!u.added&&r){var c=n.slice(a,a+u.count);c=c.map(function(e,t){var n=i[l+t];return n.length>e.length?n:e}),u.value=e.join(c)}else u.value=e.join(n.slice(a,a+u.count));a+=u.count,u.added||(l+=u.count)}}var d=t[s-1];return s>1&&"string"==typeof d.value&&(d.added||d.removed)&&e.equals("",d.value)&&(t[s-2].value+=d.value,t.pop()),t}t.__esModule=!0,t.default=i,i.prototype={diff:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.callback;"function"==typeof n&&(i=n,n={}),this.options=n;var o=this;function s(e){return i?(setTimeout(function(){i(void 0,e)},0),!0):e}e=this.castInput(e),t=this.castInput(t),e=this.removeEmpty(this.tokenize(e));var a=(t=this.removeEmpty(this.tokenize(t))).length,l=e.length,u=1,f=a+l,c=[{newPos:-1,components:[]}],d=this.extractCommon(c[0],t,e,0);if(c[0].newPos+1>=a&&d+1>=l)return s([{value:this.join(t),count:t.length}]);function h(){for(var n=-1*u;n<=u;n+=2){var i=void 0,f=c[n-1],d=c[n+1],h=(d?d.newPos:0)-n;f&&(c[n-1]=void 0);var p=f&&f.newPos+1<a,g=d&&0<=h&&h<l;if(p||g){if(!p||g&&f.newPos<d.newPos?(i={newPos:(m=d).newPos,components:m.components.slice(0)},o.pushComponent(i.components,void 0,!0)):((i=f).newPos++,o.pushComponent(i.components,!0,void 0)),h=o.extractCommon(i,t,e,n),i.newPos+1>=a&&h+1>=l)return s(r(o,i.components,t,e,o.useLongestToken));c[n]=i}else c[n]=void 0}var m;u++}if(i)!function e(){setTimeout(function(){if(u>f)return i();h()||e()},0)}();else for(;u<=f;){var p=h();if(p)return p}},pushComponent:function(e,t,n){var i=e[e.length-1];i&&i.added===t&&i.removed===n?e[e.length-1]={count:i.count+1,added:t,removed:n}:e.push({count:1,added:t,removed:n})},extractCommon:function(e,t,n,i){for(var r=t.length,o=n.length,s=e.newPos,a=s-i,l=0;s+1<r&&a+1<o&&this.equals(t[s+1],n[a+1]);)s++,a++,l++;return l&&e.components.push({count:l}),e.newPos=s,a},equals:function(e,t){return this.options.comparator?this.options.comparator(e,t):e===t||this.options.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}}},function(e,t){e.exports=require("vscode")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";t.__esModule=!0,t.lineDiff=void 0,t.diffLines=function(e,t,n){return a.diff(e,t,n)},t.diffTrimmedLines=function(e,t,n){var i=(0,s.generateOptions)(n,{ignoreWhitespace:!0});return a.diff(e,t,i)};var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i},s=n(10);var a=t.lineDiff=new o.default;a.tokenize=function(e){var t=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var i=0;i<n.length;i++){var r=n[i];i%2&&!this.options.newlineIsToken?t[t.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()),t.push(r))}return t}},function(e,t,n){"use strict";t.__esModule=!0,t.parsePatch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.split(/\r\n|[\n\v\f\r\x85]/),i=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],r=[],o=0;function s(){var e={};for(r.push(e);o<n.length;){var i=n[o];if(/^(\-\-\-|\+\+\+|@@)\s/.test(i))break;var s=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(i);s&&(e.index=s[1]),o++}for(a(e),a(e),e.hunks=[];o<n.length;){var u=n[o];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(u))break;if(/^@@/.test(u))e.hunks.push(l());else{if(u&&t.strict)throw new Error("Unknown line "+(o+1)+" "+JSON.stringify(u));o++}}}function a(e){var t=/^(---|\+\+\+)\s+(.*)$/.exec(n[o]);if(t){var i="---"===t[1]?"old":"new",r=t[2].split("\t",2),s=r[0].replace(/\\\\/g,"\\");/^".*"$/.test(s)&&(s=s.substr(1,s.length-2)),e[i+"FileName"]=s,e[i+"Header"]=(r[1]||"").trim(),o++}}function l(){for(var e=o,r=n[o++],s=r.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),a={oldStart:+s[1],oldLines:+s[2]||1,newStart:+s[3],newLines:+s[4]||1,lines:[],linedelimiters:[]},l=0,u=0;o<n.length&&!(0===n[o].indexOf("--- ")&&o+2<n.length&&0===n[o+1].indexOf("+++ ")&&0===n[o+2].indexOf("@@"));o++){var f=0==n[o].length&&o!=n.length-1?" ":n[o][0];if("+"!==f&&"-"!==f&&" "!==f&&"\\"!==f)break;a.lines.push(n[o]),a.linedelimiters.push(i[o]||"\n"),"+"===f?l++:"-"===f?u++:" "===f&&(l++,u++)}if(l||1!==a.newLines||(a.newLines=0),u||1!==a.oldLines||(a.oldLines=0),t.strict){if(l!==a.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(u!==a.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return a}for(;o<n.length;)s();return r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(6),o=n(12);var s;!function(e){e.File="file",e.Untitled="untitled"}(s=t.DocumentFilterScheme||(t.DocumentFilterScheme={}));const a="editor.formatOnSave",l="editor.action.formatDocument";t.shellformatPath="shellformat.path",t.output=i.window.createOutputChannel("shellformat"),t.activate=function(e){const n=i.workspace.getConfiguration(r.configurationPrefix),u=new r.Formatter(e,t.output),f=new r.ShellDocumentFormattingEditProvider(u,n);o.checkInstall(e,t.output);const c=n.get(r.ConfigItemName.EffectLanguages);if(c)for(const t of c)for(const n of Object.values(s))e.subscriptions.push(i.languages.registerDocumentFormattingEditProvider({language:t,scheme:n},f));i.workspace.getConfiguration().get(a)&&i.workspace.onWillSaveTextDocument(e=>{1===e.reason&&function(e){const t=i.workspace.getConfiguration(r.configurationPrefix).get(r.ConfigItemName.EffectLanguages),{scheme:n}=e.uri;if(t){const i=t.find(t=>t===e.languageId);if(i)return n===s.File||n===s.Untitled}return!1}(e.document)&&i.commands.executeCommand(l)})},t.deactivate=function(){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(7),o=(n(2),n(8)),s=n(13),a=n(1),l=n(12);var u;t.configurationPrefix="shellformat",function(e){e.Flag="flag",e.Path="path",e.EffectLanguages="effectLanguages",e.ShowError="showError"}(u=t.ConfigItemName||(t.ConfigItemName={}));const f="/usr/local/bin",c=`${f}/shfmt`;class d{constructor(e,t){this.context=e,this.output=t,this.diagnosticCollection=i.languages.createDiagnosticCollection("shell-format")}getShfmtPath(){return l.getDestPath(this.context)}formatDocument(e,t){const n=new a.Position(0,0),r=new i.Position(e.lineCount-1,e.lineAt(e.lineCount-1).text.length),o=new i.Range(n,r),s=e.getText(o);return this.formatDocumentWithContent(s,e,o,t)}formatDocumentWithContent(e,n,l,u){return new Promise((l,f)=>{try{let c=[],h=i.workspace.getConfiguration(t.configurationPrefix),p=!1;if(h){let e=h.flag;if(e){e.includes("-w")&&(i.window.showWarningMessage("can not set -w flag  please fix config"),f("-w config error")),e.includes("-i")&&(p=!0);let t=e.split(" ");c.push(...t)}let t=h.path;t?o.fileExists(t)?d.formatCommand=t:i.window.showErrorMessage("the config shellformat.path file not exists please fix it"):d.formatCommand=this.getShfmtPath()}u&&u.insertSpaces&&!p&&c.push("-i",u.tabSize);let g=r.spawn(d.formatCommand,c),m=[],v=[],w=[];g.stdout.on("data",e=>{let t;t=e instanceof Buffer?e:new Buffer(e),m.push(t)}),g.stderr.on("data",e=>{let t;t=e instanceof Buffer?e:new Buffer(e),v.push(t)}),g.on("close",(t,r)=>{if(0==t)if(this.diagnosticCollection.delete(n.uri),0==m.length)l(null);else{let t=Buffer.concat(m).toString();s.getEdits(n.fileName,e,t).edits.forEach(e=>{w.push(e.apply())}),l(w)}else{let e="";if(0!=v.length){e=Buffer.concat(v).toString();let t=/^<standard input>:(\d+):(\d+):/.exec(e);if(null!==t&&t.length>2){let r=parseInt(t[1]),o=parseInt(t[2]);const s={range:new i.Range(new i.Position(r,o),new i.Position(r,o)),message:e.slice("<standard input>:".length,e.length),severity:a.DiagnosticSeverity.Error};this.diagnosticCollection.delete(n.uri),this.diagnosticCollection.set(n.uri,[s])}}f(e)}}),g.stdin.write(e),g.stdin.end()}catch(e){f("Internal issues when formatted content")}})}}d.formatCommand="shfmt",t.Formatter=d;function h(){i.window.showErrorMessage(`[${t.configurationPrefix}.${u.Path}]not found!  please install manually https://mvdan.cc/sh/cmd/shfmt `)}t.ShellDocumentFormattingEditProvider=class{constructor(e,n){this.formatter=e,this.settings=void 0===n?i.workspace.getConfiguration(t.configurationPrefix):n}provideDocumentFormattingEdits(e,t,n){return this.formatter.formatDocument(e,t)}},t.checkEnv=function(){const e=i.workspace.getConfiguration(t.configurationPrefix);let n=!1;if(e){let r=e.get(u.Flag);r&&r.includes("-w")&&i.window.showWarningMessage("can not set -w flag  please fix config");let s=e.get(u.Path);s&&(n=!0,o.fileExists(s)?this.formatCommand=s:i.window.showErrorMessage(`the config [${t.configurationPrefix}.${u.Path}] file not exists please fix it`))}n||null!=o.getExecutableFileUnderPath(d.formatCommand)||o.fileExists(c)||("darwin"==process.platform?function(){if(o.getExecutableFileUnderPath("brew")){i.window.showInformationMessage("will install shfmt by brew");const e=i.window.createTerminal();e.show(),e.sendText("brew install shfmt",!0),e.sendText("echo '**Enjoy shellscript!**'",!0),e.sendText("echo 'fork or star  https://github.com/foxundermoon/vs-shell-format'",!0)}}():(["freebsd","linux","openbsd"].includes(process.platform),h()))},t.getSettings=function(e){let n=i.workspace.getConfiguration(t.configurationPrefix);return void 0!==e?n[e]:null}},function(e,t){e.exports=require("child_process")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),r=n(9);let o={};function s(e){try{return i.statSync(e).isFile()}catch(e){return!1}}t.getExecutableFileUnderPath=function(e){let t=o[e];if(t)return t;var n;n=e,e="win32"===process.platform?n+".exe":n;let i=process.env.PATH.split(r.delimiter);for(let t=0;t<i.length;t++){let n=r.join(i[t],e);if(s(n))return o[e]=n,n}return null},t.fileExists=s},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";t.__esModule=!0,t.generateOptions=function(e,t){if("function"==typeof e)t.callback=e;else if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}},function(e,t,n){"use strict";t.__esModule=!0,t.structuredPatch=o,t.createTwoFilesPatch=s,t.createPatch=function(e,t,n,i,r,o){return s(e,e,t,n,i,r,o)};var i=n(3);function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n,o,s,a,l){l||(l={}),void 0===l.context&&(l.context=4);var u=(0,i.diffLines)(n,o,l);function f(e){return e.map(function(e){return" "+e})}u.push({value:"",lines:[]});for(var c=[],d=0,h=0,p=[],g=1,m=1,v=function(e){var t=u[e],i=t.lines||t.value.replace(/\n$/,"").split("\n");if(t.lines=i,t.added||t.removed){var s;if(!d){var a=u[e-1];d=g,h=m,a&&(p=l.context>0?f(a.lines.slice(-l.context)):[],d-=p.length,h-=p.length)}(s=p).push.apply(s,r(i.map(function(e){return(t.added?"+":"-")+e}))),t.added?m+=i.length:g+=i.length}else{if(d)if(i.length<=2*l.context&&e<u.length-2){var v;(v=p).push.apply(v,r(f(i)))}else{var w,y=Math.min(i.length,l.context);(w=p).push.apply(w,r(f(i.slice(0,y))));var x={oldStart:d,oldLines:g-d+y,newStart:h,newLines:m-h+y,lines:p};if(e>=u.length-2&&i.length<=l.context){var E=/\n$/.test(n),P=/\n$/.test(o);0!=i.length||E?E&&P||p.push("\\ No newline at end of file"):p.splice(x.oldLines,0,"\\ No newline at end of file")}c.push(x),d=0,h=0,p=[]}g+=i.length,m+=i.length}},w=0;w<u.length;w++)v(w);return{oldFileName:e,newFileName:t,oldHeader:s,newHeader:a,hunks:c}}function s(e,t,n,i,r,s,a){var l=o(e,t,n,i,r,s,a),u=[];e==t&&u.push("Index: "+e),u.push("==================================================================="),u.push("--- "+l.oldFileName+(void 0===l.oldHeader?"":"\t"+l.oldHeader)),u.push("+++ "+l.newFileName+(void 0===l.newHeader?"":"\t"+l.newHeader));for(var f=0;f<l.hunks.length;f++){var c=l.hunks[f];u.push("@@ -"+c.oldStart+","+c.oldLines+" +"+c.newStart+","+c.newLines+" @@"),u.push.apply(u,c.lines)}return u.join("\n")+"\n"}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(27),o=n(2),s=n(28),a=n(1),l=n(9),u=n(7),f=n(6),c=n(5),d=10;function h(e,t,n){return i(this,void 0,void 0,function*(){return new Promise((s,a)=>i(this,void 0,void 0,function*(){let i;for(let t=0;t<d&&((i=yield new Promise(t=>r.get(e,t))).statusCode>=300&&i.statusCode<400&&i.headers.location);++t)e=i.headers.location;if((i.statusCode<200||i.statusCode>=300)&&a(new Error(`HTTP status ${i.statusCode} : ${i.statusMessage}`)),"application/octet-stream"!=i.headers["content-type"])a(new Error("HTTP response does not contain an octet stream"));else{let e=o.createWriteStream(t),r=i.pipe(e);if(n){let e=i.headers["content-length"]?Number.parseInt(i.headers["content-length"]):null,t=0,r=0;i.on("data",i=>{r=t,t+=i.length,n(t,e,r)})}r.on("finish",s),r.on("error",a),i.on("error",a)}}))})}var p,g;function m(){switch(process.arch){case"arm":case"arm64":return p.arm;case"ia32":case"x32":return p.i386;case"x64":return p.x64;case"mips":return p.mips;default:return p.unknown}}function v(){switch(process.platform){case"win32":return g.windows;case"freebsd":return g.freebsd;case"openbsd":return g.openbsd;case"darwin":return g.darwin;case"linux":return g.linux;default:return g.unknown}}function w(){const e=m(),t=v();if(e===p.unknown||t==g.unknown)throw new Error("do not find release shfmt for your platform");return`shfmt_${s.config.shfmtVersion}_${t}_${e}${"win32"===process.platform?".exe":""}`}function y(){return`https://github.com/mvdan/sh/releases/download/${s.config.shfmtVersion}/${w()}`}function x(e){return f.getSettings("path")||l.join(e.extensionPath,"bin",w())}t.download=function(e,t,n){return i(this,void 0,void 0,function*(){})},t.download2=h,function(e){e.arm="arm",e.arm64="arm",e.i386="386",e.mips="mips",e.x64="amd64",e.unknown="unknown"}(p||(p={})),function(e){e.darwin="darwin",e.freebsd="freebsd",e.linux="linux",e.netbsd="netbsd",e.openbsd="openbsd",e.windows="windows",e.unknown="unknown"}(g||(g={})),t.getArchExtension=m,t.getPlatform=v,t.getPlatFormFilename=w,t.getReleaseDownloadUrl=y,t.getDestPath=x,t.checkInstall=function(e,t){return i(this,void 0,void 0,function*(){if(!s.config.needCheckInstall)return;const n=x(e);if(yield function e(t){return i(this,void 0,void 0,function*(){(yield new Promise(e=>o.exists(t,t=>e(t))))||(yield e(l.dirname(t)),yield new Promise((e,n)=>o.mkdir(t,t=>{t?n(t):e()})))})}(l.dirname(n)),yield function(e,t){return i(this,void 0,void 0,function*(){try{const n=a.workspace.getConfiguration().get(c.shellformatPath);if(n)try{return yield o.promises.access(n,o.constants.X_OK),s.config.needCheckInstall=!1,!1}catch(e){t.appendLine(`"${c.shellformatPath}": "${n}"   find config shellformat path ,but the file cannot execute or not exists, so will auto download shfmt`)}const r=yield function(e){return i(this,void 0,void 0,function*(){const t=yield o.promises.stat(e);if(t.isFile()){const t=u.execFileSync(e,["--version"],{encoding:"utf8"});return t.replace("\n","")}throw new Error(`[${e}] is not file`)})}(e),l=r!==s.config.shfmtVersion;return l?t.appendLine(`current shfmt version : ${r}  ,is outdate to new version : ${s.config.shfmtVersion}`):s.config.needCheckInstall=!1,l}catch(e){return t.appendLine("shfmt hasn't downloaded yet!"+e),t.show(),!0}})}(n,t)){t.show();try{yield function(e){return i(this,void 0,void 0,function*(){try{yield o.promises.access(e)}catch(e){return}yield o.promises.unlink(e)})}(n)}catch(e){return t.appendLine(`clean old file failed:[ ${n} ] ,please delete it mutual`),void t.show()}const e=y();try{t.appendLine("Shfmt will be downloaded automatically!"),t.appendLine(`download url: ${e}`),t.appendLine(`download to: ${n}`),t.appendLine("If the download fails, you can manually download it to the dest directory."),t.appendLine('Or download to another directory, and then set the "shellformat.path" as the path'),t.appendLine("download shfmt page: https://github.com/mvdan/sh/releases"),t.appendLine("You can't use this plugin until the download is successful."),t.show(),yield h(e,n,(e,n,i)=>{Math.floor(i/5)<Math.floor(e/5)?t.appendLine(`downloaded:[${(100*e/n).toFixed(2)}%]`):t.append(".")}),yield o.promises.chmod(n,755),t.appendLine("download success, You can use it successfully!"),t.appendLine("Suggestions or issues can be submitted here https://git.io/vsshell-issues")}catch(e){t.appendLine(`download failed: ${e}`)}t.show()}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(8),o=n(14);let s=null;var a;t.isDiffToolAvailable=function(){return null==s&&(s=null!=r.getExecutableFileUnderPath("diff")),s},function(e){e[e.EDIT_DELETE=0]="EDIT_DELETE",e[e.EDIT_INSERT=1]="EDIT_INSERT",e[e.EDIT_REPLACE=2]="EDIT_REPLACE"}(a=t.EditTypes||(t.EditTypes={}));class l{constructor(e,t){this.action=e,this.start=t,this.text=""}apply(){switch(this.action){case a.EDIT_INSERT:return i.TextEdit.insert(this.start,this.text);case a.EDIT_DELETE:return i.TextEdit.delete(new i.Range(this.start,this.end));case a.EDIT_REPLACE:return i.TextEdit.replace(new i.Range(this.start,this.end),this.text)}}applyUsingTextEditorEdit(e){switch(this.action){case a.EDIT_INSERT:e.insert(this.start,this.text);break;case a.EDIT_DELETE:e.delete(new i.Range(this.start,this.end));break;case a.EDIT_REPLACE:e.replace(new i.Range(this.start,this.end),this.text)}}applyUsingWorkspaceEdit(e,t){switch(this.action){case a.EDIT_INSERT:e.insert(t,this.start,this.text);break;case a.EDIT_DELETE:e.delete(t,new i.Range(this.start,this.end));break;case a.EDIT_REPLACE:e.replace(t,new i.Range(this.start,this.end),this.text)}}}function u(e){let t=[];return e.forEach(e=>{let n=null,r=[];e.hunks.forEach(e=>{let t=e.oldStart;e.lines.forEach(e=>{switch(e.substr(0,1)){case"-":null==n&&(n=new l(a.EDIT_DELETE,new i.Position(t-1,0))),n.end=new i.Position(t,0),t++;break;case"+":null==n?n=new l(a.EDIT_INSERT,new i.Position(t-1,0)):n.action===a.EDIT_DELETE&&(n.action=a.EDIT_REPLACE),n.text+=e.substr(1)+"\n";break;case" ":t++,null!=n&&r.push(n),n=null}}),null!=n&&r.push(n)}),t.push({fileName:e.oldFileName,edits:r})}),t}t.Edit=l,t.getEdits=function(e,t,n){return"win32"===process.platform&&(t=t.split("\r\n").join("\n"),n=n.split("\r\n").join("\n")),u([o.structuredPatch(e,e,t,n,"","")])[0]},t.getEditsFromUnifiedDiffStr=function(e){return e.startsWith("---")&&(e=e.split("---").join("Index\n---")),u(o.parsePatch(e))}},function(e,t,n){"use strict";t.__esModule=!0,t.canonicalize=t.convertChangesToXML=t.convertChangesToDMP=t.merge=t.parsePatch=t.applyPatches=t.applyPatch=t.createPatch=t.createTwoFilesPatch=t.structuredPatch=t.diffArrays=t.diffJson=t.diffCss=t.diffSentences=t.diffTrimmedLines=t.diffLines=t.diffWordsWithSpace=t.diffWords=t.diffChars=t.Diff=void 0;var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i},s=n(15),a=n(16),l=n(3),u=n(17),f=n(18),c=n(19),d=n(20),h=n(21),p=n(4),g=n(23),m=n(11),v=n(25),w=n(26);t.Diff=o.default,t.diffChars=s.diffChars,t.diffWords=a.diffWords,t.diffWordsWithSpace=a.diffWordsWithSpace,t.diffLines=l.diffLines,t.diffTrimmedLines=l.diffTrimmedLines,t.diffSentences=u.diffSentences,t.diffCss=f.diffCss,t.diffJson=c.diffJson,t.diffArrays=d.diffArrays,t.structuredPatch=m.structuredPatch,t.createTwoFilesPatch=m.createTwoFilesPatch,t.createPatch=m.createPatch,t.applyPatch=h.applyPatch,t.applyPatches=h.applyPatches,t.parsePatch=p.parsePatch,t.merge=g.merge,t.convertChangesToDMP=v.convertChangesToDMP,t.convertChangesToXML=w.convertChangesToXML,t.canonicalize=c.canonicalize},function(e,t,n){"use strict";t.__esModule=!0,t.characterDiff=void 0,t.diffChars=function(e,t,n){return s.diff(e,t,n)};var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};var s=t.characterDiff=new o.default},function(e,t,n){"use strict";t.__esModule=!0,t.wordDiff=void 0,t.diffWords=function(e,t,n){return n=(0,s.generateOptions)(n,{ignoreWhitespace:!0}),u.diff(e,t,n)},t.diffWordsWithSpace=function(e,t,n){return u.diff(e,t,n)};var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i},s=n(10);var a=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,l=/\S/,u=t.wordDiff=new o.default;u.equals=function(e,t){return this.options.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e===t||this.options.ignoreWhitespace&&!l.test(e)&&!l.test(t)},u.tokenize=function(e){for(var t=e.split(/(\s+|\b)/),n=0;n<t.length-1;n++)!t[n+1]&&t[n+2]&&a.test(t[n])&&a.test(t[n+2])&&(t[n]+=t[n+2],t.splice(n+1,2),n--);return t}},function(e,t,n){"use strict";t.__esModule=!0,t.sentenceDiff=void 0,t.diffSentences=function(e,t,n){return s.diff(e,t,n)};var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};var s=t.sentenceDiff=new o.default;s.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)}},function(e,t,n){"use strict";t.__esModule=!0,t.cssDiff=void 0,t.diffCss=function(e,t,n){return s.diff(e,t,n)};var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};var s=t.cssDiff=new o.default;s.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)}},function(e,t,n){"use strict";t.__esModule=!0,t.jsonDiff=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.diffJson=function(e,t,n){return u.diff(e,t,n)},t.canonicalize=f;var r,o=n(0),s=(r=o)&&r.__esModule?r:{default:r},a=n(3);var l=Object.prototype.toString,u=t.jsonDiff=new s.default;function f(e,t,n,r,o){t=t||[],n=n||[],r&&(e=r(o,e));var s=void 0;for(s=0;s<t.length;s+=1)if(t[s]===e)return n[s];var a=void 0;if("[object Array]"===l.call(e)){for(t.push(e),a=new Array(e.length),n.push(a),s=0;s<e.length;s+=1)a[s]=f(e[s],t,n,r,o);return t.pop(),n.pop(),a}if(e&&e.toJSON&&(e=e.toJSON()),"object"===(void 0===e?"undefined":i(e))&&null!==e){t.push(e),a={},n.push(a);var u=[],c=void 0;for(c in e)e.hasOwnProperty(c)&&u.push(c);for(u.sort(),s=0;s<u.length;s+=1)a[c=u[s]]=f(e[c],t,n,r,c);t.pop(),n.pop()}else a=e;return a}u.useLongestToken=!0,u.tokenize=a.lineDiff.tokenize,u.castInput=function(e){var t=this.options,n=t.undefinedReplacement,i=t.stringifyReplacer,r=void 0===i?function(e,t){return void 0===t?n:t}:i;return"string"==typeof e?e:JSON.stringify(f(e,null,null,r),r,"  ")},u.equals=function(e,t){return s.default.prototype.equals.call(u,e.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"))}},function(e,t,n){"use strict";t.__esModule=!0,t.arrayDiff=void 0,t.diffArrays=function(e,t,n){return s.diff(e,t,n)};var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};var s=t.arrayDiff=new o.default;s.tokenize=function(e){return e.slice()},s.join=s.removeEmpty=function(e){return e}},function(e,t,n){"use strict";t.__esModule=!0,t.applyPatch=a,t.applyPatches=function(e,t){"string"==typeof e&&(e=(0,r.parsePatch)(e));var n=0;!function i(){var r=e[n++];if(!r)return t.complete();t.loadFile(r,function(e,n){if(e)return t.complete(e);var o=a(n,r,t);t.patched(r,o,function(e){if(e)return t.complete(e);i()})})}()};var i,r=n(4),o=n(22),s=(i=o)&&i.__esModule?i:{default:i};function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t&&(t=(0,r.parsePatch)(t)),Array.isArray(t)){if(t.length>1)throw new Error("applyPatch only works with a single input.");t=t[0]}var i=e.split(/\r\n|[\n\v\f\r\x85]/),o=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],a=t.hunks,l=n.compareLine||function(e,t,n,i){return t===i},u=0,f=n.fuzzFactor||0,c=0,d=0,h=void 0,p=void 0;function g(e,t){for(var n=0;n<e.lines.length;n++){var r=e.lines[n],o=r.length>0?r[0]:" ",s=r.length>0?r.substr(1):r;if(" "===o||"-"===o){if(!l(t+1,i[t],o,s)&&++u>f)return!1;t++}}return!0}for(var m=0;m<a.length;m++){for(var v=a[m],w=i.length-v.oldLines,y=0,x=d+v.oldStart-1,E=(0,s.default)(x,c,w);void 0!==y;y=E())if(g(v,x+y)){v.offset=d+=y;break}if(void 0===y)return!1;c=v.offset+v.oldStart+v.oldLines}for(var P=0,_=0;_<a.length;_++){var L=a[_],b=L.oldStart+L.offset+P-1;P+=L.newLines-L.oldLines,b<0&&(b=0);for(var S=0;S<L.lines.length;S++){var C=L.lines[S],k=C.length>0?C[0]:" ",T=C.length>0?C.substr(1):C,D=L.linedelimiters[S];if(" "===k)b++;else if("-"===k)i.splice(b,1),o.splice(b,1);else if("+"===k)i.splice(b,0,T),o.splice(b,0,D),b++;else if("\\"===k){var F=L.lines[S-1]?L.lines[S-1][0]:null;"+"===F?h=!0:"-"===F&&(p=!0)}}}if(h)for(;!i[i.length-1];)i.pop(),o.pop();else p&&(i.push(""),o.push("\n"));for(var M=0;M<i.length-1;M++)i[M]=i[M]+o[M];return i.join("")}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){var i=!0,r=!1,o=!1,s=1;return function a(){if(i&&!o){if(r?s++:i=!1,e+s<=n)return s;o=!0}if(!r)return o||(i=!0),t<=e-s?-s++:(r=!0,a())}}},function(e,t,n){"use strict";t.__esModule=!0,t.calcLineCount=a,t.merge=function(e,t,n){e=l(e,n),t=l(t,n);var i={};(e.index||t.index)&&(i.index=e.index||t.index);(e.newFileName||t.newFileName)&&(u(e)?u(t)?(i.oldFileName=f(i,e.oldFileName,t.oldFileName),i.newFileName=f(i,e.newFileName,t.newFileName),i.oldHeader=f(i,e.oldHeader,t.oldHeader),i.newHeader=f(i,e.newHeader,t.newHeader)):(i.oldFileName=e.oldFileName,i.newFileName=e.newFileName,i.oldHeader=e.oldHeader,i.newHeader=e.newHeader):(i.oldFileName=t.oldFileName||e.oldFileName,i.newFileName=t.newFileName||e.newFileName,i.oldHeader=t.oldHeader||e.oldHeader,i.newHeader=t.newHeader||e.newHeader));i.hunks=[];var r=0,o=0,s=0,a=0;for(;r<e.hunks.length||o<t.hunks.length;){var p=e.hunks[r]||{oldStart:1/0},g=t.hunks[o]||{oldStart:1/0};if(c(p,g))i.hunks.push(d(p,s)),r++,a+=p.newLines-p.oldLines;else if(c(g,p))i.hunks.push(d(g,a)),o++,s+=g.newLines-g.oldLines;else{var m={oldStart:Math.min(p.oldStart,g.oldStart),oldLines:0,newStart:Math.min(p.newStart+s,g.oldStart+a),newLines:0,lines:[]};h(m,p.oldStart,p.lines,g.oldStart,g.lines),o++,r++,i.hunks.push(m)}}return i};var i=n(11),r=n(4),o=n(24);function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){var t=function e(t){var n=0;var i=0;t.forEach(function(t){if("string"!=typeof t){var r=e(t.mine),o=e(t.theirs);void 0!==n&&(r.oldLines===o.oldLines?n+=r.oldLines:n=void 0),void 0!==i&&(r.newLines===o.newLines?i+=r.newLines:i=void 0)}else void 0===i||"+"!==t[0]&&" "!==t[0]||i++,void 0===n||"-"!==t[0]&&" "!==t[0]||n++});return{oldLines:n,newLines:i}}(e.lines),n=t.oldLines,i=t.newLines;void 0!==n?e.oldLines=n:delete e.oldLines,void 0!==i?e.newLines=i:delete e.newLines}function l(e,t){if("string"==typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return(0,r.parsePatch)(e)[0];if(!t)throw new Error("Must provide a base reference or pass in a patch");return(0,i.structuredPatch)(void 0,void 0,t,e)}return e}function u(e){return e.newFileName&&e.newFileName!==e.oldFileName}function f(e,t,n){return t===n?t:(e.conflict=!0,{mine:t,theirs:n})}function c(e,t){return e.oldStart<t.oldStart&&e.oldStart+e.oldLines<t.oldStart}function d(e,t){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+t,newLines:e.newLines,lines:e.lines}}function h(e,t,n,i,r){var o={offset:t,lines:n,index:0},l={offset:i,lines:r,index:0};for(v(e,o,l),v(e,l,o);o.index<o.lines.length&&l.index<l.lines.length;){var u=o.lines[o.index],f=l.lines[l.index];if("-"!==u[0]&&"+"!==u[0]||"-"!==f[0]&&"+"!==f[0])if("+"===u[0]&&" "===f[0]){var c;(c=e.lines).push.apply(c,s(y(o)))}else if("+"===f[0]&&" "===u[0]){var d;(d=e.lines).push.apply(d,s(y(l)))}else"-"===u[0]&&" "===f[0]?g(e,o,l):"-"===f[0]&&" "===u[0]?g(e,l,o,!0):u===f?(e.lines.push(u),o.index++,l.index++):m(e,y(o),y(l));else p(e,o,l)}w(e,o),w(e,l),a(e)}function p(e,t,n){var i=y(t),r=y(n);if(x(i)&&x(r)){var a,l;if((0,o.arrayStartsWith)(i,r)&&E(n,i,i.length-r.length))return void(a=e.lines).push.apply(a,s(i));if((0,o.arrayStartsWith)(r,i)&&E(t,r,r.length-i.length))return void(l=e.lines).push.apply(l,s(r))}else if((0,o.arrayEqual)(i,r)){var u;return void(u=e.lines).push.apply(u,s(i))}m(e,i,r)}function g(e,t,n,i){var r,o=y(t),a=function(e,t){var n=[],i=[],r=0,o=!1,s=!1;for(;r<t.length&&e.index<e.lines.length;){var a=e.lines[e.index],l=t[r];if("+"===l[0])break;if(o=o||" "!==a[0],i.push(l),r++,"+"===a[0])for(s=!0;"+"===a[0];)n.push(a),a=e.lines[++e.index];l.substr(1)===a.substr(1)?(n.push(a),e.index++):s=!0}"+"===(t[r]||"")[0]&&o&&(s=!0);if(s)return n;for(;r<t.length;)i.push(t[r++]);return{merged:i,changes:n}}(n,o);a.merged?(r=e.lines).push.apply(r,s(a.merged)):m(e,i?a:o,i?o:a)}function m(e,t,n){e.conflict=!0,e.lines.push({conflict:!0,mine:t,theirs:n})}function v(e,t,n){for(;t.offset<n.offset&&t.index<t.lines.length;){var i=t.lines[t.index++];e.lines.push(i),t.offset++}}function w(e,t){for(;t.index<t.lines.length;){var n=t.lines[t.index++];e.lines.push(n)}}function y(e){for(var t=[],n=e.lines[e.index][0];e.index<e.lines.length;){var i=e.lines[e.index];if("-"===n&&"+"===i[0]&&(n="+"),n!==i[0])break;t.push(i),e.index++}return t}function x(e){return e.reduce(function(e,t){return e&&"-"===t[0]},!0)}function E(e,t,n){for(var i=0;i<n;i++){var r=t[t.length-n+i].substr(1);if(e.lines[e.index+i]!==" "+r)return!1}return e.index+=n,!0}},function(e,t,n){"use strict";function i(e,t){if(t.length>e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}t.__esModule=!0,t.arrayEqual=function(e,t){if(e.length!==t.length)return!1;return i(e,t)},t.arrayStartsWith=i},function(e,t,n){"use strict";t.__esModule=!0,t.convertChangesToDMP=function(e){for(var t=[],n=void 0,i=void 0,r=0;r<e.length;r++)n=e[r],i=n.added?1:n.removed?-1:0,t.push([i,n.value]);return t}},function(e,t,n){"use strict";function i(e){var t=e;return t=(t=(t=(t=t.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}t.__esModule=!0,t.convertChangesToXML=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];r.added?t.push("<ins>"):r.removed&&t.push("<del>"),t.push(i(r.value)),r.added?t.push("</ins>"):r.removed&&t.push("</del>")}return t.join("")}},function(e,t){e.exports=require("https")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config={shfmtVersion:"v2.6.4",needCheckInstall:!0}}]);
//# sourceMappingURL=extension.js.map