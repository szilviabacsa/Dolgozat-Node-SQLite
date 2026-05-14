import Database from "better-sqlite3";
const db = new Database("data/db.sqlite")

db.prepare(`CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
    )`).run()

export const getPosts = () => db.prepare(`SELECT * FROM posts`).all()
export const getPostsById = (id) => db.prepare(`SELECT * FROM posts WHERE id = ?`).get(id)

export const savePost = (title, content) => db.prepare(`INSERT INTO posts SET title, content VALUES(?,?) WHERE id = ?`).get(id)

export const deletePost = (id) => db.prepare(`DELETE FROM posts WHERE id = ?`).get(id)

const {postsNumber} = db.prepare("SELECT COUNT(*) AS postsNumber FROM posts").all()

if(postsNumber == 0){
    savePost("A JavaScript alapjai", "A JavaScript az egyik legnépszerűbb programozási nyelv webfejlesztéshez.")
    savePost("Node.js backend fejlesztés", "A Node.js lehetővé teszi szerveroldali alkalmazások fejlesztését JavaScript használatával.")
    savePost("REST API tervezés", "A jól megtervezett REST API egyszerűbbé teszi az alkalmazások közötti kommunikációt.")
    savePost("Adatbázis kezelés SQLite-tal", "Az SQLite egy könnyű, beágyazott adatbázis motor kisebb projektekhez.")
}