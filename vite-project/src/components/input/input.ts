export const inputEmits = {
    blur:(evt: FocusEvent) => evt instanceof FocusEvent,
    focus:(evt: FocusEvent) => evt instanceof FocusEvent,
    change: (value: string) => true,
    input: (value: string) => true,
    chear: () => true,
}


export const inputProps = {
  value: {
    type: String,
    default: undefined,
  },
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description whether to disable
   */
  disabled: Boolean,
  /**
   * @description binding value
   */
  modelValue: {
    type: [
      String,
      Number,
      Object,
    ],
    default: '',
  },
  /**
   * @description type of input
   */
  type: {
    type: String,
    default: 'text',
  },
  /**
   * @description control the resizability
   */
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical'],
  },
  /**
   * @description native input autocomplete
   */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /**
   * @description format content
   */
  formatter: {
    type: Function,
  },
  /**
   * @description parse content
   */
  parser: {
    type: Function,
  },
  /**
   * @description placeholder
   */
  placeholder: {
    type: String,
  },
  /**
   * @description native input form
   */
  form: {
    type: String,
  },
  /**
   * @description native input readonly
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @description native input readonly
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description toggleable password input
   */
  showPassword: {
    type: Boolean,
    default: false,
  },
  /**
   * @description word count
   */
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  /**
   * @description container role, internal properties provided for use by the picker component
   */
  containerRole: {
    type: String,
    default: undefined,
  },
  /**
   * @description native input aria-label
   */
  label: {
    type: String,
    default: undefined,
  },
  /**
   * @description input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
}