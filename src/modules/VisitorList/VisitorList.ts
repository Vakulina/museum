import { Component, ComponentProps } from "../../services/Component";
import s from "./VisitorList.module.scss";
import { getTemplate } from "./template";

type Visitor = {
  id: string;
  lastName: string;
  firstName: string;
};

class VisitorList extends Component {
  private visitors: Visitor[];

  private list: HTMLElement | null;

  private lastNameInput: HTMLInputElement | null;

  private firstNameInput: HTMLInputElement | null;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.visitors = [];
    this.list = null;
    this.lastNameInput = null;
    this.firstNameInput = null;
  }

  markup(): string {
    return getTemplate(s);
  }

  protected componentDidMount(): void {
    this.lastNameInput = this.element.querySelector<HTMLInputElement>('#last-name');
    this.firstNameInput = this.element.querySelector<HTMLInputElement>('#first-name');
    this.list = this.element.querySelector<HTMLUListElement>("#visitor-list");
  }

  protected getItemTemplate() {
    const itemElement = this.element.querySelector<HTMLTemplateElement>("#item-template")?.content.cloneNode(true);

    return itemElement as HTMLElement;
  }

  addListItem() {
    const item = this.getItemTemplate()?.querySelector('li');
    const lastName = this.lastNameInput?.value.trim();
    const firstName = this.firstNameInput?.value.trim();
    const id = this.generateId();

    if (item && item.firstElementChild instanceof HTMLInputElement && item.children[1] instanceof HTMLInputElement) {
      item.firstElementChild.value = lastName || '';
      item.children[1].value = firstName || '';
      item.id = id;
    }

    if (!lastName || !firstName) {
      return;
    }

    const newVisitor: Visitor = {
      id,
      lastName,
      firstName,
    };

    this.addVisitor(newVisitor, item);
    this.clearInputs();
  }

  private generateId(): string {
    return Date.now().toString();
  }

  private addVisitor(visitor: Visitor, item: any) {
    this.visitors.push(visitor);
    this.renderNewVisitor(item);
  }

  private clearInputs() {
    if (this.lastNameInput && this.firstNameInput) {
      this.lastNameInput.value = "";
      this.firstNameInput.value = "";
    }
  }

  private renderVisitors() {
    this.visitors.forEach((item) => {
      if (this.lastNameInput) this.lastNameInput.value = item.lastName;
      if (this.firstNameInput) this.firstNameInput.value = item.firstName;
      if (this.list && this.item) this.list.prepend(this.item);
    });
  }

  public getVisitors() {
    return this.visitors;
  }

  removeSelectedItems() {
    const checkboxes = this.getAllCheckboxes();

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const listItem = checkbox.closest("li");
        if (listItem) {
          const itemId = listItem.id;
          listItem.remove();
          this.visitors = this.visitors.filter((visitor) => visitor.id !== itemId);
        }
      }
    });

    this.checkSelectedCheckboxes();
  }

  private renderNewVisitor(item: HTMLElement) {
    this.list?.prepend(item);
  }

  private getAllCheckboxes(): NodeListOf<HTMLInputElement> {
    return this.element?.querySelectorAll<HTMLInputElement>(
      `.${s.visitorList__delete}`,
    ) || [];
  }

  checkSelectedCheckboxes() {
    const checkboxes = this.getAllCheckboxes();
    const hasCheckedCheckbox = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    const removeSelectedButton = this.element.querySelector<HTMLButtonElement>(
      "#remove-selected",
    );

    if (removeSelectedButton) {
      removeSelectedButton.disabled = !hasCheckedCheckbox;
    }
  }
}

export const visitorList = new VisitorList('div', {
  classes: s.visitorList,
  events: {
    click(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.id === "add-visitor") {
        visitorList.addListItem();
      }
      if (target.id === "remove-selected") {
        visitorList.removeSelectedItems();
      }
    },
    change(e: InputEvent) {
      if (!(e.target instanceof HTMLInputElement)) return;
      if (e.target.dataset.btn === "select-to-remove") {
        visitorList.checkSelectedCheckboxes();
      }
    },

  },
});
