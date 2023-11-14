import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

import { Grain } from '../core/effects';

enum PhhhStateEnum {
  Untouched,
  Touched,
  Waiting,
  End
}

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Grain],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grain', { static: true })
  protected canvas!: ElementRef<HTMLCanvasElement>;
  phhhStatus = PhhhStateEnum.Untouched;
  phhhEnum = PhhhStateEnum;

  statusProxy: any = new Proxy({}, {
    get: (target: {}, p, receiver: any): boolean => {
      return this.phhhStatus.toString() === p;
    }
  });

  constructor(
    private grain: Grain,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {
  }

  ngAfterViewInit() {
    this.grain.setTarget(this.canvas.nativeElement);
  }

  onClickDontTouch() {
    switch (this.phhhStatus) {
      case PhhhStateEnum.Untouched: {
        this.grain.start();
        this.phhhStatus = PhhhStateEnum.Touched;
        break;
      }
      case PhhhStateEnum.Waiting: {
        this.grain.stop();
        this.phhhStatus = PhhhStateEnum.End;
        break;
      }
    }
  }
}
