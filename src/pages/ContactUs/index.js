import { Layout } from "antd";
import ConntentApp from "../../components/routes";
import Headerbar from "../../components/template/HeaderBar";
import Footerbar from "../../components/template/FooterBar";
const { Content } = Layout;
const Contactus = () => {
  return (
    <Layout className="layout">
      <Headerbar />

      <Content style={{ padding: "0 100px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <ConntentApp />
        </div>
      </Content>
      <Footerbar />
    </Layout>
  );
};

export default Contactus;
