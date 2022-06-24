import Post from "./Post";

export default function Announce({credentials}) {
  return (
      <div>
        <Post credentials={credentials} />
      </div>  
  );
}