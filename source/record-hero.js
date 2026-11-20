const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:720}});
await p.goto('file:///tmp/claude-0/vid/scene.html');
for(let i=0;i<300;i++){await p.evaluate(t=>draw(t),i/30);await p.screenshot({path:`f/${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}
await b.close();})();
