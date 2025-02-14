<template lang="pug">
.w-app(:class="classes")
  slot
  notification-manager
</template>

<script>
import config from '../utils/config'
import NotificationManager from './w-notification-manager.vue'
import DynamicCSS from '../utils/dynamic-css'

const breakpointsNames = Object.keys(config.breakpoints)
const breakpointsValues = Object.values(config.breakpoints)

export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean },
    block: { type: Boolean },
    row: { type: Boolean },
    alignCenter: { type: Boolean },
    alignEnd: { type: Boolean },
    justifyCenter: { type: Boolean },
    justifyEnd: { type: Boolean },
    justifySpaceBetween: { type: Boolean },
    justifySpaceAround: { type: Boolean },
    justifySpaceEvenly: { type: Boolean },
    textCenter: { type: Boolean },
    textRight: { type: Boolean }
  },

  components: { NotificationManager },

  data: () => ({
    currentBreakpoint: null,
    notifManager: null
  }),

  computed: {
    classes () {
      return {
        'd-block': this.block,
        row: this.row,
        'align-center': this.alignCenter,
        'align-end': this.alignEnd,
        'justify-center': this.justifyCenter,
        'justify-end': this.justifyEnd,
        'justify-space-between': this.justifySpaceBetween,
        'justify-space-around': this.justifySpaceAround,
        'justify-space-evenly': this.justifySpaceEvenly,
        'text-center': this.textCenter,
        'text-right': this.textRight,
        'theme--dark': this.dark
      }
    }
  },

  methods: {
    getBreakpoint () {
      const width = window.innerWidth
      const breakpoints = breakpointsValues.slice(0)
      // Most performant lookup.
      breakpoints.push(width)
      breakpoints.sort((a, b) => a - b)
      const breakpoint = breakpointsNames[breakpoints.indexOf(width)] || 'xl'

      if (breakpoint !== this.currentBreakpoint) {
        this.currentBreakpoint = breakpoint
        this.$waveui.breakpoint = {
          name: breakpoint,
          xs: breakpoint === 'xs',
          sm: breakpoint === 'sm',
          md: breakpoint === 'md',
          lg: breakpoint === 'lg',
          xl: breakpoint === 'xl',
          width
        }
      }

      this.$waveui.breakpoint.width = width
    },

    dynamicStyles () {
      return DynamicCSS()
    }
  },

  mounted () {
    // Inject global dynamic CSS classes in document head.
    if (!document.getElementById('wave-ui-styles')) {
      const css = document.createElement('style')
      css.id = 'wave-ui-styles'
      css.innerHTML = this.dynamicStyles()

      document.head.appendChild(css)
    }

    this.getBreakpoint(window.innerWidth)
    window.addEventListener('resize', this.getBreakpoint)
  },

  beforeUnmount () {
    window.removeEventListener('resize', this.getBreakpoint)
  }
}
</script>

<style lang="scss">
@import '../scss/index';

.w-app {
  position: relative; // Make the .w-app a referential for tooltips / menus.
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &.row {flex-direction: row;}
  &.d-block {display: block;}
  &.align-center {align-items: center;}
  &.align-end {align-items: flex-end;}
  &.justify-center {justify-content: center;}
  &.justify-end {justify-content: flex-end;}
  &.justify-space-between {justify-content: space-between;}
  &.justify-space-around {justify-content: space-around;}
  &.justify-space-evenly {justify-content: space-evenly;}
  &.text-center {text-align: center;}
  &.text-right {text-align: right;}

}
</style>
