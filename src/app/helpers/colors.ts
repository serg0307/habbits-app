

export class BaseColors {
  static background = '#DDDDFD';
  static lightblue = 'lightblue';
  static lightpink = 'lightpink';
  static white = '#FFF';
  static black = '#000';
  static red = '#dc3545';
  static yellow = '#ffc107';
  static green = '#198754';
}
export class GridColors {
  static highlights = {
    alert: BaseColors.red,
    warning: BaseColors.yellow,
    ok: BaseColors.green
  }
  static primary = {
    header: {
      background: BaseColors.lightpink,
      text: BaseColors.black
    },
    content: {
      background: BaseColors.background,
      text: BaseColors.black
    }
  }
  static secondary = {
    header: {
      background: BaseColors.lightblue,
      text: BaseColors.black
    },
    content: {
      background: BaseColors.background,
      text: BaseColors.white
    }
  }
}
