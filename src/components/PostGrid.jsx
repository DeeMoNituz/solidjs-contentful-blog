import { createResource, Show, For } from "solid-js";
import { client } from "@/Utils";
import {PostCard} from "components/PostCard";
import { GridSkelton, Skelton } from "components/Loading";
function Author(props) {
  return (
    <>
      <div className="flex items-center mt-8 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-10 h-10 rounded-full dark:bg-gray-500"
        />
        <div>
          <h3 className="text-sm font-medium">Leroy Jenkins</h3>
          <time datetime="2021-02-18" className="text-sm dark:text-gray-400">
            Feb 18th 2021
          </time>
        </div>
      </div>
    </>
  );
}

function Featured(props) {
  return (
    <>
      <a
        rel="noopener noreferrer"
        href={`/posts/${props.id || 1}`}
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
      >
        <img
          src="https://source.unsplash.com/random/480x360"
          alt=""
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
        />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {props.title || "Noster tincidunt reprimique ad pro"}
          </h3>
          <span className="text-xs dark:text-gray-400">February 19, 2021</span>
          <p>
            {props.excerpt ||
              "Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est ingraece fuisset, eos affert putent doctus id."}
          </p>
        </div>
      </a>
    </>
  );
}
export default function PostGrid() {
  const [posts3] = createResource(()=>client.getEntries().then((posts)=>posts).catch(e=>{
    console.log(e)
  }))

 
  return (
    <>
      <section className=" dark:bg-gray-800 dark:text-gray-100">       
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <span class="  ">
            <Featured />
          </span>
          {/*{JSON.stringify(posts3())}*/}
          <Show when={posts3()?.items.length>0} fallback={() => (
              <div class="">
                <GridSkelton />
              </div>
            )}
          >
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {" "}
              <For each={posts3()?.items}>{(post) => <PostCard post={post} />}</For>
            </div>{" "}
          </Show>

          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >

            </button>
          </div>
        </div>
      </section>
    </>
  );
}
