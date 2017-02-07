<!DOCTYPE html>
<!-- saved from url=(0036)http://js1k.com/2017-magic/shim.html -->
<html><!-- note: your demo in this shim runs in an iframe with this content: https://gist.github.com/qfox/3cccc4f36c8319e09bb7 --><!--
  (c) js1k.com 2017
  Note: submissions belong to their respectful owner, do not copy without their consent
  --><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>JS1k 2017 - NNNN - TITLE</title>
    <meta name="author" content="YOU">
    <link rel="icon" type="image/png" href="http://js1k.com/favicon.png">
    <link rel="canonical" href="http://js1k.com/2017-magic/demo/NNNN">
    <link rel="shortlink" href="http://js1k.com/NNNN">
    <script>
      // GA
    </script>
    <style>
      /* http://qfox.nl/notes/333 */
      body,html,iframe{margin:0;padding:0;border:0;width:100%;height:100%}
      iframe{position:absolute;top:0;left:0;padding-top:50px;box-sizing:border-box}
      header{position:relative;z-index:1;height:47px;padding-top:2px;border-bottom:1px solid #000;box-shadow:0 -10px 25px #ccc inset;background-color:#eee}
      aside,div,h1,p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-size:16px;font-weight:inherit;line-height:22px;padding:0;margin:0;cursor:default}
      aside,h1{display:inline}
      a{color:#000;text-decoration:none;border-bottom:1px dashed #000}
      a:hover{border-bottom:1px solid red}
      a[href="0"]{text-decoration:line-through;pointer-events:none;border-bottom:0;color:#ccc}
      .button{float:left;width:40px;height:40px;line-height:40px;text-align:center;padding:0;margin:2px 0 0 10px;border:1px solid #888;border-color:#ddd #888 #888 #ddd;font-family:sans-serif;font-size:30px;font-weight:700;cursor:pointer}
      .button:hover{color:red;border-bottom-color:#888}
      .r{margin-right:10px}
      time{display:none}
    </style>
  </head>
  <body>
    <header><a href="http://js1k.com/2017-magic/500" class="button p">↞</a><a href="http://js1k.com/2017-magic/502" class="button n">↠</a>
      <div class="button r" title="restart just the demo (local, without remote fetch)">↻</div><div>
        <h1>
          <a href="http://js1k.com/">JS1k</a>
          <a href="http://js1k.com/2017-magic">2017</a>
          <strong></strong> demo
          —
          "TITLE" by YOU
        </h1>
        
        <aside>
          —
          1024 bytes
          —
          <a href="http://js1k.com/2017-magic/details/NNNN">demo details</a>
          —
          <a href="http://js1k.com/2017-magic/demos">list of demos</a>
          —
          <a href="http://js1k.com/1955" title="short link for your mobile devices" rel="nofollow">js1k.com/NNNN</a>
          <time datetime="NOW" pubdate="">NOW</time>
        </aside>
      </div>

      
      
    <p>
          <em>
            FIRST PART OF YOUR DESC GOES HERE
          </em>
        </p></header>

    <script type="shim">
      // this is the SHIM (will be ran in the context of the iframe...)

      // unprefix some popular vendor prefixed things (but stick to their original name)
      iwin.AudioContext = iwin.AudioContext || iwin.webkitAudioContext; // ios8 unmutes audio only during the first user triggered event with sound
      iwin.requestAnimationFrame = iwin.requestAnimationFrame || iwin.mozRequestAnimationFrame || iwin.webkitRequestAnimationFrame || iwin.msRequestAnimationFrame || function(f){ iwin.setTimeout(f, 1000/30); };
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      if (typeof OscillatorNode !== 'undefined' && OscillatorNode.prototype) {
        OscillatorNode.prototype.start = OscillatorNode.prototype.start || OscillatorNode.prototype.noteOn;
        OscillatorNode.prototype.stop = OscillatorNode.prototype.stop || OscillatorNode.prototype.noteOff;
      }

      a = canvas;
      b = idoc.body;
      d = idoc.document;

      if (!TOKEN_WEBGL) iwin.c = canvas.getContext('2d');
      else iwin.g = (function () {
        iwin.onorientationchange = iwin.onresize = null;
        try {
          var o = { antialias: true, stencil: true };
          var gl = canvas.getContext('webgl', o) || canvas.getContext('experimental-webgl', o);

          // keep in scope, must not be garbage collected
          iwin.__glExts =
            [ 'OES_texture_float', 'OES_texture_float_linear', 'OES_standard_derivatives',
              'EXT_texture_filter_anisotropic', 'MOZ_EXT_texture_filter_anisotropic', 'WEBKIT_EXT_texture_filter_anisotropic',
              'WEBGL_compressed_texture_s3tc', 'MOZ_WEBGL_compressed_texture_s3tc', 'WEBKIT_WEBGL_compressed_texture_s3tc'
            ].map(function(ext) {
                return gl.getExtension(ext);
              });
        } catch (e) {
          idoc.body.innerHTML = 'WebGL not supported.';
          iwin.a=iwin.b=iwin.c=iwin.d=null;
          throw e;
        }

        return gl;
      })();
    </script>
    <script>
      // submission form configurables:

      // enable canvas shim at all? (2d/3d). other settings are ignored if this is false.
      var TOKEN_CANVAS_SHIM = true;
      // true enables webgl shim (exposes `g`), false enables canvas shim (exposes `c`)
      var TOKEN_WEBGL = false;
      // px, 0 means always 100%
      var TOKEN_MAX_WIDTH = 0;
      // px, 0 means always 100%
      var TOKEN_MAX_HEIGHT = 0;
      // should the size be smaller than specified if viewport is smaller?
      var TOKEN_MAX_100P = true;
      // only if width<100%
      var TOKEN_CENTER_CANVAS = false;
      // "press" reload button on orientation change?
      var TOKEN_RELOAD_ONORIENTATIONCHANGE = true;
    </script>
    <script type="demo">
    <?=file_get_contents("demo.js")?>
    </script>
    <script>
      (function(){var doc=document;var header=doc.getElementsByTagName("header")[0];var firstChild=header.firstChild;var p=doc.getElementsByClassName("p")[0];
      var n=doc.getElementsByClassName("n")[0];header.insertBefore(p,firstChild);header.insertBefore(n,firstChild);header.appendChild(doc.getElementsByTagName
      ("p")[0])})();(function reload(fullscreen){var doc=document;var header=doc.getElementsByTagName("header")[0];var iframe=doc.createElement("iframe");doc.
      body.appendChild(iframe);var iwin=iframe.contentWindow;var idoc=iframe.contentDocument;idoc.open();idoc.close();idoc.write("<!doctype html>"+'<html st'+
      'yle="margin: 0; padding: 0; border: 0;'+(TOKEN_CANVAS_SHIM?' width: 100%; height: 100%;':'')+'">'+"<head>"+'<meta charset="utf-8">'+'<body style="mar'+
      'gin: 0; padding: 0; border: 0;'+(TOKEN_CANVAS_SHIM?' width: 100%; height: 100%;':'')+'">'+(TOKEN_CANVAS_SHIM?'<canvas style="display: block;'+(
      TOKEN_CENTER_CANVAS?" margin: auto;":"")+'"></canvas>':"")+"");if(TOKEN_CANVAS_SHIM){var canvas=idoc.getElementsByTagName("canvas")[0];var cs=canvas.style
      ;idoc.body.clientWidth;cs.width=(canvas.width=Math.max(Math.min(TOKEN_MAX_WIDTH||innerWidth,innerWidth),0)||0)+"px";cs.height=(canvas.height=Math.max(
      Math.min(TOKEN_MAX_HEIGHT||innerHeight-50,innerHeight-50),0)||0)+"px"}if(TOKEN_RELOAD_ONORIENTATIONCHANGE)onorientationchange=reloadClick;iwin.AudioContext
      =iwin.AudioContext||iwin.webkitAudioContext;iwin.requestAnimationFrame=iwin.requestAnimationFrame||iwin.mozRequestAnimationFrame||iwin.
      webkitRequestAnimationFrame||iwin.msRequestAnimationFrame||function(f){iwin.setTimeout(f,1E3/30)};if(TOKEN_CANVAS_SHIM)canvas.requestPointerLock=canvas.
      requestPointerLock||canvas.mozRequestPointerLock||canvas.webkitRequestPointerLock;idoc.body.requestPointerLock=idoc.body.requestPointerLock||idoc.body.
      mozRequestPointerLock||idoc.body.webkitRequestPointerLock;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.
      mozGetUserMedia||navigator.msGetUserMedia;var iwo=iwin.OscillatorNode&&iwin.OscillatorNode.prototype;iwo&&(iwo.start=iwo.start||iwo.noteOn)&&(iwo.stop=iwo
      .stop||iwo.noteOff);if(TOKEN_CANVAS_SHIM)iwin.a=canvas;iwin.b=idoc.body;d=idoc;if(TOKEN_CANVAS_SHIM){if(!TOKEN_WEBGL)iwin.c=canvas.getContext("2d");if(
      TOKEN_WEBGL)iwin.g=function(){iwin.onorientationchange=iwin.onresize=null;try{var o={antialias:true,stencil:true};var gl=canvas.getContext("webgl",o)||
      canvas.getContext("experimental-webgl",o);iwin.__glExts=["OES_texture_float","OES_texture_float_linear","OES_standard_derivatives","EXT_texture_filter_"+
      "anisotropic","MOZ_EXT_texture_filter_anisotropic","WEBKIT_EXT_texture_filter_anisotropic","WEBGL_compressed_texture_s3tc","MOZ_WEBGL_compressed_textur"+
      "e_s3tc","WEBKIT_WEBGL_compressed_texture_s3tc"].map(function(ext){return gl.getExtension(ext)})}catch(e){idoc.body.innerHTML="WebGL not supported.";iwin
      .a=iwin.b=iwin.c=iwin.d=null;throw e;}return gl}()}var demo=idoc.createElement("script");demo.textContent=doc.querySelector('script[type="demo"]').
      textContent;idoc.body.appendChild(demo);idoc.close();iframe.contentWindow.focus();var firstLine=doc.getElementsByTagName("div")[0];function reloadClick(b)
      {doc.body.removeChild(iframe);r.parentElement.removeChild(r);iframe=null;r=null;idoc=null;header=null;reload(b)}window.reload=reloadClick;var r=doc.
      createElement("div");r.innerHTML="&#8635;";r.className="button r";r.title="restart just the demo (local, without remote fetch)";r.onclick=reloadClick;
      header.insertBefore(r,firstLine)})();
    </script>
  

</body></html>
