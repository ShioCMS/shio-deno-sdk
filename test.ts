import { assertEquals } from "./test_deps.ts";
import { ShContent, ShServer } from "./mod.ts";

const shServer = new ShServer("https://shio.viglet.net/graphql");

Deno.test({
  name: "testing example",
  async fn(): Promise<void> {
    let shContent = new ShContent(shServer);
    let content = await shContent.getContent("/sites/viglet/default/en-us");
    assertEquals(content.system.title,'Home');
  },
});