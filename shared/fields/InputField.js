import React from 'react';
import { StyleSheet, Text, TextInput, Label, View } from 'react-native';

export const InputField = field => {
  const error = field.meta.error;
  const touched = field.meta.touched;
  const hasError = error && touched;

  return (
    <View>
      <TextInput
        {...field.input}
        placeholder={field.placeholder}
        style={field.style}
        secureTextEntry={field.secureTextEntry}
      />
      {hasError ? <Text style={styles.errorMsg}>{field.meta.error}</Text> : <Text />}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#212020'
  },
  errorMsg: {
    marginBottom: 15,
    color: '#ce3b5b'
  }
});
