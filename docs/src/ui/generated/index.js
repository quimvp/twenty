"use strict";function r(r,e,n){if(e in r){Object.defineProperty(r,e,{value:n,enumerable:true,configurable:true,writable:true})}else{r[e]=n}return r}function e(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};var t=Object.keys(a);if(typeof Object.getOwnPropertySymbols==="function"){t=t.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))}t.forEach(function(n){r(e,n,a[n])})}return e}function n(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);if(e){a=a.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})}n.push.apply(n,a)}return n}function a(r,e){e=e!=null?e:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(r,Object.getOwnPropertyDescriptors(e))}else{n(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function t(r,e){if(!e){e=r.slice(0)}return Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}function o(){var r=t(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  height: 20px;\n  justify-content: center;\n  width: 20px;\n"]);o=function e(){return r};return r}function c(){var r=t(["\n  align-items: center;\n  background: ",";\n  border-radius: 50px;\n  color: ",";\n  display: flex;\n  font-size: ",";\n  font-style: normal;\n  font-weight: ",";\n  gap: ",";\n  height: ",";\n  justify-content: flex-end;\n  line-height: ",";\n  margin-left: auto;\n  padding: ",";\n"]);c=function e(){return r};return r}function i(){var r=t(["\n  align-items: center;\n  ","\n\n  border-radius: ",";\n  border-style: solid;\n  border-width: ",";\n  cursor: ",";\n  display: flex;\n  flex-direction: row;\n  font-family: ",";\n  font-weight: 500;\n  gap: ",";\n  height: ",";\n  padding: ",";\n\n  transition: background 0.1s ease;\n\n  white-space: nowrap;\n\n  width: ",";\n\n  &:focus {\n    outline: none;\n  }\n"]);i=function e(){return r};return r}var u=require("@emotion/react");var l=require("hex-rgb");var d=require("@emotion/styled");var g=require("@tabler/icons-react");var s=require("react/jsx-runtime");function y(r){return r&&r.__esModule?r:{default:r}}var p=y(l);var b=y(d);var f={gray100:"#000000",gray90:"#141414",gray85:"#171717",gray80:"#1b1b1b",gray75:"#1d1d1d",gray70:"#222222",gray65:"#292929",gray60:"#333333",gray55:"#4c4c4c",gray50:"#666666",gray45:"#818181",gray40:"#999999",gray35:"#b3b3b3",gray30:"#cccccc",gray25:"#d6d6d6",gray20:"#ebebeb",gray15:"#f1f1f1",gray10:"#fcfcfc",gray0:"#ffffff"},x={yellow:"#ffd338",green:"#55ef3c",turquoise:"#15de8f",sky:"#00e0ff",blue:"#1961ed",purple:"#915ffd",pink:"#f54bd0",red:"#f83e3e",orange:"#ff7222",gray:f.gray30},m={yellow80:"#2e2a1a",yellow70:"#453d1e",yellow60:"#746224",yellow50:"#b99b2e",yellow40:"#ffe074",yellow30:"#ffedaf",yellow20:"#fff6d7",yellow10:"#fffbeb",green80:"#1d2d1b",green70:"#23421e",green60:"#2a5822",green50:"#42ae31",green40:"#88f477",green30:"#ccfac5",green20:"#ddfcd8",green10:"#eefdec",turquoise80:"#172b23",turquoise70:"#173f2f",turquoise60:"#166747",turquoise50:"#16a26b",turquoise40:"#5be8b1",turquoise30:"#a1f2d2",turquoise20:"#d0f8e9",turquoise10:"#e8fcf4",sky80:"#152b2e",sky70:"#123f45",sky60:"#0e6874",sky50:"#07a4b9",sky40:"#4de9ff",sky30:"#99f3ff",sky20:"#ccf9ff",sky10:"#e5fcff",blue80:"#171e2c",blue70:"#172642",blue60:"#18356d",blue50:"#184bad",blue40:"#5e90f2",blue30:"#a3c0f8",blue20:"#d1dffb",blue10:"#e8effd",purple80:"#231e2e",purple70:"#2f2545",purple60:"#483473",purple50:"#6c49b8",purple40:"#b28ffe",purple30:"#d3bffe",purple20:"#e9dfff",purple10:"#f4efff",pink80:"#2d1c29",pink70:"#43213c",pink60:"#702c61",pink50:"#b23b98",pink40:"#f881de",pink30:"#fbb7ec",pink20:"#fddbf6",pink10:"#feedfa",red80:"#2d1b1b",red70:"#441f1f",red60:"#712727",red50:"#b43232",red40:"#fa7878",red30:"#fcb2b2",red20:"#fed8d8",red10:"#feecec",orange80:"#2e2018",orange70:"#452919",orange60:"#743b1b",orange50:"#b9571f",orange40:"#ff9c64",orange30:"#ffc7a7",orange20:"#ffe3d3",orange10:"#fff1e9",gray80:f.gray70,gray70:f.gray65,gray60:f.gray55,gray50:f.gray40,gray40:f.gray25,gray30:f.gray20,gray20:f.gray15,gray10:f.gray10,blueAccent90:"#141a25",blueAccent85:"#151d2e",blueAccent80:"#152037",blueAccent75:"#16233f",blueAccent70:"#17294a",blueAccent60:"#18356d",blueAccent40:"#a3c0f8",blueAccent35:"#c8d9fb",blueAccent25:"#dae6fc",blueAccent20:"#e2ecfd",blueAccent15:"#edf2fe",blueAccent10:"#f5f9fd"},h=e({},x,m),k=function(r,e){return"rgba(".concat(p.default(r,{format:"array"}).slice(0,-1).join(","),",").concat(e,")")};var v={primary:h.blueAccent25,secondary:h.blueAccent20,tertiary:h.blueAccent15,quaternary:h.blueAccent10,accent3570:h.blueAccent35,accent4060:h.blueAccent40},w={primary:h.blueAccent75,secondary:h.blueAccent80,tertiary:h.blueAccent85,quaternary:h.blueAccent90,accent3570:h.blueAccent70,accent4060:h.blueAccent60};var j={duration:{instant:.075,fast:.15,normal:.3}};var O="./dark-noise-JHVNKF2E.jpg";var q="./light-noise-JRI6I6YG.png";var A={noisy:"url(".concat(q.toString(),");"),primary:f.gray0,secondary:f.gray10,tertiary:f.gray15,quaternary:f.gray20,danger:h.red10,transparent:{primary:k(f.gray0,.8),secondary:k(f.gray10,.8),strong:k(f.gray100,.16),medium:k(f.gray100,.08),light:k(f.gray100,.04),lighter:k(f.gray100,.02),danger:k(h.red,.08)},overlay:k(f.gray80,.8),radialGradient:"radial-gradient(50% 62.62% at 50% 0%, #505050 0%, ".concat(f.gray60," 100%)"),radialGradientHover:"radial-gradient(76.32% 95.59% at 50% 0%, #505050 0%, ".concat(f.gray60," 100%)")},S={noisy:"url(".concat(O.toString(),");"),primary:f.gray85,secondary:f.gray80,tertiary:f.gray75,quaternary:f.gray70,danger:h.red80,transparent:{primary:k(f.gray85,.8),secondary:k(f.gray80,.8),strong:k(f.gray0,.14),medium:k(f.gray0,.1),light:k(f.gray0,.06),lighter:k(f.gray0,.03),danger:k(h.red,.08)},overlay:k(f.gray80,.8),radialGradient:"radial-gradient(50% 62.62% at 50% 0%, #505050 0%, ".concat(f.gray60," 100%)"),radialGradientHover:"radial-gradient(76.32% 95.59% at 50% 0%, #505050 0%, ".concat(f.gray60," 100%)")};var z={light:"blur(6px)",strong:"blur(20px)"};var P={radius:{xs:"2px",sm:"4px",md:"8px",rounded:"100%"}},D=e({color:{strong:f.gray25,medium:f.gray20,light:f.gray15,secondaryInverted:f.gray50,inverted:f.gray60,danger:h.red20}},P),I=e({color:{strong:f.gray55,medium:f.gray65,light:f.gray70,secondaryInverted:f.gray35,inverted:f.gray20,danger:h.red70}},P);var L={extraLight:"0px 1px 0px 0px ".concat(k(f.gray100,.04)),light:"0px 2px 4px 0px ".concat(k(f.gray100,.04),", 0px 0px 4px 0px ").concat(k(f.gray100,.08)),strong:"2px 4px 16px 0px ".concat(k(f.gray100,.12),", 0px 2px 4px 0px ").concat(k(f.gray100,.04))},B={extraLight:"0px 1px 0px 0px ".concat(k(f.gray100,.04)),light:"0px 2px 4px 0px ".concat(k(f.gray100,.04),", 0px 0px 4px 0px ").concat(k(f.gray100,.08)),strong:"2px 4px 16px 0px ".concat(k(f.gray100,.16),", 0px 2px 4px 0px ").concat(k(f.gray100,.08))};var T={size:{xxs:"0.625rem",xs:"0.85rem",sm:"0.92rem",md:"1rem",lg:"1.23rem",xl:"1.54rem",xxl:"1.85rem"},weight:{regular:400,medium:500,semiBold:600},family:"Inter, sans-serif"},C=e({color:{primary:f.gray60,secondary:f.gray50,tertiary:f.gray40,light:f.gray35,extraLight:f.gray30,inverted:f.gray0,danger:h.red}},T),E=e({color:{primary:f.gray20,secondary:f.gray35,tertiary:f.gray45,light:f.gray50,extraLight:f.gray55,inverted:f.gray100,danger:h.red}},T);var G={size:{sm:14,md:16,lg:20,xl:40},stroke:{sm:1.6,md:2,lg:2.5}};var H={size:{sm:"300px",md:"400px",lg:"53%"}};var M={text:{green:h.green60,turquoise:h.turquoise60,sky:h.sky60,blue:h.blue60,purple:h.purple60,pink:h.pink60,red:h.red60,orange:h.orange60,yellow:h.yellow60,gray:h.gray60},background:{green:h.green20,turquoise:h.turquoise20,sky:h.sky20,blue:h.blue20,purple:h.purple20,pink:h.pink20,red:h.red20,orange:h.orange20,yellow:h.yellow20,gray:h.gray20}},W={text:{green:h.green10,turquoise:h.turquoise10,sky:h.sky10,blue:h.blue10,purple:h.purple10,pink:h.pink10,red:h.red10,orange:h.orange10,yellow:h.yellow10,gray:h.gray10},background:{green:h.green60,turquoise:h.turquoise60,sky:h.sky60,blue:h.blue60,purple:h.purple60,pink:h.pink60,red:h.red60,orange:h.orange60,yellow:h.yellow60,gray:h.gray60}};var F={lineHeight:{lg:1.5,md:1.2},iconSizeMedium:16,iconSizeSmall:14,iconStrikeLight:1.6,iconStrikeMedium:2,iconStrikeBold:2.5};var N={color:h,grayScale:f,icon:G,modal:H,text:F,blur:z,animation:j,snackBar:{success:{background:"#16A26B",color:"#D0F8E9"},error:{background:"#B43232",color:"#FED8D8"},info:{background:h.gray80,color:f.gray0}},spacingMultiplicator:4,spacing:function(r){return"".concat(r*4,"px")},betweenSiblingsGap:"2px",table:{horizontalCellMargin:"8px",checkboxColumnWidth:"32px"},rightDrawerWidth:"500px",clickableElementBackgroundTransition:"background 0.1s ease",lastLayerZIndex:2147483647},J=a(e({},N),{accent:v,background:A,border:D,tag:M,boxShadow:L,font:C,name:"light"}),_=a(e({},N),{accent:w,background:S,border:I,tag:W,boxShadow:B,font:E,name:"dark"});var K=b.default.div(o(),function(r){var e=r.theme;return e.color.blue}),R=function(r){var e=u.useTheme();return console.log("theme checkmark",e),s.jsx(K,{children:s.jsx(g.IconCheck,{color:e.grayScale.gray0,size:14})})};var V=b.default.span(c(),function(r){var e=r.theme;return e.background.transparent.light},function(r){var e=r.theme;return e.font.color.light},function(r){var e=r.theme;return e.font.size.xs},function(r){var e=r.theme;return e.font.weight.medium},function(r){var e=r.theme;return e.spacing(2)},function(r){var e=r.theme;return e.spacing(4)},function(r){var e=r.theme;return e.text.lineHeight.lg},function(r){var e=r.theme;return"0 ".concat(e.spacing(2))}),Y=function(){return s.jsx(V,{children:"Soon"})};var Z=b.default.button(i(),function(r){var e=r.theme,n=r.variant,a=r.accent,t=r.disabled,o=r.focus;switch(n){case"primary":switch(a){case"default":return"\n              background: ".concat(e.background.secondary,";\n              border-color: ").concat(t?"transparent":o?e.color.blue:e.background.transparent.light,";\n              color: ").concat(t?e.font.color.extraLight:e.font.color.secondary,";\n              border-width: ").concat(!t&&o?"1px 1px !important":0,";\n              box-shadow: ").concat(!t&&o?"0 0 0 3px ".concat(e.accent.tertiary):"none",";\n              &:hover {\n                background: ").concat(t?e.background.secondary:e.background.tertiary,";\n              }\n              &:active {\n                background: ").concat(t?e.background.secondary:e.background.quaternary,";\n              }\n            ");case"blue":return"\n              background: ".concat(t?e.color.blue20:e.color.blue,";\n              border-color: ").concat(t?"transparent":o?e.color.blue:e.background.transparent.light,";\n              border-width: ").concat(!t&&o?"1px 1px !important":0,";\n              color: ").concat(e.grayScale.gray0,";\n              box-shadow: ").concat(!t&&o?"0 0 0 3px ".concat(e.accent.tertiary):"none",";\n              &:hover {\n                background: ").concat(t?e.color.blue20:e.color.blue50,";\n              }\n              &:active {\n                background: ").concat(t?e.color.blue20:e.color.blue60,";\n              }\n            ");case"danger":return"\n              background: ".concat(t?e.color.red20:e.color.red,";\n              border-color: ").concat(t?"transparent":o?e.color.red:e.background.transparent.light,";\n              border-width: ").concat(!t&&o?"1px 1px !important":0,";\n              box-shadow: ").concat(!t&&o?"0 0 0 3px ".concat(e.color.red10):"none",";\n              color: ").concat(e.grayScale.gray0,";\n              &:hover {\n                background: ").concat(t?e.color.red20:e.color.red50,";\n              }\n              &:active {\n                background: ").concat(t?e.color.red20:e.color.red50,";\n              }\n            ")}break;case"secondary":case"tertiary":switch(a){case"default":return"\n              background: ".concat(o?e.background.transparent.primary:"transparent",";\n              border-color: ").concat(n==="secondary"?!t&&o?e.color.blue:e.background.transparent.light:o?e.color.blue:"transparent",";\n              border-width: ").concat(!t&&o?"1px 1px !important":0,";\n              box-shadow: ").concat(!t&&o?"0 0 0 3px ".concat(e.accent.tertiary):"none",";\n              color: ").concat(t?e.font.color.extraLight:e.font.color.secondary,";\n              &:hover {\n                background: ").concat(t?"transparent":e.background.transparent.light,";\n              }\n              &:active {\n                background: ").concat(t?"transparent":e.background.transparent.light,";\n              }\n            ");case"blue":return"\n              background: ".concat(o?e.background.transparent.primary:"transparent",";\n              border-color: ").concat(n==="secondary"?o?e.color.blue:e.color.blue20:o?e.color.blue:"transparent",";\n              border-width: ").concat(!t&&o?"1px 1px !important":0,";\n              box-shadow: ").concat(!t&&o?"0 0 0 3px ".concat(e.accent.tertiary):"none",";\n              color: ").concat(t?e.accent.accent4060:e.color.blue,";\n              &:hover {\n                background: ").concat(t?"transparent":e.accent.tertiary,";\n              }\n              &:active {\n                background: ").concat(t?"transparent":e.accent.secondary,";\n              }\n            ");case"danger":return"\n              background: ".concat(t?"transparent":e.background.transparent.primary,";\n              border-color: ").concat(n==="secondary"?o?e.color.red:e.color.red20:o?e.color.red:"transparent",";\n              border-width: ").concat(!t&&o?"1px 1px !important":0,";\n              box-shadow: ").concat(!t&&o?"0 0 0 3px ".concat(e.color.red10):"none",";\n              color: ").concat(t?e.color.red20:e.font.color.danger,";\n              &:hover {\n                background: ").concat(t?"transparent":e.background.danger,";\n              }\n              &:active {\n                background: ").concat(t?"transparent":e.background.danger,";\n              }\n            ")}}},function(r){var e=r.position,n=r.theme;switch(e){case"left":return"".concat(n.border.radius.sm," 0px 0px ").concat(n.border.radius.sm);case"right":return"0px ".concat(n.border.radius.sm," ").concat(n.border.radius.sm," 0px");case"middle":return"0px";case"standalone":return n.border.radius.sm}},function(r){var e=r.variant,n=r.position;switch(e){case"primary":case"secondary":return n==="middle"?"1px 0px":"1px";case"tertiary":return"0"}},function(r){var e=r.disabled;return e?"not-allowed":"pointer"},function(r){var e=r.theme;return e.font.family},function(r){var e=r.theme;return e.spacing(1)},function(r){var e=r.size;return e==="small"?"24px":"32px"},function(r){var e=r.theme;return"0 ".concat(e.spacing(2))},function(r){var e=r.fullWidth;return e?"100%":"auto"}),Q=function(r){var e=r.className,n=r.Icon,a=r.title,t=r.fullWidth,o=t===void 0?!1:t,c=r.variant,i=c===void 0?"primary":c,l=r.size,d=l===void 0?"medium":l,g=r.accent,y=g===void 0?"default":g,p=r.position,b=p===void 0?"standalone":p,f=r.soon,x=f===void 0?!1:f,m=r.disabled,h=m===void 0?!1:m,k=r.focus,v=k===void 0?!1:k,w=r.onClick;var j=u.useTheme();return console.log("theme",j),s.jsxs(Z,{fullWidth:o,variant:i,size:d,position:b,disabled:x||h,focus:v,accent:y,className:e,onClick:w,children:[n&&s.jsx(n,{size:j.icon.size.sm}),a,x&&s.jsx(Y,{})]})};Object.defineProperty(exports,"ThemeProvider",{enumerable:true,get:function r(){return u.ThemeProvider}});exports.Button=Q;exports.Checkmark=R;exports.darkTheme=_;exports.lightTheme=J;