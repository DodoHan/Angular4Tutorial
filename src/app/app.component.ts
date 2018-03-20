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

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
 

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
  <!-- 表达式上下文
  1. 组件 （是主力， 即class AppComponent中定义的）
  2. 模板输入变量 (let hero)
  3. 模板引用变量(#heroInput) ： 模板引用变量通常用来引用模板中的某个DOM元素，它还可以引用Angular组件或指令或Web Component。
  #phone的意思就是声明一个名叫phone的变量来引用<input>元素。
  <input #phone placeholder="phone number">
  <button (click)="callPhone(phone.value)">Call</button>
  注意： 模板表达式不能引用全局命名空间中的任何东西，比如window或document。它们也不能调用console.log或Math.max。 它们只能引用表达式上下文中的成员。
  -->
    <h1>{{title}}</h1>
    <h2>My heros</h2>
    <ul class="heroes">
    <!--
    数据绑定是一种机制，用来协调用户所见和应用数据。 
    虽然我们能往 HTML 推送值或者从 HTML 拉取值(shore 比如 通过javascript赋值)， 但如果把这些琐事交给数据绑定框架处理， 应用会更容易编写、阅读和维护。 只要简单地在绑定源和目标 HTML 元素之间声明绑定，框架就会完成这项工作。



    -->
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <!-- 
    星号是一个用来简化更复杂语法的“语法糖”。 从内部实现来说，Angular把*ngIf 属性 翻译成一个<ng-template> 元素 并用它来包裹宿主元素，代码如下：
    <div *ngIf="hero" >{{hero.name}}</div>
    变为
    <ng-template [ngIf]="hero">
      <div>{{hero.name}}</div>
    </ng-template>
    
    第一种形态永远不会真的渲染出来。 只有最终产出的结果才会出现在DOM中。
    <!-- bindings={"ng-reflect-ng-if":"[Object Object]"}
    <div _ngcontent-c0>Mr. Nice </div>
    -->
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}