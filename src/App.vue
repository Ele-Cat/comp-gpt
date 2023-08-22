<template>
  <div id="app">
    <a-tabs v-model="activeKey" tab-position="left" @change="handleTabChange">
      <a-tab-pane v-for="(gpt, index) in gptList" :key="gpt.label">
        <span slot="tab" class="normal-label" :title="gpt.label" v-if="!isPhone"><a-icon v-if="gpt.icon" :class="gpt.icon" :type="gpt.icon" />{{ gpt.label
        }}</span>
        <span slot="tab" class="phone-label" :title="gpt.label" v-else>{{ index + 1 }}</span>
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
      activeKey: '',
      isPhone: false,
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  created() {
    const stroageActiveKey = localStorage.getItem('activeKey');
    const stroageActiveKeyExsit = stroageActiveKey && gptList.findIndex(item => item.value === stroageActiveKey) >= 0;
    this.activeKey = stroageActiveKeyExsit ? stroageActiveKey : gptList[0]['label'];
    this.showDisclaimerModal();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    // 禁止F12
    // this.block();
  },
  methods: {
    handleResize() {
      this.isPhone = window.innerWidth <= 640
      // 在这里可以根据窗口宽度的变化做出相应的处理
    },
    showDisclaimerModal() {
      if (localStorage.getItem('confirmDisclaimer') === '1') return
      this.$confirm({
        title: '免责声明',
        content: h => 
          <div>
            <p>1.本网站所整理的GPT模型均为学习所用，请勿用作其他非法用途，否则后果自负！</p>
            <p>2.本项目中所引用的第三方GPT网站随时可能失效，如失效，请及时与我联系更换。【Ps：请勿轻易相信网页中广告宣传！谨慎充值！】</p>
            <p>3.如果有好用的GPT网站也可以联系我共享出来，开源精神万岁！【Ps：这里都是免费无登录不限次数的哦！】</p>
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
    block() {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = "<h1>兄嘚，不用F12，直接来Gitee下载源码!</h1>";
      }
      setInterval(() => {
        (function () {
          return false;
        }
        ['constructor']('debugger')
        ['call']());
      }, 50);
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
    margin: 0;
  }

  .normal-label {
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .phone-label {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: aqua;
    color: #fff;
    border-radius: 50%;
  }

  .ant-tabs-content {
    padding: 0 !important;
    height: 100vh;
  }

  .anticon {
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

@media screen and (max-width: 640px) {
  #app {
    .ant-tabs-tab {
      width: 68px;
    }
  }
}
</style>
