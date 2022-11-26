import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { APP_ROUTES, ROUTING } from 'src/app/app.routing';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {

  constructor(private router: Router) { }
  routes: Routes = APP_ROUTES;
  ngOnInit(): void {
  }

  onSelect(target: any): void {
    this.router.navigate([target.value]);
  }

}
