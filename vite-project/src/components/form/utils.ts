import { computed, ref } from 'vue'
import { get, set } from 'lodash-unified'
export const componentSizes = ['', 'default', 'small', 'large'] as const
export type ComponentSize = typeof componentSizes[number]
import { castArray as ensureArray } from 'lodash-unified'

export const filterFields = (fields, props) => {
  // const nomolized = Array.isArray(props) ? props : [props]
  // if(nomolized.length > 0) {
  //   return fields.filter((field)=>{
  //     // 过滤条件：field.prop存在且在normalized数组中
  //    field.prop && nomolized.includes(field.prop)
  //   })
  // } else {
  //   return fields
  // }
  const normalized = ensureArray(props)
  return normalized.length > 0
    ? fields.filter((field) => field.prop && normalized.includes(field.prop))
    : fields
}

export function useFormLabelWidth() {
    const potentialLabelWidthArr = ref<number[]>([])
  
    const autoLabelWidth = computed(() => {
      if (!potentialLabelWidthArr.value.length) return '0'
      const max = Math.max(...potentialLabelWidthArr.value)
      return max ? `${max}px` : ''
    })
  
    function getLabelWidthIndex(width: number) {
      const index = potentialLabelWidthArr.value.indexOf(width)
      if (index === -1 && autoLabelWidth.value === '0') {
        // debugWarn(SCOPE, `unexpected width ${width}`)
      }
      return index
    }
  
    function registerLabelWidth(val: number, oldVal: number) {
      if (val && oldVal) {
        const index = getLabelWidthIndex(oldVal)
        potentialLabelWidthArr.value.splice(index, 1, val)
      } else if (val) {
        potentialLabelWidthArr.value.push(val)
      }
    }
  
    function deregisterLabelWidth(val: number) {
      const index = getLabelWidthIndex(val)
      if (index > -1) {
        potentialLabelWidthArr.value.splice(index, 1)
      }
    }
  
    return {
      autoLabelWidth,
      registerLabelWidth,
      deregisterLabelWidth,
    }
  }
  export type Arrayable<T> = T | T[]

  export const getProp = <T = any>(
    obj: Record<string, any>,
    path: Arrayable<string>,
    defaultValue?: any
  ): { value: T } => {
    return {
      get value() {
        return get(obj, path, defaultValue)
      },
      set value(val: any) {
        set(obj, path, val)
      },
    }
  }