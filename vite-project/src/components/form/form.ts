import {
  isArray,
  isBoolean,
  isString,
} from '../../utils/index'

export const formProps = {
    size: {
        type: String,
      },
      /**
       * @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
       */
      disabled: Boolean,
       /**
   * @description Data of form component.
   */
  model: Object,
  /**
   * @description Validation rules of form.
   */
  rules: Object,
  /**
   * @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
   */
  labelPosition: {
    type: String,
    values: ['left', 'right', 'top'],
    default: 'right',
  },
  /**
   * @description Position of asterisk.
   */
  requireAsteriskPosition: {
    type: String,
    values: ['left', 'right'],
    default: 'left',
  },
  /**
   * @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
   */
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description Suffix of the label.
   */
  labelSuffix: {
    type: String,
    default: '',
  },
  /**
   * @description Whether the form is inline.
   */
  inline: Boolean,
  /**
   * @description Whether to display the error message inline with the form item.
   */
  inlineMessage: Boolean,
  /**
   * @description Whether to display an icon indicating the validation result.
   */
  statusIcon: Boolean,
  /**
   * @description Whether to show the error message.
   */
  showMessage: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Whether to trigger validation when the `rules` prop is changed.
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
}

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}
export type FormEmits = typeof formEmits