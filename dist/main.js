!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=new Date;if(GM_addStyle('#overlay-plugin{position:fixed;background:rgba(0,0,0,0.8);width:100%;height:100%;top:0;left:0;z-index:10;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#777;text-align:center;font-family:"Gill sans", sans-serif}#overlay-plugin #modal{margin:auto;position:absolute;background:#ffffff;z-index:2;border-radius:10px;padding:2%}#overlay-plugin h1{margin:1em 0;border-bottom:1px dashed;padding-bottom:1em;font-weight:lighter}#overlay-plugin p{font-style:italic}#overlay-plugin .loader{margin:0 0 2em;height:100px;width:20%;text-align:center;padding:1em;margin:0 auto 1em;display:inline-block;vertical-align:top}.hide{display:none !important}svg path,svg rect{fill:#FF6700}'),console.log(n.getDay()),4==n.getDay()){if("null"==localStorage.getItem("mentoringEnviado")){console.log("enviado");let e=document.createElement("div");e.setAttribute("id","overlay-plugin"),e.innerHTML='<div id="modal">\n            <div id="header">\n                <h1>Aguarde um minuto</h1>\n            </div>\n            <div id="body">\n                <p>Estamos carregando seu Mentoring Semanal!</p>\n            </div>\n            <div class="loader loader--style4" title="3">\n              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                 width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n                <rect x="0" y="0" width="4" height="7" fill="#333">\n                  <animateTransform  attributeType="xml"\n                    attributeName="transform" type="scale"\n                    values="1,1; 1,3; 1,1"\n                    begin="0s" dur="0.6s" repeatCount="indefinite" />\n                </rect>\n\n                <rect x="10" y="0" width="4" height="7" fill="#333">\n                  <animateTransform  attributeType="xml"\n                    attributeName="transform" type="scale"\n                    values="1,1; 1,3; 1,1"\n                    begin="0.2s" dur="0.6s" repeatCount="indefinite" />\n                </rect>\n                <rect x="20" y="0" width="4" height="7" fill="#333">\n                  <animateTransform  attributeType="xml"\n                    attributeName="transform" type="scale"\n                    values="1,1; 1,3; 1,1"\n                    begin="0.4s" dur="0.6s" repeatCount="indefinite" />\n                </rect>\n              </svg>\n            </div>\n        </div>',document.querySelector("body").appendChild(e);var i=function(){clearTimeout(o),document.querySelector("._fce_h._fce_f.ms-fwt-r.ms-fcl-np.o365button").click();setTimeout(function(){document.querySelector(".allowTextSelection.customScrollBar._mcp_32.ms-bg-color-white.ms-font-color-black.owa-font-compose")&&function(){setTimeout(function(){});var e=document.querySelector(".allowTextSelection.customScrollBar._mcp_32.ms-bg-color-white.ms-font-color-black.owa-font-compose");e.innerHTML='<div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <b>Alocação na semana (0% a 200%):</b>&nbsp;100%&nbsp;</div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <b>Quantidade de Horas Extras:&nbsp;</b>&nbsp;0</div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <b>Alocação na próxima semana (0% a 200%):&nbsp;</b>100%</div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <b><br>\n        </b></div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <b>Como esta se sentindo com relação as atividades ou Compasso em geral.&nbsp;😊,&nbsp;</b></div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <br>\n        </div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">\n        <b>Descreva de forma MACRO em uma LINHA o resumo das tuas atividades:</b></div>\n        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont"></div>\n        <br>\n        <p></p>'+e.innerHTML,document.querySelector("#overlay-plugin").classList.add("hide"),localStorage.setItem("mentoringEnviado","true")}()},1e4)},o=setTimeout(function(){document.querySelector("._fce_h._fce_f.ms-fwt-r.ms-fcl-np.o365button")&&i()},1e4)}}else localStorage.setItem("mentoringEnviado",null)}]);