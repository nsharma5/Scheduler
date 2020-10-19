import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from './colors';
import React from 'react';
import { useFormikContext } from 'formik';

export default function FormButton({ title, color = 'primary' }) {
  const { handleSubmit, values } = useFormikContext();
  const text = typeof title === 'function' ? title(values) : title;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[color] }]}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
