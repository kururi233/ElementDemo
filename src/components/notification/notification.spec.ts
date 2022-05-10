import LyNotification from "./LyNotification.vue";
import { mount } from "@vue/test-utils";

describe("Notification", () => {
  it("RenderTitle", () => {
    const title = "this is a title";
    const wrapper = mount(LyNotification, {
      props: {
        title,
      },
    });
    expect(wrapper.get(".ly-notification__title").text()).toContain(title);
  });
  it("RenderMessage", () => {
    const message = "this is a message";
    const wrapper = mount(LyNotification, {
      props: {
        message,
      },
    });
    expect(wrapper.get(".ly-notification__message").text()).toContain(message);
  });
  it("RenderPosition", () => {
    const position = "bottom-right";
    const wrapper = mount(LyNotification, {
      props: {
        position,
      },
    });
    expect(wrapper.find(".ly-notification").classes()).toContain("right");
    expect(wrapper.vm.verticalProperty).toBe("bottom");
    //expect(wrapper.find(".ly-notification").element.style.bottom).toBe("0px");
  });
  it("VerticalOffset", () => {
    const verticalOffset = 50;
    const wrapper = mount(LyNotification, {
      props: {
        verticalOffset,
      },
    });
    expect(wrapper.vm.verticalProperty).toBe("top");
    // expect(wrapper.find(".ly-notification").element.style.top).toBe(
    //   `${verticalOffset}px`
    // );
  });

  it("set the showClose ", () => {
    const showClose = true;
    const wrapper = mount(LyNotification, {
      props: {
        showClose,
      },
    });
    expect(wrapper.find(".ly-notification__closeBtn").exists()).toBe(true);
    expect(wrapper.find(".ly-icon-close").exists()).toBe(true);
  });

  // it("点击关闭按钮", async () => {
  //   const showClose = true;
  //   const wrapper = mount(LyNotification, {
  //     props: {
  //       showClose,
  //     },
  //   });
  //   const closeBtn = wrapper.get(".ly-notification__closeBtn");
  //   await closeBtn.trigger("click");
  //   expect(wrapper.get(".ly-notification").isVisible()).toBe(false);
  // });

  // it("持续时间之后自动管理", async () => {
  //   jest.useFakeTimers();

  //   const wrapper = mount(LyNotification, {
  //     props: {
  //       duration: 1000,
  //     },
  //   });
  //   jest.runTimersToTime(1000);
  //   await flushPromises();
  //   expect(wrapper.get(".ly-notification").isVisible()).toBe(false);
  // });
});
