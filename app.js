const app = Vue.createApp({
  data() {
    return {
      className: '',
      isHidden: false,
      backColor: '',
    };
  },
  methods: {
    toggleVisibility() {
      this.isHidden = !this.isHidden;
    },
  },
});

app.mount('#assignment');
