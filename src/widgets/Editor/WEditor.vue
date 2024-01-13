<template>
  <div class="wrapper">
    <div class="editor">
      <w-editor-bar style="margin-bottom: 30px"></w-editor-bar>
      <div class="editor__content" contenteditable="true">
        Таким образом консультация с широким активом представляет собой интересный эксперимент проверки
        позиций,занимаемых участниками в отношении поставленных задач. С другой стороны постоянное
        информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки
        форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой
        процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же
        реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития.
        Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности
        играет важную роль в формировании существенных финансовых и административных условий.
        <!--        <img src="" alt="" width="100%"-->
        <!--             srcset="https://neva.today/storage/wp-content/uploads/2022/05/g15vckmwg-_vjk_v9kqyoz_crbs9dt8quhjnhli-v_fkcshik2nbgkq8y2lpxl3knpwm_p2vvwabx8xha9ux74ua.jpg__0_0x0.jpg">-->
      </div>
    </div>
  </div>
</template>

<script>

import WEditorBar from "@/widgets/Editor/WEditorBar/WEditorBar.vue";

export default {
  components: {WEditorBar,},
  name: 'Editor',
  data() {
    return {
      isEdit: false,
      textTest: '',
      textForEdit: 'Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых\n' +
          '    участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение\n' +
          '    нашей деятельности представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего\n' +
          '    порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий\n' +
          '    условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль\n' +
          '    в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное\n' +
          '    информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных\n' +
          '    финансовых и административных условий.',
    }
  },
  methods: {
    applyBold() {
      this.textTest = window.getSelection()
      document.execCommand('insertHTML', false, '<p>${this.text}<p/>');
    },
    handleChange(e) {
      this.textForEdit = e.target.value;
    },
    // handleClick() {
    //   this.isEdit = !this.isEdit
    // },
    handleClickTransform() {
      this.textForEdit = window.getSelection()
    }
  }
}
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