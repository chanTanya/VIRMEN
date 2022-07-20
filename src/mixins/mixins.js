export const judgePlatform = {
    beforeCreate() {
        const { type, name } = this.$route.meta;

        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            // 移动设备打开页面,但是页面链接是pc网页的时候跳转到对应的mobile网页
            if (type === 'pc') { this.$router.push({ name: `${name}Mobile` }); }
        } else {
            // PC设备打开页面
            if (type === 'mobile') { this.$router.push({ name: `${name}Pc` }); }
        }
    }
}
