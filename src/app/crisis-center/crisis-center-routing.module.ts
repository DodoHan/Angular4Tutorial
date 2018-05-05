import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard/dashboard.component';
import { CrisisListComponent }      from './crisis-list/crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from  './crisis-center.component';
import { CrisisInfoComponent } from  './crisis-info/crisis-info.component';
import { CrisisContactComponent } from  './crisis-contact/crisis-contact.component';



const routes: Routes = 
/*
[
  { path: 'crisis-detail/:id', component: CrisisDetailComponent },
  { path: 'crisis-list', component: CrisisListComponent }
];
*/
[{
  path: 'crisis-center',
  //path: '',
component: CrisisCenterComponent,
children: [
  {
    path:'crisis-contact',
    component: CrisisContactComponent
  },
  {
    path: 'crisis-info',
    component: CrisisInfoComponent,
    children: [
      {
        path: 'crisis-detail/:id',
        component: CrisisDetailComponent
      },
      {
        path: 'crisis-list',
        component: CrisisListComponent,
        pathMatch:'full'
      },
      /*
      {
        //Shore: note the following doesn't work, if 'crisis-center' is also defined in app-routing.module
        //Shore: we can use '', but it will cause the routerlinkactive doesn't work well!.
        //Now the routerlink active doesn't work well completely.
        path: '',
        redirectTo: 'crisis-list',
        pathMatch:'full'
        
      },
      */
      {
        path: '',
        component: CrisisListComponent,
        pathMatch:'full'
      }
      
    ]
  }  
]}]

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
export class CrisisCenterRoutingModule {}