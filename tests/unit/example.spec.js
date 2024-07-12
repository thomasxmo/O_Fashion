import { shallowMount } from "@vue/test-utils";
import filter from "@/components/shop/filter.vue";

describe("filter.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(filter, {
      props: { msg },
    });
  });
});
