import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IChatbotWebpartWebPartProps {
    botid: string;
    botname: string;
    botimage: string;
    botlogo: string;
}
export default class ChatbotWebpartWebPart extends BaseClientSideWebPart<IChatbotWebpartWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ChatbotWebpartWebPart.d.ts.map