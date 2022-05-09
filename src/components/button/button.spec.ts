import Button from "./LyButton.vue";
import { mount } from "@vue/test-utils";
describe("ButtonTest", () => {
  it("BtnCanShowText", () => {
    const content = "ShowText";
    const warpper = mount(Button, {
      slots: {
        default: content,
      },
    });
    expect(warpper.text()).toBe(content);
  });
  it("ControlSize", () => {
    const size = "small";
    const warpper = mount(Button, {
      props: {
        size,
      },
    });
    expect(warpper.classes()).toContain("ly-button--small");
  });
  it("ButtonCircle", () => {
    const circle = true;
    const warpper = mount(Button, {
      props: {
        circle,
      },
    });
    expect(warpper.classes()).toContain("ly-button--circle");
  });
});
