"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[8977],{8977:(x,l,m)=>{m.r(l),m.d(l,{NzDemoInputNumberModule:()=>I});var g=m(1862),Z=m(4515),d=m(3706),_=m(1208);const h=[d.Zf,_.sL];var p=m(1380),e=m(4537);let b=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(n,t){if(1&n&&e.Gf(p.G,5),2&n){let u;e.iGM(u=e.CRH())&&(t.codeBoxes=u)}},decls:0,vars:0,template:function(n,t){},encapsulation:2}),o})();var s=m(6597),T=m(2189),c=m(1749),f=m(2733),z=m(5321),N=m(2550),a=m(8942);let A=(()=>{class o{constructor(){this.demoValue=3}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-basic"]],decls:2,vars:9,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzDisabled","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA(),e.TgZ(1,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA()),2&n&&(e.Q6J("ngModel",t.demoValue)("nzMin",0)("nzMax",1e5)("nzStep",1),e.xp6(1),e.Q6J("ngModel",t.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)("nzDisabled",!0))},dependencies:[a.JJ,a.On,d._V],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;width:200px}"]}),o})(),C=(()=>{class o{constructor(){this.demoValue=0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-digit"]],decls:1,vars:5,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzPlaceHolder"]],template:function(n,t){1&n&&e._UZ(0,"nz-input-number",0),2&n&&e.Q6J("ngModel",1)("nzMin",1)("nzMax",10)("nzStep",.1)("nzPlaceHolder","Digital")},dependencies:[a.JJ,a.On,d._V],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o})(),M=(()=>{class o{constructor(){this.demoValue=9e4,this.dollarValue=100,this.dollarNullValue=null,this.dollarDecimalValue=.2,this.percentageValue=100,this.percentageNullValue=null,this.percentageDecimalValue=.2,this.formatterPercent=n=>null==n?" %":`${n} %`,this.parserPercent=n=>n.replace(" %",""),this.formatterDollar=n=>null==n?"$ ":`$ ${n}`,this.parserDollar=n=>n.replace("$ ","")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-formatter"]],decls:9,vars:38,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","nzParser","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzPrecision","nzFormatter","nzParser","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"div")(1,"div")(2,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.dollarValue=r}),e.qZA(),e.TgZ(3,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.dollarNullValue=r}),e.qZA(),e.TgZ(4,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.dollarDecimalValue=r}),e.qZA()(),e.TgZ(5,"div")(6,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.percentageValue=r}),e.qZA(),e.TgZ(7,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.percentageNullValue=r}),e.qZA(),e.TgZ(8,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.percentageDecimalValue=r}),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("ngModel",t.dollarValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterDollar)("nzParser",t.parserDollar),e.xp6(1),e.Q6J("ngModel",t.dollarNullValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterDollar)("nzParser",t.parserDollar),e.xp6(1),e.Q6J("ngModel",t.dollarDecimalValue)("nzMin",0)("nzMax",100)("nzStep",1)("nzPrecision",2)("nzFormatter",t.formatterDollar)("nzParser",t.parserDollar),e.xp6(2),e.Q6J("ngModel",t.percentageValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterPercent)("nzParser",t.parserPercent),e.xp6(1),e.Q6J("ngModel",t.percentageNullValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterPercent)("nzParser",t.parserPercent),e.xp6(1),e.Q6J("ngModel",t.percentageDecimalValue)("nzMin",0)("nzMax",100)("nzStep",1)("nzPrecision",2)("nzFormatter",t.formatterPercent)("nzParser",t.parserDollar))},dependencies:[a.JJ,a.On,d._V],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o})(),U=(()=>{class o{constructor(){this.precision=2,this.precisionDecimalValue=9.256,this.oneFixedPrecisionDecimalValue=9.2,this.twoFixedPrecisionDecimalValue=9.23,this.threeFixedPrecisionDecimalValue=9.236,this.threeCutOffPrecisionDecimalValue=9.235}customPrecisionFn(n,t){return+Number(n).toFixed(t+1)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-precision"]],decls:5,vars:11,consts:[["nzPlaceHolder","toFixed",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off","nzPrecisionMode","cut",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off",3,"ngModel","nzPrecision","nzPrecisionMode","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.oneFixedPrecisionDecimalValue=r}),e.qZA(),e.TgZ(1,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.twoFixedPrecisionDecimalValue=r}),e.qZA(),e.TgZ(2,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.threeFixedPrecisionDecimalValue=r}),e.qZA(),e.TgZ(3,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.threeCutOffPrecisionDecimalValue=r}),e.qZA(),e.TgZ(4,"nz-input-number",2),e.NdJ("ngModelChange",function(r){return t.precisionDecimalValue=r}),e.qZA()),2&n&&(e.Q6J("ngModel",t.oneFixedPrecisionDecimalValue)("nzPrecision",1),e.xp6(1),e.Q6J("ngModel",t.twoFixedPrecisionDecimalValue)("nzPrecision",2),e.xp6(1),e.Q6J("ngModel",t.threeFixedPrecisionDecimalValue)("nzPrecision",3),e.xp6(1),e.Q6J("ngModel",t.threeCutOffPrecisionDecimalValue)("nzPrecision",3),e.xp6(1),e.Q6J("ngModel",t.precisionDecimalValue)("nzPrecision",t.precision)("nzPrecisionMode",t.customPrecisionFn))},dependencies:[a.JJ,a.On,d._V],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o})(),q=(()=>{class o{constructor(){this.demoValue=9e4}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-size"]],decls:2,vars:9,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzSize","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA(),e.TgZ(1,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA()),2&n&&(e.Q6J("ngModel",t.demoValue)("nzMin",1)("nzMax",10)("nzStep",1),e.xp6(1),e.Q6J("ngModel",t.demoValue)("nzSize","small")("nzMin",1)("nzMax",10)("nzStep",1))},dependencies:[a.JJ,a.On,d._V],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;width:200px}"]}),o})(),D=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(n,t){if(1&n&&e.Gf(p.G,5),2&n){let u;e.iGM(u=e.CRH())&&(t.codeBoxes=u)}},decls:317,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-input-number-demo-size","nzTitle","Sizes"],["nzHref","#components-input-number-demo-formatter","nzTitle","Formatter"],["nzHref","#components-input-number-demo-digit","nzTitle","Decimal Step"],["nzHref","#components-input-number-demo-precision","nzTitle","Precision"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//input-number/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Sizes","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Formatter","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Decimal Step","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Precision","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","sc-input-number"],["onclick","window.location.hash = 'sc-input-number'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,t){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(r){return t.goLink(r)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"InputNumber"),e.TgZ(12,"span",9),e._uU(13,"(Reviewed)"),e.qZA(),e._UZ(14,"span",10),e.TgZ(15,"a",11),e._UZ(16,"i",12),e.qZA()(),e.TgZ(17,"section",8),e.IAx(),e.TgZ(18,"p"),e._uU(19,"Enter a number within certain range with the mouse or keyboard."),e.qZA(),e.TgZ(20,"h2",13)(21,"span"),e._uU(22,"When To Use"),e.qZA(),e.TgZ(23,"a",14),e._uU(24,"#"),e.qZA()(),e.TgZ(25,"p"),e._uU(26,"When a numeric value needs to be provided."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(27,"nz-tabset",15)(28,"nz-tab",16)(29,"div",17)(30,"div",18)(31,"nz-code-box",19),e._UZ(32,"nz-demo-input-number-basic",20),e.TgZ(33,"div",21),e.IAx(),e.TgZ(34,"p"),e._uU(35,"Basic usage example. This input only allows for numeric values."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(36,"nz-code-box",22),e._UZ(37,"nz-demo-input-number-size",20),e.TgZ(38,"div",21),e.IAx(),e.TgZ(39,"p"),e._uU(40,"There are two sizes of an Input box: "),e.TgZ(41,"code"),e._uU(42,"default"),e.qZA(),e._uU(43," (32px) and "),e.TgZ(44,"code"),e._uU(45,"small"),e.qZA(),e._uU(46," (24px)."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(47,"nz-code-box",23),e._UZ(48,"nz-demo-input-number-formatter",20),e.TgZ(49,"div",21),e.IAx(),e.TgZ(50,"p"),e._uU(51,"Display value within it's situation with "),e.TgZ(52,"code"),e._uU(53,"nzFormatter"),e.qZA(),e._uU(54,", and we usually use "),e.TgZ(55,"code"),e._uU(56,"nzParser"),e.qZA(),e._uU(57," at the same time."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(58,"nz-code-box",24),e._UZ(59,"nz-demo-input-number-digit",20),e.TgZ(60,"div",21),e.IAx(),e.TgZ(61,"p"),e._uU(62,"A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the "),e.TgZ(63,"code"),e._uU(64,"nzStep"),e.qZA(),e._uU(65," property."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(66,"nz-code-box",25),e._UZ(67,"nz-demo-input-number-precision",20),e.TgZ(68,"div",21),e.IAx(),e.TgZ(69,"p"),e._uU(70,"Set the precision of the value. i.e. limit the number of decimal places shown."),e.qZA(),e.fQ9(),e.qZA()()()()()(),e.TgZ(71,"section",26),e.IAx(),e.TgZ(72,"h2",27)(73,"span"),e._uU(74,"API"),e.qZA(),e.TgZ(75,"a",28),e._uU(76,"#"),e.qZA()(),e.TgZ(77,"h3",29)(78,"span"),e._uU(79,"sc-input-number"),e.qZA(),e.TgZ(80,"a",30),e._uU(81,"#"),e.qZA()(),e.TgZ(82,"table")(83,"thead")(84,"tr")(85,"th"),e._uU(86,"property"),e.qZA(),e.TgZ(87,"th"),e._uU(88,"description"),e.qZA(),e.TgZ(89,"th"),e._uU(90,"type"),e.qZA(),e.TgZ(91,"th"),e._uU(92,"default"),e.qZA()()(),e.TgZ(93,"tbody")(94,"tr")(95,"td")(96,"code"),e._uU(97,"[(scModel)]"),e.qZA()(),e.TgZ(98,"td"),e._uU(99,"Current value, two way data binding"),e.qZA(),e.TgZ(100,"td")(101,"code"),e._uU(102,"number | string"),e.qZA()(),e.TgZ(103,"td")(104,"code"),e._uU(105,"string"),e.qZA()()(),e.TgZ(106,"tr")(107,"td")(108,"code"),e._uU(109,"[scAutoFocus]"),e.qZA()(),e.TgZ(110,"td"),e._uU(111,"Gets focus when component mounted"),e.qZA(),e.TgZ(112,"td")(113,"code"),e._uU(114,"boolean"),e.qZA()(),e.TgZ(115,"td")(116,"code"),e._uU(117,"false"),e.qZA()()(),e.TgZ(118,"tr")(119,"td")(120,"code"),e._uU(121,"[scDisabled]"),e.qZA()(),e.TgZ(122,"td"),e._uU(123,"Disable the input"),e.qZA(),e.TgZ(124,"td")(125,"code"),e._uU(126,"boolean"),e.qZA()(),e.TgZ(127,"td")(128,"code"),e._uU(129,"false"),e.qZA()()(),e.TgZ(130,"tr")(131,"td")(132,"code"),e._uU(133,"[scMax]"),e.qZA()(),e.TgZ(134,"td"),e._uU(135,"Max value"),e.qZA(),e.TgZ(136,"td")(137,"code"),e._uU(138,"number"),e.qZA()(),e.TgZ(139,"td")(140,"code"),e._uU(141,"Infinity"),e.qZA()()(),e.TgZ(142,"tr")(143,"td")(144,"code"),e._uU(145,"[scMin]"),e.qZA()(),e.TgZ(146,"td"),e._uU(147,"Min value"),e.qZA(),e.TgZ(148,"td")(149,"code"),e._uU(150,"number"),e.qZA()(),e.TgZ(151,"td")(152,"code"),e._uU(153,"-Infinity"),e.qZA()()(),e.TgZ(154,"tr")(155,"td")(156,"code"),e._uU(157,"[scSymbol]"),e.qZA()(),e.TgZ(158,"td"),e._uU(159,"Represent what entity we are formatting"),e.qZA(),e.TgZ(160,"td")(161,"code"),e._uU(162,"'NONE' | '$' | '%'"),e.qZA()(),e.TgZ(163,"td"),e._uU(164,"'NONE'"),e.qZA()(),e.TgZ(165,"tr")(166,"td")(167,"code"),e._uU(168,"[scPosition]"),e.qZA()(),e.TgZ(169,"td"),e._uU(170,"Specifies the format of the value presented"),e.qZA(),e.TgZ(171,"td")(172,"code"),e._uU(173,"'NONE' | 'LEFT' | 'RIGHT'"),e.qZA()(),e.TgZ(174,"td"),e._uU(175,"'NONE'"),e.qZA()(),e.TgZ(176,"tr")(177,"td")(178,"code"),e._uU(179,"[scPrecision]"),e.qZA()(),e.TgZ(180,"td"),e._uU(181,"Decimal places after the dot"),e.qZA(),e.TgZ(182,"td")(183,"code"),e._uU(184,"number"),e.qZA()(),e.TgZ(185,"td"),e._uU(186,"0"),e.qZA()(),e.TgZ(187,"tr")(188,"td")(189,"code"),e._uU(190,"[scPrecisionMode]"),e.qZA()(),e.TgZ(191,"td"),e._uU(192,"The method for calculating the precision of input value"),e.qZA(),e.TgZ(193,"td")(194,"code"),e._uU(195,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),e.qZA()(),e.TgZ(196,"td")(197,"code"),e._uU(198,"'toFixed'"),e.qZA()()(),e.TgZ(199,"tr")(200,"td")(201,"code"),e._uU(202,"[scSize]"),e.qZA()(),e.TgZ(203,"td"),e._uU(204,"Width of input box"),e.qZA(),e.TgZ(205,"td")(206,"code"),e._uU(207,"'large' | 'small' | 'default'"),e.qZA()(),e.TgZ(208,"td")(209,"code"),e._uU(210,"'default'"),e.qZA()()(),e.TgZ(211,"tr")(212,"td")(213,"code"),e._uU(214,"[scStep]"),e.qZA()(),e.TgZ(215,"td"),e._uU(216,"The number to which the current value is increased or decreased. It can be an integer or decimal."),e.qZA(),e.TgZ(217,"td")(218,"code"),e._uU(219,"number | string"),e.qZA()(),e.TgZ(220,"td")(221,"code"),e._uU(222,"1"),e.qZA()()(),e.TgZ(223,"tr")(224,"td")(225,"code"),e._uU(226,"[scPlaceHolder]"),e.qZA()(),e.TgZ(227,"td"),e._uU(228,"Placeholder of select"),e.qZA(),e.TgZ(229,"td")(230,"code"),e._uU(231,"string"),e.qZA()(),e.TgZ(232,"td"),e._uU(233,"-"),e.qZA()(),e.TgZ(234,"tr")(235,"td")(236,"code"),e._uU(237,"[scId]"),e.qZA()(),e.TgZ(238,"td"),e._uU(239,"input id attribute inside the component"),e.qZA(),e.TgZ(240,"td")(241,"code"),e._uU(242,"string"),e.qZA()(),e.TgZ(243,"td"),e._uU(244,"-"),e.qZA()(),e.TgZ(245,"tr")(246,"td")(247,"code"),e._uU(248,"[scBankRounding]"),e.qZA()(),e.TgZ(249,"td"),e._uU(250,"If true Bank Rounding mode enforced, overrides scPrecisionMode"),e.qZA(),e.TgZ(251,"td")(252,"code"),e._uU(253,"boolean"),e.qZA()(),e.TgZ(254,"td")(255,"code"),e._uU(256,"false"),e.qZA()()(),e.TgZ(257,"tr")(258,"td")(259,"code"),e._uU(260,"(scOnChange)"),e.qZA()(),e.TgZ(261,"td"),e._uU(262,"Emitted when input value changes"),e.qZA(),e.TgZ(263,"td")(264,"code"),e._uU(265,"EventEmitter<number|string>"),e.qZA()(),e.TgZ(266,"td"),e._uU(267,"-"),e.qZA()(),e.TgZ(268,"tr")(269,"td")(270,"code"),e._uU(271,"(scOnFocus)"),e.qZA()(),e.TgZ(272,"td"),e._uU(273,"Emitted when input gets focus"),e.qZA(),e.TgZ(274,"td")(275,"code"),e._uU(276,"EventEmitter<number|string>"),e.qZA()(),e.TgZ(277,"td"),e._uU(278,"-"),e.qZA()(),e.TgZ(279,"tr")(280,"td")(281,"code"),e._uU(282,"(scOnBlur)"),e.qZA()(),e.TgZ(283,"td"),e._uU(284,"Emitted when input blurs"),e.qZA(),e.TgZ(285,"td")(286,"code"),e._uU(287,"EventEmitter<number|string>"),e.qZA()(),e.TgZ(288,"td"),e._uU(289,"-"),e.qZA()()()(),e.TgZ(290,"h4",31)(291,"span"),e._uU(292,"Methods"),e.qZA(),e.TgZ(293,"a",32),e._uU(294,"#"),e.qZA()(),e.TgZ(295,"p"),e._uU(296,"You can get instance by "),e.TgZ(297,"code"),e._uU(298,"ViewChild"),e.qZA()(),e.TgZ(299,"table")(300,"thead")(301,"tr")(302,"th"),e._uU(303,"Name"),e.qZA(),e.TgZ(304,"th"),e._uU(305,"Description"),e.qZA()()(),e.TgZ(306,"tbody")(307,"tr")(308,"td"),e._uU(309,"focus()"),e.qZA(),e.TgZ(310,"td"),e._uU(311,"get focus"),e.qZA()(),e.TgZ(312,"tr")(313,"td"),e._uU(314,"blur()"),e.qZA(),e.TgZ(315,"td"),e._uU(316,"remove focus"),e.qZA()()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(27),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),e.xp6(11),e.Q6J("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),e.xp6(11),e.Q6J("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),e.xp6(8),e.Q6J("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},dependencies:[p.G,s.IT,s.Fp,T.$,c.t3,c.SK,f.Ls,z.xH,z.xw,N.w,A,C,M,U,q],encapsulation:2}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z.G,h,g.Bz.forChild([{path:"en",component:D},{path:"zh",component:b}])]}),o})()}}]);