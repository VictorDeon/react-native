export function getParams(navigation, param, paramDefault) {
  return JSON.stringify(navigation.getParam(param, paramDefault));
}

// export async function isAuthenticated() {
//   const token = (await AsyncStorage.getItem('vwapp-token')) || '';
//   if (token) {
//     return true;
//   }

//   return false;
// }

export function hasPermission(requiredPermissions, userPermissions) {
  if (!requiredPermissions) {
    return true;
  }

  const allowedPermissions = new Set(requiredPermissions.filter(item => userPermissions.includes(item)));
  return allowedPermissions.size > 0;
}
