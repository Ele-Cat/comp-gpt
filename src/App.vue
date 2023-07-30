<template>
  <div id="app">
    <a-tabs v-model="activeKey" tab-position="left" @change="handleTabChange">
      <a-tab-pane v-for="gpt in gptList" :key="gpt.label">
        <span slot="tab" :title="gpt.label"><a-icon v-if="gpt.icon" :class="gpt.icon" :type="gpt.icon" />{{ gpt.label
        }}</span>
        <iframe class="iframe" :src="gpt.url" frameborder="0"></iframe>
      </a-tab-pane>
    </a-tabs>
    <a href='https://gitee.com/ele-cat/comp-gpt' target="_blank" class="widget"><img src='https://gitee.com/ele-cat/comp-gpt/widgets/widget_1.svg' alt='Fork me on Gitee' /></a>
  </div>
</template>

<script>
import gptList from '/public/gpt.json'

export default {
  name: 'App',
  data() {
    return {
      gptList,
      activeKey: ''
    }
  },
  created() {
    this.activeKey = localStorage.getItem('activeKey') || gptList[0]['label']
    this.showDisclaimerModal()
  },
  methods: {
    showDisclaimerModal() {
      if (localStorage.getItem('confirmDisclaimer') === '1') return
      this.$confirm({
        title: '免责声明',
        content: h => 
          <div>
            <p>1.本网站所整理的GPT模型均为学习所用，请勿用作其他用途，否则后果自负！</p>
            <p>2.本项目中所引用的第三方GPT网站随时可能失效，如失效，请及时与我联系更换。</p>
            <p>3.如果有好用的GPT网站也可以联系我共享出来，开源精神万岁！</p>
          </div>,
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
    },
    handleTabChange(e) {
      localStorage.setItem('activeKey', e)
    },
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

.widget {
  position: fixed;
  top: 0;
  right: 0;
}

.ant-modal-confirm-content {
  p {
    margin: 10px 0 0;
    text-align: justify;
  }
}
</style>
