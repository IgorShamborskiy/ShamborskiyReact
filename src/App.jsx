// import { useState, useEffect } from "react";
// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from "yup";
// import { ErrorMessage } from "formik";
// import axios from "axios";


// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
//   email: Yup.string().email("Must be a valid email!").required("Required"),
//   message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
//   level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
// });

// const initialValues = {
//   username: "",
//   email: "",
//   message: "",
//   level: "good",
// };

import { useEffect, useState } from "react";
import axios from "axios";
import { fetchArticlesWithTopic } from "./articles-api";


const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
				// 2. Використовуємо HTTP-функцію
				const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

	return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;