import { Component } from '@angular/core';
 
export class Hero {
  id: number;
  name: string;
  //没有构造函数，则可以通过 直接赋给变量的方式创建出一个对象
  //问题：如果有构造函数，必须通过构造函数吗？shore:不是！
  // hero:Hero ={id: 1, name:'name1'}
  /*
  constructor(id: number,name: string) {
    this.id = id;
    this.name = name;
  }
  */
}
 

/*标记(修饰)一个类为angular的component，并提供额外的决定component如何处理，初始化及在运行时如何使用的meta data
一个component总是有一个template，每一个element只有一个component能被初始化。
一个component是一个NgModule的成员

写法：
@Component()
class oneComponent{
}

可以 加 export class oneComponent{}
*/
/*类比angularjs：
1.同是component
2.同属于一个module
3.angular中没有scope，直接使用下面的class中的field
4.angular中通过selector给出html中的directive名称；angularjs中directive的名称在注册时给出
例如： angular.module('someModule').component('componentName',{templateUrl:, controller:})
问题：原因?便于模块化?
*/
@Component({
  /*
  */
  selector: 'my-app',
  //问题：原理 [(ngModel)]
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = 
  {
    id: 1,
    name: 'Windstorm'
  };
}