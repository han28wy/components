import type { Arrayable } from '../../utils/index'

export const FormItemProps = {
    prop: String,
    label: String,
    value: String,
    rules: Array,
    required: Boolean,
    disabled: Boolean,
    placeholder: String,
    clearable: Boolean,
    for: String,
}

export type FormItemProp = Arrayable<string>

export const formItemValidateStates = [
    '',
    'error',
    'validating',
    'success',
  ] as const
export type FormItemValidateState = typeof formItemValidateStates[number]