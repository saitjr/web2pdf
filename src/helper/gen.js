const puppeteer = require('puppeteer')
const _ = require('lodash')
const gen = module.exports = {}

/** 
 * @params { map } options
 *    options.style: css file path
 *    options.cookie: cookie string
 */
gen.fromURL = async (url, path, options) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // 设置 cookie
  if (options && options.cookie) {
    await page.setCookie(options.cookie)
  }
  await page.goto(url, { waitUntil: 'networkidle2' });
  // 注入 style
  if (options && options.style) {
    await page.addStyleTag({path: options.style})
  }
  await page.pdf({path, format: 'A4'});

  await browser.close();
}
