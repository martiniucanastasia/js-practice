export class God {
  static create() {
    return [new Man('male', 'Adam'), new Woman('female', 'Eve')];
  }
}

export class Human {
  constructor(sex, name) {
    this.sex = sex;
    this.name = name;
  }
}

export class Man extends Human {
  constructor(...args) {
    super(...args);
  }
}

export class Woman extends Human {
  constructor(...args) {
    super(...args);
  }
}
