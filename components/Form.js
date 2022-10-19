import React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import { articleSchema } from '../validationSchema/articleValidation';

const AddForm = ({ addNewArticle }) => {
  return (
    <View>
      <Formik
        initialValues={{
          title: '',
          description: '',
          image:
            'https://images.unsplash.com/photo-1568171284620-57dc85d9f210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        }}
        onSubmit={(values, { resetForm }) => {
          addNewArticle(values);
          resetForm();
        }}
        validationSchema={articleSchema}
      >
        {({
          values: { description, image, title },
          handleChange,
          handleSubmit,
          errors,
        }) => (
          <View>
            {errors.title && (
              <View>
                <Text>{errors.title}</Text>
              </View>
            )}
            <TextInput
              style={styles.input}
              value={title}
              placeholder='Title'
              onChangeText={handleChange('title')}
            />
            <TextInput
              style={styles.input}
              value={description}
              multiline
              placeholder='Description'
              onChangeText={handleChange('description')}
            />
            <TextInput
              style={styles.input}
              value={image}
              placeholder='Url-Uri image'
              onChangeText={handleChange('image')}
            />
            <Button onPress={handleSubmit} title='Додати статтю' />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    borderColor: 'silver',
  },
});

export default AddForm;
