import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ChatbotWebpartWebPartStrings';
import ChatbotWebpart from './components/ChatbotWebpart';
import { IChatbotWebpartProps } from './components/IChatbotWebpartProps';

export interface IChatbotWebpartWebPartProps {
  botid: string;
  botname: string;
  botimage: string;
  botlogo: string;
}

export default class ChatbotWebpartWebPart extends BaseClientSideWebPart<IChatbotWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IChatbotWebpartProps> = React.createElement(
      ChatbotWebpart,
      {
        botid: this.properties.botid,
        botname: this.properties.botname,
        botimage: this.properties.botimage,
        botlogo: this.properties.botlogo
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
