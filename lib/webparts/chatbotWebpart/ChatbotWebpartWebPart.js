var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import ChatbotWebpart from './components/ChatbotWebpart';
var ChatbotWebpartWebPart = /** @class */ (function (_super) {
    __extends(ChatbotWebpartWebPart, _super);
    function ChatbotWebpartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatbotWebpartWebPart.prototype.render = function () {
        var element = React.createElement(ChatbotWebpart, {
            botid: this.properties.botid,
            botname: this.properties.botname,
            botimage: this.properties.botimage,
            botlogo: this.properties.botlogo
        });
        ReactDom.render(element, this.domElement);
    };
    ChatbotWebpartWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ChatbotWebpartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ChatbotWebpartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    // header: {
                    //   description: strings.PropertyPaneDescription
                    // },
                    groups: [
                        {
                            groupName: "Bot Settings",
                            groupFields: [
                                PropertyPaneTextField('botid', {
                                    label: "BOT ID"
                                }),
                                PropertyPaneTextField('botname', {
                                    label: "BOT Name"
                                }),
                                PropertyPaneTextField('botlogo', {
                                    label: "BOT Logo"
                                }),
                                PropertyPaneTextField('botimage', {
                                    label: "BOT Image"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ChatbotWebpartWebPart;
}(BaseClientSideWebPart));
export default ChatbotWebpartWebPart;
//# sourceMappingURL=ChatbotWebpartWebPart.js.map