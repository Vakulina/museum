import s from "./Order.module.scss";

export class OrderFormValidator {
  private form: HTMLFormElement;

  private inputs: HTMLInputElement[];

  constructor(formId: string) {
    this.form = document.getElementById(formId) as HTMLFormElement;
    this.inputs = Array.from(
      this.form?.querySelectorAll("input, select"),
    ) as HTMLInputElement[];
    this.initialize();
  }

  private initialize() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", this.handleInput.bind(this));
    });
  }

  private handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputId = input.id;
    const errorElement = document.querySelector(
      `#${inputId}-error`,
    ) as HTMLElement;

    if (!input.validity.valid) {
      if (errorElement) this.showInputError(errorElement);
    } else if (errorElement) {
      this.hideInputError(errorElement);
    }

    if (input.type === "date") {
      this.validateDate(input, errorElement);
    }

    if (input.id === "input-time") {
      this.validateTime(input, errorElement);
    }
  }

  private validateTime(input: HTMLInputElement, errorElement: HTMLElement) {
    if (!input.value) {
      errorElement.textContent = "Enter a valid time";
      this.showInputError(errorElement);
      document.querySelector(`.${s.order__time}`)?.removeAttribute("data-tool");
    } else {
      this.hideInputError(errorElement);
      document
        .querySelector(`.${s.order__time}`)
        ?.setAttribute("data-tool", "tool");
    }
  }

  private validateDate(input: HTMLInputElement, errorElement: HTMLElement) {
    const selectedDate = new Date(input.value);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (selectedDate < tomorrow) {
      this.showInputError(errorElement);
    } else {
      this.hideInputError(errorElement);
    }
  }

  public handleSubmit() {
    if (this.validateForm()) {
      const result = this.inputs.reduce(
        (obj: { [key: string]: string }, item) => {
          obj[item.id] = item.value;
          return obj;
        },
        {},
      );
      return result;
    }
  }

  private showInputError(errorElement: HTMLElement) {
    errorElement.classList.add(`${s.order__error_active}`);
  }

  private hideInputError(errorElement: HTMLElement) {
    errorElement.classList.remove(`${s.order__error_active}`);
  }

  public validateForm(): boolean {
    let isValid = true;

    this.inputs.forEach((input) => {
      const inputId = input.id;
      const errorElement = document.querySelector(
        `#${inputId}-error`,
      ) as HTMLElement;
      if (!input.validity.valid) {
        if (errorElement) this.showInputError(errorElement);
        isValid = false;
      } else if (errorElement) this.hideInputError(errorElement);
    });

    return isValid;
  }
}
