import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSpaService } from '../single-spa.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit, OnDestroy {

  constructor(private service: SingleSpaService, private route: ActivatedRoute) {
  }

  @ViewChild('appContainer', { static: true }) private appContainerRef: ElementRef;
  private appName: string;

  ngOnInit() {
    this.appName = this.route.snapshot.data.app;
    this.service.mount(this.appName, this.appContainerRef.nativeElement).subscribe();
  }

  async ngOnDestroy() {
    await this.service.unmount(this.appName).toPromise();
  }

}
