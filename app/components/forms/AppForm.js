import React from "react";
import { Formik } from "formik";
import { View } from "react-native";

function AppForm({ children, initialValues, onSubmit, validationSchema }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        <View style={{ flex: 1 }}>{children}</View>;
      }}
    </Formik>
  );
}

export default AppForm;
