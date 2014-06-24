/*! Magikarp Popups 1.0
 * Â©2014 Erick Ruano - Magikarp Popups/license
 */

/**
 * @summary     Magikarp Popups
 * @description Easily call modern Popups
 * @version     1.0
 * @file        magikarp.popups.js
 * @author      Erick Ruano
 * @contact     erickaleruano@gmail.com
 * @copyright   Copyright 2014 Erick Ruano
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://opensource.org/licenses/MIT
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 */
function SocialPopupsHide(){$(".SocialPopupsContainer").hide("puff",{complete:function(){$(".SocialPopupsContainer").remove();$(".SocialPopupsTheater").remove()}},300)}$(document).on("click","*[data-social-popup]",function(){var e=$(this).attr("data-social-popup");var e=e.split(";");var t=e[2].split(":btn:");var n=t.length;var r="";for(i=1;i<n;i++){var s=t[i].split("-");r=r+'<div class="SocialPopupsButton" style="background:'+s[1]+'" onclick="'+s[2]+'()">'+s[0]+"</div>"}var o='<div class="SocialPopupsTheater"></div>';$("body").append(o);$(".SocialPopupsTheater").css({position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",opacity:"0.8","background-color":"#222","z-index":"999999999999999999"});var u='<div class="SocialPopupsContainer"><div class="SocialPopupsHeader">'+e[0]+'</div><div class="SocialPopupsContent">'+e[1]+'</div><div class="SocialPopupsTools"><center>'+r+"</center></div></div>";$("body").append(u);$(".SocialPopupsContainer").css({position:"fixed",top:"50%",left:"50%",width:"600",height:"auto","margin-left":"-300","background-color":"#fff","z-index":"999999999999999999",padding:"20px",display:"none"});$(".SocialPopupsHeader").css({"margin-bottom":"24px",width:"100%",height:"auto",color:"#404041","font-family":"lato","font-size":"24px","font-weight":"400","z-index":"999999999999999999"});$(".SocialPopupsContent").css({"margin-bottom":"24px",width:"100%",height:"auto",color:"#404041","font-family":"lato","font-size":"16px","font-weight":"400","z-index":"999999999999999999"});$(".SocialPopupsTools").css({width:"100%",height:"40px","border-top-style":"solid","border-top-color":"#fcfcfc","border-top-width":"1px","z-index":"999999999999999999"});var a=$(".SocialPopupsButton").length;var f=600/a;var f=f-10;$(".SocialPopupsButton").css({width:f,height:"32px",color:"#fff","font-family":"lato","font-size":"14px","font-weight":"400",margin:"5px",display:"inline-block","margin-bottom":"0","line-height":"32px",cursor:"pointer"});var l=$(".SocialPopupsContainer").height();var l=l/2;var l="-"+l;$(".SocialPopupsContainer").css("margin-top",l);$(".SocialPopupsContainer").show("puff",200);$(".SocialPopupsTheater").click(function(){SocialPopupsHide()});$(document).keyup(function(e){if(e.which==27){SocialPopupsHide()}})})
