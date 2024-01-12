<template>
  <button
      :type="type"
      :style="{
        width: width,
        height: height,
        }"
      :class="['button', {'button__text': text}]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {type: String, default: 'button'},
    width: {type: String, default: '42px'},
    height: {type: String, default: '38px'},
    text: {type: Boolean}
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  padding: 5px 7px;
  position: relative;

  cursor: pointer;
  background: var(--c-dark-light);

  transition: ease-in-out .2s;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    box-shadow: 0 0 6px 0 var(--c-gray);
  }

  &__text {
    background: none;
    color: var(--c-blue);

    transition: all 0.5s;

    &:hover {
      box-shadow: none;
      color: white;
    }

  }
}
</style>