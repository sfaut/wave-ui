<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue, disabled: isDisabled }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', inputValue = null);$emit('input', null)"
  :column="!inline"
  :wrap="inline"
  :class="classes")
  w-radio(
    v-for="(item, i) in radioItems"
    :key="i"
    :model-value="item.value === modelValue"
    @update:model-value="onInput(item)"
    @focus="$emit('focus', $event)"
    :name="inputName"
    :label="item.label"
    :label-on-left="labelOnLeft"
    :color="item.color"
    :disabled="isDisabled || null"
    :readonly="isReadonly || null"
    :class="{ mt1: !inline && i }")
    slot(
      v-if="$slots[`item.${i + 1}`]"
      :name="`item.${i + 1}`"
      :item="getOriginalItem(item)"
      :index="i + 1"
      :checked="item.value === modelValue"
      v-html="item.label")
    slot(
      v-else-if="$slots.item"
      name="item"
      :item="getOriginalItem(item)"
      :index="i + 1"
      :checked="item.value === modelValue"
      v-html="item.label")
    div(v-else-if="item.label" v-html="item.label")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-radios',
  mixins: [FormElementMixin],

  props: {
    items: { type: Array, required: true }, // All the possible options.
    modelValue: { type: [String, Number, Boolean] }, // v-model on selected option.
    labelOnLeft: { type: Boolean },
    itemLabelKey: { type: String, default: 'label' },
    itemValueKey: { type: String, default: 'value' },
    itemColorKey: { type: String, default: 'color' }, // Support a different color per item.
    inline: { type: Boolean },
    color: { type: String, default: 'primary' }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus'],

  provide () {
    // Disable w-form-el wrapping in each w-radio when inside a w-radios component that already does it.
    // Don't do a simple prop that can be turned on and off by user.
    return { wRadios: true }
  },

  data: () => ({
    inputValue: null
  }),

  computed: {
    radioItems () {
      return (this.items || []).map((item, i) => ({
        ...item,
        _index: i,
        label: item[this.itemLabelKey],
        // If no value is set then add one to prevent error.
        value: item[this.itemValueKey] === undefined ? (item[this.itemLabelKey] || i) : item[this.itemValueKey],
        color: item[this.itemColorKey] || this.color
      }))
    },
    classes () {
      return [
        'w-radios',
        `w-radios--${this.inline ? 'inline' : 'column'}`
      ]
    }
  },

  methods: {
    onInput (item) {
      this.inputValue = true
      this.$emit('update:modelValue', item.value)
      this.$emit('input', item.value)
    },

    // Return the original item (so there is no `_index`).
    getOriginalItem (item) {
      return this.items[item._index]
    }
  }
}
</script>

<style lang="scss">
.w-radios {
  &--column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &--inline {
    display: inline-flex;
    flex-wrap: wrap;
    vertical-align: middle;

    .w-radio {margin-right: 3 * $base-increment;}
    .w-radio:last-child {margin-right: 0;}
  }
}
</style>
