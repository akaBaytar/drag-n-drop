import { Component } from './base';
import { bindDecorator } from '../decorators/autobind';
import { Validation, validate } from '../util/validation';
import { projectState } from '../state/index';

// user form rendering
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleDOM: HTMLInputElement;
  descriptionDOM: HTMLInputElement;
  peopleDOM: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleDOM = this.element.querySelector('#title')!;
    this.descriptionDOM = this.element.querySelector('#description')!;
    this.peopleDOM = this.element.querySelector('#people')!;

    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent(): void {}

  private getUserInput(): [string, string, number] | void {
    const title = this.titleDOM.value;
    const description = this.descriptionDOM.value;
    const people = this.peopleDOM.value;

    const titleValidation: Validation = {
      value: title,
      required: true,
    };

    const descriptionValidation: Validation = {
      value: description,
      required: true,
      minLength: 5,
    };

    const peopleValidation: Validation = {
      value: +people,
      required: true,
      min: 1,
      max: 10,
    };

    if (
      !validate(titleValidation) ||
      !validate(descriptionValidation) ||
      !validate(peopleValidation)
    ) {
      alert('Invalid input, please fill all inputs.');
      return;
    } else {
      return [title, description, +people];
    }
  }

  private clearInputs() {
    this.titleDOM.value = '';
    this.descriptionDOM.value = '';
    this.peopleDOM.value = '';
  }

  @bindDecorator
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInput = this.getUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}
