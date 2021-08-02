export default class Users {
  constructor(id, email, github_oauth_id, github_oauth_token) {
    this.id = id;
    this.email = email;
    this.github_oauth_id = github_oauth_id;
    this.github_oauth_token = github_oauth_token;
  }
}
