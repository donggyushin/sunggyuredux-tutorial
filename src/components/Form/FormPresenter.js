import React from "react";

const FormPresenter = ({ text, handleText, confirmButtonClicked }) => (
  <div>
    <input
      value={text}
      onChange={handleText}
      placeholder={"todo를 입력해주세요."}
    />
    <button onClick={confirmButtonClicked}>확인</button>
  </div>
);

export default FormPresenter;
