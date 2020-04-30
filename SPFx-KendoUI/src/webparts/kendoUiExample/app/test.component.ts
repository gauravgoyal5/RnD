export class TestController{
  constructor(){}
  public name:string="Gaurav Goyal";
}

export let TestComponent = {
  selector: "testComponent",
  template: require("./test.component.html").toString(),
  bindings: {},
  controller: TestController
};
