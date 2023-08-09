import { checkboxGroupContextKey } from './constants'
import { computed, inject, ref } from 'vue'

export const checkboxConfig = (props) => {
    const checkboxGroup = inject(checkboxGroupContextKey, undefined)
    const isGroup = checkboxGroup !== undefined
    const groupValue = checkboxGroup?.modelValue?.value
    console.log(groupValue, '   ',props)
    if(groupValue.indexOf(props.label) > 0){
        console.log('匹配到了！！')
        props.modelValue = true
    }

    // const model = computed({
    //     get() {
    //         if (isGroup) {
    //             return checkboxGroup?.modelValue?.value
    //         } else {
    //             return props.modelValue
    //         }
    //     }
    //     set(val) {
    //         if(isGroup.value){
    //             console.log('我在group  ', isGroup.vaule)
    //         }else{

    //         }
    
    //     }
    
    // })
}

