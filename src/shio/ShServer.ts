'use strict'
import { ShPageLayout } from './ShPageLayout.ts';
import { ShObject } from './ShObject.ts';
import { ShContent } from './ShContent.ts';

export class ShServer {
    private endpoint: string;

    private templatePath: string = "./src/template/viglet";

    public constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public async getPage(url: string): Promise<string> {
        var urlArray = url.split("/");
        var context = urlArray[1];
        var siteName = urlArray[2];
        var format = urlArray[3];
        var locale = urlArray[4];
        var objectPath = "/" + urlArray.slice(5, urlArray.length).join("/");

        if (context === "sites") {
            var pageLayout = new ShPageLayout(this, url);
            var shObject = new ShObject();
            let shContent = new ShContent(this);
            let content = await shContent.getContent(url);
            return await pageLayout.render(content, shObject);
        }
        else {
            return "";
        }
    }
    /**
     * getEndpoint
     */
    public getEndpoint() {
        return this.endpoint;
    }

    /**
     * setTemplatePath
     */
    public setTemplatePath(templatePath: string) {
        this.templatePath = templatePath;
    }

    /**
     * getTemplatePath
     */
    public getTemplatePath() {
        return this.templatePath;
    }
}