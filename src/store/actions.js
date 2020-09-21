export default {
  buyVip(context, e) {
    return new Promise((resolve) => {
      //mock api 交互
      setTimeout(() => {
        context.commit("setMemberInfo", {
          userStatus: e.userStatus,
          vipLevel: e.vipLevel,
        });
        resolve("购买成功");
      }, 1000);
    });
  },
};
