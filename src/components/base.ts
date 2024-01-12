  // component base
  export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateDOM: HTMLTemplateElement;
    appDOM: T;
    element: U;

    constructor(
      templateID: string,
      appID: string,
      insertAtStart: boolean,
      newElementID?: string
    ) {
      this.templateDOM = document.querySelector(`#${templateID}`)!;
      this.appDOM = document.querySelector(`#${appID}`)! as T;

      const importedNode = document.importNode(this.templateDOM.content, true);
      this.element = importedNode.firstElementChild as U;
      if (newElementID) this.element.id = newElementID;

      this.attach(insertAtStart);
    }

    private attach(insertAtBegin: boolean) {
      this.appDOM.insertAdjacentElement(
        insertAtBegin ? 'afterbegin' : 'beforeend',
        this.element
      );
    }

    abstract configure(): void;
    abstract renderContent(): void;
  }