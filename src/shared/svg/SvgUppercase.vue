<template>
  <svg
      :height="height"
      :width="width"
      viewBox="0 0 20 22"
      fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20 1.5V4.0075C20 4.8375 19.3317 5.5075 18.5037 5.5075C17.6783 5.5075 17.0075 4.8375 17.0075 4.0075V3H11.4963V20H12.8454C13.6733 20 14.3416 20.6725 14.3416 21.5C14.3416 22.3275 13.6733 23 12.8454 23H7.15461C6.32668 23 5.65835 22.3275 5.65835 21.5C5.65835 20.6725 6.32668 20 7.15461 20H8.50374V3H2.99252V4.0075C2.99252 4.8375 2.3217 5.5075 1.49626 5.5075C0.668329 5.5075 0 4.8375 0 4.0075V1.5C0 0.6725 0.668329 0 1.49626 0H18.5037C19.3317 0 20 0.6725 20 1.5Z"
        fill="#639EFF"/>
  </svg>

</template>

<script>
export default {
  name: 'SvgUppercase',
  props: {
    width: {type: String, default: '20'},
    height: {type: String, default: '22'},
    color: {type: String}
  }
}
</script>

<style lang="scss" scoped>

</style>