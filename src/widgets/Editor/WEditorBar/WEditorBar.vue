<template>
  <div class="bar">
    <ui-button>
      <svg-arrow-back/>
    </ui-button>
    <ui-button>
      <svg-arrow-forward/>
    </ui-button>
    <ui-button>
      <svg-uppercase/>
    </ui-button>
    <ui-button>
      <svg-lowercase height="28" width="28"/>
    </ui-button>
    <ui-button>
      <svg-image/>
    </ui-button>
    <ui-button text width="auto" height="auto">
      Скопировать HTML
    </ui-button>
  </div>
</template>

<script>
import UiButton from "@/shared/ui/UiButton.vue";
import SvgArrowBack from "@/shared/svg/SvgArrowBack.vue";
import SvgArrowForward from "@/shared/svg/SvgArrowForward.vue";
import SvgUppercase from "@/shared/svg/SvgUppercase.vue";
import SvgLowercase from "@/shared/svg/SvgLowercase.vue";
import SvgImage from "@/shared/svg/SvgImage.vue";

export default {
  components: {SvgImage, SvgLowercase, SvgUppercase, SvgArrowForward, SvgArrowBack, UiButton}
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  gap: 12px;
}
</style>