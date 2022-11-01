import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, Text, View } from 'react-native';

export const RadioField = field => {
  const error = field.meta.error;
  const touched = field.meta.touched;
  const hasError = error && touched;

  return (
    <View>
      <RadioForm
          radio_props={field.options || []}
          formHorizontal={field.formHorizontal || false}
          labelHorizontal={field.labelHorizontal || true}
          animation={true}
          buttonColor={'#2196f3'}
          labelColor={'#000000'}
          initial={-1}
          onPress={field.input.onChange}
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
