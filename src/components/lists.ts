import { Component } from './base';
import { ProjectItem } from './item';
import { bindDecorator } from '../decorators/autobind';
import { projectState } from '../state/index';
import { DragTarget } from '../models/interfaces';
import { Project, ProjectStatus } from '../models/type';

// project lists rendering
export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: 'Active' | 'Finished') {
    super('project-list', 'app', false, `${type}-projects`);

    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  renderContent() {
    const id = `${this.type}-projects-list`;

    this.element.querySelector('ul')!.id = id;
    this.element.querySelector('h2')!.textContent = this.type + ' Projects';
  }

  @bindDecorator
  dragOverHandler(e: DragEvent) {
    if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
      e.preventDefault();
      this.element.querySelector('ul')!.classList.add('droppable');
    }
  }

  @bindDecorator
  dropHandler(e: DragEvent) {
    const id = e.dataTransfer!.getData('text/plain');
    projectState.moveProject(
      id,
      this.type === 'Active' ? ProjectStatus.Active : ProjectStatus.Finished
    );
    this.element.querySelector('ul')!.classList.remove('droppable');
  }

  @bindDecorator
  dragLeaveHandler(_: DragEvent) {
    this.element.querySelector('ul')!.classList.remove('droppable');
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === 'Active') {
          return project.status === ProjectStatus.Active;
        }

        return project.status === ProjectStatus.Finished;
      });

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listDOM = document.querySelector(`#${this.type}-projects-list`)!;

    listDOM.innerHTML = '';

    for (const project of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, project);
    }
  }
}
