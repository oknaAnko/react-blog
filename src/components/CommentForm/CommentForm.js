import React, { useState } from "react";
import bemCssModules from "bem-css-modules";
import { default as CommentFormStyles } from "./CommentForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { selectors } from "../../redux/selectors";

const style = bemCssModules(CommentFormStyles);

const CommentForm = ({ postId, setIsVisible }) => {
  const isAddCommentError = useSelector(selectors.getCommentsError);

  const dispatch = useDispatch();

  const [formEmail, setFormEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [formBody, setFormBody] = useState("");

  const handleOnChangeEmail = (e) => setFormEmail(e.target.value);
  const handleOnChangeName = (e) => setFormName(e.target.value);
  const handleOnChangeBody = (e) => setFormBody(e.target.value);

  const resetCommentForm = () => {
    console.log("reset");
    setFormEmail("");
    setFormName("");
    setFormBody("");
    setIsVisible(false);
  };

  const handleAddCommentSubmit = (postId) => (e) => {
    e.preventDefault();

    const id = uuidv4();
    dispatch(addComment(postId, id, formName, formEmail, formBody, resetCommentForm));
  };

  return (
    <form className={style()} method="submit" onSubmit={handleAddCommentSubmit(postId)}>
      <div className={style("form-row")}>
        <label className={style("label")}>
          Email:
          <input className={style("input")} type="text" value={formEmail} onChange={handleOnChangeEmail} />
        </label>
      </div>
      <div className={style("form-row")}>
        <label className={style("label")}>
          Tytuł:
          <input className={style("input")} type="text" value={formName} onChange={handleOnChangeName} />
        </label>
      </div>
      <div className={style("form-row")}>
        <label className={style("label")}>
          Treść:
          <textarea className={style("input")} value={formBody} onChange={handleOnChangeBody} />
        </label>
      </div>
      <button className={style("btn")} type="submit">
        Dodaj
      </button>
    </form>
  );
};

export default CommentForm;
