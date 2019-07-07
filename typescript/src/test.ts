import * as puppeteer from 'puppeteer';

export class Test {

    /**
     *
     */
    constructor() {}

    /**
     *
     */
    async test() {
        // chromium
        const browser = await puppeteer.launch({headless: false, slowMo: 10});

        // google chrome
        // const browser = await puppeteer.launch({
        //     executablePath: "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
        //     headless: false,
        //     slowMo: 10
        // });

        const page = await browser.newPage();

        await page.goto("http://localhost/", {waitUntil: 'domcontentloaded'});
        await page.setViewport({width: 1024, height: 600});


        await browser.close();
    }
}
