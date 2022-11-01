import React, { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const CheckboxField = field => {
  const error = field.meta.error;
  const touched = field.meta.touched;
  const hasError = error && touched;
  const [check, setCheck] = useState(field.input.value || false)

  function handleCheck() {
    setCheck(!check);
    field.input.onChange(!check);
  }

  return (
    <View style={styles.WrapperCheckBox}>
      <TouchableOpacity onPress={handleCheck} style={styles.CheckBox}>
        {check ? <Icon name="check" style={styles.icon} /> : null}
      </TouchableOpacity>

      <Text style={styles.LabelCheck}>{field.label}</Text>
      {hasError ? <Text style={styles.errorMsg}>{field.meta.error}</Text> : <Text />}
    </View>
  );
};

const styles = StyleSheet.create({
  CheckBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: "center",
    alignItems: "center"
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16
  },
  LabelCheck: {
    color: '#000',
    marginLeft: 6
  },
  icon: {
    fontSize: 16,
    color: '#000'
  },
  errorMsg: {
    marginBottom: 15,
    color: '#ce3b5b'
  }
});
