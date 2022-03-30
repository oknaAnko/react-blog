import React from "react";
import bemCssModules from "bem-css-modules";
import { default as PostStyles } from "./Post.module.scss";

const style = bemCssModules(PostStyles);

const Post = ({ userId, title, body }) => {
  return (
    <section className={style()}>
      <h3 className={style("title")}>{title}</h3>
      <div className={style("post-body-container")}>
        <p className={style("post-body")}>{body}</p>
        <p className={style("text")}>Temat rozpoczął: User {userId}</p>
      </div>
    </section>
  );
};

export default React.memo(Post);
