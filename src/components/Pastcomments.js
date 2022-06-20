import Reply from "./Reply";
export default function Pastcomments({comments}) {
    console.log(comments)
    return (
      comments.map((obj,key)=>{
           return <div key={key}><Reply obj={obj}/></div>
           
      })

    );
  }