<template>
  <div class="test-container" style="position: relative; height: 100%">
    <sliper @getImg="getImg" />
  </div>
</template>
<script>
  import sliper from '@/components/self_components/sliper.vue'
  export default {
    name: 'Test',
    components: {
      sliper,
    },
    data() {
      return { show: true }
    },
    created() {},
    mounted() {},
    methods: {
      getImg(e) {
        console.log(e)
        e({
          captcha: {
            backgroundImage: 'https://ossgw.alicdn.com/alp/1730404236392-1464-352.png',
            sliderImage: 'https://ask.qcloudimg.com/avatar/1030708/vmtk56c8qu.png',
          },
          id: 'nadsf',
        })
      },
    },
  }
</script>
