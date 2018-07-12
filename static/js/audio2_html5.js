/*
 * HTML5 Audio Player PRO - v2.4.1.1
 *
 * Copyright 2014-2018, LambertGroup
 *
 */

 (function(e){function N(a){a=document.getElementById(a.audioID);return!(!a.canPlayType||!a.canPlayType("audio/mpeg;").replace(/no/,""))}function R(a,c,f,d,g,n,m,t,q,z,k,C,w,r){a.totalTime="Infinity";c.isSliderInitialized&&(n.slider("destroy"),c.isSliderInitialized=!1);c.isProgressInitialized&&(m.progressbar("destroy"),c.isProgressInitialized=!1);a.is_changeSrc=!0;a.is_buffer_complete=!1;z.width(a.titleWidth);C.width(a.titleWidth);m.css({background:c.bufferEmptyColor});a.curSongText="";c.showTitle&&
 null!=a.playlist_arr[a.origID].title&&""!=a.playlist_arr[a.origID].title&&(a.curSongText+=a.playlist_arr[a.origID].title);a.isAuthorTitleInsideScrolling=!1;a.authorTitleInsideWait=0;k.stop();k.css({"margin-left":0});k.html(a.curSongText);c.showAuthor&&null!=a.playlist_arr[a.origID].author&&""!=a.playlist_arr[a.origID].author&&C.html(a.playlist_arr[a.origID].author);r.html('<img src="'+a.playlist_arr[a.origID].image+'" width="80">');a.curSongText||z.css({display:"none",width:0,height:0,padding:0,margin:0});
 e(a.thumbsHolder_Thumbs[a.current_img_no]).css({background:c.playlistRecordBgOnColor,"border-bottom-color":c.playlistRecordBottomBorderOnColor,color:c.playlistRecordTextOnColor});a.is_very_first||L(-1,a,c,f);f=a.playlist_arr[a.origID].sources_mp3;if(-1!=l.indexOf("opera")||-1!=l.indexOf("firefox")||-1!=l.indexOf("mozzila"))f=a.playlist_arr[a.origID].sources_ogg,""!=N(a)&&(f=a.playlist_arr[a.origID].sources_mp3);if(-1!=l.indexOf("chrome")||-1!=l.indexOf("msie")||-1!=l.indexOf("safari"))f=a.playlist_arr[a.origID].sources_mp3,
 -1!=l.indexOf("opr")&&(f=a.playlist_arr[a.current_img_no].sources_ogg,""!=N(a)&&(f=a.playlist_arr[a.origID].sources_mp3));-1!=l.indexOf("android")&&(f=a.playlist_arr[a.origID].sources_mp3);if(-1!=l.indexOf("ipad")||-1!=l.indexOf("iphone")||-1!=l.indexOf("ipod")||-1!=l.indexOf("webos"))f=a.playlist_arr[a.origID].sources_mp3;document.getElementById(a.audioID).src=f;document.getElementById(a.audioID).load();c.googleTrakingOn&&ga("send","event","Audio Files","Play","Title: "+a.playlist_arr[a.origID].title+
 "  ---  File: "+f);-1!=l.indexOf("android")||(-1!=l.indexOf("ipad")||-1!=l.indexOf("iphone")||-1!=l.indexOf("ipod")||-1!=l.indexOf("webos"))&&a.is_very_first||(c.autoPlay?(S(),document.getElementById(a.audioID).play(),g.addClass("AudioPause")):g.removeClass("AudioPause"))}function D(a){var c=10>Math.floor(a/60)?"0"+Math.floor(a/60):Math.floor(a/60);return c+":"+(10>Math.floor(a-60*c)?"0"+Math.floor(a-60*c):Math.floor(a-60*c))}function T(a,c,f,d,g,n,m,l,q){a.is_changeSrc=!1;a.is_very_first&&(a.is_very_first=
 !1);g.width(c.playerWidth-2*a.timerLeftPos-2*n.width()-2*a.seekBarLeftRightSpacing);a.bufferTopPos=a.timerTopPos+parseInt((n.height()-g.height())/2,10);a.bufferLeftPos=parseInt((f.width()-g.width())/2);g.css({top:a.bufferTopPos+"px",left:a.bufferLeftPos+"px"});d.width(g.width());d.css({top:a.bufferTopPos+"px",left:a.bufferLeftPos+"px"});d.slider({value:0,step:.01,orientation:"horizontal",range:"min",max:a.totalTime,slide:function(){a.is_seeking=!0},stop:function(c,d){a.is_seeking=!1;document.getElementById(a.audioID).currentTime=
 d.value;0!=document.getElementById(a.audioID).paused&&(document.getElementById(a.audioID).play(),l.addClass("AudioPause"))},create:function(a,d){c.isSliderInitialized=!0}});e(".ui-slider-range",d).css({background:c.seekbarColor});g.progressbar({value:0,complete:function(){a.is_buffer_complete=!0},create:function(a,d){c.isProgressInitialized=!0}});e(".ui-widget-header",g).css({background:c.bufferFullColor})}function Z(a,c,e,d,g,n,m,t,q,z,k){!a.isAuthorTitleInsideScrolling&&5<=a.authorTitleInsideWait&&
 k.width()>a.titleWidth?(a.isAuthorTitleInsideScrolling=!0,a.authorTitleInsideWait=0,k.html(a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "+a.curSongText+" **** "),k.css({"margin-left":0}),k.stop().animate({"margin-left":c.playerWidth-k.width()+"px"},parseInt(1E4*(k.width()-c.playerWidth)/150,10),"linear",function(){a.isAuthorTitleInsideScrolling=!1})):!a.isAuthorTitleInsideScrolling&&k.width()>a.titleWidth&&a.authorTitleInsideWait++;curTime=document.getElementById(a.audioID).currentTime;
 bufferedTime=0;a.is_changeSrc&&!isNaN(a.totalTime)&&"Infinity"!=a.totalTime&&(T(a,c,e,d,g,n,m,t,q),-1!=l.indexOf("android")&&(c.autoPlay?(document.getElementById(a.audioID).play(),t.addClass("AudioPause")):t.removeClass("AudioPause")));!a.is_seeking&&c.isSliderInitialized&&d.slider("value",curTime);-1!=l.indexOf("android")?(a.totalTime!=document.getElementById(a.audioID).duration&&0<document.getElementById(a.audioID).duration&&(a.totalTime=document.getElementById(a.audioID).duration,c.isSliderInitialized&&
 (d.slider("destroy"),c.isSliderInitialized=!1),c.isProgressInitialized&&(g.progressbar("destroy"),c.isProgressInitialized=!1),T(a,c,e,d,g,n,m,t,q)),g.css({background:c.bufferFullColor}),isNaN(a.totalTime)||"Infinity"==a.totalTime?(n.text("00:00"),m.text(D(0))):(n.text(D(curTime)),m.text(D(a.totalTime)))):(document.getElementById(a.audioID).buffered.length&&(bufferedTime=document.getElementById(a.audioID).buffered.end(document.getElementById(a.audioID).buffered.length-1),0<bufferedTime&&!a.is_buffer_complete&&
 !isNaN(a.totalTime)&&"Infinity"!=a.totalTime&&c.isProgressInitialized&&g.progressbar({value:100*bufferedTime/a.totalTime})),n.text(D(curTime)),m.text(D(bufferedTime)))}function L(a,c,f,d){if(c.selectedCateg_total_images>f.numberOfThumbsPerScreen){var g=(c.thumbsHolder_ThumbHeight+1)*(c.selectedCateg_total_images-f.numberOfThumbsPerScreen);d.stop(!0,!0);e("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){a.preventDefault()});-1==a||c.isCarouselScrolling?!c.isCarouselScrolling&&
 c.selectedCateg_total_images>f.numberOfThumbsPerScreen&&(c.isCarouselScrolling=!0,a=-1*parseInt((c.thumbsHolder_ThumbHeight+1)*c.current_img_no,10),Math.abs(a)>g&&(a=-1*g),c.selectedCateg_total_images>f.numberOfThumbsPerScreen&&f.showPlaylist&&c.audio2_html5_sliderVertical.slider("value",100+parseInt(100*a/g)),d.animate({top:a+"px"},500,"easeOutCubic",function(){c.isCarouselScrolling=!1;e("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){})})):(a=2>=a?-1*g:parseInt(g*
 (a-100)/100,10),1<=a&&(a=0),0>=a&&(c.isCarouselScrolling=!0,d.animate({top:a+"px"},600,"easeOutQuad",function(){c.isCarouselScrolling=!1;e("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){})})))}}function aa(a,c,f,d,g,n,m,l,q,z,k,C,w,r,I,u,A,v,B,x,G){d.stop(!0,!0);a.isCarouselScrolling=!1;d.stop().animate({left:-1*n.width()+"px"},600,"easeOutQuad",function(){d.html("");for(var p=0;p<a.category_arr.length;p++)a.thumbsHolder_Thumb=e('<div class="thumbsHolder_ThumbOFF" rel="'+
 p+'"><div class="padding">'+a.category_arr[p]+"</div></div>"),d.append(a.thumbsHolder_Thumb),a.thumbsHolder_Thumb.css({top:(a.thumbsHolder_Thumb.height()+1)*p+"px",background:c.categoryRecordBgOffColor,"border-bottom-color":c.categoryRecordBottomBorderOffColor,color:c.categoryRecordTextOffColor}),a.category_arr[p]==a.selectedCateg&&(a.current_img_no=p,a.thumbsHolder_Thumb.css({background:c.categoryRecordBgOnColor,"border-bottom-color":c.categoryRecordBottomBorderOnColor,color:c.categoryRecordTextOnColor}));
 a.selectedCateg_total_images=a.numberOfCategories;a.categsAreListed=!0;g.height(2*c.playlistPadding+(a.thumbsHolder_Thumb.height()+1)*c.numberOfThumbsPerScreen+m.height()+q.height()+2*c.selectedCategMarginBottom);n.height((a.thumbsHolder_Thumb.height()+1)*c.numberOfThumbsPerScreen);z.css({padding:c.playlistPadding+"px"});a.thumbsHolder_Thumbs=e(".thumbsHolder_ThumbOFF",f);a.numberOfCategories>c.numberOfThumbsPerScreen&&c.showPlaylist?(c.isPlaylistSliderInitialized&&a.audio2_html5_sliderVertical.slider("destroy"),
 a.audio2_html5_sliderVertical.slider({orientation:"vertical",range:"min",min:1,max:100,step:1,value:100,slide:function(e,f){L(f.value,a,c,d)}}),c.isPlaylistSliderInitialized=!0,a.audio2_html5_sliderVertical.css({display:"inline",position:"absolute",height:g.height()-20-m.height()-2*c.selectedCategMarginBottom-q.height()-2*c.playlistPadding+"px",left:f.width()+2*c.playerPadding-a.audio2_html5_sliderVertical.width()-c.playlistPadding+"px",top:a.audioPlayerHeight+c.playlistTopPos+c.playlistPadding+m.height()+
 c.selectedCategMarginBottom+2+"px"}),c.showPlaylistOnInit||a.audio2_html5_sliderVertical.css({opacity:0,display:"none"}),c.showPlaylistOnInit=!0,e(".thumbsHolder_ThumbOFF",f).css({width:f.width()+2*c.playerPadding-a.audio2_html5_sliderVertical.width()-2*c.playlistPadding-3+"px"})):(c.isPlaylistSliderInitialized&&(a.audio2_html5_sliderVertical.slider("destroy"),c.isPlaylistSliderInitialized=!1),e(".thumbsHolder_ThumbOFF",f).css({width:f.width()+2*c.playerPadding-2*c.playlistPadding+"px"}));a.thumbsHolder_Thumbs.click(function(){var h=
 e(this).attr("rel");a.selectedCateg=a.category_arr[h];l.html(a.selectedCateg);U(a,c,f,d,g,n,m,q,z,k,C,w,r,I,u,A,v,B,x,G)});a.thumbsHolder_Thumbs.mouseover(function(){e(this).css({background:c.categoryRecordBgOnColor,"border-bottom-color":c.categoryRecordBottomBorderOnColor,color:c.categoryRecordTextOnColor})});a.thumbsHolder_Thumbs.mouseout(function(){var d=e(this),f=d.attr("rel");a.current_img_no!=f&&d.css({background:c.categoryRecordBgOffColor,"border-bottom-color":c.categoryRecordBottomBorderOffColor,
 color:c.categoryRecordTextOffColor})});n.mousewheel(function(e,f,g,k){e.preventDefault();e=a.audio2_html5_sliderVertical.slider("value");if(1<parseInt(e)&&-1==parseInt(f)||100>parseInt(e)&&1==parseInt(f))e+=f,a.audio2_html5_sliderVertical.slider("value",e),L(e,a,c,d)});d.css({top:"0px"});d.stop().animate({left:"0px"},400,"easeOutQuad",function(){})})}function U(a,c,f,d,g,l,m,t,q,z,k,C,w,r,I,u,A,v,B,x){d.stop(!0,!0);a.isCarouselScrolling=!1;var n="",p=!1,h=500;a.is_very_first&&(h=1);""!=a.search_val&&
 (h=1);d.stop().animate({left:-1*l.width()+"px"},h,"easeOutQuad",function(){d.html("");for(var h=a.selectedCateg_total_images=0;h<a.playlist_arr.length;h++)p=!1,""!=a.search_val?(n=a.playlist_arr[h].title.toLowerCase(),-1!=n.indexOf(a.search_val)&&(p=!0),c.searchAuthor&&(authorLowerCases=a.playlist_arr[h].author.toLowerCase(),-1!=authorLowerCases.indexOf(a.search_val)&&(p=!0))):-1!=a.playlist_arr[h].category.indexOf(a.selectedCateg+";")&&(p=!0),p&&(a.selectedCateg_total_images++,a.thumbsHolder_Thumb=
 e('<div class="thumbsHolder_ThumbOFF" rel="'+(a.selectedCateg_total_images-1)+'" data-origID="'+h+'"><div class="padding">'+(c.showPlaylistNumber?a.selectedCateg_total_images+". ":"")+a.playlist_arr[h].title+"</div></div>"),d.append(a.thumbsHolder_Thumb),0==a.thumbsHolder_ThumbHeight&&(a.thumbsHolder_ThumbHeight=a.thumbsHolder_Thumb.height()),a.thumbsHolder_Thumb.css({top:(a.thumbsHolder_ThumbHeight+1)*a.selectedCateg_total_images+"px",background:c.playlistRecordBgOffColor,"border-bottom-color":c.playlistRecordBottomBorderOffColor,
 color:c.playlistRecordTextOffColor}),a.current_img_no=0,a.origID==e("div[rel='"+(a.selectedCateg_total_images-1)+"']").attr("data-origID")&&a.thumbsHolder_Thumb.css({background:c.playlistRecordBgOnColor,"border-bottom-color":c.playlistRecordBottomBorderOnColor,color:c.playlistRecordTextOnColor}));a.categsAreListed=!1;g.height(2*c.playlistPadding+(a.thumbsHolder_ThumbHeight+1)*c.numberOfThumbsPerScreen+m.height()+t.height()+2*c.selectedCategMarginBottom);l.height((a.thumbsHolder_ThumbHeight+1)*c.numberOfThumbsPerScreen);
 q.css({padding:c.playlistPadding+"px"});a.thumbsHolder_Thumbs=e(".thumbsHolder_ThumbOFF",f);h=a.audioPlayerHeight+g.height()+c.playlistTopPos;c.showPlaylist&&c.showPlaylistOnInit||(h=a.audioPlayerHeight);x.css({width:f.width()+2*c.playerPadding+"px",height:h+"px"});a.selectedCateg_total_images>c.numberOfThumbsPerScreen&&c.showPlaylist?(c.isPlaylistSliderInitialized&&a.audio2_html5_sliderVertical.slider("destroy"),a.audio2_html5_sliderVertical.slider({orientation:"vertical",range:"min",min:1,max:100,
 step:1,value:100,slide:function(e,f){L(f.value,a,c,d)}}),c.isPlaylistSliderInitialized=!0,a.audio2_html5_sliderVertical.css({display:"inline",position:"absolute",height:g.height()-20-m.height()-2*c.selectedCategMarginBottom-t.height()-2*c.playlistPadding+"px",left:f.width()+2*c.playerPadding-a.audio2_html5_sliderVertical.width()-c.playlistPadding+"px",top:a.audioPlayerHeight+c.playlistTopPos+c.playlistPadding+m.height()+c.selectedCategMarginBottom+2+"px"}),c.showPlaylistOnInit||a.audio2_html5_sliderVertical.css({opacity:0,
 display:"none"}),c.showPlaylistOnInit=!0,e(".thumbsHolder_ThumbOFF",f).css({width:f.width()+2*c.playerPadding-a.audio2_html5_sliderVertical.width()-2*c.playlistPadding-3+"px"})):(c.isPlaylistSliderInitialized&&(a.audio2_html5_sliderVertical.slider("destroy"),c.isPlaylistSliderInitialized=!1),e(".thumbsHolder_ThumbOFF",f).css({width:f.width()+2*c.playerPadding-2*c.playlistPadding+"px"}));a.thumbsHolder_Thumbs.click(function(){if(!a.is_changeSrc){c.autoPlay=!0;var g=e(this).attr("rel");a.thumbsHolder_Thumbs.css({background:c.playlistRecordBgOffColor,
 "border-bottom-color":c.playlistRecordBottomBorderOffColor,color:c.playlistRecordTextOffColor});a.current_img_no=g;a.origID=e("div[rel='"+a.current_img_no+"']").attr("data-origID");R(a,c,d,f,z,k,C,w,r,I,u,A,v,B)}});a.thumbsHolder_Thumbs.mouseover(function(){e(this).css({background:c.playlistRecordBgOnColor,"border-bottom-color":c.playlistRecordBottomBorderOnColor,color:c.playlistRecordTextOnColor})});a.thumbsHolder_Thumbs.mouseout(function(){var d=e(this),f=d.attr("rel");a.origID!=e("div[rel='"+f+
 "']").attr("data-origID")&&d.css({background:c.playlistRecordBgOffColor,"border-bottom-color":c.playlistRecordBottomBorderOffColor,color:c.playlistRecordTextOffColor})});l.mousewheel(function(e,f,g,b){e.preventDefault();e=a.audio2_html5_sliderVertical.slider("value");if(1<parseInt(e)&&-1==parseInt(f)||100>parseInt(e)&&1==parseInt(f))e+=f,a.audio2_html5_sliderVertical.slider("value",e),L(e,a,c,d)});d.css({top:"0px"});d.stop().animate({left:"0px"},400,"easeOutQuad",function(){})})}function X(a,c,f){c.shuffle?
 (c=Math.ceil(Math.random()*(a.selectedCateg_total_images-1)),a.current_img_no=c!=a.current_img_no?c:Math.ceil(Math.random()*(a.selectedCateg_total_images-1))):"next"==f?a.current_img_no==a.selectedCateg_total_images-1?a.current_img_no=0:a.current_img_no++:0>a.current_img_no-1?a.current_img_no=a.selectedCateg_total_images-1:a.current_img_no--;a.origID=e("div[rel='"+a.current_img_no+"']").attr("data-origID")}function ba(){var a=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&
 (a=parseFloat(RegExp.$1));return parseInt(a,10)}function S(){e("audio").each(function(){e(".AudioPlay").removeClass("AudioPause");e(this)[0].pause()})}var l=navigator.userAgent.toLowerCase();e.fn.audio2_html5=function(a){a=e.extend({},e.fn.audio2_html5.defaults,a);return this.each(function(){var c=e(this),f=e('<div class="AudioControls"> <a class="AudioRewind" title="Rewind"></a><a class="AudioShuffle" title="Shuffle Playlist"></a><a class="AudioDownload" title="Download File"></a><a class="AudioBuy" title="Buy Now"></a><a class="AudioLyrics" title="Lyrics"></a><a class="AudioFacebook" title="Facebook"></a><a class="AudioTwitter" title="Twitter"></a><a class="AudioPlay" title="Play/Pause"></a><a class="AudioPrev" title="Previous"></a><a class="AudioNext" title="Next"></a><a class="AudioShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VolumeButton" title="Mute/Unmute"></a><div class="VolumeSlider"></div> <div class="AudioTimer_a">00:00</div><div class="AudioTimer_b">00:00</div>  </div>   <div class="AudioBuffer"></div><div class="AudioSeek"></div><div class="songTitle"><div class="songTitleInside"></div></div>  <div class="songAuthor"></div>   <div class="bordersDiv"></div>   <div class="thumbsHolderWrapper"><div class="playlistPadding"><div class="selectedCategDiv"><div class="innerSelectedCategDiv">CATEGORIES</div></div> <div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div><div class="searchDiv"><input class="search_term" type="text" value="search..." /></div></div></div>  <div class="slider-vertical"></div> <div class="ximage"></div>  <div class="bordersDiv"></div> '),
 d=c.parent(".audio2_html5");d.addClass(a.skin);d.append(f);e(".AudioControls",d);f=e(".AudioRewind",d);var g=e(".AudioShuffle",d),n=e(".AudioDownload",d),m=e(".AudioBuy",d),t=e(".AudioLyrics",d),q=e(".AudioFacebook",d),z=e(".AudioTwitter",d),k=e(".AudioPlay",d),C=e(".AudioPrev",d),w=e(".AudioNext",d),r=e(".bordersDiv",d),I=e(".AudioShowHidePlaylist",d),u=e(".VolumeButton",d),A=e(".VolumeSlider",d),v=e(".AudioTimer_a",d),B=e(".AudioTimer_b",d),x=e(".songTitle",d),G=e(".songTitleInside",d),p=e(".songAuthor",
 d),h=e(".ximage",d),E=e(".AudioBuffer",d),F=e(".AudioSeek",d);d.wrap("<div class='the_wrapper'></div>");var D=d.parent(),N=ba();m.attr("title",a.buyButTitle);t.attr("title",a.lyricsButTitle);d.css({background:a.playerBg,padding:a.playerPadding+"px"});var b={current_img_no:0,origID:0,is_very_first:!0,total_images:0,selectedCateg_total_images:0,numberOfCategories:0,is_seeking:!1,is_changeSrc:!1,is_buffer_complete:!1,timeupdateInterval:"",totalTime:"",playlist_arr:"",isCarouselScrolling:!1,isAuthorTitleInsideScrolling:!1,
 curSongText:"",authorTitleInsideWait:0,audioPlayerWidth:0,audioPlayerHeight:0,seekBarLeftRightSpacing:15,category_arr:"",selectedCateg:"",categsAreListed:!1,thumbsHolder_Thumb:e('<div class="thumbsHolder_ThumbOFF" rel="0"><div class="padding">test</div></div>'),thumbsHolder_ThumbHeight:0,thumbsHolder_Thumbs:"",search_val:"",constantDistance:18,timerTopPos:0,timerLeftPos:0,bufferTopPos:0,bufferLeftPos:0,titleWidth:0,authorTopPos:0,authorLeftPos:0,titleTopPos:0,titleLeftPos:0,imageTopPos:0,imageLeftPos:0,
 playTopPos:0,playLeftPos:0,previousTopPos:0,previousLeftPos:0,nextTopPos:0,nextLeftPos:0,volumeTopPos:0,volumeLeftPos:0,volumesliderTopPos:0,volumesliderLeftPos:0,bordersdivTopPos:0,bordersdivLeftPos:0,showhideplaylistTopPos:0,showhideplaylistLeftPos:0,rewindTopPos:0,rewindLeftPos:0,shuffleTopPos:0,shuffleLeftPos:0,downloadTopPos:0,downloadLeftPos:0,buyTopPos:0,buyLeftPos:0,lyricsTopPos:0,lyricsLeftPos:0,facebookTopPos:0,facebookLeftPos:0,twitterTopPos:0,twitterLeftPos:0,origParentFloat:"",origParentPaddingTop:"",
 origParentPaddingRight:"",origParentPaddingBottom:"",origParentPaddingLeft:"",windowWidth:0,audioID:"",audioObj:""};b.audioID=c.attr("id");a.showPlaylistBut||I.css({display:"none",width:0,height:0,padding:0,margin:0});b.timerTopPos=10;b.timerLeftPos=b.constantDistance;v.css({color:a.timerColor,top:b.timerTopPos+"px",left:b.timerLeftPos+"px"});B.css({color:a.timerColor,top:b.timerTopPos+"px",right:b.timerLeftPos+"px"});d.width(a.playerWidth);a.origWidth=a.playerWidth;h.css({top:b.timerTopPos+v.height()+
 b.constantDistance+"px",left:b.timerLeftPos+"px"});b.imageTopPos=parseInt(h.css("top").substring(0,h.css("top").length-2),10);b.imageLeftPos=parseInt(h.css("left").substring(0,h.css("left").length-2),10);x.css({color:a.songTitleColor});p.css({color:a.songAuthorColor});b.titleWidth=a.playerWidth-b.timerLeftPos-h.width()-2*b.constantDistance;b.authorTopPos=b.imageTopPos+2;b.authorLeftPos=b.imageLeftPos+h.width()+b.constantDistance;b.titleTopPos=parseInt(h.css("top").substring(0,h.css("top").length-
 2),10)+p.height()+8;b.titleLeftPos=parseInt(h.css("left").substring(0,h.css("left").length-2),10)+h.width()+b.constantDistance;p.css({top:b.authorTopPos+"px",left:b.authorLeftPos+"px"});x.css({top:b.titleTopPos+"px",left:b.titleLeftPos+"px"});b.playTopPos=b.imageTopPos+h.height()-k.height();b.playLeftPos=b.imageLeftPos+h.width()+b.constantDistance+C.width()+parseInt(b.constantDistance/2,10);k.css({top:b.playTopPos+"px",left:b.playLeftPos+"px"});b.previousTopPos=b.playTopPos+parseInt((k.height()-C.height())/
 2,10);b.previousLeftPos=b.imageLeftPos+h.width()+b.constantDistance;C.css({top:b.previousTopPos+"px",left:b.previousLeftPos+"px"});b.nextTopPos=b.previousTopPos;b.nextLeftPos=b.playLeftPos+k.width()+parseInt(b.constantDistance/2,10);w.css({top:b.nextTopPos+"px",left:b.nextLeftPos+"px"});b.volumeTopPos=b.nextTopPos+parseInt((w.height()-u.height())/2,10);b.volumeLeftPos=b.nextLeftPos+w.width()+parseInt(1.5*b.constantDistance,10);u.css({top:b.volumeTopPos+"px",left:b.volumeLeftPos+"px"});b.volumesliderTopPos=
 b.volumeTopPos+parseInt((u.height()-A.height())/2,10);b.volumesliderLeftPos=b.volumeLeftPos+u.width()+parseInt(b.constantDistance/2,10);A.css({top:b.volumesliderTopPos+"px",left:b.volumesliderLeftPos+"px"});b.bordersdivTopPos=b.imageTopPos+h.height()+b.constantDistance;b.bordersdivLeftPos=b.constantDistance;r.css({width:a.playerWidth-2*b.constantDistance+"px","border-top-color":a.bordersDivColor,"border-bottom-color":a.bordersDivColor,top:b.bordersdivTopPos+"px",left:b.bordersdivLeftPos+"px"});b.audioPlayerHeight=
 b.bordersdivTopPos+r.height()+b.constantDistance;d.height(b.audioPlayerHeight);b.showhideplaylistTopPos=b.bordersdivTopPos+parseInt((r.height()-I.height())/2,10);b.showhideplaylistLeftPos=b.constantDistance+3;I.css({top:b.showhideplaylistTopPos+"px",right:b.showhideplaylistLeftPos+"px"});b.rewindTopPos=b.bordersdivTopPos+parseInt((r.height()-f.height())/2,10);b.rewindLeftPos=b.constantDistance+3;f.css({top:b.rewindTopPos+"px",left:b.rewindLeftPos+"px"});a.showRewindBut||(f.css({display:"none",width:0,
 height:0,padding:0,margin:0}),b.rewindLeftPos=0);b.shuffleTopPos=b.bordersdivTopPos+parseInt((r.height()-g.height())/2,10);b.shuffleLeftPos=b.rewindLeftPos+f.width()+b.constantDistance;g.css({top:b.shuffleTopPos+"px",left:b.shuffleLeftPos+"px"});a.shuffle&&g.addClass("AudioShuffleON");a.showShuffleBut||(g.css({display:"none",width:0,height:0,padding:0,margin:0}),b.shuffleLeftPos=b.rewindLeftPos+f.width());b.downloadTopPos=b.bordersdivTopPos+parseInt((r.height()-n.height())/2,10);b.downloadLeftPos=
 b.shuffleLeftPos+g.width()+b.constantDistance;n.css({top:b.downloadTopPos+"px",left:b.downloadLeftPos+"px"});a.showDownloadBut||(n.css({display:"none",width:0,height:0,padding:0,margin:0}),b.downloadLeftPos=b.shuffleLeftPos+g.width());b.buyTopPos=b.bordersdivTopPos+parseInt((r.height()-m.height())/2,10);b.buyLeftPos=b.downloadLeftPos+n.width()+b.constantDistance;m.css({top:b.buyTopPos+"px",left:b.buyLeftPos+"px"});a.showBuyBut||(m.css({display:"none",width:0,height:0,padding:0,margin:0}),b.buyLeftPos=
 b.downloadLeftPos+n.width());b.lyricsTopPos=b.bordersdivTopPos+parseInt((r.height()-t.height())/2,10);b.lyricsLeftPos=b.buyLeftPos+m.width()+b.constantDistance;t.css({top:b.lyricsTopPos+"px",left:b.lyricsLeftPos+"px"});a.showLyricsBut||(t.css({display:"none",width:0,height:0,padding:0,margin:0}),b.lyricsLeftPos=b.buyLeftPos+m.width());b.facebookTopPos=b.bordersdivTopPos+parseInt((r.height()-q.height())/2,10);b.facebookLeftPos=b.lyricsLeftPos+t.width()+b.constantDistance;q.css({top:b.facebookTopPos+
 "px",left:b.facebookLeftPos+"px"});a.showFacebookBut?(window.fbAsyncInit=function(){FB.init({appId:a.facebookAppID,version:"v2.8",status:!0,cookie:!0,xfbml:!0})},function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="//connect.facebook.com/en_US/sdk.js",d.parentNode.insertBefore(a,d))}(document,"script","facebook-jssdk")):(q.css({display:"none",width:0,height:0,padding:0,margin:0}),b.facebookLeftPos=b.lyricsLeftPos+t.width());q.click(function(){var c=
 b.playlist_arr[b.origID].image,d=window.location.pathname.split("/");-1==c.indexOf("http://")&&-1==c.indexOf("https://")&&(-1!=d[d.length-1].indexOf(".")&&d.pop(),c=window.location.protocol+"//"+window.location.host+"/"+d.join("/")+"/"+b.playlist_arr[b.origID].image);FB.ui({method:"feed",name:a.facebookShareTitle,caption:b.playlist_arr[b.origID].title,description:a.facebookShareDescription,link:document.URL,picture:c},function(a){})});b.twitterTopPos=b.bordersdivTopPos+parseInt((r.height()-z.height())/
 2,10);b.twitterLeftPos=b.facebookLeftPos+q.width()+b.constantDistance;z.css({top:b.twitterTopPos+"px",left:b.twitterLeftPos+"px"});a.showTwitterBut||(z.css({display:"none",width:0,height:0,padding:0,margin:0}),b.twitterLeftPos=b.facebookLeftPos+q.width());z.click(function(){window.open("https://twitter.com/intent/tweet?url="+document.URL+"&text="+b.playlist_arr[b.origID].title,"Twitter","status = 1, left = 430, top = 270, height = 550, width = 420, resizable = 0")});var y=e(".thumbsHolderWrapper",
 d),V=e(".playlistPadding",d),O=e(".thumbsHolderVisibleWrapper",d),J=e(".thumbsHolder",d);b.audio2_html5_sliderVertical=e(".slider-vertical",d);var H=e(".selectedCategDiv",d),M=e(".innerSelectedCategDiv",d),P=e(".searchDiv",d),K=e(".search_term",d);a.showPlaylist||y.css({opacity:0,visibility:"hidden"});a.showPlaylistOnInit||y.css({opacity:0,visibility:"hidden","margin-top":"-20px"});a.showCategories||H.css({visibility:"hidden",height:0});H.css({"background-color":a.selectedCategBg,"background-position":"10px 50%",
 "margin-bottom":a.selectedCategMarginBottom+"px"});M.css({color:a.selectedCategOffColor,"background-position":a.playerWidth-2*a.playlistPadding-20+"px 50%"});a.showSearchArea||P.css({visibility:"hidden",height:0});P.css({"background-color":a.searchAreaBg,"margin-top":a.selectedCategMarginBottom+"px"});K.val(a.searchInputText);K.css({width:parseInt((a.playerWidth-2*a.playlistPadding)/2,10)+"px","background-color":a.searchInputBg,"border-color":a.searchInputBorderColor,color:a.searchInputTextColor});
 y.css({width:d.width()+2*a.playerPadding+"px",top:b.audioPlayerHeight+a.playlistTopPos+"px",left:"0px",background:a.playlistBgColor});O.width(d.width());b.playlist_arr=[];b.category_arr=[];var Q=[];e(".xaudioplaylist",d).children().each(function(){currentElement=e(this);b.total_images++;b.playlist_arr[b.total_images-1]=[];b.playlist_arr[b.total_images-1].title="";b.playlist_arr[b.total_images-1].author="";b.playlist_arr[b.total_images-1].image="";b.playlist_arr[b.total_images-1].category="";b.playlist_arr[b.total_images-
 1].sources_mp3="";b.playlist_arr[b.total_images-1].sources_ogg="";b.playlist_arr[b.total_images-1].buy_link="";b.playlist_arr[b.total_images-1].lyrics_link="";null!=currentElement.find(".xtitle").html()&&(b.playlist_arr[b.total_images-1].title=currentElement.find(".xtitle").html());null!=currentElement.find(".xauthor").html()&&(b.playlist_arr[b.total_images-1].author=currentElement.find(".xauthor").html());null!=currentElement.find(".ximage").html()&&(b.playlist_arr[b.total_images-1].image=currentElement.find(".ximage").html());
 null!=currentElement.find(".xbuy").html()&&(b.playlist_arr[b.total_images-1].buy_link=currentElement.find(".xbuy").html());null!=currentElement.find(".xlyrics").html()&&(b.playlist_arr[b.total_images-1].lyrics_link=currentElement.find(".xlyrics").html());if(null!=currentElement.find(".xcategory").html()){b.playlist_arr[b.total_images-1].category=currentElement.find(".xcategory").html()+";";Q=b.playlist_arr[b.total_images-1].category.split(";");for(var a=0;a<Q.length;a++)-1===b.category_arr.indexOf(Q[a])&&
 ""!=Q[a]&&b.category_arr.push(Q[a])}null!=currentElement.find(".xsources_mp3").html()&&(b.playlist_arr[b.total_images-1].sources_mp3=currentElement.find(".xsources_mp3").html());null!=currentElement.find(".xsources_ogg").html()&&(b.playlist_arr[b.total_images-1].sources_ogg=currentElement.find(".xsources_ogg").html())});b.numberOfCategories=b.category_arr.length;b.category_arr.sort();b.selectedCateg=a.firstCateg;""==a.firstCateg&&-1===b.category_arr.indexOf(a.firstCateg)&&(b.selectedCateg=b.category_arr[0]);
 M.html(b.selectedCateg);U(b,a,d,J,y,O,H,P,V,k,F,E,v,B,x,G,p,c,h,D);H.click(function(){b.search_val="";K.val(a.searchInputText);aa(b,a,d,J,y,O,H,M,P,V,k,F,E,v,B,x,G,p,c,h,D)});H.mouseover(function(){M.css({color:a.selectedCategOnColor})});H.mouseout(function(){M.css({color:a.selectedCategOffColor})});A.slider({value:a.initialVolume,step:.05,orientation:"horizontal",range:"min",max:1,animate:!0,slide:function(a,c){document.getElementById(b.audioID).volume=c.value},stop:function(a,b){}});document.getElementById(b.audioID).volume=
 a.initialVolume;A.css({background:a.volumeOffColor});e(".ui-slider-range",A).css({background:a.volumeOnColor});k.click(function(){var a=document.getElementById(b.audioID).paused;S();0==a?(document.getElementById(b.audioID).pause(),k.removeClass("AudioPause")):(document.getElementById(b.audioID).play(),k.addClass("AudioPause"))});f.click(function(){document.getElementById(b.audioID).currentTime=0;S();document.getElementById(b.audioID).play();k.addClass("AudioPause")});w.click(function(){b.categsAreListed||
 b.is_changeSrc&&!b.is_very_first||(a.autoPlay=!0,b.thumbsHolder_Thumbs.css({background:a.playlistRecordBgOffColor,"border-bottom-color":a.playlistRecordBottomBorderOffColor,color:a.playlistRecordTextOffColor}),X(b,a,"next"),R(b,a,J,d,k,F,E,v,B,x,G,p,c,h))});C.click(function(){b.categsAreListed||b.is_changeSrc&&!b.is_very_first||(a.autoPlay=!0,b.thumbsHolder_Thumbs.css({background:a.playlistRecordBgOffColor,"border-bottom-color":a.playlistRecordBottomBorderOffColor,color:a.playlistRecordTextOffColor}),
 X(b,a,"previous"),R(b,a,J,d,k,F,E,v,B,x,G,p,c,h))});I.click(function(){y.css({visibility:"visible"});0>y.css("margin-top").substring(0,y.css("margin-top").length-2)?(aux_opacity=1,aux_display="block",aux_margin_top="0px",aux_height=b.audioPlayerHeight+y.height()+a.playlistTopPos,y.css({display:aux_display}),b.selectedCateg_total_images>a.numberOfThumbsPerScreen&&b.audio2_html5_sliderVertical.css({opacity:1,display:"block"})):(aux_opacity=0,aux_display="none",aux_margin_top="-20px",b.selectedCateg_total_images>
 a.numberOfThumbsPerScreen&&b.audio2_html5_sliderVertical.css({opacity:0,display:"none"}),aux_height=b.audioPlayerHeight);y.animate({opacity:aux_opacity,"margin-top":aux_margin_top},500,"easeOutQuad",function(){y.css({display:aux_display})});D.animate({height:aux_height},500,"easeOutQuad",function(){})});u.click(function(){document.getElementById(b.audioID).muted?(document.getElementById(b.audioID).muted=!1,u.removeClass("VolumeButtonMuted")):(document.getElementById(b.audioID).muted=!0,u.addClass("VolumeButtonMuted"))});
 g.click(function(){a.shuffle?(g.removeClass("AudioShuffleON"),a.shuffle=!1):(g.addClass("AudioShuffleON"),a.shuffle=!0)});n.click(function(){window.open(a.pathToDownloadFile+"/"+b.playlist_arr[b.origID].sources_mp3)});m.click(function(){""!=b.playlist_arr[b.origID].buy_link?"_blank"==a.buyButTarget?window.open(b.playlist_arr[b.origID].buy_link.replace(/&amp;/g,"&")):window.location=b.playlist_arr[b.origID].buy_link.replace(/&amp;/g,"&"):alert("no link defined")});t.click(function(){""!=
 b.playlist_arr[b.origID].lyrics_link?"_blank"==a.lyricsButTarget?window.open(b.playlist_arr[b.origID].lyrics_link.replace(/&amp;/g,"&")):window.location=b.playlist_arr[b.origID].lyrics_link.replace(/&amp;/g,"&"):alert("no link defined")});J.swipe({swipeStatus:function(c,d,f,g,h,k){"up"!=f&&"down"!=f||0==g||(currentScrollVal=b.audio2_html5_sliderVertical.slider("value"),currentScrollVal="up"==f?currentScrollVal-1.5:currentScrollVal+1.5,b.audio2_html5_sliderVertical.slider("value",currentScrollVal),
 e("html, body").off("touchstart touchmove").on("touchstart touchmove",function(a){a.preventDefault()}),L(currentScrollVal,b,a,J))},threshold:100,maxTimeThreshold:500,fingers:"all"});K.on("click",function(){e(this).val("")});K.on("input",function(){b.search_val=K.val().toLowerCase();U(b,a,d,J,y,O,H,P,V,k,F,E,v,B,x,G,p,c,h,D)});document.getElementById(b.audioID).addEventListener("ended",function(){a.loop&&w.click()});a.googleTrakingOn&&ga("create",a.googleTrakingCode,"auto");R(b,a,J,d,k,F,E,v,B,x,G,
 p,c,h);b.timeupdateInterval=setInterval(function(){Z(b,a,d,F,E,v,B,k,c,x,G,p)},300);document.getElementById(b.audioID).addEventListener("durationchange",function(){b.is_changeSrc&&(b.totalTime=document.getElementById(b.audioID).duration)});if(-1!=l.indexOf("ipad")||-1!=l.indexOf("iphone")||-1!=l.indexOf("ipod")||-1!=l.indexOf("webos"))b.totalTime=0,document.getElementById(b.audioID).addEventListener("canplaythrough",function(){b.totalTime!=document.getElementById(b.audioID).duration&&(a.isSliderInitialized&&
 (F.slider("destroy"),a.isSliderInitialized=!1),a.isProgressInitialized&&(E.progressbar("destroy"),a.isProgressInitialized=!1),b.totalTime=document.getElementById(b.audioID).duration,T(b,a,d,F,E,v,B,k,c),a.isProgressInitialized&&E.progressbar({value:a.playerWidth}))});var Y=function(){""==b.origParentFloat&&(b.origParentFloat=d.parent().css("float"),b.origParentPaddingTop=d.parent().css("padding-top"),b.origParentPaddingRight=d.parent().css("padding-right"),b.origParentPaddingBottom=d.parent().css("padding-bottom"),
 b.origParentPaddingLeft=d.parent().css("padding-left"));a.playerWidth!=a.origWidth||a.playerWidth>e(window).width()?d.parent().css({"float":"none","padding-top":0,"padding-right":0,"padding-bottom":0,"padding-left":0}):d.parent().css({"float":b.origParentFloat,"padding-top":b.origParentPaddingTop,"padding-right":b.origParentPaddingRight,"padding-bottom":b.origParentPaddingBottom,"padding-left":b.origParentPaddingLeft});var c=d.parent().parent().width();385>a.playerWidth?A.css({display:"none"}):A.css({display:"block"});
 270>a.playerWidth?u.css({display:"none"}):u.css({display:"block"});240>a.playerWidth?w.css({display:"none"}):w.css({display:"block"});d.width()!=c&&(a.playerWidth=a.origWidth>c?c:a.origWidth,385>a.playerWidth?A.css({display:"none"}):A.css({display:"block"}),270>a.playerWidth?u.css({display:"none"}):u.css({display:"block"}),240>a.playerWidth?w.css({display:"none"}):w.css({display:"block"}),d.width()!=a.playerWidth&&(d.width(a.playerWidth),D.width(a.playerWidth),c=a.playerWidth-2*b.timerLeftPos-2*v.width()-
 2*b.seekBarLeftRightSpacing,E.width(c),F.width(c),r.css({width:a.playerWidth-2*b.constantDistance+"px"}),b.titleWidth=a.playerWidth-b.timerLeftPos-h.width()-2*b.constantDistance,x.width(b.titleWidth),p.width(b.titleWidth),y.width(d.width()+2*a.playerPadding),O.width(d.width()),H.width(a.playerWidth-2*a.playlistPadding),M.css({"background-position":a.playerWidth-2*a.playlistPadding-20+"px 50%"}),b.selectedCateg_total_images>a.numberOfThumbsPerScreen&&a.showPlaylist?(b.audio2_html5_sliderVertical.css({left:d.width()+
 2*a.playerPadding-b.audio2_html5_sliderVertical.width()-a.playlistPadding+"px"}),e(".thumbsHolder_ThumbOFF",d).css({width:d.width()+2*a.playerPadding-b.audio2_html5_sliderVertical.width()-2*a.playlistPadding-3+"px"})):e(".thumbsHolder_ThumbOFF",d).css({width:d.width()+2*a.playerPadding-2*a.playlistPadding+"px"}),K.css({width:parseInt((a.playerWidth-2*a.playlistPadding)/2,10)+"px"})),a.playerWidth<e(window).width()&&d.parent().css({"float":b.origParentFloat,"padding-top":b.origParentPaddingTop,"padding-right":b.origParentPaddingRight,
 "padding-bottom":b.origParentPaddingBottom,"padding-left":b.origParentPaddingLeft}))},W=!1;e(window).resize(function(){doResizeNow=!0;-1!=N&&9==N&&0==b.windowWidth&&(doResizeNow=!1);b.windowWidth==e(window).width()?(doResizeNow=!1,a.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(a.windowCurOrientation=window.orientation,doResizeNow=!0)):b.windowWidth=e(window).width();a.responsive&&doResizeNow&&(!1!==W&&clearTimeout(W),W=setTimeout(function(){Y()},300))});a.responsive&&
 Y()})};e.fn.audio2_html5.defaults={playerWidth:500,skin:"whiteControllers",initialVolume:.5,autoPlay:!1,loop:!0,shuffle:!1,playerPadding:0,playerBg:"#000000",bufferEmptyColor:"#929292",bufferFullColor:"#454545",seekbarColor:"#ffffff",volumeOffColor:"#454545",volumeOnColor:"#ffffff",timerColor:"#ffffff",songTitleColor:"#a6a6a6",songAuthorColor:"#ffffff",bordersDivColor:"#333333",showRewindBut:!0,showShuffleBut:!0,showDownloadBut:!0,showBuyBut:!0,showLyricsBut:!0,buyButTitle:"Buy Now",lyricsButTitle:"Lyrics",
 buyButTarget:"_blank",lyricsButTarget:"_blank",showFacebookBut:!0,facebookAppID:"845881738798857",facebookShareTitle:"HTML5 Audio Player PRO",facebookShareDescription:"A top-notch responsive HTML5 Audio Player compatible with all major browsers and mobile devices.",showTwitterBut:!0,showAuthor:!0,showTitle:!0,showPlaylistBut:!0,showPlaylist:!0,showPlaylistOnInit:!0,playlistTopPos:2,playlistBgColor:"#000000",playlistRecordBgOffColor:"#000000",playlistRecordBgOnColor:"#333333",playlistRecordBottomBorderOffColor:"#333333",
 playlistRecordBottomBorderOnColor:"#4d4d4d",playlistRecordTextOffColor:"#777777",playlistRecordTextOnColor:"#FFFFFF",categoryRecordBgOffColor:"#191919",categoryRecordBgOnColor:"#252525",categoryRecordBottomBorderOffColor:"#2f2f2f",categoryRecordBottomBorderOnColor:"#2f2f2f",categoryRecordTextOffColor:"#4c4c4c",categoryRecordTextOnColor:"#00b4f9",numberOfThumbsPerScreen:7,playlistPadding:18,showCategories:!0,firstCateg:"",selectedCategBg:"#333333",selectedCategOffColor:"#FFFFFF",selectedCategOnColor:"#00b4f9",
 selectedCategMarginBottom:12,showSearchArea:!0,searchAreaBg:"#333333",searchInputText:"search...",searchInputBg:"#ffffff",searchInputBorderColor:"#333333",searchInputTextColor:"#333333",searchAuthor:!0,googleTrakingOn:!1,googleTrakingCode:"",responsive:!1,origWidth:0,pathToDownloadFile:"",showPlaylistNumber:!0,isSliderInitialized:!1,isProgressInitialized:!1,isPlaylistSliderInitialized:!1}})(jQuery);
