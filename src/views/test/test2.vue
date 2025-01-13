<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('description') }}</p>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('zh')">中文</button>
  </div>
</template>

<script>
  export default {
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang
      },
    },
  }
</script>
