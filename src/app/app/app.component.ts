import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Optional,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

import { Grain } from '../core/effects';
import { GRAIN_EFFECT_TOKEN } from '../core/tokens/grain.token';

enum PhhhStateEnum {
  Untouched,
  Touched,
  Waiting,
  End,
}

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grain', { static: true })
  protected canvas!: ElementRef<HTMLCanvasElement>;
  phhhStatus = PhhhStateEnum.Untouched;
  phhhEnum = PhhhStateEnum;

  statusProxy: any = new Proxy(
    {},
    {
      get: (target: {}, p, receiver: any): boolean => {
        return this.phhhStatus.toString() === p;
      },
    }
  );

  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    @Optional() @Inject(GRAIN_EFFECT_TOKEN) private grain?: Grain
  ) {
    console.log(grain);
  }

  ngAfterViewInit() {
    this.grain?.setTarget(this.canvas.nativeElement);
  }

  onClickDontTouch() {
    switch (this.phhhStatus) {
      case PhhhStateEnum.Untouched: {
        this.grain?.start();
        this.phhhStatus = PhhhStateEnum.Touched;
        break;
      }
      case PhhhStateEnum.Waiting: {
        this.grain?.stop();
        this.phhhStatus = PhhhStateEnum.End;
        break;
      }
    }
  }
}
