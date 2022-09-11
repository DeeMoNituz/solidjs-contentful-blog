/* @refresh reload */
import { render } from "solid-js/web";
import "tailwindcss/tailwind.css";
import "./index.css";
import App from "@/App";
import Layout from "@/Layout";

render(
  () => (
    <Layout>
      <App />
    </Layout>
  ),
  document.getElementById("root")
);
