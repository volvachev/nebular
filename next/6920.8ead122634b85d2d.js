"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6920],{66920:(g,u,t)=>{t.r(u),t.d(u,{ScrollModule:()=>W});var m=t(6512),S=t(85082),d=t(24301),o=t(83668),h=t(69627),p=t(39468),a=t(90761),i=t(60634),e=(()=>{return(l=e||(e={})).WINDOW="window",l.LAYOUT="layout",e;var l})();const f=[{path:"scroll-window.component",component:(()=>{class l{constructor(n,c){this.scroll=n,this.ruler=c,this.mode=e.WINDOW,this.text="Hello World! ".repeat(10240),this.scroll.onScroll().subscribe(r=>console.info("Scroll",r))}changeMode(){this.mode=this.mode===e.WINDOW?e.LAYOUT:e.WINDOW}scrollTo(n,c){this.scroll.scrollTo(n,c),this.ruler.getDimensions().subscribe(r=>console.info("Content Dimensions",r)),this.scroll.getPosition().subscribe(r=>console.info("Scroll Position",r))}}return l.\u0275fac=function(n){return new(n||l)(o.Y36(h.H),o.Y36(p.m))},l.\u0275cmp=o.Xpm({type:l,selectors:[["nb-scroll-window"]],decls:13,vars:3,consts:[[3,"withScroll"],["nbButton","","size","tiny",3,"click"]],template:function(n,c){1&n&&(o.TgZ(0,"nb-layout",0),o.TgZ(1,"nb-layout-column"),o.TgZ(2,"nb-card"),o.TgZ(3,"nb-card-header"),o.TgZ(4,"button",1),o.NdJ("click",function(){return c.changeMode()}),o._uU(5,"Change Mode"),o.qZA(),o._uU(6),o.TgZ(7,"button",1),o.NdJ("click",function(){return c.scrollTo(10,20)}),o._uU(8,"Scroll to 10, 20"),o.qZA(),o.TgZ(9,"button",1),o.NdJ("click",function(){return c.scrollTo(0,0)}),o._uU(10,"Scroll to 0, 0"),o.qZA(),o.qZA(),o.TgZ(11,"nb-card-body"),o._uU(12),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.Q6J("withScroll","layout"===c.mode),o.xp6(6),o.hij(" Current: ",c.mode," "),o.xp6(6),o.Oqu(c.text))},directives:[a.Aq,a.dP,i.As,i.nd,i.yK],encapsulation:2}),l})()}];let T=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),l})(),W=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[m.B,S.z,T]]}),l})()}}]);