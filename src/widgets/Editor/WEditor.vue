<template>
  <div class="wrapper">
    <div class="editor">
      <w-editor-bar style="margin-bottom: 30px"></w-editor-bar>
      <div ref="contenteditable" class="editor__content" contenteditable="true" @input="handleInput">
        Таким образом консультация с широким активом представляет собой интересный эксперимент проверки
        позиций,занимаемых участниками в отношении поставленных задач. С другой стороны постоянное
        информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки
        форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой
        процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же
        реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития.
        Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности
        играет важную роль в формировании существенных финансовых и административных условий.
      </div>
    </div>
  </div>
</template>

<script>

import {onMounted, ref} from "vue";
import WEditorBar from "@/widgets/Editor/WEditorBar/WEditorBar.vue";

export default {
  components: {WEditorBar},
  setup() {
    const contenteditable = ref('');

    const handleInput = (event) => {
      // console.log(contenteditable.value.innerHTML);
      const date = new Date().getTime();
      localStorage.setItem(`${date}`, contenteditable.value.innerHTML);
    };

    onMounted(() => {
      const observer = new MutationObserver(() => {
        // console.log("DOM изменен:", contenteditable.value.innerHTML);


      });

      const config = {childList: true, subtree: true};
      observer.observe(contenteditable.value, config);

      return () => observer.disconnect();
    });

    return {
      contenteditable,
      handleInput
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 960px;
}

.editor {
  padding: 110px;
  background: var(--c-nero);
  border-radius: 4px;
  box-shadow: 0 0 10px 0 var(--c-gray);

  &__content {
    color: var(--c-whisper);
    line-height: 23px;
  }
}

.textarea {
  width: 100%;
}
</style>