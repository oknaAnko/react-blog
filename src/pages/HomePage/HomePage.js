import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import bemCssModules from "bem-css-modules";

import { fetchPosts } from "../../redux/actions";
import PostTitleLink from "../../components/PostTitleLink/PostTitleLink";
import { default as HomePageStyles } from "./HomePage.module.scss";
import { selectors } from "../../redux/selectors";

const style = bemCssModules(HomePageStyles);

const HomePage = () => {
  const allPosts = useSelector(selectors.getAllPosts);
  const isLoading = useSelector(selectors.postsLoading);
  const isError = useSelector(selectors.getPostsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const postsList = allPosts.map((post) => (
    <PostTitleLink key={post.id} {...post} />
  ));

  return (
    <section className={style()}>
      <h2 className={style("title")}>Zobacz nasze posty!</h2>
      {isLoading && <p className={style("text")}>Trwa ładowanie postów...</p>}
      <ul className={style("list")}>{postsList}</ul>
      {isError && (
        <p className={style("text")}>
          Przepraszamy, nie można wyświetlić aktualności
        </p>
      )}
    </section>
  );
};

export default HomePage;
