import { Route, Router, Routes, useParams } from "solid-app-router";
import Home from "@/Pages/Home";
import PageNotFound from "@/Layout/PageNotFound";
import SinglePost from "@/Pages/post/[id]";

export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route
            path="/post/:id"
            element={() => {
              const route = useParams();
              return <SinglePost id={route.id} />;
            }}
          />
          <Route
            path="/about"
            element={() => (
              <Layout>
                <div>This is a about page</div>
              </Layout>
            )}
          />
          <Route path="*" element={() => <PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}
