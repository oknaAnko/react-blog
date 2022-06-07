import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import bemCssModules from "bem-css-modules";

import { fetchPosts } from "../../redux/actions";
import PostTitleLink from "../../components/PostTitleLink/PostTitleLink";
import { default as HomePageStyles } from "./HomePage.module.scss";
import { selectors } from "../../redux/selectors";
import Pagination from "../../components/Pagination/Pagination";

const style = bemCssModules(HomePageStyles);

let PageSize = 10;

const HomePage = () => {
  const allPosts = useSelector(selectors.getAllPosts);
  const isLoading = useSelector(selectors.postsLoading);
  const isError = useSelector(selectors.getPostsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const initialPostsList = allPosts.slice(0, 10).map((post) => <PostTitleLink key={post.id} {...post} />);

  const currentDataList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allPosts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const postsList = currentDataList.map((post) => <PostTitleLink key={post.id} {...post} />);

  return (
    <section className={style()}>
      <div className={style("image")}>
        <p className={style("image-text")}>Porozmawiajmy o czekoladzie</p>
      </div>
      <article className={style("article-about")}>
        <p>Przed Wami najsłodszy blog na świecie! Rozmawiamy o czekoladzie i... tylko o czekoladzie :D</p>
      </article>
      <h2 className={style("title")}>Najnowsze wpisy</h2>
      <Pagination
        className={style("pagination-bar")}
        currentPage={currentPage}
        totalCount={allPosts.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isLoading && <p className={style("text")}>Trwa ładowanie postów...</p>}
      <ul className={style("list")}>{Boolean(!postsList.length) ? initialPostsList : postsList}</ul>
      {isError && <p className={style("text")}>Przepraszamy, nie można wyświetlić aktualności</p>}
    </section>
  );
};

export default HomePage;
