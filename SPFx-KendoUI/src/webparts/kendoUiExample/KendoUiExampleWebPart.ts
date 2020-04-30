import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './KendoUiExampleWebPart.module.scss';
import * as strings from 'KendoUiExampleWebPartStrings';

export interface IKendoUiExampleWebPartProps {
  description: string;
}

import * as angular from "angular";
import "./app/app.module";

export default class KendoUiExampleWebPart extends BaseClientSideWebPart <IKendoUiExampleWebPartProps> {

  private $injector: angular.auto.IInjectorService;

  public render(): void {

    if (this.renderedOnce === false) {
      this.domElement.innerHTML = `<test-component></test-component>`;
      this.$injector = angular.bootstrap(this.domElement, ["greeting-webpart-app"]);
    }
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
