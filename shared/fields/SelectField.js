import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Text, View } from 'react-native';

export const SelectField = field => {
  const error = field.meta.error;
  const dirty = field.meta.dirty;
  const hasError = error && dirty;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(field.input.value || []);
  const [items, setItems] = useState(field.options);

  return (
    <View>
      <Text style={styles.label}>{field.label}</Text>
      <DropDownPicker
        open={open}
        multiple={field.input.multiple}
        min={field.min}
        placeholder={field.placeholder}
        max={field.max}
        disabled={field.disabled}
        translation={{
          SELECTED_ITEMS_COUNT_TEXT: {
            1: "Foi selecionado 1 item",
            n: "Foi selecionado {count} items"
          },
          NOTHING_TO_SHOW: "Não há elementos na lista"
        }}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={field.input.onChange}
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
