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
    <div class="intro">
      <div class="intro-item" @click="handleIntro(info)" v-for="info in infoList" :key="info.value">
        <a-icon :type="info.value" :class="[isPhone ? 'phone-label qq-label' : 'normal-label']" /><span v-if="!isPhone">{{info.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import gptList from '/public/gpt'

export default {
  name: 'App',
  data() {
    return {
      gptList,
      activeKey: '',
      isPhone: false,
      infoList: [
        {
          label: "免责声明",
          value: "bell",
          url: "",
        },
        // {
        //   label: "查看源码",
        //   value: "code",
        //   url: "https://github.com/ele-cat/comp-gpt",
        // },
        {
          label: "添加群聊",
          value: "qq",
          url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914",
        },
        {
          label: "关注B站",
          value: "home",
          url: "https://space.bilibili.com/376288070",
        }
      ]
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  created() {
    const stroageActiveKey = localStorage.getItem('activeKey');
    const stroageActiveKeyExsit = stroageActiveKey && gptList.findIndex(item => item.label === stroageActiveKey) >= 0;
    this.activeKey = stroageActiveKeyExsit ? stroageActiveKey : gptList[0]['label'];
    this.showDisclaimerModal();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    // 禁止F12
    // this.block();
  },
  methods: {
    handleResize() {
      this.isPhone = window.innerWidth <= 640;
      // 在这里可以根据窗口宽度的变化做出相应的处理
    },
    showDisclaimerModal() {
      if (localStorage.getItem('confirmDisclaimer') === '1') return;
      this.$confirm({
        title: '免责声明',
        content: h => 
          <div>
            <p>1.本网站所整理的GPT模型均为学习所用，请勿用作其他非法用途，否则后果自负！</p>
            <p>2.本项目中所引用的第三方GPT网站随时可能失效，如失效，请及时与我联系更换。【Ps：请勿轻易相信网页中广告宣传！谨慎充值！】</p>
            <p>3.如果有好用的GPT网站也可以联系我共享出来，开源精神万岁！【Ps：这里都是免费无登录不限次数的哦！】</p>
          </div>,
        okText: '我已知晓，不再弹出',
        okType: 'primary',
        cancelText: '关闭',
        onOk() {
          localStorage.setItem('confirmDisclaimer', '1');
        },
        onCancel() {
          localStorage.setItem('confirmDisclaimer', '0');
        },
      });
    },
    handleTabChange(e) {
      const gpt = gptList.find(gpt => gpt.label === e);
      if (gpt.icon === "logout") {
        window.open(gpt.url, '_blank');
        this.activeKey = localStorage.getItem('activeKey')
        return
      }
      localStorage.setItem('activeKey', e);
    },
    handleIntro(info) {
      if (info.value === "bell") {
        localStorage.setItem('confirmDisclaimer', '0');
        this.showDisclaimerModal();
      } else {
        window.open(info.url, '_blank');
      }
    },
    block() {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = "<h1>兄嘚，不用F12，直接来Github下载源码!</h1>";
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
    cursor: pointer;
  }
  .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-nav .ant-tabs-tab:hover {
    color: #FD6585;
  }
  .ant-tabs-ink-bar {
    background-color: #FD6585;
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
    background-color: #FD6585;
    color: #fff;
    border-radius: 50%;
    &.qq-label {
      .anticon {
        color: #FFF;
        margin-right: 0;
        font-size: 12px;
      }
    }
  }

  .ant-tabs-content {
    padding: 0 !important;
    height: 100vh;
    box-shadow: 0 0 20px inset #ddd;
  }

  .anticon {
    color: #FD6585;
  }

  .iframe {
    width: 100%;
    height: 100vh;
  }

  .intro {
    position: fixed;
    left: 0;
    bottom: 10px;
    width: 160px;
    display: flex;
    flex-direction: column;
    .intro-item {
      padding: 8px 24px;
      cursor: pointer;
      i {
        margin-right: 8px;
      }
      &:hover {
        color: #FD6585;
      }
    }
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
    .anticon {
      color: #FFF;
      line-height: 1.8;
    }
  }
}
</style>
