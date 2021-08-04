import BaseApi from "../BaseApi";
import { UserDto } from "./dto";

class UserApi extends BaseApi {
  login(data: { email: string }) {
    return this.post<UserDto>("/login", data);
  }
}

export default new UserApi("users");
