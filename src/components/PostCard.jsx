export function PostCard(props) {
    return (
      <div style={{width: '300px',height:'300px'}} class="bg-yellow-600">
        <a
          href={`/post/${props.post.sys.id}`}
          rel="noopener noreferrer"
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={props.post.fields.featuredImage.fields.file.url}
          />
          <div className="flex justify-between ">
            <span class="mt-3 mx-3 text-gray-600">June 4, 2020</span>
            <span class="mt-3 mx-3 text-gray-600">  Reactjs </span>
          </div>
  
          <div className="px-6 py-2 space-y-2 ">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {props.post.fields.title || "In usu laoreet repudiare legendos"}
            </h3>        
            <p class="align-baseline">{props.post.fields.summary}</p>
          </div>
        </a>
      </div>
    );
  }