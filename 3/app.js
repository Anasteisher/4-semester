const App = {
    data() {
        return {
            title: 'Конвертер скорости',
            km: '',
            mt: '',
            placeHolderTextkm: 'км/ч',
            placeHolderTextmt: 'м/с',
        };
    },
methods: {
    inputKmToMt() {
        this.mt = this.km / 3.6;
    },
    inputMtToKm() {
        this.km = this.mt * 3.6;
    },
},
};
Vue.createApp(App).mount('#app')