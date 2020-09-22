export default {
  buyVip(context, e) {
    return new Promise(resolve => {
      //mock api 交互
      setTimeout(() => {
        context.commit("setMemberInfo", {
          userStatus: e.userStatus,
          vipLevel: e.vipLevel
        });
        resolve("购买成功");
      }, 1000);
    });
  },
  getFreeVip(context) {
    //mock api
    return new Promise(resolve => {
      setTimeout(() => {
        if (context.state.userStatus === 0) {
          context.commit("setMemberInfo", {
            userStatus: 1,
            vipLevel: 0
          });
          resolve("分享成功，获得一个月高级会员");
        } else {
          resolve("分享成功");
        }
      });
    });
  }
};
