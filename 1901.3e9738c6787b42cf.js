"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[1901],{1901:(Z,s,t)=>{t.r(s),t.d(s,{NzDemoFileUploadedModule:()=>w});var p=t(1862),r=t(4515),U=t(7081),m=t(1380),e=t(4537);let C=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-file-uploaded"]],viewQuery:function(n,l){if(1&n&&e.Gf(m.G,5),2&n){let d;e.iGM(d=e.CRH())&&(l.codeBoxes=d)}},decls:0,vars:0,template:function(n,l){},encapsulation:2}),o})();var f=t(6597),T=t(2189),u=t(1749),h=t(2733),g=t(5321),z=t(2550),a=t(6175),F=t(8692),_=t(8164);function x(o,i){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"div",2)(2,"div",3),e._UZ(3,"i",4),e.qZA(),e.TgZ(4,"div",5)(5,"a",6),e._uU(6),e.qZA()(),e.TgZ(7,"div",3)(8,"i",7),e.NdJ("click",function(){const c=e.CHM(n).$implicit,b=e.oxw();return e.KtG(b.delete(c.fileID))}),e.qZA()()()()}if(2&o){const n=i.$implicit;e.xp6(5),e.Q6J("href",n.downloadURI,e.LSH)("download",n.downloadURI),e.xp6(1),e.hij("",n.name," ")}}let A=(()=>{class o{constructor(){this.scDeleteFileClicked=new e.vpe}delete(n){this.scUploadedFiles.forEach((l,d)=>{l.fileID===n&&this.scUploadedFiles.splice(d,1)}),this.scDeleteFileClicked.emit(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["sc-file-uploaded"]],inputs:{scUploadedFiles:"scUploadedFiles"},outputs:{scDeleteFileClicked:"scDeleteFileClicked"},decls:2,vars:1,consts:[[1,"file-uploaded"],[4,"ngFor","ngForOf"],[1,"file"],[1,"icon-container"],["nz-icon","","nzType","paper-clip","nzTheme","outline",1,"file-icon"],[1,"filename-container"],["nz-tooltip","","nzTooltipTitle","Download file",3,"href","download"],["nz-icon","","nzType","close","nz-tooltip","","nzTooltipTitle","Delete file",1,"remove-file","clickable","clickable-link",3,"click"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0),e.YNc(1,x,9,3,"div",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",l.scUploadedFiles))},dependencies:[F.sg,z.w,h.Ls,_.SY],styles:[".file-uploaded[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#f2fbff}.file-uploaded[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]{display:flex;align-items:center;padding:12px;height:32px;margin-top:4px}.file-uploaded[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .file-icon[_ngcontent-%COMP%]{color:#8893a7;width:16px;height:16px}.file-uploaded[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .remove-file[_ngcontent-%COMP%]{width:16px;cursor:pointer}.file-uploaded[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .filename-container[_ngcontent-%COMP%]{width:100%;margin-left:8px;margin-right:16px;font-weight:500}"],changeDetection:0}),o})(),D=(()=>{class o{constructor(){this.demoFiles=[{fileID:"ID 1",name:"Attachment 1",downloadURI:"https://images.theconversation.com/files/350851/original/file-20200803-22-dfm95n.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5760%2C3837&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"},{fileID:"ID 2",name:"Attachment 2 bad link",downloadURI:"abc"},{fileID:"ID 3",name:"Bongos",downloadURI:"https://images.theconversation.com/files/350851/original/file-20200803-22-dfm95n.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5760%2C3837&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"}]}deleteUploadedFile(n){console.log("DELETE WAS SELECTED ON",n)}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-file-uploaded-basic"]],decls:1,vars:1,consts:[[3,"scUploadedFiles","scDeleteFileClicked"]],template:function(n,l){1&n&&(e.TgZ(0,"sc-file-uploaded",0),e.NdJ("scDeleteFileClicked",function(c){return l.deleteUploadedFile(c)}),e.qZA()),2&n&&e.Q6J("scUploadedFiles",l.demoFiles)},dependencies:[A],encapsulation:2,changeDetection:0}),o})(),v=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-file-uploaded"]],viewQuery:function(n,l){if(1&n&&e.Gf(m.G,5),2&n){let d;e.iGM(d=e.CRH())&&(l.codeBoxes=d)}},decls:95,vars:8,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-file-uploaded-demo-basic","nzTitle","File upload"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//file-uploaded/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","File upload","nzSelector","nz-demo-file-uploaded-basic","nzGenerateCommand","ng g ng-zorro-antd:file-uploaded-basic <name>","nzComponentName","NzDemoFileUploadedBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[sc-file-uploaded]"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[sc-file-uploaded]'",1,"anchor"]],template:function(n,l){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(c){return l.goLink(c)}),e._UZ(3,"nz-link",2)(4,"nz-link",3),e.qZA()(),e.TgZ(5,"section",4)(6,"h1"),e._uU(7,"File Uploaded"),e._UZ(8,"span",5)(9,"span",6),e.TgZ(10,"a",7),e._UZ(11,"i",8),e.qZA()(),e.TgZ(12,"section",4),e.IAx(),e.TgZ(13,"p"),e._uU(14,"This component is used to display a set of uploaded files."),e.qZA(),e.TgZ(15,"h2",9)(16,"span"),e._uU(17,"When To Use"),e.qZA(),e.TgZ(18,"a",10),e._uU(19,"#"),e.qZA()(),e.TgZ(20,"p"),e._uU(21,"When you want to display a set of files."),e.qZA(),e.TgZ(22,"pre",11)(23,"code")(24,"span",12),e._uU(25,"import"),e.qZA(),e._uU(26," "),e.TgZ(27,"span",13),e._uU(28,"{"),e.qZA(),e._uU(29," ScalesLibraryModule "),e.TgZ(30,"span",13),e._uU(31,"}"),e.qZA(),e._uU(32," "),e.TgZ(33,"span",12),e._uU(34,"from"),e.qZA(),e._uU(35," "),e.TgZ(36,"span",14),e._uU(37,"'scales-library'"),e.qZA(),e.TgZ(38,"span",13),e._uU(39,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(40,"nz-tabset",15)(41,"nz-tab",16)(42,"div",17)(43,"div",18)(44,"nz-code-box",19),e._UZ(45,"nz-demo-file-uploaded-basic",20),e.TgZ(46,"div",21),e.IAx(),e.TgZ(47,"p")(48,"code"),e._uU(49,"A sample of using file uploaded compomnent."),e.qZA()(),e.fQ9(),e.qZA()()()()()(),e.TgZ(50,"section",22),e.IAx(),e.TgZ(51,"h2",23)(52,"span"),e._uU(53,"API"),e.qZA(),e.TgZ(54,"a",24),e._uU(55,"#"),e.qZA()(),e.TgZ(56,"h3",25)(57,"span"),e._uU(58,"[sc-file-uploaded]"),e.qZA(),e.TgZ(59,"label",26),e._uU(60,"directive"),e.qZA(),e.TgZ(61,"a",27),e._uU(62,"#"),e.qZA()(),e.TgZ(63,"table")(64,"thead")(65,"tr")(66,"th"),e._uU(67,"Param"),e.qZA(),e.TgZ(68,"th"),e._uU(69,"Description"),e.qZA(),e.TgZ(70,"th"),e._uU(71,"Type"),e.qZA(),e.TgZ(72,"th"),e._uU(73,"Default"),e.qZA()()(),e.TgZ(74,"tbody")(75,"tr")(76,"td")(77,"code"),e._uU(78,"[scUploadedFiles]"),e.qZA()(),e.TgZ(79,"td"),e._uU(80,"The files which will be displayed"),e.qZA(),e.TgZ(81,"td")(82,"code"),e._uU(83,"UploadedFile[]"),e.qZA()(),e._UZ(84,"td"),e.qZA(),e.TgZ(85,"tr")(86,"td")(87,"code"),e._uU(88,"(scDeleteFileClicked)"),e.qZA()(),e.TgZ(89,"td"),e._uU(90,"When the X icon is clicked, this event will be fired with the fileID of the UploadedFile"),e.qZA(),e.TgZ(91,"td")(92,"code"),e._uU(93,"EventEmitter<string>"),e.qZA()(),e._UZ(94,"td"),e.qZA()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(40),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-file-uploaded-demo-basic")("nzLink","components-file-uploaded-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/file-uploaded/demo/basic.md"))},dependencies:[m.G,f.IT,f.Fp,T.$,u.t3,u.SK,h.Ls,g.xH,g.xw,z.w,a.Uo,a._C,a.Om,a.p0,a.$Z,D],encapsulation:2}),o})(),w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.G,U.F,p.Bz.forChild([{path:"en",component:v},{path:"zh",component:C}])]}),o})()},7081:(Z,s,t)=>{t.d(s,{F:()=>r});const r=[t(2377).t]}}]);