
const path = require('path');
const gen = require('../helper/gen');
const fs = require('fs');


(async() => {
  const list = [
    "https://macosxautomation.com/applescript/firsttutorial/index.html",
    "https://macosxautomation.com/applescript/firsttutorial/01.html",
    "https://macosxautomation.com/applescript/firsttutorial/02.html",
    "https://macosxautomation.com/applescript/firsttutorial/03.html",
    "https://macosxautomation.com/applescript/firsttutorial/04.html",
    "https://macosxautomation.com/applescript/firsttutorial/05.html",
    "https://macosxautomation.com/applescript/firsttutorial/06.html",
    "https://macosxautomation.com/applescript/firsttutorial/07.html",
    "https://macosxautomation.com/applescript/firsttutorial/08.html",
    "https://macosxautomation.com/applescript/firsttutorial/09.html",
    "https://macosxautomation.com/applescript/firsttutorial/10.html",
    "https://macosxautomation.com/applescript/firsttutorial/11.html",
    "https://macosxautomation.com/applescript/firsttutorial/12.html",
    "https://macosxautomation.com/applescript/firsttutorial/13.html",
    "https://macosxautomation.com/applescript/firsttutorial/14.html",
    "https://macosxautomation.com/applescript/firsttutorial/15.html",
    "https://macosxautomation.com/applescript/firsttutorial/16.html",
    "https://macosxautomation.com/applescript/firsttutorial/17.html",
    "https://macosxautomation.com/applescript/firsttutorial/18.html",
  ]

  const dstDir = path.join(__dirname, 'pdf')
  if (!fs.existsSync(dstDir)){
    fs.mkdirSync(dstDir)
  }

  for (let i = 0; i < list.length; i++) {
    const url = list[i]
    
    const filePath = path.join(dstDir, `${i}.pdf`)
    const style = path.join(__dirname, 'applescript.css')
    await gen.fromURL(url, filePath, {
      style
    })
  }
})();
