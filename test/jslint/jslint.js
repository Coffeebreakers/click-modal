// (C)2011 Douglas Crockford
// www.JSLint.com

var JSLINT=(function(){"use strict";var adsafe_id,adsafe_may,adsafe_went,anonname,approved,bang={'<':true,'<=':true,'==':true,'===':true,'!==':true,'!=':true,'>':true,'>=':true,'+':true,'-':true,'*':true,'/':true,'%':true},banned={'arguments':true,callee:true,caller:true,constructor:true,'eval':true,prototype:true,stack:true,unwatch:true,valueOf:true,watch:true},bool_options={adsafe:true,bitwise:true,browser:true,cap:true,'continue':true,css:true,debug:true,devel:true,es5:true,evil:true,forin:true,fragment:true,newcap:true,nomen:true,on:true,onevar:true,passfail:true,plusplus:true,regexp:true,rhino:true,undef:true,safe:true,windows:true,strict:true,sub:true,white:true,widget:true},browser={addEventListener:false,blur:false,clearInterval:false,clearTimeout:false,close:false,closed:false,defaultStatus:false,document:false,event:false,focus:false,frames:false,getComputedStyle:false,history:false,Image:false,length:false,location:false,moveBy:false,moveTo:false,name:false,navigator:false,onbeforeunload:true,onblur:true,onerror:true,onfocus:true,onload:true,onresize:true,onunload:true,open:false,opener:false,Option:false,parent:false,print:false,removeEventListener:false,resizeBy:false,resizeTo:false,screen:false,scroll:false,scrollBy:false,scrollTo:false,setInterval:false,setTimeout:false,status:false,top:false,XMLHttpRequest:false},bundle={a_function:"'{a}' is a function.",a_label:"'{a}' is a statement label.",a_not_allowed:"'{a}' is not allowed.",a_not_defined:"'{a}' is not defined.",a_scope:"'{a}' used out of scope.",adsafe:"ADsafe violation.",adsafe_a:"ADsafe violation: '{a}'.",adsafe_autocomplete:"ADsafe autocomplete violation.",adsafe_bad_id:"ADSAFE violation: bad id.",adsafe_div:"ADsafe violation: Wrap the widget in a div.",adsafe_fragment:"ADSAFE: Use the fragment option.",adsafe_go:"ADsafe violation: Missing ADSAFE.go.",adsafe_html:"Currently, ADsafe does not operate on whole HTML documents. It operates on <div> fragments and .js files.",adsafe_id:"ADsafe violation: id does not match.",adsafe_id_go:"ADsafe violation: Missing ADSAFE.id or ADSAFE.go.",adsafe_lib:"ADsafe lib violation.",adsafe_lib_second:"ADsafe: The second argument to lib must be a function.",adsafe_missing_id:"ADSAFE violation: missing ID_.",adsafe_name_a:"ADsafe name violation: '{a}'.",adsafe_placement:"ADsafe script placement violation.",adsafe_prefix_a:"ADsafe violation: An id must have a '{a}' prefix",adsafe_script:"ADsafe script violation.",adsafe_source:"ADsafe unapproved script source.",adsafe_subscript_a:"ADsafe subscript '{a}'.",adsafe_tag:"ADsafe violation: Disallowed tag '{a}'.",already_defined:"'{a}' is already defined.",and:"The '&&' subexpression should be wrapped in parens.",assign_exception:"Do not assign to the exception parameter.",assignment_function_expression:"Expected an assignment or function call and instead saw an expression.",attribute_case_a:"Attribute '{a}' not all lower case.",avoid_a:"Avoid '{a}'.",bad_assignment:"Bad assignment.",bad_color_a:"Bad hex color '{a}'.",bad_constructor:"Bad constructor.",bad_entity:"Bad entity.",bad_html:"Bad HTML string",bad_id_a:"Bad id: '{a}'.",bad_in_a:"Bad for in variable '{a}'.",bad_invocation:"Bad invocation.",bad_name_a:"Bad name: '{a}'.",bad_new:"Do not use 'new' for side effects.",bad_number:"Bad number '{a}'.",bad_operand:"Bad operand.",bad_type:"Bad type.",bad_url:"Bad url string.",bad_wrap:"Do not wrap function literals in parens unless they are to be immediately invoked.",combine_var:"Combine this with the previous 'var' statement.",conditional_assignment:"Expected a conditional expression and instead saw an assignment.",confusing_a:"Confusing use of '{a}'.",confusing_regexp:"Confusing regular expression.",constructor_name_a:"A constructor name '{a}' should start with an uppercase letter.",control_a:"Unexpected control character '{a}'.",css:"A css file should begin with @charset 'UTF-8';",dangling_a:"Unexpected dangling '_' in '{a}'.",dangerous_comment:"Dangerous comment.",deleted:"Only properties should be deleted.",duplicate_a:"Duplicate '{a}'.",empty_block:"Empty block.",empty_case:"Empty case.",empty_class:"Empty class.",evil:"eval is evil.",expected_a:"Expected '{a}'.",expected_a_b:"Expected '{a}' and instead saw '{b}'.",expected_a_b_from_c_d:"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.",expected_at_a:"Expected an at-rule, and instead saw @{a}.",expected_a_at_b_c:"Expected '{a}' at column {b}, not column {c}.",expected_attribute_a:"Expected an attribute, and instead saw [{a}].",expected_attribute_value_a:"Expected an attribute value and instead saw '{a}'.",expected_class_a:"Expected a class, and instead saw .{a}.",expected_fraction_a:"Expected a number between 0 and 1 and instead saw '{a}'",expected_id_a:"Expected an id, and instead saw #{a}.",expected_identifier_a:"Expected an identifier and instead saw '{a}'.",expected_identifier_a_reserved:"Expected an identifier and instead saw '{a}' (a reserved word).",expected_linear_a:"Expected a linear unit and instead saw '{a}'.",expected_lang_a:"Expected a lang code, and instead saw :{a}.",expected_media_a:"Expected a CSS media type, and instead saw '{a}'.",expected_name_a:"Expected a name and instead saw '{a}'.",expected_nonstandard_style_attribute:"Expected a non-standard style attribute and instead saw '{a}'.",expected_number_a:"Expected a number and instead saw '{a}'.",expected_operator_a:"Expected an operator and instead saw '{a}'.",expected_percent_a:"Expected a percentage and instead saw '{a}'",expected_positive_a:"Expected a positive number and instead saw '{a}'",expected_pseudo_a:"Expected a pseudo, and instead saw :{a}.",expected_selector_a:"Expected a CSS selector, and instead saw {a}.",expected_small_a:"Expected a small number and instead saw '{a}'",expected_space_a_b:"Expected exactly one space between '{a}' and '{b}'.",expected_string_a:"Expected a string and instead saw {a}.",expected_style_attribute:"Excepted a style attribute, and instead saw '{a}'.",expected_style_pattern:"Expected a style pattern, and instead saw '{a}'.",expected_tagname_a:"Expected a tagName, and instead saw {a}.",for_if:"The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.",function_block:"Function statements should not be placed in blocks. "+"Use a function expression or move the statement to the top of "+"the outer function.",function_eval:"The Function constructor is eval.",function_loop:"Don't make functions within a loop.",function_statement:"Function statements are not invocable. "+"Wrap the whole function invocation in parens.",function_strict:"Use the function form of \"use strict\".",get_set:"get/set are ES5 features.",html_confusion_a:"HTML confusion in regular expression '<{a}'.",html_handlers:"Avoid HTML event handlers.",identifier_function:"Expected an identifier in an assignment and instead saw a function invocation.",implied_evil:"Implied eval is evil. Pass a function instead of a string.",insecure_a:"Insecure '{a}'.",isNaN:"Use the isNaN function to compare with NaN.",label_a_b:"Label '{a}' on '{b}' statement.",lang:"lang is deprecated.",leading_decimal_a:"A leading decimal point can be confused with a dot: '.{a}'.",missing_a:"Missing '{a}'.",missing_a_after_b:"Missing '{a}' after '{b}'.",missing_option:"Missing option value.",missing_property:"Missing property name.",missing_space_a_b:"Missing space between '{a}' and '{b}'.",missing_url:"Missing url.",missing_use_strict:"Missing \"use strict\" statement.",mixed:"Mixed spaces and tabs.",move_invocation:"Move the invocation into the parens that contain the function.",move_var:"Move 'var' declarations to the top of the function.",name_function:"Missing name in function statement.",nested_comment:"Nested comment.",not:"Nested not.",not_a_constructor:"Do not use {a} as a constructor.",not_a_function:"'{a}' is not a function.",not_a_label:"'{a}' is not a label.",not_a_scope:"'{a}' is out of scope.",not_greater:"'{a}' should not be greater than '{b}'.",parameter_a_get_b:"Unexpected parameter '{a}' in get {b} function.",parameter_set_a:"Expected parameter (value) in set {a} function.",radix:"Missing radix parameter.",read_only:"Read only.",redefinition_a:"Redefinition of '{a}'.",reserved_a:"Reserved name '{a}'.",scanned_a_b:"{a} ({b}% scanned).",slash_equal:"A regular expression literal can be confused with '/='.",statement_block:"Expected to see a statement and instead saw a block.",stopping:"Stopping. ",strange_loop:"Strange loop.",strict:"Strict violation.",subscript:"['{a}'] is better written in dot notation.",tag_a_in_b:"A '<{a}>' must be within '<{b}>'.",too_long:"Line too long.",too_many:"Too many errors.",trailing_decimal_a:"A trailing decimal point can be confused with a dot: '.{a}'.",type:"type is unnecessary.",unclosed:"Unclosed string.",unclosed_comment:"Unclosed comment.",unclosed_regexp:"Unclosed regular expression.",unescaped_a:"Unescaped '{a}'.",unexpected_a:"Unexpected '{a}'.",unexpected_char_a_b:"Unexpected character '{a}' in {b}.",unexpected_comment:"Unexpected comment.",unexpected_member_a:"Unexpected /*member {a}.",unexpected_space_a_b:"Unexpected space between '{a}' and '{b}'.",unnecessary_escapement:"Unnecessary escapement.",unnecessary_initialize:"It is not necessary to initialize '{a}' to 'undefined'.",unnecessary_use:"Unnecessary \"use strict\".",unreachable_a_b:"Unreachable '{a}' after '{b}'.",unrecognized_style_attribute_a:"Unrecognized style attribute '{a}'.",unrecognized_tag_a:"Unrecognized tag '<{a}>'.",unsafe:"Unsafe character.",url:"JavaScript URL.",use_array:"Use the array literal notation [].",use_braces:"Spaces are hard to count. Use {{a}}.",use_object:"Use the object literal notation {}.",used_before_a:"'{a}' was used before it was defined.",var_a_not:"Variable {a} was not declared correctly.",weird_assignment:"Weird_assignment.",weird_new:"Weird construction. Delete 'new'.",weird_program:"Weird program.",weird_relation:"Weird relation.",wrap_immediate:"Wrap an immediate function invocation in parentheses "+"to assist the reader in understanding that the expression "+"is the result of a function, and not the function itself.",wrap_regexp:"Wrap the /regexp/ literal in parens to disambiguate the slash operator.",write_is_wrong:"document.write can be a form of eval."},comments_off,css_attribute_data,css_any,css_colorData={"aliceblue":true,"antiquewhite":true,"aqua":true,"aquamarine":true,"azure":true,"beige":true,"bisque":true,"black":true,"blanchedalmond":true,"blue":true,"blueviolet":true,"brown":true,"burlywood":true,"cadetblue":true,"chartreuse":true,"chocolate":true,"coral":true,"cornflowerblue":true,"cornsilk":true,"crimson":true,"cyan":true,"darkblue":true,"darkcyan":true,"darkgoldenrod":true,"darkgray":true,"darkgreen":true,"darkkhaki":true,"darkmagenta":true,"darkolivegreen":true,"darkorange":true,"darkorchid":true,"darkred":true,"darksalmon":true,"darkseagreen":true,"darkslateblue":true,"darkslategray":true,"darkturquoise":true,"darkviolet":true,"deeppink":true,"deepskyblue":true,"dimgray":true,"dodgerblue":true,"firebrick":true,"floralwhite":true,"forestgreen":true,"fuchsia":true,"gainsboro":true,"ghostwhite":true,"gold":true,"goldenrod":true,"gray":true,"green":true,"greenyellow":true,"honeydew":true,"hotpink":true,"indianred":true,"indigo":true,"ivory":true,"khaki":true,"lavender":true,"lavenderblush":true,"lawngreen":true,"lemonchiffon":true,"lightblue":true,"lightcoral":true,"lightcyan":true,"lightgoldenrodyellow":true,"lightgreen":true,"lightpink":true,"lightsalmon":true,"lightseagreen":true,"lightskyblue":true,"lightslategray":true,"lightsteelblue":true,"lightyellow":true,"lime":true,"limegreen":true,"linen":true,"magenta":true,"maroon":true,"mediumaquamarine":true,"mediumblue":true,"mediumorchid":true,"mediumpurple":true,"mediumseagreen":true,"mediumslateblue":true,"mediumspringgreen":true,"mediumturquoise":true,"mediumvioletred":true,"midnightblue":true,"mintcream":true,"mistyrose":true,"moccasin":true,"navajowhite":true,"navy":true,"oldlace":true,"olive":true,"olivedrab":true,"orange":true,"orangered":true,"orchid":true,"palegoldenrod":true,"palegreen":true,"paleturquoise":true,"palevioletred":true,"papayawhip":true,"peachpuff":true,"peru":true,"pink":true,"plum":true,"powderblue":true,"purple":true,"red":true,"rosybrown":true,"royalblue":true,"saddlebrown":true,"salmon":true,"sandybrown":true,"seagreen":true,"seashell":true,"sienna":true,"silver":true,"skyblue":true,"slateblue":true,"slategray":true,"snow":true,"springgreen":true,"steelblue":true,"tan":true,"teal":true,"thistle":true,"tomato":true,"turquoise":true,"violet":true,"wheat":true,"white":true,"whitesmoke":true,"yellow":true,"yellowgreen":true,"activeborder":true,"activecaption":true,"appworkspace":true,"background":true,"buttonface":true,"buttonhighlight":true,"buttonshadow":true,"buttontext":true,"captiontext":true,"graytext":true,"highlight":true,"highlighttext":true,"inactiveborder":true,"inactivecaption":true,"inactivecaptiontext":true,"infobackground":true,"infotext":true,"menu":true,"menutext":true,"scrollbar":true,"threeddarkshadow":true,"threedface":true,"threedhighlight":true,"threedlightshadow":true,"threedshadow":true,"window":true,"windowframe":true,"windowtext":true},css_border_style,css_break,css_lengthData={'%':true,'cm':true,'em':true,'ex':true,'in':true,'mm':true,'pc':true,'pt':true,'px':true},css_media,css_overflow,devel={alert:false,confirm:false,console:false,Debug:false,opera:false,prompt:false},escapes={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','/':'\\/','\\':'\\\\'},funct,functionicity=['closure','exception','global','label','outer','unused','var'],functions,global,html_tag={a:{},abbr:{},acronym:{},address:{},applet:{},area:{empty:true,parent:' map '},article:{},aside:{},audio:{},b:{},base:{empty:true,parent:' head '},bdo:{},big:{},blockquote:{},body:{parent:' html noframes '},br:{empty:true},button:{},canvas:{parent:' body p div th td '},caption:{parent:' table '},center:{},cite:{},code:{},col:{empty:true,parent:' table colgroup '},colgroup:{parent:' table '},command:{parent:' menu '},datalist:{},dd:{parent:' dl '},del:{},details:{},dialog:{},dfn:{},dir:{},div:{},dl:{},dt:{parent:' dl '},em:{},embed:{},fieldset:{},figure:{},font:{},footer:{},form:{},frame:{empty:true,parent:' frameset '},frameset:{parent:' html frameset '},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},head:{parent:' html '},header:{},hgroup:{},hr:{empty:true},'hta:application':{empty:true,parent:' head '},html:{parent:'*'},i:{},iframe:{},img:{empty:true},input:{empty:true},ins:{},kbd:{},keygen:{},label:{},legend:{parent:' details fieldset figure '},li:{parent:' dir menu ol ul '},link:{empty:true,parent:' head '},map:{},mark:{},menu:{},meta:{empty:true,parent:' head noframes noscript '},meter:{},nav:{},noframes:{parent:' html body '},noscript:{parent:' body head noframes '},object:{},ol:{},optgroup:{parent:' select '},option:{parent:' optgroup select '},output:{},p:{},param:{empty:true,parent:' applet object '},pre:{},progress:{},q:{},rp:{},rt:{},ruby:{},samp:{},script:{empty:true,parent:' body div frame head iframe p pre span '},section:{},select:{},small:{},span:{},source:{},strong:{},style:{parent:' head ',empty:true},sub:{},sup:{},table:{},tbody:{parent:' table '},td:{parent:' tr '},textarea:{},tfoot:{parent:' table '},th:{parent:' tr '},thead:{parent:' table '},time:{},title:{parent:' head '},tr:{parent:' table tbody thead tfoot '},tt:{},u:{},ul:{},'var':{},video:{}},ids,implied,inblock,indent,jsonmode,labelled={'do':true,'for':true,'switch':true,'while':true},lines,lookahead,member,members_only,nexttoken,option,postscript={'(end)':true,'(error)':true,'</':true,'}':true,'"':true,'\'':true,'case':true,'default':true},predefined,prereg,prevtoken,rhino={defineClass:false,deserialize:false,gc:false,help:false,load:false,loadClass:false,print:false,quit:false,readFile:false,readUrl:false,runCommand:false,seal:false,serialize:false,spawn:false,sync:false,toint32:false,version:false},scope,semicolon_coda={';':true,'"':true,'\'':true,')':true},src,stack,standard={Array:false,Boolean:false,Date:false,decodeURI:false,decodeURIComponent:false,encodeURI:false,encodeURIComponent:false,Error:false,'eval':false,EvalError:false,Function:false,hasOwnProperty:false,isFinite:false,isNaN:false,JSON:false,Math:false,Number:false,Object:false,parseInt:false,parseFloat:false,RangeError:false,ReferenceError:false,RegExp:false,String:false,SyntaxError:false,TypeError:false,URIError:false},standard_member={E:true,LN2:true,LN10:true,LOG2E:true,LOG10E:true,MAX_VALUE:true,MIN_VALUE:true,NEGATIVE_INFINITY:true,PI:true,POSITIVE_INFINITY:true,SQRT1_2:true,SQRT2:true},strict_mode,syntax={},tab,token,urls,var_mode,warnings,widget={alert:true,animator:true,appleScript:true,beep:true,bytesToUIString:true,Canvas:true,chooseColor:true,chooseFile:true,chooseFolder:true,closeWidget:true,COM:true,convertPathToHFS:true,convertPathToPlatform:true,CustomAnimation:true,escape:true,FadeAnimation:true,filesystem:true,Flash:true,focusWidget:true,form:true,FormField:true,Frame:true,HotKey:true,Image:true,include:true,isApplicationRunning:true,iTunes:true,konfabulatorVersion:true,log:true,md5:true,MenuItem:true,MoveAnimation:true,openURL:true,play:true,Point:true,popupMenu:true,preferenceGroups:true,preferences:true,print:true,prompt:true,random:true,Rectangle:true,reloadWidget:true,ResizeAnimation:true,resolvePath:true,resumeUpdates:true,RotateAnimation:true,runCommand:true,runCommandInBg:true,saveAs:true,savePreferences:true,screen:true,ScrollBar:true,showWidgetPreferences:true,sleep:true,speak:true,Style:true,suppressUpdates:true,system:true,tellWidget:true,Text:true,TextArea:true,Timer:true,unescape:true,updateNow:true,URL:true,Web:true,widget:true,Window:true,XMLDOM:true,XMLHttpRequest:true,yahooCheckLogin:true,yahooLogin:true,yahooLogout:true},windows={ActiveXObject:false,CScript:false,Debug:false,Enumerator:false,System:false,VBArray:false,WScript:false},xmode,xquote,ax=/@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i,cx=/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,tx=/^\s*([(){}\[.,:;'"~\?\]#@]|==?=?|\/(\*(jslint|members?|global)?|=|\/)?|\*[\/=]?|\+(?:=|\++)?|-(?:=|-+)?|%=?|&[&=]?|\|[|=]?|>>?>?=?|<([\/=!]|\!(\[|--)?|<=?)?|\^=?|\!=?=?|[a-zA-Z_$][a-zA-Z0-9_$]*|[0-9]+([xX][0-9a-fA-F]+|\.[0-9]*)?([eE][+\-]?[0-9]+)?)/,hx=/^\s*(['"=>\/&#]|<(?:\/|\!(?:--)?)?|[a-zA-Z][a-zA-Z0-9_\-:]*|[0-9]+|--)/,nx=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,nxg=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,ox=/[>&]|<[\/!]?|--/,lx=/\*\/|\/\*/,ix=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,jx=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i,ux=/&|\+|\u00AD|\.\.|\/\*|%[^;]|base64|url|expression|data|mailto/i,sx=/^\s*([{:#%.=,>+\[\]@()"';]|\*=?|\$=|\|=|\^=|~=|[a-zA-Z_][a-zA-Z0-9_\-]*|[0-9]+|<\/|\/\*)/,ssx=/^\s*([@#!"'};:\-%.=,+\[\]()*_]|[a-zA-Z][a-zA-Z0-9._\-]*|\/\*?|\d+(?:\.\d+)?|<\/)/,qx=/[^a-zA-Z0-9+\-_\/ ]/,dx=/[\[\]\/\\"'*<>.&:(){}+=#]/,rx={outer:hx,html:hx,style:sx,styleproperty:ssx};function F(){}
function is_own(object,name){return Object.prototype.hasOwnProperty.call(object,name);}
if(typeof Array.isArray!=='function'){Array.isArray=function(o){return Object.prototype.toString.apply(o)==='[object Array]';};}
if(typeof Object.create!=='function'){Object.create=function(o){F.prototype=o;return new F();};}
if(typeof Object.keys!=='function'){Object.keys=function(o){var a=[],k;for(k in o){if(is_own(o,k)){a.push(k);}}
return a;};}
if(typeof String.prototype.entityify!=='function'){String.prototype.entityify=function(){return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};}
if(typeof String.prototype.isAlpha!=='function'){String.prototype.isAlpha=function(){return(this>='a'&&this<='z\uffff')||(this>='A'&&this<='Z\uffff');};}
if(typeof String.prototype.isDigit!=='function'){String.prototype.isDigit=function(){return(this>='0'&&this<='9');};}
if(typeof String.prototype.supplant!=='function'){String.prototype.supplant=function(o){return this.replace(/\{([^{}]*)\}/g,function(a,b){var r=o[b];return typeof r==='string'||typeof r==='number'?r:a;});};}
if(typeof String.prototype.name!=='function'){String.prototype.name=function(){if(ix.test(this)){return this;}
if(nx.test(this)){return'"'+this.replace(nxg,function(a){var c=escapes[a];if(c){return c;}
return'\\u'+('0000'+a.charCodeAt().toString(16)).slice(-4);})+'"';}
return'"'+this+'"';};}
function combine(t,o){var n;for(n in o){if(is_own(o,n)){t[n]=o[n];}}}
function assume(){if(!option.safe){if(option.rhino){combine(predefined,rhino);}
if(option.devel){combine(predefined,devel);}
if(option.browser){combine(predefined,browser);}
if(option.windows){combine(predefined,windows);}
if(option.widget){combine(predefined,widget);}}}
function return_this(){return this;}
function quit(m,l,ch){throw{name:'JSLintError',line:l,character:ch,message:bundle.scanned_a_b.supplant({a:m,b:Math.floor((l/lines.length)*100)})};}
function warning(m,t,a,b,c,d){var ch,l,w;t=t||nexttoken;if(t.id==='(end)'){t=token;}
l=t.line||0;ch=t.from||0;w={id:'(error)',raw:m,evidence:lines[l-1]||'',line:l,character:ch,a:a||t.value,b:b,c:c,d:d};w.reason=m.supplant(w);JSLINT.errors.push(w);if(option.passfail){quit(bundle.stopping,l,ch);}
warnings+=1;if(warnings>=option.maxerr){quit(bundle.too_many,l,ch);}
return w;}
function warning_at(m,l,ch,a,b,c,d){return warning(m,{line:l,from:ch},a,b,c,d);}
function error(m,t,a,b,c,d){var w=warning(m,t,a,b,c,d);quit(bundle.stopping,w.line,w.character);}
function error_at(m,l,ch,a,b,c,d){return error(m,{line:l,from:ch},a,b,c,d);}
function expected_at(at){if(option.white&&nexttoken.from!==at){warning(bundle.expected_a_at_b_c,nexttoken,nexttoken.value,at,nexttoken.from);}}
var lex=(function lex(){var character,comments,from,line,s,older_token={};function collect_comment(s){if(older_token.line!==line){if(comments){comments.push(s);}else{comments=[s];}}else if(older_token.postcomments){older_token.postcomments.push(s);}else{older_token.postcomments=[s];}}
function next_line(){var at;if(line>=lines.length){return false;}
character=1;s=lines[line];line+=1;at=s.search(/ \t/);if(at>=0){warning_at(bundle.mixed,line,at+1);}
s=s.replace(/\t/g,tab);at=s.search(cx);if(at>=0){warning_at(bundle.unsafe,line,at);}
if(option.maxlen&&option.maxlen<s.length){warning_at(bundle.too_long,line,s.length);}
return true;}
function it(type,value,quote){var i,t;if(type==='(punctuator)'||(type==='(identifier)'&&is_own(syntax,value))){t=syntax[value]||syntax['(error)'];}else{t=syntax[type];}
t=Object.create(t);if(type==='(string)'||type==='(range)'){if(jx.test(value)){warning_at(bundle.url,line,from);}}
if(type==='(identifier)'){t.identifier=true;if(value==='__iterator__'||value==='__proto__'){error_at(bundle.reserved_a,line,from,value);}else if(option.nomen&&(value.charAt(0)==='_'||value.charAt(value.length-1)==='_')){warning_at(bundle.dangling_a,line,from,value);}}
if(value!==undefined){t.value=value;}
if(quote!==undefined){t.quote=quote;}
if(comments){t.comments=comments;comments=null;}
t.line=line;t.thru=character;t.from=from;t.prev=older_token;i=t.id;prereg=i&&(('(,=:[!&|?{};'.indexOf(i.charAt(i.length-1))>=0)||i==='return');older_token.next=t;older_token=t;return t;}
return{init:function(source){if(typeof source==='string'){lines=source.replace(/\r\n/g,'\n').replace(/\r/g,'\n').split('\n');}else{lines=source;}
line=0;next_line();from=1;},range:function(begin,end){var c,value='';from=character;if(s.charAt(0)!==begin){error_at(bundle.expected_a_b,line,character,begin,s.charAt(0));}
for(;;){s=s.slice(1);character+=1;c=s.charAt(0);switch(c){case'':error_at(bundle.missing_a,line,character,c);break;case end:s=s.slice(1);character+=1;return it('(range)',value);case xquote:case'\\':warning_at(bundle.unexpected_a,line,character,c);break;}
value+=c;}},token:function(){var b,c,captures,d,depth,high,i,l,low,q,t;function match(x){var r=x.exec(s),r1;if(r){l=r[0].length;r1=r[1];c=r1.charAt(0);s=s.substr(l);from=character+l-r1.length;character+=l;return r1;}}
function string(x){var c,j,r='';if(jsonmode&&x!=='"'){warning_at(bundle.expected_a,line,character,'"');}
if(xquote===x||(xmode==='scriptstring'&&!xquote)){return it('(punctuator)',x);}
function esc(n){var i=parseInt(s.substr(j+1,n),16);j+=n;if(i>=32&&i<=126&&i!==34&&i!==92&&i!==39){warning_at(bundle.unexpected_a,line,character,'\\');}
character+=n;c=String.fromCharCode(i);}
j=0;for(;;){while(j>=s.length){j=0;if(xmode!=='html'||!next_line()){error_at(bundle.unclosed,line,from);}}
c=s.charAt(j);if(c===x){character+=1;s=s.substr(j+1);return it('(string)',r,x);}
if(c<' '){if(c==='\n'||c==='\r'){break;}
warning_at(bundle.control_a,line,character+j,s.slice(0,j));}else if(c===xquote){warning_at(bundle.bad_html,line,character+j);}else if(c==='<'){if(option.safe&&xmode==='html'){warning_at(bundle.adsafe_a,line,character+j,c);}else if(s.charAt(j+1)==='/'&&(xmode||option.safe)){warning_at(bundle.expected_a_b,line,character,'<\\/','</');}else if(s.charAt(j+1)==='!'&&(xmode||option.safe)){warning_at(bundle.unexpected_a,line,character,'<!');}}else if(c==='\\'){if(xmode==='html'){if(option.safe){warning_at(bundle.adsafe_a,line,character+j,c);}}else if(xmode==='styleproperty'){j+=1;character+=1;c=s.charAt(j);if(c!==x){warning_at(bundle.unexpected_a,line,character,'\\');}}else{j+=1;character+=1;c=s.charAt(j);switch(c){case xquote:warning_at(bundle.bad_html,line,character+j);break;case'\\':case'"':case'/':break;case'\'':if(jsonmode){warning_at(bundle.unexpected_a,line,character,'\\\'');}
break;case'b':c='\b';break;case'f':c='\f';break;case'n':c='\n';break;case'r':c='\r';break;case't':c='\t';break;case'u':esc(4);break;case'v':if(jsonmode){warning_at(bundle.unexpected_a,line,character,'\\v');}
c='\v';break;case'x':if(jsonmode){warning_at(bundle.unexpected_a,line,character,'\\x');}
esc(2);break;default:warning_at(bundle.unexpected_a,line,character,'\\');}}}
r+=c;character+=1;j+=1;}}
for(;;){while(!s){if(!next_line()){return it('(end)');}}
while(xmode==='outer'){i=s.search(ox);if(i===0){break;}else if(i>0){character+=1;s=s.slice(i);break;}else{if(!next_line()){return it('(end)','');}}}
t=match(rx[xmode]||tx);if(!t){t='';c='';while(s&&s<'!'){s=s.substr(1);}
if(s){if(xmode==='html'){return it('(error)',s.charAt(0));}else{error_at(bundle.unexpected_a,line,character,s.substr(0,1));}}}else{if(c.isAlpha()||c==='_'||c==='$'){return it('(identifier)',t);}
if(c.isDigit()){if(xmode!=='style'&&xmode!=='styleproperty'&&s.substr(0,1).isAlpha()){warning_at(bundle.expected_space_a_b,line,character,c,s.charAt(0));}
if(c==='0'){d=t.substr(1,1);if(d.isDigit()){if(token.id!=='.'&&xmode!=='styleproperty'){warning_at(bundle.unexpected_a,line,character,t);}}else if(jsonmode&&(d==='x'||d==='X')){warning_at(bundle.unexpected_a,line,character,'0x');}}
if(t.substr(t.length-1)==='.'){warning_at(bundle.trailing_decimal_a,line,character,t);}
if(xmode!=='style'){d=+t;if(!isFinite(d)){warning_at(bundle.bad_number,line,character,t);}
t=d;}
return it('(number)',t);}
switch(t){case'"':case"'":return string(t);case'//':if(comments_off||src||(xmode&&xmode!=='script')){warning_at(bundle.unexpected_comment,line,character);}else if(xmode==='script'&&/<\s*\//i.test(s)){warning_at(bundle.unexpected_a,line,character,'<\/');}else if((option.safe||xmode==='script')&&ax.test(s)){warning_at(bundle.dangerous_comment,line,character);}
collect_comment(s);s='';break;case'/*':if(comments_off||src||(xmode&&xmode!=='script'&&xmode!=='style'&&xmode!=='styleproperty')){warning_at(bundle.unexpected_comment,line,character);}
if(option.safe&&ax.test(s)){warning_at(bundle.dangerous_comment,line,character);}
for(;;){i=s.search(lx);if(i>=0){break;}
collect_comment(s);if(!next_line()){error_at(bundle.unclosed_comment,line,character);}else{if(option.safe&&ax.test(s)){warning_at(bundle.dangerous_comment,line,character);}}}
character+=i+2;if(s.substr(i,1)==='/'){error_at(bundle.nested_comment,line,character);}
collect_comment(s.substr(0,i));s=s.substr(i+2);break;case'':break;case'/':if(token.id==='/='){error_at(bundle.slash_equal,line,from);}
if(prereg){depth=0;captures=0;l=0;for(;;){b=true;c=s.charAt(l);l+=1;switch(c){case'':error_at(bundle.unclosed_regexp,line,from);return;case'/':if(depth>0){warning_at(bundle.unescaped_a,line,from+l,'/');}
c=s.substr(0,l-1);q={g:true,i:true,m:true};while(q[s.charAt(l)]===true){q[s.charAt(l)]=false;l+=1;}
character+=l;s=s.substr(l);q=s.charAt(0);if(q==='/'||q==='*'){error_at(bundle.confusing_regexp,line,from);}
return it('(regexp)',c);case'\\':c=s.charAt(l);if(c<' '){warning_at(bundle.control_a,line,from+l,String(c));}else if(c==='<'){warning_at(bundle.unexpected_a,line,from+l,'\\');}
l+=1;break;case'(':depth+=1;b=false;if(s.charAt(l)==='?'){l+=1;switch(s.charAt(l)){case':':case'=':case'!':l+=1;break;default:warning_at(bundle.expected_a_b,line,from+l,':',s.charAt(l));}}else{captures+=1;}
break;case'|':b=false;break;case')':if(depth===0){warning_at(bundle.unescaped_a,line,from+l,')');}else{depth-=1;}
break;case' ':q=1;while(s.charAt(l)===' '){l+=1;q+=1;}
if(q>1){warning_at(bundle.use_braces,line,from+l,q);}
break;case'[':c=s.charAt(l);if(c==='^'){l+=1;if(option.regexp){warning_at(bundle.insecure_a,line,from+l,c);}else if(s.charAt(l)===']'){error_at(bundle.unescaped_a,line,from+l,'^');}}
q=false;if(c===']'){warning_at(bundle.empty_class,line,from+l-1);q=true;}
klass:do{c=s.charAt(l);l+=1;switch(c){case'[':case'^':warning_at(bundle.unescaped_a,line,from+l,c);q=true;break;case'-':if(q){q=false;}else{warning_at(bundle.unescaped_a,line,from+l,'-');q=true;}
break;case']':if(!q){warning_at(bundle.unescaped_a,line,from+l-1,'-');}
break klass;case'\\':c=s.charAt(l);if(c<' '){warning_at(bundle.control_a,line,from+l,String(c));}else if(c==='<'){warning_at(bundle.unexpected_a,line,from+l,'\\');}
l+=1;q=true;break;case'/':warning_at(bundle.unescaped_a,line,from+l-1,'/');q=true;break;case'<':if(xmode==='script'){c=s.charAt(l);if(c==='!'||c==='/'){warning_at(bundle.html_confusion_a,line,from+l,c);}}
q=true;break;default:q=true;}}while(c);break;case'.':if(option.regexp){warning_at(bundle.insecure_a,line,from+l,c);}
break;case']':case'?':case'{':case'}':case'+':case'*':warning_at(bundle.unescaped_a,line,from+l,c);break;case'<':if(xmode==='script'){c=s.charAt(l);if(c==='!'||c==='/'){warning_at(bundle.html_confusion_a,line,from+l,c);}}
break;}
if(b){switch(s.charAt(l)){case'?':case'+':case'*':l+=1;if(s.charAt(l)==='?'){l+=1;}
break;case'{':l+=1;c=s.charAt(l);if(c<'0'||c>'9'){warning_at(bundle.expected_number_a,line,from+l,c);}
l+=1;low=+c;for(;;){c=s.charAt(l);if(c<'0'||c>'9'){break;}
l+=1;low=+c+(low*10);}
high=low;if(c===','){l+=1;high=Infinity;c=s.charAt(l);if(c>='0'&&c<='9'){l+=1;high=+c;for(;;){c=s.charAt(l);if(c<'0'||c>'9'){break;}
l+=1;high=+c+(high*10);}}}
if(s.charAt(l)!=='}'){warning_at(bundle.expected_a_b,line,from+l,'}',c);}else{l+=1;}
if(s.charAt(l)==='?'){l+=1;}
if(low>high){warning_at(bundle.not_greater,line,from+l,low,high);}
break;}}}
c=s.substr(0,l-1);character+=l;s=s.substr(l);return it('(regexp)',c);}
return it('(punctuator)',t);case'<!--':l=line;c=character;for(;;){i=s.indexOf('--');if(i>=0){break;}
i=s.indexOf('<!');if(i>=0){error_at(bundle.nested_comment,line,character+i);}
if(!next_line()){error_at(bundle.unclosed_comment,l,c);}}
l=s.indexOf('<!');if(l>=0&&l<i){error_at(bundle.nested_comment,line,character+l);}
character+=i;if(s.charAt(i+2)!=='>'){error_at(bundle.expected_a,line,character,'-->');}
character+=3;s=s.slice(i+3);break;case'#':if(xmode==='html'||xmode==='styleproperty'){for(;;){c=s.charAt(0);if((c<'0'||c>'9')&&(c<'a'||c>'f')&&(c<'A'||c>'F')){break;}
character+=1;s=s.substr(1);t+=c;}
if(t.length!==4&&t.length!==7){warning_at(bundle.bad_color_a,line,from+l,t);}
return it('(color)',t);}
return it('(punctuator)',t);default:if(xmode==='outer'&&c==='&'){character+=1;s=s.substr(1);for(;;){c=s.charAt(0);character+=1;s=s.substr(1);if(c===';'){break;}
if(!((c>='0'&&c<='9')||(c>='a'&&c<='z')||c==='#')){error_at(bundle.bad_entity,line,from+l,character);}}
break;}
return it('(punctuator)',t);}}}}};}());function add_label(t,type){if(option.safe&&funct['(global)']&&typeof predefined[t]!=='boolean'){warning(bundle.adsafe_a,token,t);}else if(t==='hasOwnProperty'){warning(bundle.bad_name_a,token,t);}
if(is_own(funct,t)&&!funct['(global)']){warning(funct[t]===true?bundle.used_before_a:bundle.already_defined,nexttoken,t);}
funct[t]=type;if(funct['(global)']){global[t]=funct;if(is_own(implied,t)){warning(bundle.used_before_a,nexttoken,t);delete implied[t];}}else{scope[t]=funct;}}
function discard(){if(token.comments){nexttoken.comments=nexttoken.comments?nexttoken.comments.concat(token.comments):token.comments;}
if(token.postcomments){var prev=prevtoken;while(prev.postcomments===null){prev=prev.prev;}
if(prev.postcomments){prev.comments=prev.postcomments.concat(token.postcomments);}else{prev.postcomments=token.postcomments;}
token.postcomments=null;}}
function peek(distance){var i=distance||0,j=0,t;while(j<=i){t=lookahead[j];if(!t){t=lookahead[j]=lex.token();}
j+=1;}
return t;}
function advance(id,t){if(indent){if(var_mode&&nexttoken.line!==token.line){if((var_mode!==indent||!nexttoken.edge)&&nexttoken.from===indent.at-
(nexttoken.edge?option.indent:0)){var dent=indent;for(;;){dent.at-=option.indent;if(dent===var_mode){break;}
dent=dent.was;}
dent.open=false;}
var_mode=false;}
if(indent.open){if(nexttoken.edge){if(nexttoken.edge==='label'){expected_at(1);}else if(nexttoken.edge==='case'){expected_at(indent.at-option.indent);}else if(indent.mode!=='array'||nexttoken.line!==token.line){expected_at(indent.at);}}else if(nexttoken.line!==token.line&&nexttoken.from<indent.at+
(indent.mode==='expression'?0:option.indent)){expected_at(indent.at+option.indent);}}else if(nexttoken.line!==token.line){if(nexttoken.edge){expected_at(indent.at);}else{indent.wrap=true;if(indent.mode==='statement'||indent.mode==='var'){expected_at(indent.at+option.indent);}else if(nexttoken.from<indent.at+
(indent.mode==='expression'?0:option.indent)){expected_at(indent.at+option.indent);}}}}
switch(token.id){case'(number)':if(nexttoken.id==='.'){warning(bundle.trailing_decimal_a);}
break;case'-':if(nexttoken.id==='-'||nexttoken.id==='--'){warning(bundle.confusing_a);}
break;case'+':if(nexttoken.id==='+'||nexttoken.id==='++'){warning(bundle.confusing_a);}
break;}
if(token.arity==='string'||token.identifier){anonname=token.value;}
if(id&&nexttoken.id!==id){if(t){warning(bundle.expected_a_b_from_c_d,nexttoken,id,t.id,t.line,nexttoken.value);}else if(!nexttoken.identifier||nexttoken.value!==id){warning(bundle.expected_a_b,nexttoken,id,nexttoken.value);}}
prevtoken=token;token=nexttoken;nexttoken=lookahead.shift()||lex.token();}
function do_option(){var b,co=comments_off,obj,filter,n,o=this.id,w=option.white;comments_off=true;option.white=false;if(lookahead.length>0||this.postcomments||nexttoken.comments){warning(bundle.unexpected_a,this);}
switch(o){case'/*members':case'/*member':o='/*members';if(!members_only){members_only={};}
obj=members_only;break;case'/*jslint':if(option.safe){warning(bundle.adsafe_a,this);}
filter=bool_options;obj=option;break;case'/*global':if(option.safe){warning(bundle.adsafe_a,this);}
obj=predefined;break;default:error("What?");}
loop:for(;;){for(;;){if(nexttoken.id==='*/'){break loop;}
if(nexttoken.id!==','){break;}
advance();}
if(nexttoken.arity!=='string'&&!nexttoken.identifier&&o!=='/*members'){error(bundle.unexpected_a,nexttoken);}
n=nexttoken;advance();if(nexttoken.id===':'){advance(':');if(obj===members_only){error(bundle.expected_a_b,n,'*/',':');}
if(n.value==='indent'&&o==='/*jslint'){b=+nexttoken.value;if(typeof b!=='number'||!isFinite(b)||b<0||Math.floor(b)!==b){error(bundle.expected_small_a);}
obj.white=true;obj.indent=b;}else if(n.value==='maxerr'&&o==='/*jslint'){b=+nexttoken.value;if(typeof b!=='number'||!isFinite(b)||b<=0||Math.floor(b)!==b){error(bundle.expected_small_a,nexttoken);}
obj.maxerr=b;}else if(n.value==='maxlen'&&o==='/*jslint'){b=+nexttoken.value;if(typeof b!=='number'||!isFinite(b)||b<0||Math.floor(b)!==b){error(bundle.expected_small_a);}
obj.maxlen=b;}else if(nexttoken.id==='true'){obj[n.value]=true;}else if(nexttoken.id==='false'){obj[n.value]=false;}else{error(bundle.unexpected_a);}
advance();}else{if(o==='/*jslint'){error(bundle.missing_option,nexttoken);}
obj[n.value]=false;}}
if(filter){assume();}
comments_off=co;advance('*/');option.white=w;}
function edge(mode){nexttoken.edge=!indent||(indent.open&&(mode||true));}
function step_in(mode){var open,was;if(option.indent){if(typeof mode==='number'){indent={at:mode,open:true,was:was};}else if(!indent){indent={at:1,mode:'statement',open:true};}else{was=indent;open=mode==='var'||(nexttoken.line!==token.line&&mode!=='statement');indent={at:(open||mode==='control'?was.at+option.indent:was.at)+
(was.wrap?option.indent:0),mode:mode,open:open,was:was};if(mode==='var'&&open){var_mode=indent;}}}}
function step_out(id,t){if(id){if(indent&&indent.open){indent.at-=option.indent;edge();}
advance(id,t);}
if(indent){indent=indent.was;}}
function one_space(left,right){left=left||token;right=right||nexttoken;if(right.id!=='(end)'&&option.white&&(token.line!==right.line||token.thru+1!==right.from)){warning(bundle.expected_space_a_b,right,token.value,right.value);}}
function one_space_only(left,right){left=left||token;right=right||nexttoken;if(right.id!=='(end)'&&(left.line!==right.line||(option.white&&left.thru+1!==right.from))){warning(bundle.expected_space_a_b,right,left.value,right.value);}}
function no_space(left,right){left=left||token;right=right||nexttoken;if((option.white||xmode==='styleproperty'||xmode==='style')&&left.thru!==right.from&&left.line===right.line){warning(bundle.unexpected_space_a_b,right,left.value,right.value);}}
function no_space_only(left,right){left=left||token;right=right||nexttoken;if(right.id!=='(end)'&&(left.line!==right.line||(option.white&&left.thru!==right.from))){warning(bundle.unexpected_space_a_b,right,left.value,right.value);}}
function spaces(left,right){if(option.white){left=left||token;right=right||nexttoken;if(left.thru===right.from&&left.line===right.line){warning(bundle.missing_space_a_b,right,left.value,right.value);}}}
function comma(){if(nexttoken.id!==','){warning(bundle.expected_a_b,nexttoken,',',nexttoken.value);}else{if(option.white){no_space_only();}
advance(',');discard();spaces();}}
function semicolon(){if(nexttoken.id!==';'){warning(bundle.expected_a_b,nexttoken,';',nexttoken.value);}else{if(option.white){no_space_only();}
advance(';');discard();if(semicolon_coda[nexttoken.id]!==true){spaces();}}}
function use_strict(){if(nexttoken.value==='use strict'){if(strict_mode){warning(bundle.unnecessary_use);}
edge();advance();semicolon();strict_mode=true;option.newcap=true;option.undef=true;return true;}else{return false;}}
function are_similar(a,b){if(Array.isArray(a)){if(Array.isArray(b)&&a.length===b.length){var i;for(i=0;i<a.length;i+=1){if(!are_similar(a[i],b[i])){return false;}}
return true;}
return true;}
if(Array.isArray(b)){return false;}
if(a.arity===b.arity&&a.value===b.value){switch(a.arity){case'prefix':case'suffix':return are_similar(a.first,b.first);case'infix':return are_similar(a.first,b.first)&&are_similar(a.second,b.second);case'ternary':return are_similar(a.first,b.first)&&are_similar(a.second,b.second)&&are_similar(a.third,b.third);default:return true;}}else{if(a.id==='.'&&b.id==='['&&b.arity==='infix'){return a.second.value===b.second.value&&b.second.arity==='string';}else if(a.id==='['&&a.arity==='infix'&&b.id==='.'){return a.second.value===b.second.value&&a.second.arity==='string';}}
return false;}
function expression(rbp,initial){var left;if(nexttoken.id==='(end)'){error(bundle.unexpected_a,token,nexttoken.id);}
advance();if(option.safe&&typeof predefined[token.value]==='boolean'&&(nexttoken.id!=='('&&nexttoken.id!=='.')){warning(bundle.adsafe,token);}
if(initial){anonname='anonymous';funct['(verb)']=token.value;}
if(initial===true&&token.fud){left=token.fud();}else{if(token.nud){left=token.nud();}else{if(nexttoken.arity==='number'&&token.id==='.'){warning(bundle.leading_decimal_a,token,nexttoken.value);advance();return token;}else{error(bundle.expected_identifier_a,token,token.id);}}
while(rbp<nexttoken.lbp){advance();if(token.led){left=token.led(left);}else{error(bundle.expected_operator_a,token,token.id);}}}
return left;}
function symbol(s,p){var x=syntax[s];if(!x||typeof x!=='object'){syntax[s]=x={id:s,lbp:p,value:s};}
return x;}
function delim(s){return symbol(s,0);}
function ultimate(s){var x=symbol(s,0);x.from=1;x.thru=1;x.line=0;x.edge=true;s.value=s;return x;}
function stmt(s,f){var x=delim(s);x.identifier=x.reserved=true;x.fud=f;return x;}
function disrupt_stmt(s,f){var x=stmt(s,f);x.disrupt=true;}
function reserve_name(x){var c=x.id.charAt(0);if((c>='a'&&c<='z')||(c>='A'&&c<='Z')){x.identifier=x.reserved=true;}
return x;}
function prefix(s,f){var x=symbol(s,150);reserve_name(x);x.nud=(typeof f==='function')?f:function(){if(s==='typeof'){one_space();}else{no_space_only();}
this.first=expression(150);this.arity='prefix';if(this.id==='++'||this.id==='--'){if(option.plusplus){warning(bundle.unexpected_a,this);}else if((!this.first.identifier||this.first.reserved)&&this.first.id!=='.'&&this.first.id!=='['){warning(bundle.bad_operand,this);}}
return this;};return x;}
function type(s,arity,nud){var x=delim(s);x.arity=arity;if(nud){x.nud=nud;}
return x;}
function reserve(s,f){var x=delim(s);x.identifier=x.reserved=true;x.nud=return_this;return x;}
function reservevar(s,v){return reserve(s,function(){if(typeof v==='function'){v(this);}
return this;});}
function infix(s,p,f,w){var x=symbol(s,p);reserve_name(x);x.led=function(left){this.arity='infix';if(!w){spaces(prevtoken,token);spaces();}
if(typeof f==='function'){return f(left,this);}else{this.first=left;this.second=expression(p);return this;}};return x;}
function expected_relation(node,message){if(node.assign){warning(message||bundle.conditional_assignment,node);}
return node;}
function expected_condition(node,message){switch(node.id){case'[':case'-':if(node.arity!=='infix'){warning(message||bundle.weird_relation,node);}
break;case'false':case'Infinity':case'NaN':case'null':case'true':case'undefined':case'void':case'(number)':case'(regexp)':case'(string)':case'{':warning(message||bundle.weird_relation,node);break;}
return node;}
function relation(s,eqeq){var x=infix(s,100,function(left,that){var right=expression(100);if(eqeq){warning(bundle.expected_a_b,that,eqeq,that.id);}else if(left.id==='NaN'||right.id==='NaN'){warning(bundle.isNaN,that);}
if(are_similar(left,right)||((left.arity==='string'||left.arity==='number')&&(right.arity==='string'||right.arity==='number'))){warning(bundle.weird_relation,that);}
if(left.id==='!'){warning(bundle.confusing_a,left);}
if(right.id==='!'){warning(bundle.confusing_a,right);}
that.first=left;that.second=right;return that;});return x;}
function assignop(s,bit){var x=infix(s,20,function(left,that){var l;if(option.bitwise&&bit){warning(bundle.unexpected_a,that);}
that.first=left;if(predefined[left.value]===false&&scope[left.value]['(global)']===true){warning(bundle.read_only,left);}else if(left['function']){warning(bundle.a_function,left);}
if(option.safe){l=left;do{if(typeof predefined[l.value]==='boolean'){warning(bundle.adsafe,l);}
l=l.first;}while(l);}
if(left){if(left===syntax['function']){warning(bundle.identifier_function,token);}
if(left.id==='.'||left.id==='['){if(!left.first||left.first.value==='arguments'){warning(bundle.bad_assignment,that);}
that.second=expression(19);if(that.id==='='&&are_similar(that.first,that.second)){warning(bundle.weird_assignment,that);}
return that;}else if(left.identifier&&!left.reserved){if(funct[left.value]==='exception'){warning(bundle.assign_exception,left);}
that.second=expression(19);if(that.id==='='&&are_similar(that.first,that.second)){warning(bundle.weird_assignment,that);}
return that;}}
error(bundle.bad_assignment,that);});x.assign=true;return x;}
function bitwise(s,p){return infix(s,p,function(left,that){if(option.bitwise){warning(bundle.unexpected_a,that);}
that.first=left;that.second=expression(p);return that;});}
function suffix(s,f){var x=symbol(s,150);x.led=function(left){no_space_only(prevtoken,token);if(option.plusplus){warning(bundle.unexpected_a,this);}else if((!left.identifier||left.reserved)&&left.id!=='.'&&left.id!=='['){warning(bundle.bad_operand,this);}
this.first=left;this.arity='suffix';return this;};return x;}
function optional_identifier(){if(nexttoken.identifier){advance();if(option.safe&&banned[token.value]){warning(bundle.adsafe_a,token);}else if(token.reserved&&!option.es5){warning(bundle.expected_identifier_a_reserved,token);}
return token.value;}}
function identifier(){var i=optional_identifier();if(i){return i;}
if(token.id==='function'&&nexttoken.id==='('){warning(bundle.name_function);}else{error(bundle.expected_identifier_a);}}
function statement(no_indent){var r,s=scope,t=nexttoken;if(t.id===';'){warning(bundle.unexpected_a,t);semicolon();return;}
if(t.identifier&&!t.reserved&&peek().id===':'){edge('label');advance();advance(':');scope=Object.create(s);add_label(t.value,'label');if(labelled[nexttoken.id]!==true){warning(bundle.label_a_b,nexttoken,t.value,nexttoken.value);}
if(jx.test(t.value+':')){warning(bundle.url,t);}
nexttoken.label=t;t=nexttoken;}
if(!no_indent){edge();}
step_in('statement');r=expression(0,true);if(r){if(r.arity==='statement'){if(r.id!=='switch'&&(!r.block||r.id==='do')){semicolon();}else{spaces();}}else{if(r.id==='('&&r.first.id==='new'){warning(bundle.bad_new);}else if(!r.assign&&r.id!=='delete'&&r.id!=='++'&&r.id!=='--'&&r.id!=='('){warning(bundle.assignment_function_expression,token);}
if(nexttoken.id!==';'){warning(bundle.expected_a_b,nexttoken,';',nexttoken.value);}else{semicolon();}}}
step_out();scope=s;return r;}
function statements(begin){var a=[],d,f,p,s;if(option.adsafe){switch(begin){case'script':if(!adsafe_may){if(nexttoken.value!=='ADSAFE'||peek(0).id!=='.'||(peek(1).value!=='id'&&peek(1).value!=='go')){error(bundle.adsafe_id_go);}}
if(nexttoken.value==='ADSAFE'&&peek(0).id==='.'&&peek(1).value==='id'){if(adsafe_may){error(bundle.adsafe,nexttoken);}
advance('ADSAFE');advance('.');advance('id');advance('(');if(nexttoken.value!==adsafe_id){error(bundle.adsafe_id,nexttoken);}
advance('(string)');advance(')');semicolon();adsafe_may=true;}
break;case'lib':if(nexttoken.value==='ADSAFE'){advance('ADSAFE');advance('.');advance('lib');advance('(');advance('(string)');comma();f=expression(0);if(f.id!=='function'){error(bundle.adsafe_lib_second,f);}
p=f.funct['(params)'];p=p&&p.join(', ');if(p&&p!=='lib'){error(bundle.expected_a_b,f,'(lib)','('+p+')');}
advance(')');semicolon();return a;}else{error(bundle.adsafe_lib);}
break;}}
while(postscript[nexttoken.id]!==true){if(nexttoken.id===';'){warning(bundle.unexpected_a,nexttoken);semicolon();}else{if(d){warning(bundle.unreachable_a_b,nexttoken,nexttoken.value,d.value);d=null;}
s=statement();if(s){a.push(s);if(s.disrupt){d=s;a.disrupt=true;}}}}
return a;}
function block(ordinary){var a,b=inblock,m=strict_mode,s=scope,t;inblock=ordinary;scope=Object.create(scope);spaces();t=nexttoken;if(nexttoken.id==='{'){advance('{');step_in();if(!ordinary&&!use_strict()&&!m&&option.strict&&funct['(context)']['(global)']){warning(bundle.missing_use_strict);}
a=statements();strict_mode=m;step_out('}',t);discard();}else if(!ordinary){error(bundle.expected_a_b,nexttoken,'{',nexttoken.value);}else{warning(bundle.expected_a_b,nexttoken,'{',nexttoken.value);a=[statement()];if(a[0].disrupt){a.disrupt=true;}}
funct['(verb)']=null;scope=s;inblock=b;if(ordinary&&a.length===0){warning(bundle.empty_block);}
return a;}
function tally_member(m){if(members_only&&typeof members_only[m]!=='boolean'){warning(bundle.unexpected_member_a,token,m);}
if(typeof member[m]==='number'){member[m]+=1;}else{member[m]=1;}}
function note_implied(token){var name=token.value,line=token.line,a=implied[name];if(typeof a==='function'){a=false;}
if(!a){a=[line];implied[name]=a;}else if(a[a.length-1]!==line){a.push(line);}}
syntax['(identifier)']={type:'(identifier)',lbp:0,identifier:true,nud:function(){var v=this.value,s=scope[v],f;if(typeof s==='function'){s=undefined;}else if(typeof s==='boolean'){f=funct;funct=functions[0];add_label(v,'var');s=funct;funct=f;}
if(funct===s){switch(funct[v]){case'unused':funct[v]='var';break;case'unction':funct[v]='function';this['function']=true;break;case'function':this['function']=true;break;case'label':warning(bundle.a_label,token,v);break;}}else if(funct['(global)']){if(option.undef&&typeof predefined[v]!=='boolean'){warning(bundle.a_not_defined,token,v);}
note_implied(token);}else{switch(funct[v]){case'closure':case'function':case'var':case'unused':warning(bundle.a_scope,token,v);break;case'label':warning(bundle.a_label,token,v);break;case'outer':case'global':break;default:if(s===true){funct[v]=true;}else if(s===null){warning(bundle.a_not_allowed,token,v);note_implied(token);}else if(typeof s!=='object'){if(option.undef){warning(bundle.a_not_defined,token,v);}else{funct[v]=true;}
note_implied(token);}else{switch(s[v]){case'function':case'unction':this['function']=true;s[v]='closure';funct[v]=s['(global)']?'global':'outer';break;case'var':case'unused':s[v]='closure';funct[v]=s['(global)']?'global':'outer';break;case'closure':case'parameter':funct[v]=s['(global)']?'global':'outer';break;case'label':warning(bundle.a_label,token,v);break;}}}}
return this;},led:function(){error(bundle.expected_operator_a);}};type('(number)','number',return_this);type('(string)','string',return_this);type('(regexp)','regexp',return_this);type('(color)','color');type('(range)','range');ultimate('(begin)');ultimate('(end)');ultimate('(error)');delim('</');delim('<!');delim('<!--');delim('-->');delim('}');delim(')');delim(']');delim('"');delim('\'');delim(';');delim(':');delim(',');delim('#');delim('@');delim('*/');reserve('else');reserve('case');reserve('catch');reserve('default');reserve('finally');reservevar('arguments',function(x){if(strict_mode&&funct['(global)']){warning(bundle.strict,x);}else if(option.safe){warning(bundle.adsafe,x);}});reservevar('eval',function(x){if(option.safe){warning(bundle.adsafe,x);}});reservevar('false');reservevar('Infinity');reservevar('NaN');reservevar('null');reservevar('this',function(x){if(strict_mode&&((funct['(statement)']&&funct['(name)'].charAt(0)>'Z')||funct['(global)'])){warning(bundle.strict,x);}else if(option.safe){warning(bundle.adsafe,x);}});reservevar('true');reservevar('undefined');assignop('=');assignop('+=');assignop('-=');assignop('*=');assignop('/=').nud=function(){error(bundle.slash_equal);};assignop('%=');assignop('&=',true);assignop('|=',true);assignop('^=',true);assignop('<<=',true);assignop('>>=',true);assignop('>>>=',true);infix('?',30,function(left,that){that.first=expected_relation(left);that.second=expression(0);spaces();advance(':');spaces();that.third=expression(10);that.arity='ternary';return that;});infix('||',40,function(left,that){function paren_check(that){if(that.id==='&&'&&!that.paren){warning(bundle.and,that);}
return that;}
that.first=paren_check(expected_relation(left));that.second=paren_check(expected_relation(expression(40)));return that;});infix('&&',50,function(left,that){that.first=expected_relation(left);that.second=expected_relation(expression(50));return that;});prefix('void',function(){this.first=expression(0);if(this.first.arity!=='number'||this.first.value){warning(bundle.unexpected_a,this);return this;}
return this;});bitwise('|',70);bitwise('^',80);bitwise('&',90);relation('==','===');relation('===');relation('!=','!==');relation('!==');relation('<');relation('>');relation('<=');relation('>=');bitwise('<<',120);bitwise('>>',120);bitwise('>>>',120);infix('in',120);infix('instanceof',120);infix('+',130,function(left,that){if(!left.value&&(left.arity==='number'||left.arity==='string')){warning(bundle.unexpected_a,left);}
var right=expression(130);if(!right.value&&(right.arity==='number'||right.arity==='string')){warning(bundle.unexpected_a,right);}
if(left.arity===right.arity&&(left.arity==='string'&&left.arity==='number')){left.value+=right.value;left.thru=right.thru;if(left.arity==='string'&&jx.test(left.value)){warning(bundle.url,left);}
return left;}
that.first=left;that.second=right;return that;});prefix('+','num');prefix('+++',function(){warning(bundle.confusing_a,token);this.first=expression(150);this.arity='prefix';return this;});infix('+++',130,function(left){warning(bundle.confusing_a,token);this.first=left;this.second=expression(130);return this;});infix('-',130,function(left,that){if((left.arity==='number'&&left.value===0)||left.arity==='string'){warning(bundle.unexpected_a,left);}
var right=expression(130);if((right.arity==='number'&&right.value===0)||right.arity==='string'){warning(bundle.unexpected_a,left);}
if(left.arity===right.arity&&left.arity==='number'){left.value-=right.value;left.thru=right.thru;return left;}
that.first=left;that.second=right;return that;});prefix('-');prefix('---',function(){warning(bundle.confusing_a,token);this.first=expression(150);this.arity='prefix';return this;});infix('---',130,function(left){warning(bundle.confusing_a,token);this.first=left;this.second=expression(130);return this;});infix('*',140,function(left,that){if((left.arity==='number'&&(left.value===0||left.value===1))||left.arity==='string'){warning(bundle.unexpected_a,left);}
var right=expression(140);if((right.arity==='number'&&(right.value===0||right.value===1))||right.arity==='string'){warning(bundle.unexpected_a,right);}
if(left.arity===right.arity&&left.arity==='number'){left.value*=right.value;left.thru=right.thru;return left;}
that.first=left;that.second=right;return that;});infix('/',140,function(left,that){if((left.arity==='number'&&left.value===0)||left.arity==='string'){warning(bundle.unexpected_a,left);}
var right=expression(140);if((right.arity==='number'&&(right.value===0||right.value===1))||right.arity==='string'){warning(bundle.unexpected_a,right);}
if(left.arity===right.arity&&left.arity==='number'){left.value/=right.value;left.thru=right.thru;return left;}
that.first=left;that.second=right;return that;});infix('%',140,function(left,that){if((left.arity==='number'&&(left.value===0||left.value===1))||left.arity==='string'){warning(bundle.unexpected_a,left);}
var right=expression(140);if((right.arity==='number'&&(right.value===0||right.value===1))||right.arity==='string'){warning(bundle.unexpected_a,right);}
if(left.arity===right.arity&&left.arity==='number'){left.value%=right.value;left.thru=right.thru;return left;}
that.first=left;that.second=right;return that;});suffix('++');prefix('++');suffix('--');prefix('--');prefix('delete',function(){one_space();var p=expression(0);if(!p||(p.id!=='.'&&p.id!=='[')){warning(bundle.deleted);}
this.first=p;return this;});prefix('~',function(){no_space_only();if(option.bitwise){warning(bundle.unexpected_a,this);}
expression(150);return this;});prefix('!',function(){no_space_only();this.first=expression(150);this.arity='prefix';if(bang[this.first.id]===true){warning(bundle.confusing_a,this);}
return this;});prefix('typeof');prefix('new',function(){one_space();var c=expression(160),i,p;this.first=c;if(c.id!=='function'){if(c.identifier){switch(c.value){case'Object':warning(bundle.use_object,token);break;case'Array':if(nexttoken.id==='('){p=nexttoken;p.first=this;advance('(');if(nexttoken.id!==')'){p.second=expression(0);if(p.second.arity!=='number'||!p.second.value){expected_condition(p.second,bundle.use_array);i=false;}else{i=true;}
while(nexttoken.id!==')'&&nexttoken.id!=='(end)'){if(i){warning(bundle.use_array,p);i=false;}
advance();}}else{warning(bundle.use_array,token);}
advance(')',p);return p;}
warning(bundle.use_array,token);break;case'Number':case'String':case'Boolean':case'Math':case'JSON':warning(bundle.not_a_constructor,c);break;case'Function':if(!option.evil){warning(bundle.function_eval);}
break;case'Date':case'RegExp':break;default:if(c.id!=='function'){i=c.value.substr(0,1);if(option.newcap&&(i<'A'||i>'Z')){warning(bundle.constructor_name_a,token);}}}}else{if(c.id!=='.'&&c.id!=='['&&c.id!=='('){warning(bundle.bad_constructor,token);}}}else{warning(bundle.weird_new,this);}
if(nexttoken.id!=='('){warning(bundle.missing_a,nexttoken,'()');}
return this;});infix('(',160,function(left,that){if(indent&&indent.statement){no_space_only(prevtoken,token);}else{no_space(prevtoken,token);}
if(!left.immed&&left.id==='function'){warning(bundle.wrap_immediate);}
var p=[];if(left){if(left.identifier){if(left.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)){if(left.value!=='Number'&&left.value!=='String'&&left.value!=='Boolean'&&left.value!=='Date'){if(left.value==='Math'||left.value==='JSON'){warning(bundle.not_a_function,left);}else if(left.value==='Object'){warning(bundle.use_object,token);}else if(left.value==='Array'||option.newcap){warning(bundle.missing_a,left,'new');}}}}else if(left.id==='.'){if(option.safe&&left.first.value==='Math'&&left.second==='random'){warning(bundle.adsafe,left);}}}
step_in();if(nexttoken.id!==')'){no_space();for(;;){edge();p.push(expression(10));if(nexttoken.id!==','){break;}
comma();}}
no_space();step_out(')',this);if(typeof left==='object'){if(left.value==='parseInt'&&p.length===1){warning(bundle.radix,left);}
if(!option.evil){if(left.value==='eval'||left.value==='Function'||left.value==='execScript'){warning(bundle.evil,left);}else if(p[0]&&p[0].arity==='string'&&(left.value==='setTimeout'||left.value==='setInterval')){warning(bundle.implied_evil,left);}}
if(!left.identifier&&left.id!=='.'&&left.id!=='['&&left.id!=='('&&left.id!=='&&'&&left.id!=='||'&&left.id!=='?'){warning(bundle.bad_invocation,left);}}
that.first=left;that.second=p;return that;},true);prefix('(',function(){step_in('expression');discard();no_space();edge();if(nexttoken.id==='function'){nexttoken.immed=true;}
var v=expression(0);v.paren=true;no_space();step_out(')',this);discard();if(v.id==='function'){if(nexttoken.id==='('){warning(bundle.move_invocation);}else{warning(bundle.bad_wrap,this);}}
return v;});infix('.',170,function(left,that){no_space(prevtoken,token);no_space();var m=identifier();if(typeof m==='string'){tally_member(m);}
that.first=left;that.second=token;if(left&&left.value==='arguments'&&(m==='callee'||m==='caller')){warning(bundle.avoid_a,left,'arguments.'+m);}else if(!option.evil&&left&&left.value==='document'&&(m==='write'||m==='writeln')){warning(bundle.write_is_wrong,left);}else if(option.adsafe){if(left&&left.value==='ADSAFE'){if(m==='id'||m==='lib'){warning(bundle.adsafe,that);}else if(m==='go'){if(xmode!=='script'){warning(bundle.adsafe,that);}else if(adsafe_went||nexttoken.id!=='('||peek(0).arity!=='string'||peek(0).value!==adsafe_id||peek(1).id!==','){error(bundle.adsafe_a,that,'go');}
adsafe_went=true;adsafe_may=false;}}}
if(!option.evil&&(m==='eval'||m==='execScript')){warning(bundle.evil);}else if(option.safe){for(;;){if(banned[m]===true){warning(bundle.adsafe_a,token,m);}
if(typeof predefined[left.value]!=='boolean'||nexttoken.id==='('){break;}
if(standard_member[m]===true){if(nexttoken.id==='.'){warning(bundle.adsafe,that);}
break;}
if(nexttoken.id!=='.'){warning(bundle.adsafe,that);break;}
advance('.');token.first=that;token.second=m;that=token;m=identifier();if(typeof m==='string'){tally_member(m);}}}
return that;},true);infix('[',170,function(left,that){no_space_only(prevtoken,token);no_space();step_in();edge();var e=expression(0),s;if(e.arity==='string'){if(option.safe&&banned[e.value]===true){warning(bundle.adsafe_a,e);}else if(!option.evil&&(e.value==='eval'||e.value==='execScript')){warning(bundle.evil,e);}else if(option.safe&&(e.value.charAt(0)==='_'||e.value.charAt(0)==='-')){warning(bundle.adsafe_subscript_a,e);}
tally_member(e.value);if(!option.sub&&ix.test(e.value)){s=syntax[e.value];if(!s||!s.reserved){warning(bundle.subscript,e);}}}else if(e.arity!=='number'||e.value<0){if(option.safe){warning(bundle.adsafe_subscript_a,e);}}
step_out(']',that);discard();no_space(prevtoken,token);that.first=left;that.second=e;return that;},true);prefix('[',function(){this.first=[];step_in('array');while(nexttoken.id!=='(end)'){while(nexttoken.id===','){warning(bundle.unexpected_a,nexttoken);advance(',');}
if(nexttoken.id===']'){break;}
edge();this.first.push(expression(10));if(nexttoken.id===','){comma();if(nexttoken.id===']'&&!option.es5){warning(bundle.unexpected_a,token);break;}}else{break;}}
step_out(']',this);discard();return this;},170);function property_name(){var id=optional_identifier(true);if(!id){if(nexttoken.arity==='string'){id=nexttoken.value;if(option.safe){if(banned[id]){warning(bundle.adsafe_a);}else if(id.charAt(0)==='_'||id.charAt(id.length-1)==='_'){warning(bundle.dangling_a);}}
advance();}else if(nexttoken.arity==='number'){id=nexttoken.value.toString();advance();}}
return id;}
function functionparams(){var i,t=nexttoken,p=[];advance('(');step_in();discard();no_space();if(nexttoken.id===')'){no_space();step_out(')',t);discard();return;}
for(;;){edge();i=identifier();p.push(token);add_label(i,'parameter');if(nexttoken.id===','){comma();}else{no_space();step_out(')',t);discard();return p;}}}
function do_function(func,name){var s=scope;scope=Object.create(s);funct={'(name)':name||'"'+anonname+'"','(line)':nexttoken.line,'(context)':funct,'(breakage)':0,'(loopage)':0,'(scope)':scope,'(token)':func};token.funct=funct;functions.push(funct);if(name){add_label(name,'function');}
func.name=name||'';func.first=funct['(params)']=functionparams();one_space();func.block=block(false);scope=s;funct=funct['(context)'];return func;}
prefix('{',function(){var get,i,j,name,p,set,seen={},t;this.arity='prefix';this.first=[];step_in();while(nexttoken.id!=='}'){edge();if(nexttoken.value==='get'&&peek().id!==':'){if(!option.es5){warning(bundle.get_set);}
get=nexttoken;one_space_only();advance('get');name=nexttoken;i=property_name();if(!i){error(bundle.missing_property);}
do_function(get,'');if(funct['(loopage)']){warning(bundle.function_loop,t);}
p=get.first;if(p){warning(bundle.parameter_a_get_b,t,p[0],i);}
comma();set=nexttoken;spaces();edge();advance('set');one_space_only();j=property_name();if(i!==j){error(bundle.expected_a_b,token,i,j);}
do_function(set,'');p=set.first;if(!p||p.length!==1||p[0]!=='value'){warning(bundle.parameter_set_a,t,i);}
name.first=[get,set];}else{name=nexttoken;i=property_name();if(typeof i!=='string'){error(bundle.missing_property);}
advance(':');discard();spaces();name.first=expression(10);}
this.first.push(name);if(seen[i]===true){warning(bundle.duplicate_a,nexttoken,i);}
seen[i]=true;tally_member(i);if(nexttoken.id!==','){break;}
for(;;){comma();if(nexttoken.id!==','){break;}
warning(bundle.unexpected_a,nexttoken);}
if(nexttoken.id==='}'&&!option.es5){warning(bundle.unexpected_a,token);}}
step_out('}',this);discard();return this;});stmt('{',function(){discard();warning(bundle.statement_block);this.arity='statement';this.block=statements();this.disrupt=this.block.disrupt;advance('}',this);discard();return this;});stmt('/*members',do_option);stmt('/*member',do_option);stmt('/*jslint',do_option);stmt('/*global',do_option);stmt('var',function(){var assign,id,name;if(funct['(onevar)']&&option.onevar){warning(bundle.combine_var);}else if(!funct['(global)']){funct['(onevar)']=true;}
this.arity='statement';this.first=[];step_in('var');for(;;){name=nexttoken;id=identifier();if(funct['(global)']&&predefined[id]===false){warning(bundle.redefinition_a,token,id);}
add_label(id,'unused');if(nexttoken.id==='='){assign=nexttoken;assign.first=name;spaces();advance('=');spaces();if(nexttoken.id==='undefined'){warning(bundle.unnecessary_initialize,token,id);}
if(peek(0).id==='='&&nexttoken.identifier){error(bundle.var_a_not);}
assign.second=expression(0);assign.arity='infix';this.first.push(assign);}else{this.first.push(name);}
if(nexttoken.id!==','){break;}
comma();if(var_mode&&nexttoken.line===token.line&&this.first.length===1){var_mode=false;indent.open=false;indent.at-=option.indent;}
spaces();edge();}
var_mode=false;step_out();return this;});stmt('function',function(){one_space();if(inblock){warning(bundle.function_block,token);}
var i=identifier();if(i){add_label(i,'unction');no_space_only();}
do_function(this,i,true);if(nexttoken.id==='('&&nexttoken.line===token.line){error(bundle.function_statement);}
this.arity='statement';return this;});prefix('function',function(){one_space();var i=optional_identifier();if(i){no_space_only();}
do_function(this,i);if(funct['(loopage)']){warning(bundle.function_loop);}
this.arity='function';return this;});stmt('if',function(){var t=nexttoken;one_space();advance('(');step_in('control');discard();no_space();edge();this.arity='statement';this.first=expected_condition(expected_relation(expression(0)));no_space();step_out(')',t);discard();one_space();this.block=block(true);if(nexttoken.id==='else'){one_space();advance('else');discard();one_space();this['else']=nexttoken.id==='if'||nexttoken.id==='switch'?statement(true):block(true);if(this['else'].disrupt&&this.block.disrupt){this.disrupt=true;}}
return this;});stmt('try',function(){var b,e,s,t;if(option.adsafe){warning(bundle.adsafe_a,this);}
one_space();this.arity='statement';this.block=block(false);if(nexttoken.id==='catch'){one_space();advance('catch');one_space();t=nexttoken;advance('(');step_in('control');discard();no_space();edge();s=scope;scope=Object.create(s);e=nexttoken.value;this.first=e;if(!nexttoken.identifier){warning(bundle.expected_identifier_a,nexttoken);}else{add_label(e,'exception');}
advance();no_space();step_out(')',t);discard();one_space();this.second=block(false);b=true;scope=s;}
if(nexttoken.id==='finally'){discard();one_space();t=nexttoken;advance('finally');discard();one_space();this.third=block(false);}else if(!b){error(bundle.expected_a_b,nexttoken,'catch',nexttoken.value);}
return this;});stmt('while',function(){one_space();var t=nexttoken;funct['(breakage)']+=1;funct['(loopage)']+=1;advance('(');step_in('control');discard();no_space();edge();this.arity='statement';this.first=expected_relation(expression(0));if(this.first.id!=='true'){expected_condition(this.first,bundle.unexpected_a);}
no_space();step_out(')',t);discard();one_space();this.block=block(true);if(this.block.disrupt){warning(bundle.strange_loop,prevtoken);}
funct['(breakage)']-=1;funct['(loopage)']-=1;return this;});reserve('with');stmt('switch',function(){var b=true,s,t=nexttoken;funct['(breakage)']+=1;one_space();advance('(');discard();no_space();step_in();this.arity='statement';this.first=expected_condition(expected_relation(expression(0)));no_space();step_out(')',t);discard();one_space();advance('{');step_in();this.second=[];while(nexttoken.id==='case'){t=nexttoken;t.first=[];spaces();edge('case');advance('case');for(;;){one_space();s=expression(0);t.first.push(s);if(s.id==='NaN'){warning(bundle.unexpected_a,s);}
no_space_only();advance(':');discard();if(nexttoken.id!=='case'){break;}
spaces();edge('case');advance('case');discard();}
spaces();t.second=statements();if(t.second&&t.second.length>0){s=t.second[t.second.length-1];if(s.disrupt){if(s.id==='break'){b=false;}}else{warning(bundle.missing_a_after_b,nexttoken,'break','case');}}else{warning(bundle.empty_case);}
this.second.push(t);}
if(this.second.length===0){warning(bundle.missing_a,nexttoken,'case');}
if(nexttoken.id==='default'){spaces();t=nexttoken;edge('case');advance('default');discard();no_space_only();advance(':');discard();spaces();t.second=statements();if(t.second&&t.second.length>0){s=t.second[t.second.length-1];if(b&&s.disrupt&&s.id!=='break'){this.disrupt=true;}}
this.second.push(t);}
funct['(breakage)']-=1;spaces();step_out('}',this);return this;});stmt('debugger',function(){if(!option.debug){warning(bundle.unexpected_a,this);}
this.arity='statement';return this;});stmt('do',function(){funct['(breakage)']+=1;funct['(loopage)']+=1;one_space();this.arity='statement';this.block=block(true);if(this.block.disrupt){warning(bundle.strange_loop,prevtoken);}
one_space();advance('while');discard();var t=nexttoken;one_space();advance('(');step_in();discard();no_space();edge();this.first=expected_condition(expected_relation(expression(0)),bundle.unexpected_a);no_space();step_out(')',t);discard();funct['(breakage)']-=1;funct['(loopage)']-=1;return this;});stmt('for',function(){var f=option.forin,i,s,t=nexttoken,v;this.arity='statement';funct['(breakage)']+=1;funct['(loopage)']+=1;advance('(');step_in('control');discard();spaces(this,t);no_space();if(nexttoken.id==='var'){error(bundle.move_var);}
edge();if(peek(0).id==='in'){v=nexttoken;switch(funct[v.value]){case'unused':funct[v.value]='var';break;case'var':break;default:warning(bundle.bad_in_a,v);}
advance();i=nexttoken;advance('in');i.first=v;i.second=expression(20);step_out(')',t);discard();this.first=i;s=block(true);if(!f&&(s.length>1||typeof s[0]!=='object'||s[0].value!=='if')){warning(bundle.for_if,this);}}else{if(nexttoken.id!==';'){edge();this.first=[];for(;;){this.first.push(expression(0,'for'));if(nexttoken.id!==','){break;}
comma();}}
semicolon();if(nexttoken.id!==';'){edge();this.second=expected_relation(expression(0));if(this.second.id!=='true'){expected_condition(this.second,bundle.unexpected_a);}}
semicolon(token);if(nexttoken.id===';'){error(bundle.expected_a_b,nexttoken,')',';');}
if(nexttoken.id!==')'){this.third=[];edge();for(;;){this.third.push(expression(0,'for'));if(nexttoken.id!==','){break;}
comma();}}
no_space();step_out(')',t);discard();one_space();s=block(true);}
if(s.disrupt){warning(bundle.strange_loop,prevtoken);}
this.block=s;funct['(breakage)']-=1;funct['(loopage)']-=1;return this;});disrupt_stmt('break',function(){var v=nexttoken.value;this.arity='statement';if(funct['(breakage)']===0){warning(bundle.unexpected_a,this);}
if(nexttoken.identifier&&token.line===nexttoken.line){one_space_only();if(funct[v]!=='label'){warning(bundle.not_a_label,nexttoken);}else if(scope[v]!==funct){warning(bundle.not_a_scope,nexttoken);}
this.first=nexttoken;advance();}
return this;});disrupt_stmt('continue',function(){if(!option['continue']){warning(bundle.unexpected_a,this);}
var v=nexttoken.value;this.arity='statement';if(funct['(breakage)']===0){warning(bundle.unexpected_a,this);}
if(nexttoken.identifier&&token.line===nexttoken.line){one_space_only();if(funct[v]!=='label'){warning(bundle.not_a_label,nexttoken);}else if(scope[v]!==funct){warning(bundle.not_a_scope,nexttoken);}
this.first=nexttoken;advance();}
return this;});disrupt_stmt('return',function(){this.arity='statement';if(nexttoken.id!==';'&&nexttoken.line===token.line){one_space_only();if(nexttoken.id==='/'||nexttoken.id==='(regexp)'){warning(bundle.wrap_regexp);}
this.first=expression(20);}
return this;});disrupt_stmt('throw',function(){this.arity='statement';one_space_only();this.first=expression(20);return this;});reserve('class');reserve('const');reserve('enum');reserve('export');reserve('extends');reserve('import');reserve('super');reserve('let');reserve('yield');reserve('implements');reserve('interface');reserve('package');reserve('private');reserve('protected');reserve('public');reserve('static');function json_value(){function json_object(){var o={},t=nexttoken;advance('{');if(nexttoken.id!=='}'){while(nexttoken.id!=='(end)'){while(nexttoken.id===','){warning(bundle.unexpected_a,nexttoken);comma();}
if(nexttoken.arity!=='string'){warning(bundle.expected_string_a);}
if(o[nexttoken.value]===true){warning(bundle.duplicate_a);}else if(nexttoken.value==='__proto__'){warning(bundle.dangling_a);}else{o[nexttoken.value]=true;}
advance();advance(':');json_value();if(nexttoken.id!==','){break;}
comma();if(nexttoken.id==='}'){warning(bundle.unexpected_a,token);break;}}}
advance('}',t);}
function json_array(){var t=nexttoken;advance('[');if(nexttoken.id!==']'){while(nexttoken.id!=='(end)'){while(nexttoken.id===','){warning(bundle.unexpected_a,nexttoken);comma();}
json_value();if(nexttoken.id!==','){break;}
comma();if(nexttoken.id===']'){warning(bundle.unexpected_a,token);break;}}}
advance(']',t);}
switch(nexttoken.id){case'{':json_object();break;case'[':json_array();break;case'true':case'false':case'null':case'(number)':case'(string)':advance();break;case'-':advance('-');no_space_only();advance('(number)');break;default:error(bundle.unexpected_a);}}
function css_name(){if(nexttoken.identifier){advance();return true;}}
function css_number(){if(nexttoken.id==='-'){advance('-');no_space_only();}
if(nexttoken.arity==='number'){advance('(number)');return true;}}
function css_string(){if(nexttoken.arity==='string'){advance();return true;}}
function css_color(){var i,number,t,value;if(nexttoken.identifier){value=nexttoken.value;if(value==='rgb'||value==='rgba'){advance();t=nexttoken;advance('(');for(i=0;i<3;i+=1){if(i){comma();}
number=nexttoken.value;if(nexttoken.arity!=='number'||number<0){warning(bundle.expected_positive_a,nexttoken);advance();}else{advance();if(nexttoken.id==='%'){advance('%');if(number>100){warning(bundle.expected_percent_a,token,number);}}else{if(number>255){warning(bundle.expected_small_a,token,number);}}}}
if(value==='rgba'){comma();number=+nexttoken.value;if(nexttoken.arity!=='number'||number<0||number>1){warning(bundle.expected_fraction_a,nexttoken);}
advance();if(nexttoken.id==='%'){warning(bundle.unexpected_a);advance('%');}}
advance(')',t);return true;}else if(css_colorData[nexttoken.value]===true){advance();return true;}}else if(nexttoken.id==='(color)'){advance();return true;}
return false;}
function css_length(){if(nexttoken.id==='-'){advance('-');no_space_only();}
if(nexttoken.arity==='number'){advance();if(nexttoken.arity!=='string'&&css_lengthData[nexttoken.value]===true){no_space_only();advance();}else if(+token.value!==0){warning(bundle.expected_linear_a);}
return true;}
return false;}
function css_line_height(){if(nexttoken.id==='-'){advance('-');no_space_only();}
if(nexttoken.arity==='number'){advance();if(nexttoken.arity!=='string'&&css_lengthData[nexttoken.value]===true){no_space_only();advance();}
return true;}
return false;}
function css_width(){if(nexttoken.identifier){switch(nexttoken.value){case'thin':case'medium':case'thick':advance();return true;}}else{return css_length();}}
function css_margin(){if(nexttoken.identifier){if(nexttoken.value==='auto'){advance();return true;}}else{return css_length();}}
function css_attr(){if(nexttoken.identifier&&nexttoken.value==='attr'){advance();advance('(');if(!nexttoken.identifier){warning(bundle.expected_name_a);}
advance();advance(')');return true;}
return false;}
function css_comma_list(){while(nexttoken.id!==';'){if(!css_name()&&!css_string()){warning(bundle.expected_name_a);}
if(nexttoken.id!==','){return true;}
comma();}}
function css_counter(){if(nexttoken.identifier&&nexttoken.value==='counter'){advance();advance('(');advance();if(nexttoken.id===','){comma();if(nexttoken.arity!=='string'){warning(bundle.expected_string_a);}
advance();}
advance(')');return true;}
if(nexttoken.identifier&&nexttoken.value==='counters'){advance();advance('(');if(!nexttoken.identifier){warning(bundle.expected_name_a);}
advance();if(nexttoken.id===','){comma();if(nexttoken.arity!=='string'){warning(bundle.expected_string_a);}
advance();}
if(nexttoken.id===','){comma();if(nexttoken.arity!=='string'){warning(bundle.expected_string_a);}
advance();}
advance(')');return true;}
return false;}
function css_shape(){var i;if(nexttoken.identifier&&nexttoken.value==='rect'){advance();advance('(');for(i=0;i<4;i+=1){if(!css_length()){warning(bundle.expected_number_a);break;}}
advance(')');return true;}
return false;}
function css_url(){var c,url;if(nexttoken.identifier&&nexttoken.value==='url'){nexttoken=lex.range('(',')');url=nexttoken.value;c=url.charAt(0);if(c==='"'||c==='\''){if(url.slice(-1)!==c){warning(bundle.bad_url);}else{url=url.slice(1,-1);if(url.indexOf(c)>=0){warning(bundle.bad_url);}}}
if(!url){warning(bundle.missing_url);}
if(option.safe&&ux.test(url)){error(bundle.adsafe_a,nexttoken,url);}
urls.push(url);advance();return true;}
return false;}
css_any=[css_url,function(){for(;;){if(nexttoken.identifier){switch(nexttoken.value.toLowerCase()){case'url':css_url();break;case'expression':warning(bundle.unexpected_a);advance();break;default:advance();}}else{if(nexttoken.id===';'||nexttoken.id==='!'||nexttoken.id==='(end)'||nexttoken.id==='}'){return true;}
advance();}}}];css_border_style=['none','dashed','dotted','double','groove','hidden','inset','outset','ridge','solid'];css_break=['auto','always','avoid','left','right'];css_media={'all':true,'braille':true,'embossed':true,'handheld':true,'print':true,'projection':true,'screen':true,'speech':true,'tty':true,'tv':true};css_overflow=['auto','hidden','scroll','visible'];css_attribute_data={background:[true,'background-attachment','background-color','background-image','background-position','background-repeat'],'background-attachment':['scroll','fixed'],'background-color':['transparent',css_color],'background-image':['none',css_url],'background-position':[2,[css_length,'top','bottom','left','right','center']],'background-repeat':['repeat','repeat-x','repeat-y','no-repeat'],'border':[true,'border-color','border-style','border-width'],'border-bottom':[true,'border-bottom-color','border-bottom-style','border-bottom-width'],'border-bottom-color':css_color,'border-bottom-style':css_border_style,'border-bottom-width':css_width,'border-collapse':['collapse','separate'],'border-color':['transparent',4,css_color],'border-left':[true,'border-left-color','border-left-style','border-left-width'],'border-left-color':css_color,'border-left-style':css_border_style,'border-left-width':css_width,'border-right':[true,'border-right-color','border-right-style','border-right-width'],'border-right-color':css_color,'border-right-style':css_border_style,'border-right-width':css_width,'border-spacing':[2,css_length],'border-style':[4,css_border_style],'border-top':[true,'border-top-color','border-top-style','border-top-width'],'border-top-color':css_color,'border-top-style':css_border_style,'border-top-width':css_width,'border-width':[4,css_width],bottom:[css_length,'auto'],'caption-side':['bottom','left','right','top'],clear:['both','left','none','right'],clip:[css_shape,'auto'],color:css_color,content:['open-quote','close-quote','no-open-quote','no-close-quote',css_string,css_url,css_counter,css_attr],'counter-increment':[css_name,'none'],'counter-reset':[css_name,'none'],cursor:[css_url,'auto','crosshair','default','e-resize','help','move','n-resize','ne-resize','nw-resize','pointer','s-resize','se-resize','sw-resize','w-resize','text','wait'],direction:['ltr','rtl'],display:['block','compact','inline','inline-block','inline-table','list-item','marker','none','run-in','table','table-caption','table-cell','table-column','table-column-group','table-footer-group','table-header-group','table-row','table-row-group'],'empty-cells':['show','hide'],'float':['left','none','right'],font:['caption','icon','menu','message-box','small-caption','status-bar',true,'font-size','font-style','font-weight','font-family'],'font-family':css_comma_list,'font-size':['xx-small','x-small','small','medium','large','x-large','xx-large','larger','smaller',css_length],'font-size-adjust':['none',css_number],'font-stretch':['normal','wider','narrower','ultra-condensed','extra-condensed','condensed','semi-condensed','semi-expanded','expanded','extra-expanded'],'font-style':['normal','italic','oblique'],'font-variant':['normal','small-caps'],'font-weight':['normal','bold','bolder','lighter',css_number],height:[css_length,'auto'],left:[css_length,'auto'],'letter-spacing':['normal',css_length],'line-height':['normal',css_line_height],'list-style':[true,'list-style-image','list-style-position','list-style-type'],'list-style-image':['none',css_url],'list-style-position':['inside','outside'],'list-style-type':['circle','disc','square','decimal','decimal-leading-zero','lower-roman','upper-roman','lower-greek','lower-alpha','lower-latin','upper-alpha','upper-latin','hebrew','katakana','hiragana-iroha','katakana-oroha','none'],margin:[4,css_margin],'margin-bottom':css_margin,'margin-left':css_margin,'margin-right':css_margin,'margin-top':css_margin,'marker-offset':[css_length,'auto'],'max-height':[css_length,'none'],'max-width':[css_length,'none'],'min-height':css_length,'min-width':css_length,opacity:css_number,outline:[true,'outline-color','outline-style','outline-width'],'outline-color':['invert',css_color],'outline-style':['dashed','dotted','double','groove','inset','none','outset','ridge','solid'],'outline-width':css_width,overflow:css_overflow,'overflow-x':css_overflow,'overflow-y':css_overflow,padding:[4,css_length],'padding-bottom':css_length,'padding-left':css_length,'padding-right':css_length,'padding-top':css_length,'page-break-after':css_break,'page-break-before':css_break,position:['absolute','fixed','relative','static'],quotes:[8,css_string],right:[css_length,'auto'],'table-layout':['auto','fixed'],'text-align':['center','justify','left','right'],'text-decoration':['none','underline','overline','line-through','blink'],'text-indent':css_length,'text-shadow':['none',4,[css_color,css_length]],'text-transform':['capitalize','uppercase','lowercase','none'],top:[css_length,'auto'],'unicode-bidi':['normal','embed','bidi-override'],'vertical-align':['baseline','bottom','sub','super','top','text-top','middle','text-bottom',css_length],visibility:['visible','hidden','collapse'],'white-space':['normal','nowrap','pre','pre-line','pre-wrap','inherit'],width:[css_length,'auto'],'word-spacing':['normal',css_length],'word-wrap':['break-word','normal'],'z-index':['auto',css_number]};function style_attribute(){var v;while(nexttoken.id==='*'||nexttoken.id==='#'||nexttoken.value==='_'){if(!option.css){warning(bundle.unexpected_a);}
advance();}
if(nexttoken.id==='-'){if(!option.css){warning(bundle.unexpected_a);}
advance('-');if(!nexttoken.identifier){warning(bundle.expected_nonstandard_style_attribute);}
advance();return css_any;}else{if(!nexttoken.identifier){warning(bundle.expected_style_attribute);}else{if(is_own(css_attribute_data,nexttoken.value)){v=css_attribute_data[nexttoken.value];}else{v=css_any;if(!option.css){warning(bundle.unrecognized_style_attribute_a);}}}
advance();return v;}}
function style_value(v){var i=0,n,once,match,round,start=0,vi;switch(typeof v){case'function':return v();case'string':if(nexttoken.identifier&&nexttoken.value===v){advance();return true;}
return false;}
for(;;){if(i>=v.length){return false;}
vi=v[i];i+=1;if(vi===true){break;}else if(typeof vi==='number'){n=vi;vi=v[i];i+=1;}else{n=1;}
match=false;while(n>0){if(style_value(vi)){match=true;n-=1;}else{break;}}
if(match){return true;}}
start=i;once=[];for(;;){round=false;for(i=start;i<v.length;i+=1){if(!once[i]){if(style_value(css_attribute_data[v[i]])){match=true;round=true;once[i]=true;break;}}}
if(!round){return match;}}}
function style_child(){if(nexttoken.arity==='number'){advance();if(nexttoken.value==='n'&&nexttoken.identifier){no_space_only();advance();if(nexttoken.id==='+'){no_space_only();advance('+');no_space_only();advance('(number)');}}
return;}else{if(nexttoken.identifier&&(nexttoken.value==='odd'||nexttoken.value==='even')){advance();return;}}
warning(bundle.unexpected_a);}
function substyle(){var v;for(;;){if(nexttoken.id==='}'||nexttoken.id==='(end)'||(xquote&&nexttoken.id===xquote)){return;}
while(nexttoken.id===';'){warning(bundle.unexpected_a);semicolon();}
v=style_attribute();advance(':');if(nexttoken.identifier&&nexttoken.value==='inherit'){advance();}else{if(!style_value(v)){warning(bundle.unexpected_a);advance();}}
if(nexttoken.id==='!'){advance('!');no_space_only();if(nexttoken.identifier&&nexttoken.value==='important'){advance();}else{warning(bundle.expected_a_b,nexttoken,'important',nexttoken.value);}}
if(nexttoken.id==='}'||nexttoken.id===xquote){warning(bundle.expected_a_b,nexttoken,';',nexttoken.value);}else{semicolon();}}}
function style_selector(){if(nexttoken.identifier){if(!is_own(html_tag,option.cap?nexttoken.value.toLowerCase():nexttoken.value)){warning(bundle.expected_tagname_a);}
advance();}else{switch(nexttoken.id){case'>':case'+':advance();style_selector();break;case':':advance(':');switch(nexttoken.value){case'active':case'after':case'before':case'checked':case'disabled':case'empty':case'enabled':case'first-child':case'first-letter':case'first-line':case'first-of-type':case'focus':case'hover':case'last-child':case'last-of-type':case'link':case'only-of-type':case'root':case'target':case'visited':advance();break;case'lang':advance();advance('(');if(!nexttoken.identifier){warning(bundle.expected_lang_a);}
advance(')');break;case'nth-child':case'nth-last-child':case'nth-last-of-type':case'nth-of-type':advance();advance('(');style_child();advance(')');break;case'not':advance();advance('(');if(nexttoken.id===':'&&peek(0).value==='not'){warning(bundle.not);}
style_selector();advance(')');break;default:warning(bundle.expected_pseudo_a);}
break;case'#':advance('#');if(!nexttoken.identifier){warning(bundle.expected_id_a);}
advance();break;case'*':advance('*');break;case'.':advance('.');if(!nexttoken.identifier){warning(bundle.expected_class_a);}
advance();break;case'[':advance('[');if(!nexttoken.identifier){warning(bundle.expected_attribute_a);}
advance();if(nexttoken.id==='='||nexttoken.value==='~='||nexttoken.value==='$='||nexttoken.value==='|='||nexttoken.id==='*='||nexttoken.id==='^='){advance();if(nexttoken.arity!=='string'){warning(bundle.expected_string_a);}
advance();}
advance(']');break;default:error(bundle.expected_selector_a);}}}
function style_pattern(){if(nexttoken.id==='{'){warning(bundle.expected_style_pattern);}
for(;;){style_selector();if(nexttoken.id==='</'||nexttoken.id==='{'||nexttoken.id==='(end)'){return'';}
if(nexttoken.id===','){comma();}}}
function style_list(){while(nexttoken.id!=='</'&&nexttoken.id!=='(end)'){style_pattern();xmode='styleproperty';if(nexttoken.id===';'){semicolon();}else{advance('{');substyle();xmode='style';advance('}');}}}
function styles(){var i;while(nexttoken.id==='@'){i=peek();advance('@');if(nexttoken.identifier){switch(nexttoken.value){case'import':advance();if(!css_url()){warning(bundle.expected_a_b,nexttoken,'url',nexttoken.value);advance();}
semicolon();break;case'media':advance();for(;;){if(!nexttoken.identifier||css_media[nexttoken.value]===true){error(bundle.expected_media_a);}
advance();if(nexttoken.id!==','){break;}
comma();}
advance('{');style_list();advance('}');break;default:warning(bundle.expected_at_a);}}else{warning(bundle.expected_at_a);}}
style_list();}
function do_begin(n){if(n!=='html'&&!option.fragment){if(n==='div'&&option.adsafe){error(bundle.adsafe_fragment);}else{error(bundle.expected_a_b,token,'html',n);}}
if(option.adsafe){if(n==='html'){error(bundle.adsafe_html,token);}
if(option.fragment){if(n!=='div'){error(bundle.adsafe_div,token);}}else{error(bundle.adsafe_fragment,token);}}
option.browser=true;assume();}
function do_attribute(n,a,v){var u,x;if(a==='id'){u=typeof v==='string'?v.toUpperCase():'';if(ids[u]===true){warning(bundle.duplicate_a,nexttoken,v);}
if(!/^[A-Za-z][A-Za-z0-9._:\-]*$/.test(v)){warning(bundle.bad_id_a,nexttoken,v);}else if(option.adsafe){if(adsafe_id){if(v.slice(0,adsafe_id.length)!==adsafe_id){warning(bundle.adsafe_prefix_a,nexttoken,adsafe_id);}else if(!/^[A-Z]+_[A-Z]+$/.test(v)){warning(bundle.adsafe_bad_id);}}else{adsafe_id=v;if(!/^[A-Z]+_$/.test(v)){warning(bundle.adsafe_bad_id);}}}
x=v.search(dx);if(x>=0){warning(bundle.unexpected_char_a_b,token,v.charAt(x),a);}
ids[u]=true;}else if(a==='class'||a==='type'||a==='name'){x=v.search(qx);if(x>=0){warning(bundle.unexpected_char_a_b,token,v.charAt(x),a);}
ids[u]=true;}else if(a==='href'||a==='background'||a==='content'||a==='data'||a.indexOf('src')>=0||a.indexOf('url')>=0){if(option.safe&&ux.test(v)){error(bundle.bad_url,nexttoken,v);}
urls.push(v);}else if(a==='for'){if(option.adsafe){if(adsafe_id){if(v.slice(0,adsafe_id.length)!==adsafe_id){warning(bundle.adsafe_prefix_a,nexttoken,adsafe_id);}else if(!/^[A-Z]+_[A-Z]+$/.test(v)){warning(bundle.adsafe_bad_id);}}else{warning(bundle.adsafe_bad_id);}}}else if(a==='name'){if(option.adsafe&&v.indexOf('_')>=0){warning(bundle.adsafe_name_a,nexttoken,v);}}}
function do_tag(n,a){var i,t=html_tag[n],x;src=false;if(!t){error(bundle.unrecognized_tag_a,nexttoken,n===n.toLowerCase()?n:n+' (capitalization error)');}
if(stack.length>0){if(n==='html'){error(bundle.unexpected_a,token,n);}
x=t.parent;if(x){if(x.indexOf(' '+stack[stack.length-1].name+' ')<0){error(bundle.tag_a_in_b,token,n,x);}}else if(!option.adsafe&&!option.fragment){i=stack.length;do{if(i<=0){error(bundle.tag_a_in_b,token,n,'body');}
i-=1;}while(stack[i].name!=='body');}}
switch(n){case'div':if(option.adsafe&&stack.length===1&&!adsafe_id){warning(bundle.adsafe_missing_id);}
break;case'script':xmode='script';advance('>');if(a.lang){warning(bundle.lang,token);}
if(option.adsafe&&stack.length!==1){warning(bundle.adsafe_placement,token);}
if(a.src){if(option.adsafe&&(!adsafe_may||!approved[a.src])){warning(bundle.adsafe_source,token);}
if(a.type){warning(bundle.type,token);}}else{if(adsafe_went){error(bundle.adsafe_script,token);}
step_in(nexttoken.from);edge();use_strict();statements('script');indent=null;}
xmode='html';advance('</');if(!nexttoken.identifier&&nexttoken.value!=='script'){warning(bundle.expected_a_b,nexttoken,'script',nexttoken.value);}
advance();xmode='outer';break;case'style':xmode='style';advance('>');styles();xmode='html';advance('</');if(!nexttoken.identifier&&nexttoken.value!=='style'){warning(bundle.expected_a_b,nexttoken,'style',nexttoken.value);}
advance();xmode='outer';break;case'input':switch(a.type){case'radio':case'checkbox':case'button':case'reset':case'submit':break;case'text':case'file':case'password':case'file':case'hidden':case'image':if(option.adsafe&&a.autocomplete!=='off'){warning(bundle.adsafe_autocomplete);}
break;default:warning(bundle.bad_type);}
break;case'applet':case'body':case'embed':case'frame':case'frameset':case'head':case'iframe':case'noembed':case'noframes':case'object':case'param':if(option.adsafe){warning(bundle.adsafe_tag,nexttoken,n);}
break;}}
function closetag(n){return'</'+n+'>';}
function html(){var a,attributes,e,n,q,t,v,w=option.white,wmode;xmode='html';xquote='';stack=null;for(;;){switch(nexttoken.value){case'<':xmode='html';advance('<');attributes={};t=nexttoken;if(!t.identifier){warning(bundle.bad_name_a,t);}
n=t.value;if(option.cap){n=n.toLowerCase();}
t.name=n;advance();if(!stack){stack=[];do_begin(n);}
v=html_tag[n];if(typeof v!=='object'){error(bundle.unrecognized_tag_a,t,n);}
e=v.empty;t.type=n;for(;;){if(nexttoken.id==='/'){advance('/');if(nexttoken.id!=='>'){warning(bundle.expected_a_b,nexttoken,'>',nexttoken.value);}
break;}
if(nexttoken.id&&nexttoken.id.substr(0,1)==='>'){break;}
if(!nexttoken.identifier){if(nexttoken.id==='(end)'||nexttoken.id==='(error)'){warning(bundle.expected_a_b,nexttoken,'>',nexttoken.value);}
warning(bundle.bad_name_a);}
option.white=true;spaces();a=nexttoken.value;option.white=w;advance();if(!option.cap&&a!==a.toLowerCase()){warning(bundle.attribute_case_a,token);}
a=a.toLowerCase();xquote='';if(is_own(attributes,a)){warning(bundle.duplicate_a,token,a);}
if(a.slice(0,2)==='on'){if(!option.on){warning(bundle.html_handlers);}
xmode='scriptstring';advance('=');q=nexttoken.id;if(q!=='"'&&q!=='\''){error(bundle.expected_a_b,nexttoken,'"',nexttoken.value);}
xquote=q;wmode=option.white;option.white=false;advance(q);use_strict();statements('on');option.white=wmode;if(nexttoken.id!==q){error(bundle.expected_a_b,nexttoken,q,nexttoken.value);}
xmode='html';xquote='';advance(q);v=false;}else if(a==='style'){xmode='scriptstring';advance('=');q=nexttoken.id;if(q!=='"'&&q!=='\''){error(bundle.expected_a_b,nexttoken,'"',nexttoken.value);}
xmode='styleproperty';xquote=q;advance(q);substyle();xmode='html';xquote='';advance(q);v=false;}else{if(nexttoken.id==='='){advance('=');v=nexttoken.value;if(!nexttoken.identifier&&nexttoken.id!=='"'&&nexttoken.id!=='\''&&nexttoken.arity!=='string'&&nexttoken.arity!=='number'&&nexttoken.id!=='(color)'){warning(bundle.expected_attribute_value_a,token,a);}
advance();}else{v=true;}}
attributes[a]=v;do_attribute(n,a,v);}
do_tag(n,attributes);if(!e){stack.push(t);}
xmode='outer';advance('>');break;case'</':xmode='html';advance('</');if(!nexttoken.identifier){warning(bundle.bad_name_a);}
n=nexttoken.value;if(option.cap){n=n.toLowerCase();}
advance();if(!stack){error(bundle.unexpected_a,nexttoken,closetag(n));}
t=stack.pop();if(!t){error(bundle.unexpected_a,nexttoken,closetag(n));}
if(t.name!==n){error(bundle.expected_a_b,nexttoken,closetag(t.name),closetag(n));}
if(nexttoken.id!=='>'){error(bundle.expected_a_b,nexttoken,'>',nexttoken.value);}
xmode='outer';advance('>');break;case'<!':if(option.safe){warning(bundle.adsafe_a);}
xmode='html';for(;;){advance();if(nexttoken.id==='>'||nexttoken.id==='(end)'){break;}
if(nexttoken.value.indexOf('--')>=0){error(bundle.unexpected_a,nexttoken,'--');}
if(nexttoken.value.indexOf('<')>=0){error(bundle.unexpected_a,nexttoken,'<');}
if(nexttoken.value.indexOf('>')>=0){error(bundle.unexpected_a,nexttoken,'>');}}
xmode='outer';advance('>');break;case'(end)':return;default:if(nexttoken.id==='(end)'){error(bundle.missing_a,nexttoken,'</'+stack[stack.length-1].value+'>');}else{advance();}}
if(stack&&stack.length===0&&(option.adsafe||!option.fragment||nexttoken.id==='(end)')){break;}}
if(nexttoken.id!=='(end)'){error(bundle.unexpected_a);}}
var itself=function(s,o){var a,i,k;JSLINT.errors=[];JSLINT.tree='';predefined=Object.create(standard);if(o){a=o.predef;if(a){if(Array.isArray(a)){for(i=0;i<a.length;i+=1){predefined[a[i]]=true;}}else if(typeof a==='object'){k=Object.keys(a);for(i=0;i<k.length;i+=1){predefined[k[i]]=!!a[k];}}}
if(o.adsafe){o.safe=true;}
if(o.safe){o.browser=o.css=o.debug=o.devel=o.evil=o.forin=o.on=o.rhino=o.windows=o.sub=o.widget=false;o.nomen=o.safe=o.undef=true;predefined.Date=predefined['eval']=predefined.Function=predefined.Object=null;predefined.ADSAFE=predefined.lib=false;}
option=o;}else{option={};}
if(option.indent){option.indent=+option.indent;}
option.maxerr=option.maxerr||50;adsafe_id='';adsafe_may=false;adsafe_went=false;approved={};if(option.approved){for(i=0;i<option.approved.length;i+=1){approved[option.approved[i]]=option.approved[i];}}else{approved.test='test';}
tab='';for(i=0;i<option.indent;i+=1){tab+=' ';}
global=Object.create(predefined);scope=global;funct={'(global)':true,'(name)':'(global)','(scope)':scope,'(breakage)':0,'(loopage)':0};functions=[funct];comments_off=false;ids={};implied={};inblock=false;indent=false;jsonmode=false;lookahead=[];member={};members_only=null;prereg=true;src=false;stack=null;strict_mode=false;urls=[];var_mode=false;warnings=0;xmode=false;lex.init(s);prevtoken=token=nexttoken=syntax['(begin)'];assume();try{advance();if(nexttoken.arity==='number'){error(bundle.unexpected_a);}else if(nexttoken.value.charAt(0)==='<'){html();if(option.adsafe&&!adsafe_went){warning(bundle.adsafe_go,this);}}else{switch(nexttoken.id){case'{':case'[':jsonmode=true;json_value();break;case'@':case'*':case'#':case'.':case':':xmode='style';advance();if(token.id!=='@'||!nexttoken.identifier||nexttoken.value!=='charset'||token.line!==1||token.from!==1){error(bundle.css);}
advance();if(nexttoken.arity!=='string'&&nexttoken.value!=='UTF-8'){error(bundle.css);}
advance();semicolon();styles();break;default:if(option.adsafe&&option.fragment){error(bundle.expected_a_b,nexttoken,'<div>',nexttoken.value);}
step_in(1);if(nexttoken.id===';'){semicolon();}
if(nexttoken.value==='use strict'){warning(bundle.function_strict);use_strict();}
JSLINT.tree=statements('lib');if(JSLINT.tree.disrupt){warning(bundle.weird_program,prevtoken);}}}
indent=null;advance('(end)');}catch(e){if(e){JSLINT.errors.push({reason:e.message,line:e.line||nexttoken.line,character:e.character||nexttoken.from},null);}}
return JSLINT.errors.length===0;};itself.data=function(){var data={functions:[]},fu,globals,implieds=[],f,i,j,members=[],n,unused=[],v;if(itself.errors.length){data.errors=itself.errors;}
if(jsonmode){data.json=true;}
for(n in implied){if(is_own(implied,n)){implieds.push({name:n,line:implied[n]});}}
if(implieds.length>0){data.implieds=implieds;}
if(urls.length>0){data.urls=urls;}
globals=Object.keys(scope);if(globals.length>0){data.globals=globals;}
for(i=1;i<functions.length;i+=1){f=functions[i];fu={};for(j=0;j<functionicity.length;j+=1){fu[functionicity[j]]=[];}
for(n in f){if(is_own(f,n)&&n.charAt(0)!=='('){v=f[n];if(v==='unction'){v='unused';}
if(Array.isArray(fu[v])){fu[v].push(n);if(v==='unused'){unused.push({name:n,line:f['(line)'],'function':f['(name)']});}}}}
for(j=0;j<functionicity.length;j+=1){if(fu[functionicity[j]].length===0){delete fu[functionicity[j]];}}
fu.name=f['(name)'];fu.param=f['(params)'];fu.line=f['(line)'];data.functions.push(fu);}
if(unused.length>0){data.unused=unused;}
members=[];for(n in member){if(typeof member[n]==='number'){data.member=member;break;}}
return data;};itself.report=function(option){var data=itself.data();var a=[],c,e,err,f,i,j,k,l,m='',n,names,o=[],s;function detail(h,array){var b,i,singularity;if(array){o.push('<div><i>'+h+'</i> ');array=array.sort();for(i=0;i<array.length;i+=1){if(array[i]!==singularity){singularity=array[i];o.push((b?', ':'')+singularity);b=true;}}
o.push('</div>');}}
if(data.errors||data.implieds||data.unused){err=true;o.push('<div id=errors><i>Error:</i>');if(data.errors){for(i=0;i<data.errors.length;i+=1){c=data.errors[i];if(c){e=c.evidence||'';o.push('<p>Problem'+(isFinite(c.line)?' at line '+
c.line+' character '+c.character:'')+': '+c.reason.entityify()+'</p><p class=evidence>'+
(e&&(e.length>80?e.slice(0,77)+'...':e).entityify())+'</p>');}}}
if(data.implieds){s=[];for(i=0;i<data.implieds.length;i+=1){s[i]='<code>'+data.implieds[i].name+'</code>&nbsp;<i>'+
data.implieds[i].line+'</i>';}
o.push('<p><i>Implied global:</i> '+s.join(', ')+'</p>');}
if(data.unused){s=[];for(i=0;i<data.unused.length;i+=1){s[i]='<code><u>'+data.unused[i].name+'</u></code>&nbsp;<i>'+
data.unused[i].line+' </i> <small>'+
data.unused[i]['function']+'</small>';}
o.push('<p><i>Unused variable:</i> '+s.join(', ')+'</p>');}
if(data.json){o.push('<p>JSON: bad.</p>');}
o.push('</div>');}
if(!option){o.push('<br><div id=functions>');if(data.urls){detail("URLs<br>",data.urls,'<br>');}
if(xmode==='style'){o.push('<p>CSS.</p>');}else if(data.json&&!err){o.push('<p>JSON: good.</p>');}else if(data.globals){o.push('<div><i>Global</i> '+
data.globals.sort().join(', ')+'</div>');}else{o.push('<div><i>No new global variables introduced.</i></div>');}
for(i=0;i<data.functions.length;i+=1){f=data.functions[i];names=[];if(f.param){for(j=0;j<f.param.length;j+=1){names[j]=f.param[j].value;}}
o.push('<br><div class=function><i>'+f.line+'</i> '+
(f.name||'')+'('+names.join(', ')+')</div>');detail('<big><b>Unused</b></big>',f.unused);detail('Closure',f.closure);detail('Variable',f['var']);detail('Exception',f.exception);detail('Outer',f.outer);detail('Global',f.global);detail('Label',f.label);}
if(data.member){a=Object.keys(data.member);if(a.length){a=a.sort();m='<br><pre id=members>/*members ';l=10;for(i=0;i<a.length;i+=1){k=a[i];n=k.name();if(l+n.length>72){o.push(m+'<br>');m='    ';l=1;}
l+=n.length+2;if(data.member[k]===1){n='<i>'+n+'</i>';}
if(i<a.length-1){n+=', ';}
m+=n;}
o.push(m+'<br>*/</pre>');}
o.push('</div>');}}
return o.join('');};itself.jslint=itself;itself.edition='2011-02-07';return itself;}());exports.check = JSLINT;
