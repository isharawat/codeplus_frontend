export default function Componen({obj}) {
 //   const urlstring = "https://codeforces.com/problemset/problem/" + obj.contestId + "/" + obj.index;
    return(
        <div>
            <span>{obj.rating}</span>
            <a href= {obj.url} target="_blank"> <span>{obj.name}</span></a>
        </div>
    )
}