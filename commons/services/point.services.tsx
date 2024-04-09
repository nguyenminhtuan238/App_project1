import ApiServices from '../themes/apiconfig';
const PointAPI = {
  Getbyid(id: string | number) {
    return ApiServices.get(`api/Point/${id}`);
  },
  Search(payload: object) {
    return ApiServices.post(`api/Point/Search/`, payload);
  },
};
export default PointAPI;
