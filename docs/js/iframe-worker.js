(()=>{function d(t,e){parent.postMessage(t,e||"*")}function c(...t){return t.reduce((e,n)=>e.then(()=>new Promise(r=>{let o=document.createElement("script");o.src=n,o.addEventListener("load",()=>r()),document.body.appendChild(o)})),Promise.resolve())}function m(){let t=document.createElement("iframe");return t.width=t.height=t.frameBorder="0",t}var i=class{constructor(e,n){this.url=e;this.onerror=null;this.onmessage=null;this.onmessageerror=null;this.handleMessage=e=>{e.source===this.worker&&(e.stopImmediatePropagation(),this.dispatchEvent(new MessageEvent("message",{data:e.data})),this.onmessage&&this.onmessage(e))};this.handleError=(e,n,r,o,s)=>{if(n===this.url.toString()){let a=new ErrorEvent("error",{message:e,filename:n,lineno:r,colno:o,error:s});this.dispatchEvent(a),this.onerror&&this.onerror(a)}};if(typeof n!="undefined")throw new TypeError("Options are not supported for iframe workers");let r=new EventTarget;this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=r.dispatchEvent.bind(r),document.body.appendChild(this.iframe=m()),this.worker.document.open(),this.worker.document.write(`
      <html>
        <body>
          <script>
            postMessage = ${d}
            importScripts = ${c}
            addEventListener("error", function(ev) {
              parent.dispatchEvent(new ErrorEvent("error", {
                filename: "${e}",
                error: ev.error
              }))
            })
          <\/script>
          <script src="${e}?${+Date.now()}"><\/script>
        </body>
      </html>
    `),this.worker.document.close(),window.addEventListener("message",this.handleMessage),window.onerror=this.handleError,this.ready=new Promise((o,s)=>{this.worker.onload=o,this.worker.onerror=s})}terminate(){document.body.removeChild(this.iframe),window.removeEventListener("message",this.handleMessage),window.onerror=null}postMessage(e){this.ready.catch().then(()=>{this.worker.dispatchEvent(new MessageEvent("message",{data:e}))})}get worker(){if(!this.iframe.contentWindow)throw new ReferenceError("Invalid iframe: expected window to be present");return this.iframe.contentWindow}};window.IFrameWorker=i;location.protocol==="file:"&&(window.Worker=i);})();
