
export const checkboxGroupProps = {
    /**
     * @description binding value
     */
    modelValue: {
      type: String,
      default: () => [],
    },
    /**
     * @description whether the nesting checkboxes are disabled
     */
    disabled: Boolean,
    /**
     * @description minimum number of checkbox checked
     */
    min: Number,
    /**
     * @description maximum number of checkbox checked
     */
    max: Number,
    /**
     * @description size of checkbox
     */
    // size: useSizeProp,
    /**
     * @description label for screen reader
     */
    label: String,
    /**
     * @description border and background color when button is active
     */
    fill: String,
    /**
     * @description font color when button is active
     */
    textColor: String,
    /**
     * @description element tag of the checkbox group
     */
    tag: {
      type: String,
      default: 'div',
    },
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
      type: Boolean,
      default: true,
    },
  }