import styles from "../styles/Post.module.css"

export default function Post(){    
    return(
        <div className={styles.post}>
            <form>
                <label >Title:</label>
                <input ></input>
                <label >Content:</label>
                <input ></input>
                <button >Submit</button>
            </form>
        </div>
    );
}