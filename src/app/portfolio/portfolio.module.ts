import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
	{
		path: '',
		component: PortfolioComponent,
	},
];

@NgModule({
	declarations: [PortfolioComponent],
	imports: [CommonModule],
})
export class PortfolioModule {}

@NgModule({
	imports: [RouterModule.forChild(routes), PortfolioModule],
})
export class PortfolioRoutingModule {}
