

export const caculateLength = (value: string | number | object) : number => {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number') {
        return value.toString().length;
    }
    if (typeof value === 'object') {
        return Object.keys(value).length;
    }
}

import { getCurrentInstance } from 'vue';

export function dispatch(componentName: string, eventName: string, ...params: any[]): void {
  let instance = getCurrentInstance()?.parent; // etCurrentInstance 函数来获取当前组件的实例，然后通过 parent 属性来获取父组件实例。
  while (instance && (!instance.type.name || instance.type.name !== componentName)) {
    instance = instance.parent;
  }
  if (instance) {
    instance.emit(eventName, ...params);
  }
}