export default class Hero {
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