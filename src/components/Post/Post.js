import React from "react";
import bemCssModules from "bem-css-modules";
import { default as PostStyles } from "./Post.module.scss";

const style = bemCssModules(PostStyles);

const Post = ({ userId, title, body }) => {
  console.log("post render");
  return (
    <section>
      <h3 className={style("title")}>{title}</h3>
      <p className={style("post-body")}>{body}</p>
      <p className={style("text")}>Post dodany przez: User {userId}</p>
    </section>
  );
};

export default React.memo(Post);
