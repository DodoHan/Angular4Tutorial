import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent }      from './heroes/heroes.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from  './crisis-center/crisis-center.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  //{ path: 'crisis-center', component: CrisisCenterComponent }
];

@NgModule({
    /**
     * 把被配置过的RouterModule引入，RouterModule.forRoot(routes)返回ModuleWithProviders类型。
     * 这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。
     */
    imports:[RouterModule.forRoot(routes) ],
    /**
     *  导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用
     */
    exports: [ RouterModule ]
})
export class AppRoutingModule {}