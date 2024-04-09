import ApiServices from '../themes/apiconfig';
const AuthAPI = {
  Login(data: object) {
    return ApiServices.post('api/auth/Login', data);
  },
  update(data: object) {
    return ApiServices.put('api/auth/', data);
  },
  get() {
    return ApiServices.post('api/auth/GET/users/LKK/');
  },
  Resgiter(data: object) {
    return ApiServices.post('api/auth/Resgiter', data);
  },
  Reset(data: object) {
    return ApiServices.post('api/auth/Reset', data);
  },
  Refreshtoken(Refreshtoken: any) {
    return ApiServices.post('api/auth/Refreshtoken', {
      Refreshtoken,
    });
  },
};
export default AuthAPI;
