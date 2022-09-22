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
import styles from './ChatbotWebpart.module.scss';
import "../utilities/webchat.js";
var ChatbotWebpart = /** @class */ (function (_super) {
    __extends(ChatbotWebpart, _super);
    function ChatbotWebpart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: false
        };
        return _this;
    }
    ChatbotWebpart.prototype.render = function () {
        var _this = this;
        var styleOptions = {
            // Add styleOptions to customize web chat canvas
            hideUploadButton: true
        };
        var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + this.props.botid;
        var store = window.WebChat.createStore({}, function (_a) {
            var dispatch = _a.dispatch;
            return function (next) { return function (action) {
                if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
                    dispatch({
                        meta: {
                            method: "keyboard",
                        },
                        payload: {
                            activity: {
                                channelData: {
                                    postBack: true,
                                },
                                //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
                                name: 'startConversation',
                                type: "event"
                            },
                        },
                        type: "DIRECT_LINE/POST_ACTIVITY",
                    });
                }
                return next(action);
            }; };
        });
        fetch(theURL)
            .then(function (response) { return response.json(); })
            .then(function (conversationInfo) {
            window.WebChat.renderWebChat({
                directLine: window.WebChat.createDirectLine({
                    token: conversationInfo.token,
                }),
                store: store,
                styleOptions: styleOptions
            }, document.getElementById('webchat'));
        })
            .catch(function (err) { return console.error("An error occurred: " + err); });
        return (React.createElement("div", { className: styles.chatbotWebpart }, (this.state.checked) ?
            (React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.header, id: "header" },
                        React.createElement("div", { className: styles.header_content_container },
                            React.createElement("div", { className: styles.header_image_container },
                                React.createElement("img", { className: styles.header_image, src: this.props.botlogo })),
                            React.createElement("div", { className: styles.header_title_container },
                                React.createElement("div", { className: styles.header_title },
                                    React.createElement("span", { className: styles.title_text }, this.props.botname),
                                    React.createElement("span", { className: styles.close, onClick: function () { _this.setState({ checked: !_this.state.checked }); } }, "x"))))),
                    React.createElement("div", { className: styles.webchat, id: "webchat", role: "main" }))))
            : (React.createElement("div", { className: styles.botimage_container },
                React.createElement("div", { className: styles.chatbot_image },
                    React.createElement("img", { src: this.props.botimage, style: { maxHeight: 150 }, onClick: function () { _this.setState({ checked: !_this.state.checked }); } }))))));
    };
    return ChatbotWebpart;
}(React.Component));
export default ChatbotWebpart;
//# sourceMappingURL=ChatbotWebpart.js.map