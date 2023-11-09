"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[5811],{7081:(_,w,l)=>{l.d(w,{F:()=>d});const d=[l(2377).t]},5811:(_,w,l)=>{l.r(w),l.d(w,{NzDemoWorkflowArrowModule:()=>N});var a=l(1862),d=l(4515),u=l(7081),f=l(1380),o=l(4537);let O=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["nz-demo-workflow-arrow"]],viewQuery:function(n,r){if(1&n&&o.Gf(f.G,5),2&n){let i;o.iGM(i=o.CRH())&&(r.codeBoxes=i)}},decls:0,vars:0,template:function(n,r){},encapsulation:2}),t})();var g=l(6597),M=l(2189),s=l(1749),P=l(2733),p=l(5321),v=l(2550),c=l(6175),m=l(8692),h=l(8164);function z(t,e){1&t&&(o.TgZ(0,"span",14),o._uU(1,"|"),o.qZA())}function Z(t,e){if(1&t&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&t){const n=o.oxw().$implicit;o.xp6(1),o.Oqu(n.tooltip)}}const x=function(t,e){return[t,e]},A=function(){return{}},T=function(){return{display:"none"}};function b(t,e){if(1&t){const n=o.EpF();o.TgZ(0,"div",3)(1,"div",4),o.NdJ("click",function(){const k=o.CHM(n).$implicit,D=o.oxw(2);return o.KtG(D.onClick(k))}),o.TgZ(2,"div",5),o._UZ(3,"div",6),o.TgZ(4,"div",7)(5,"div",8),o._uU(6),o.qZA(),o.TgZ(7,"div",9)(8,"span",10)(9,"span"),o._uU(10),o.qZA()(),o.YNc(11,z,2,0,"span",11),o.TgZ(12,"span",12),o._uU(13),o.qZA()()()()(),o.YNc(14,Z,2,1,"ng-template",null,13,o.W1O),o.qZA()}if(2&t){const n=e.$implicit,r=o.MAs(15),i=o.oxw(2);o.Q6J("nzSpan",i.getColSpan()),o.xp6(1),o.Q6J("ngClass",o.WLB(10,x,n.cssClass,n.isSelected?"selected":"unselected"))("nzTooltipOverlayStyle",null!=n&&null!=n.tooltip&&n.tooltip.length?o.DdM(13,A):o.DdM(14,T))("nzTooltipTitle",r)("nzTooltipOverlayClassName","workflow-tooltip"),o.xp6(2),o.Q6J("ngClass",n.tokenColorName),o.xp6(3),o.Oqu(n.name),o.xp6(4),o.hij("",n.details," "),o.xp6(1),o.Q6J("ngIf",null==n||null==n.value?null:n.value.length),o.xp6(2),o.Oqu(n.value)}}function W(t,e){if(1&t&&(o.TgZ(0,"div",1),o.YNc(1,b,16,15,"div",2),o.qZA()),2&t){const n=o.oxw();o.Q6J("nzGutter",32),o.xp6(1),o.Q6J("ngForOf",n.scWorkflowItemList.items)}}let C=(()=>{class t{constructor(n){this.cdRef=n,this.scWorkflowItemClicked=new o.vpe,this.maxGridSections=24}ngOnChanges(n){n.scWorkflowItemList.currentValue!==n.scWorkflowItemList.previousValue&&this.cdRef.markForCheck()}getColSpan(){var n,r;return null!==(r=null===(n=this.scWorkflowItemList)||void 0===n?void 0:n.items)&&void 0!==r&&r.length?this.maxGridSections/this.scWorkflowItemList.items.length:this.maxGridSections}onClick(n){this.setAllWorkflowIsSelected(!1),n.isSelected=!0,this.selectedWorkflowItemId=n.id,this.scWorkflowItemClicked.emit(n.id),this.cdRef.markForCheck()}setAllWorkflowIsSelected(n){null!=this.scWorkflowItemList.items&&(this.scWorkflowItemList.items.forEach(r=>{r.isSelected=n}),this.cdRef.markForCheck())}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.sBO))},t.\u0275cmp=o.Xpm({type:t,selectors:[["sc-workflow-arrow"]],inputs:{scWorkflowItemList:"scWorkflowItemList"},outputs:{scWorkflowItemClicked:"scWorkflowItemClicked"},features:[o.TTD],decls:1,vars:1,consts:[["nz-row","","class","workflow-item-list",3,"nzGutter",4,"ngIf"],["nz-row","",1,"workflow-item-list",3,"nzGutter"],["nz-col","","nzFlex","1","class","workflow-item-container",3,"nzSpan",4,"ngFor","ngForOf"],["nz-col","","nzFlex","1",1,"workflow-item-container",3,"nzSpan"],["nz-tooltip","",1,"workflow-item","tooltip",3,"ngClass","nzTooltipOverlayStyle","nzTooltipTitle","nzTooltipOverlayClassName","click"],[1,"workflow-content-container"],[1,"workflow-color",3,"ngClass"],[1,"workflow-content"],[1,"workflow-name"],[1,"workflow-details"],[1,"details"],["class","separator",4,"ngIf"],[1,"value"],["tooltipTemplate",""],[1,"separator"]],template:function(n,r){1&n&&o.YNc(0,W,2,2,"div",0),2&n&&o.Q6J("ngIf",null==r.scWorkflowItemList?null:r.scWorkflowItemList.items)},dependencies:[m.mk,m.sg,m.O5,s.t3,s.SK,h.SY],styles:['[_nghost-%COMP%]{width:100%}  .ant-tooltip-inner{text-align:center;padding:4px 8px;font-size:12px;max-width:125px}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]{z-index:1;min-width:0}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-0[_ngcontent-%COMP%]{background-color:#fff}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-10[_ngcontent-%COMP%]{background-color:#f9f9fb}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-20[_ngcontent-%COMP%]{background-color:#f0f1f5}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-30[_ngcontent-%COMP%]{background-color:#dce0e8}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-40[_ngcontent-%COMP%]{background-color:#cacfdb}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-50[_ngcontent-%COMP%]{background-color:#8893a7}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-60[_ngcontent-%COMP%]{background-color:#666e7d}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-70[_ngcontent-%COMP%]{background-color:#424957}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-80[_ngcontent-%COMP%]{background-color:#222b3d}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-grey-100[_ngcontent-%COMP%]{background-color:#000}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-blue-0[_ngcontent-%COMP%]{background-color:#f2fbff}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-blue-5[_ngcontent-%COMP%]{background-color:#d9f1fc}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-blue-60[_ngcontent-%COMP%]{background-color:#1971c2}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-blue-70[_ngcontent-%COMP%]{background-color:#0d53b0}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-blue-80[_ngcontent-%COMP%]{background-color:#06379a}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-blue-90[_ngcontent-%COMP%]{background-color:#021f80}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-cyan-40[_ngcontent-%COMP%]{background-color:#0798ed}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-teal-60[_ngcontent-%COMP%]{background-color:#1e8476}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-mint-0[_ngcontent-%COMP%]{background-color:#f2fff7}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-mint-40[_ngcontent-%COMP%]{background-color:#37ad67}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-mint-60[_ngcontent-%COMP%]{background-color:#138549}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-mint-70[_ngcontent-%COMP%]{background-color:#09703f}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-green-50[_ngcontent-%COMP%]{background-color:#3b9c22}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-yellow-30[_ngcontent-%COMP%]{background-color:#f4ed61}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-amber-40[_ngcontent-%COMP%]{background-color:#eca83e}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-orange-60[_ngcontent-%COMP%]{background-color:#cc430e}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-red-0[_ngcontent-%COMP%]{background-color:#fff3f2}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-red-70[_ngcontent-%COMP%]{background-color:#c62222}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-red-80[_ngcontent-%COMP%]{background-color:#a91717}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-pink-60[_ngcontent-%COMP%]{background-color:#dc4175}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-magenta-50[_ngcontent-%COMP%]{background-color:#cc2e63}div.workflow-item-list[_ngcontent-%COMP%]   .workflow-item-container[_ngcontent-%COMP%]   .workflow-color.color-purple-60[_ngcontent-%COMP%]{background-color:#7755d4}div.workflow-item-list[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .workflow-color[_ngcontent-%COMP%]{background-color:#1971c2}div.workflow-item-list[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   .workflow-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{color:#1971c2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}div.workflow-item-list[_ngcontent-%COMP%]   .unselected[_ngcontent-%COMP%]   .workflow-color[_ngcontent-%COMP%]{background-color:#dce0e8}div.workflow-item-list[_ngcontent-%COMP%]   .unselected[_ngcontent-%COMP%]   .workflow-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{color:#666e7d;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]{height:60px;padding:11px;border-radius:8px;position:relative;cursor:pointer;background-color:#fff}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item.unselected[_ngcontent-%COMP%], div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item.unselected[_ngcontent-%COMP%]:after, div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item.unselected[_ngcontent-%COMP%]:before{background-color:#fbfbfc}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]:before, div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]:after{content:"";position:absolute;top:18px;width:24px;height:24px;transform:scaleY(1.8) rotate(-45deg);background-color:inherit;right:-8px;border-radius:4px}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]:before{z-index:1}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]:after{z-index:-1}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]{display:flex;height:100%;z-index:2;position:relative}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]   .workflow-color[_ngcontent-%COMP%]{border-radius:8px;width:4px;margin-right:12px}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]   .workflow-content[_ngcontent-%COMP%]{overflow:hidden}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]   .workflow-content[_ngcontent-%COMP%]   .workflow-name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]   .workflow-content[_ngcontent-%COMP%]   .workflow-details[_ngcontent-%COMP%]{display:flex;font-size:12px;font-weight:500}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]   .workflow-content[_ngcontent-%COMP%]   .workflow-details[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{margin:0 8px;color:#dce0e8}div.workflow-item-list[_ngcontent-%COMP%]   div.workflow-item[_ngcontent-%COMP%]   .workflow-content-container[_ngcontent-%COMP%]   .workflow-content[_ngcontent-%COMP%]   .workflow-details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#222b3d;font-weight:400}div.workflow-item-list[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%], div.workflow-item-list[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]:after{box-shadow:0 8px 12px #222b3d26}div.workflow-item-list[_ngcontent-%COMP%]   .unselected[_ngcontent-%COMP%], div.workflow-item-list[_ngcontent-%COMP%]   .unselected[_ngcontent-%COMP%]:after{box-shadow:0 2px 4px #222b3d1a}'],changeDetection:0}),t})(),I=(()=>{class t{constructor(){}ngOnInit(){this.workflowItemList={items:[{id:1,name:"New",details:"2 opportunities",value:"$5000",tokenColorName:"color-blue-60",isSelected:!0,tooltip:"View opportunities in this stage",cssClass:"r-new"},{id:2,name:"In Progress",details:"5 opportunities",value:"$8000",tokenColorName:"color-cyan-40",isSelected:!0,tooltip:"View opportunities in this stage",cssClass:"r-inprogress"},{id:3,name:"Closing Soon",details:"2 opportunities",value:"$5000",tokenColorName:"color-teal-60",isSelected:!0,tooltip:"View opportunities in this stage",cssClass:"r-closing"},{id:4,name:"Closed Lost",details:"4 opportunities",value:"$8000",tokenColorName:"color-amber-40",isSelected:!0,tooltip:"View opportunities in this stage",cssClass:"r-closed"},{id:4,name:"Closed Lost",details:"4 opportunities",value:"$8000",tokenColorName:"color-orange-60",isSelected:!0,tooltip:"View opportunities in this stage",cssClass:"r-closed-lost"},{id:5,name:"Converted",details:"3 opportunities",value:"$3000",tokenColorName:"color-purple-60",isSelected:!0,tooltip:"View opportunities in this stage",cssClass:"r-converted"}]}}reset(){this.workflowItemList.items.forEach(n=>n.isSelected=!0),this.workflowItemList=Object.assign({},this.workflowItemList)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["nz-demo-workflow-arrow-basic"]],decls:1,vars:1,consts:[[3,"scWorkflowItemList"]],template:function(n,r){1&n&&o._UZ(0,"sc-workflow-arrow",0),2&n&&o.Q6J("scWorkflowItemList",r.workflowItemList)},dependencies:[C],encapsulation:2,changeDetection:0}),t})(),U=(()=>{class t{constructor(){}ngOnInit(){this.workflowItemList={items:[{id:1,name:"Booked",details:"6 New Contractors",value:"",tokenColorName:"",isSelected:!0,tooltip:"",cssClass:"r-booked"},{id:2,name:"Working",details:"77 Active Contractors",value:"",tokenColorName:"",isSelected:!1,tooltip:"",cssClass:"r-working"},{id:3,name:"Finishing",details:"12 Contractors",value:"",tokenColorName:"",isSelected:!1,tooltip:"",cssClass:"r-finishing"},{id:4,name:"Closed",details:"12 Contractors",value:"",tokenColorName:"",isSelected:!1,tooltip:"",cssClass:"r-closed"}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["nz-demo-workflow-arrow-temp-desk"]],decls:1,vars:1,consts:[[3,"scWorkflowItemList"]],template:function(n,r){1&n&&o._UZ(0,"sc-workflow-arrow",0),2&n&&o.Q6J("scWorkflowItemList",r.workflowItemList)},dependencies:[C],encapsulation:2,changeDetection:0}),t})(),y=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["nz-demo-workflow-arrow"]],viewQuery:function(n,r){if(1&n&&o.Gf(f.G,5),2&n){let i;o.iGM(i=o.CRH())&&(r.codeBoxes=i)}},decls:102,vars:12,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-workflow-arrow-demo-basic","nzTitle","Basic"],["nzHref","#components-workflow-arrow-demo-temp-desk","nzTitle","Temp Desk"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//workflow-arrow/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-workflow-arrow-basic","nzGenerateCommand","ng g ng-zorro-antd:workflow-arrow-basic <name>","nzComponentName","NzDemoWorkflowArrowBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Temp Desk","nzSelector","nz-demo-workflow-arrow-temp-desk","nzGenerateCommand","ng g ng-zorro-antd:workflow-arrow-temp-desk <name>","nzComponentName","NzDemoWorkflowArrowTempDeskComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[sc-workflow-arrow]"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[sc-workflow-arrow]'",1,"anchor"]],template:function(n,r){1&n&&(o.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),o.NdJ("nzClick",function(k){return r.goLink(k)}),o._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4),o.qZA()(),o.TgZ(6,"section",5)(7,"h1"),o._uU(8,"Workflow arrow"),o._UZ(9,"span",6)(10,"span",7),o.TgZ(11,"a",8),o._UZ(12,"i",9),o.qZA()(),o.TgZ(13,"section",5),o.IAx(),o.TgZ(14,"p"),o._uU(15,"This component is used to create a workflow menu."),o.qZA(),o.TgZ(16,"h2",10)(17,"span"),o._uU(18,"When To Use"),o.qZA(),o.TgZ(19,"a",11),o._uU(20,"#"),o.qZA()(),o.TgZ(21,"p"),o._uU(22,"To represent the differents steps of a workflow, and display some information associated to it.\nUser can click on each workflow item to eventually trigger some actions."),o.qZA(),o.TgZ(23,"pre",12)(24,"code")(25,"span",13),o._uU(26,"import"),o.qZA(),o._uU(27," "),o.TgZ(28,"span",14),o._uU(29,"{"),o.qZA(),o._uU(30," ScalesLibraryModule "),o.TgZ(31,"span",14),o._uU(32,"}"),o.qZA(),o._uU(33," "),o.TgZ(34,"span",13),o._uU(35,"from"),o.qZA(),o._uU(36," "),o.TgZ(37,"span",15),o._uU(38,"'scales-library'"),o.qZA(),o.TgZ(39,"span",14),o._uU(40,";"),o.qZA()()(),o.fQ9(),o.qZA()(),o.TgZ(41,"nz-tabset",16)(42,"nz-tab",17)(43,"div",18)(44,"div",19)(45,"nz-code-box",20),o._UZ(46,"nz-demo-workflow-arrow-basic",21),o.TgZ(47,"div",22),o.IAx(),o.TgZ(48,"p"),o._uU(49,"Basic usage of workflow arrow component."),o.qZA(),o.fQ9(),o.qZA()(),o.TgZ(50,"nz-code-box",23),o._UZ(51,"nz-demo-workflow-arrow-temp-desk",21),o.TgZ(52,"div",22),o.IAx(),o.TgZ(53,"p"),o._uU(54,"Temp Desk usage of the workflow arrow component."),o.qZA(),o.fQ9(),o.qZA()()()()()(),o.TgZ(55,"section",24),o.IAx(),o.TgZ(56,"h2",25)(57,"span"),o._uU(58,"API"),o.qZA(),o.TgZ(59,"a",26),o._uU(60,"#"),o.qZA()(),o.TgZ(61,"h3",27)(62,"span"),o._uU(63,"[sc-workflow-arrow]"),o.qZA(),o.TgZ(64,"label",28),o._uU(65,"directive"),o.qZA(),o.TgZ(66,"a",29),o._uU(67,"#"),o.qZA()(),o.TgZ(68,"table")(69,"thead")(70,"tr")(71,"th"),o._uU(72,"Param"),o.qZA(),o.TgZ(73,"th"),o._uU(74,"Description"),o.qZA(),o.TgZ(75,"th"),o._uU(76,"Type"),o.qZA(),o.TgZ(77,"th"),o._uU(78,"Default"),o.qZA()()(),o.TgZ(79,"tbody")(80,"tr")(81,"td")(82,"code"),o._uU(83,"[scWorkflowItemList]"),o.qZA()(),o.TgZ(84,"td"),o._uU(85,"The list of workflow item to display."),o.qZA(),o.TgZ(86,"td")(87,"code"),o._uU(88,"WorkflowList"),o.qZA()(),o.TgZ(89,"td"),o._uU(90,"-"),o.qZA()(),o.TgZ(91,"tr")(92,"td")(93,"code"),o._uU(94,"(scWorkflowItemClicked)"),o.qZA()(),o.TgZ(95,"td"),o._uU(96,"Event emitted when the user clicks on a workflow item"),o.qZA(),o.TgZ(97,"td")(98,"code"),o._uU(99,"EventEmitter"),o.qZA()(),o.TgZ(100,"td"),o._uU(101,"-"),o.qZA()()()(),o.fQ9(),o.qZA()()),2&n&&(o.xp6(1),o.Q6J("nzOffsetTop",16),o.xp6(1),o.Q6J("nzAffix",!1),o.xp6(41),o.Q6J("nzGutter",8),o.xp6(1),o.Q6J("nzSpan",24),o.xp6(1),o.Q6J("nzId","components-workflow-arrow-demo-basic")("nzLink","components-workflow-arrow-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/workflow-arrow/demo/basic.md"),o.xp6(5),o.Q6J("nzId","components-workflow-arrow-demo-temp-desk")("nzLink","components-workflow-arrow-demo-temp-desk")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/workflow-arrow/demo/temp-desk.md"))},dependencies:[f.G,g.IT,g.Fp,M.$,s.t3,s.SK,P.Ls,p.xH,p.xw,v.w,c.Uo,c._C,c.Om,c.p0,c.$Z,I,U],encapsulation:2}),t})(),N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.G,u.F,a.Bz.forChild([{path:"en",component:y},{path:"zh",component:O}])]}),t})()}}]);