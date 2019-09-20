import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import CharacterCard from "./CharacterCard";

function SearchForm({ status, values }) {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    status && setCharacters(status);
  }, [status]);

  return (
    <section className="search-form">
      <Form>
        <Field type="text" name="name" placeholder="Search" />

        <button type="submit">Search</button>
      </Form>

      {characters
        ? characters.results.map(el => <CharacterCard data={el} />)
        : null}
    </section>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${values.name}`)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(SearchForm);

export default FormikSearchForm;