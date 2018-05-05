import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroListComponent }      from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
//import { CrisisListComponent } from  './crisis-list/crisis-list.component';

const routes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroListComponent }
];

@NgModule({
    /**
     * 把被配置过的RouterModule引入，RouterModule.forRoot(routes)返回ModuleWithProviders类型。
     * 
     */
    imports:[RouterModule.forChild(routes) ],
    /**
     *  导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用
     */
    exports: [ RouterModule ]
})
export class HeroesRoutingModule {}