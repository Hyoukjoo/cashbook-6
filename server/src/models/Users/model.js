export default class Users {
  constructor(id, email, github_id, github_oauth_token) {
    this.id = id;
    this.email = email;
    this.github_id = github_id;
    this.github_oauth_token = github_oauth_token;
  }
}
