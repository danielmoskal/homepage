import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioRoutingModule } from './portfolio.module';

const routes: Routes = [
	{
		path: 'portfolio',
		loadChildren: (): Promise<PortfolioRoutingModule> =>
			import('./portfolio.module').then((m) => m.PortfolioRoutingModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class PortfolioEntryModule {}
