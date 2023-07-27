<template>
  <div id="app">
    <a-tabs v-model="activeKey" tab-position="left">
      <a-tab-pane v-for="gpt in gptList" :key="gpt.label">
        <span slot="tab" :title="gpt.label"><a-icon v-if="gpt.icon" :class="gpt.icon" :type="gpt.icon" />{{ gpt.label
        }}</span>
        <iframe class="iframe" :src="gpt.url" frameborder="0"></iframe>
      </a-tab-pane>
    </a-tabs>

  </div>
</template>

<script>
import gptList from '@/assets/gpt.json'

export default {
  name: 'App',
  data() {
    return {
      gptList,
      activeKey: gptList[0]['label']
    }
  },
  created() {
    this.showDisclaimerModal()
  },
  methods: {
    showDisclaimerModal() {
      if (localStorage.getItem('confirmDisclaimer') === '1') return
      this.$confirm({
        title: '免责声明',
        content: h => <div style="color:red;">本网站所整理的GPT模型均为学习所用，请勿用作其他用途，否则后果自负！</div>,
        okText: '我已知晓，关闭',
        okType: 'primary',
        cancelText: '关闭',
        onOk() {
          localStorage.setItem('confirmDisclaimer', '1')
        },
        onCancel() {
          localStorage.setItem('confirmDisclaimer', '0')
        },
      });
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-tab {
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      cursor: pointer;
    }
  }

  .ant-tabs-content {
    padding: 0 !important;
    height: 100vh;
  }

  .fire {
    color: red;
  }

  .iframe {
    width: 100%;
    height: 100vh;
  }
}

// 设定滚轮
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px !important;
  box-shadow: inset 0 0 5px #314659 !important;
  background: rgb(120, 121, 123) !important;
}

::-webkit-scrollbar-track {
  background: 0 0 !important;
  border-radius: 1px !important;
}
</style>
