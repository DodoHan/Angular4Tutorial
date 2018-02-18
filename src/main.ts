import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
当我们通过main.ts中的AppComponent类启动时，Angular 在index.html中查找一个<my-app>元素， 然后实例化一个AppComponent，并将其渲染到<my-app>标签中。
*/
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
