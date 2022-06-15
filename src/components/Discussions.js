import Announcement from "./announcement";
import style from "../styles/Home.module.css";
import Reply from "./Reply";
import Comment from "./Comment";
function Discussion() {
  return <Announcement />;
}

export default function Discussions() {
  return (
    <div>
      <div>
        <Discussion />
      </div>
      <div>
        <Discussion />
      </div>
      <div>
        <Discussion />
      </div>

      <div>
        <Reply />
        <Reply />
        <Reply />
        <Comment />
      </div>
    </div>
  );
}
