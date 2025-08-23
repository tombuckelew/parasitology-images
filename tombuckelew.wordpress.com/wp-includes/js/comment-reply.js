var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

window.addComment=function(e){var t=e.document;var n={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"};var r=e.MutationObserver||e.WebKitMutationObserver||e.MozMutationObserver;var i="querySelector"in t&&"addEventListener"in e;var a=!!t.documentElement.dataset;var d;var o;var l;var m;if(i&&t.readyState!=="loading"){s()}else if(i){e.addEventListener("DOMContentLoaded",s,false)}function s(){c();y()}function c(e){if(!i){return}d=C(n.cancelReplyId);o=C(n.commentFormId);if(!d){return}d.addEventListener("touchstart",v);d.addEventListener("click",v);var r=function(e){if((e.metaKey||e.ctrlKey)&&e.keyCode===13&&t.activeElement.tagName.toLowerCase()!=="a"){o.removeEventListener("keydown",r);e.preventDefault();o.submit.click();return false}};if(o){o.addEventListener("keydown",r)}var a=f(e);var l;for(var m=0,s=a.length;m<s;m++){l=a[m];l.addEventListener("touchstart",u);l.addEventListener("click",u)}}function f(e){var r=n.commentReplyClass;var i;if(!e||!e.childNodes){e=t}if(t.getElementsByClassName){i=e.getElementsByClassName(r)}else{i=e.querySelectorAll("."+r)}return i}function v(e){var t=this;var r=n.temporaryFormId;var i=C(r);if(!i||!l){return}C(n.parentIdFieldId).value="0";var a=i.textContent;i.parentNode.replaceChild(l,i);t.style.display="none";var d=C(n.commentReplyTitleId);var o=d&&d.firstChild;var m=o&&o.nextSibling;if(o&&o.nodeType===Node.TEXT_NODE&&a){if(m&&"A"===m.nodeName&&m.id!==n.cancelReplyId){m.style.display=""}o.textContent=a}e.preventDefault()}function u(t){var r=C(n.commentReplyTitleId);var i=r&&r.firstChild.textContent;var a=this,d=I(a,"belowelement"),o=I(a,"commentid"),l=I(a,"respondelement"),m=I(a,"postid"),s=I(a,"replyto")||i,c;if(!d||!o||!l||!m){return}c=e.addComment.moveForm(d,o,l,m,s);if(false===c){t.preventDefault()}}function y(){if(!r){return}var e={childList:true,subtree:true};m=new r(p);m.observe(t.body,e)}function p(e){var t=e.length;while(t--){if(e[t].addedNodes.length){c();return}}}function I(e,t){if(a){return e.dataset[t]}else{return e.getAttribute("data-"+t)}}function C(e){return t.getElementById(e)}function h(r,i,a,m,s){var c=C(r);l=C(a);var f=C(n.parentIdFieldId);var v=C(n.postIdFieldId);var u,y,p;var I=C(n.commentReplyTitleId);var h=I&&I.firstChild;var b=h&&h.nextSibling;if(!c||!l||!f){return}if("undefined"===typeof s){s=h&&h.textContent}E(l);if(m&&v){v.value=m}f.value=i;d.style.display="";c.parentNode.insertBefore(l,c.nextSibling);if(h&&h.nodeType===Node.TEXT_NODE){if(b&&"A"===b.nodeName&&b.id!==n.cancelReplyId){b.style.display="none"}h.textContent=s}d.onclick=function(){return false};try{for(var g=0;g<o.elements.length;g++){u=o.elements[g];y=false;if("getComputedStyle"in e){p=e.getComputedStyle(u)}else if(t.documentElement.currentStyle){p=u.currentStyle}if(u.offsetWidth<=0&&u.offsetHeight<=0||p.visibility==="hidden"){y=true}if("hidden"===u.type||u.disabled||y){continue}u.focus();break}}catch(e){}return false}function E(e){var r=n.temporaryFormId;var i=C(r);var a=C(n.commentReplyTitleId);var d=a?a.firstChild.textContent:"";if(i){return}i=t.createElement("div");i.id=r;i.style.display="none";i.textContent=d;e.parentNode.insertBefore(i,e)}return{init:c,moveForm:h}}(window);

}
/*
     FILE ARCHIVED ON 03:01:10 Aug 21, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:01:15 Aug 21, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.497
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.016
  esindex: 0.008
  cdx.remote: 10.986
  LoadShardBlock: 390.012 (3)
  PetaboxLoader3.resolve: 197.278 (3)
  PetaboxLoader3.datanode: 139.991 (3)
  load_resource: 257.863
*/