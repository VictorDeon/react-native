import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

export const errorAlert = (title, msg, hideAlertFunction) => (
  <AwesomeAlert
    show={true}
    showProgress={false}
    title={title}
    message={msg}
    closeOnTouchOutside={true}
    closeOnHardwareBackPress={true}
    showConfirmButton={true}
    confirmText="OK"
    confirmButtonColor='#E6297F'
    confirmButtonStyle={{ width: 100 }}
    confirmButtonTextStyle={{ textAlign: 'center' }}
    onConfirmPressed={hideAlertFunction}
  />
);

export const confirmAlert = (title, msg, confirmAlertFunction, cancelAlertFunction) => (
  <AwesomeAlert
    show={true}
    showProgress={false}
    title={title}
    message={msg}
    closeOnTouchOutside={false}
    closeOnHardwareBackPress={false}
    showCancelButton={true}
    showConfirmButton={true}
    cancelText="Cancelar"
    confirmText="Confirmar"
    confirmButtonColor='#E6297F'
    onCancelPressed={cancelAlertFunction}
    onConfirmPressed={confirmAlertFunction}
  />
);

export const loadingAlert = (title, msg) => (
  <AwesomeAlert
    show={true}
    showProgress={true}
    title={title}
    message={msg}
    closeOnTouchOutside={false}
    closeOnHardwareBackPress={false}
  />
);

export const successAlert = (title, msg, hideAlertFunction) => (
  <AwesomeAlert
    show={true}
    showProgress={false}
    title={title}
    message={msg}
    closeOnTouchOutside={true}
    closeOnHardwareBackPress={true}
    showConfirmButton={true}
    confirmText="OK"
    confirmButtonColor='#4BE529'
    confirmButtonStyle={{ width: 100 }}
    confirmButtonTextStyle={{ textAlign: 'center' }}
    onConfirmPressed={hideAlertFunction}
  />
);
