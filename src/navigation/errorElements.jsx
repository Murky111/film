import React from "react";
import "./errorElements.css";
import { Link } from "react-router-dom";

const ErrorElement = () => {
              return <div className="main_ErrorElement">
              <p className="error_ErrorElement">404</p>
              <p className="text_ErrorElement">Кина не будет :)</p>
              <p className="text1_ErrorElement">Возможно, данного адреса страницы не сущетсвует, или странциа была перемещена.</p>
              <Link to={"/"} className="back_main_page">Вернуться на главную</Link>
          </div>
}

export default ErrorElement;