import { Injectable, OnModuleInit } from '@nestjs/common';
import * as five from 'johnny-five';

@Injectable()
export class AppService implements OnModuleInit {
  public lcd: any;

  onModuleInit() {
    this.initLCD();
  }

  initLCD() {
    const board = new five.Board({
      repl: false,
    });
    board.on('ready', () => {
      const lcd = new five.LCD({
        controller: 'PCF8574AT',
      });
      lcd.useChar('heart');
      this.lcd = lcd;
    });
  }

  root(): string {
    return 'Hello World!';
  }

  write(data: any) {
    console.log(data);
    this.lcd
      .clear()
      .cursor(0, 0)
      .print('I :heart: ' + data.message);
  }
}
