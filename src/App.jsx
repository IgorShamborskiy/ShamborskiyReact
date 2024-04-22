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
import { useMemo } from "react";
import { forwardRef, useRef } from "react";

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

const App = () => {
  return <Player source="<http://media.w3.org/2010/05/sintel/trailer.mp4>" />;
};

export default App;