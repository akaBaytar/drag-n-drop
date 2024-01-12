import { Draggable } from '../models/interfaces';
import { Project } from '../models/type';
import { Component } from './base';
import { bindDecorator } from '../decorators/autobind';

// list item rendering
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get people() {
    if (this.project.people === 1) {
      return '1 person';
    } else {
      return `${this.project.people} people`;
    }
  }

  constructor(appID: string, project: Project) {
    super('single-project', appID, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @bindDecorator
  dragStartHandler(e: DragEvent) {
    e.dataTransfer!.setData('text/plain', this.project.id);
    e.dataTransfer!.effectAllowed = 'copy';
  }

  dragEndHandler(_: DragEvent) {}

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('span')!.textContent = this.people + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
