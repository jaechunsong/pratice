export const join = (req, res) => res.render('join',{pageTitle: "가입하기"});
export const login = (req, res) => res.render('login',{pageTitle: "로그인"});
export const logout = (req, res) => res.render('logout',{pageTitle: "로그아웃"});
export const users = (req, res) => res.render('users',{pageTitle: "내정보"});
export const userDetail = (req, res) => res.render('userDetail',{pageTitle: "상세보기"});
export const editProfile = (req, res) => res.render('editProfile',{pageTitle: "프로필수정"});
export const changePassword = (req, res) => res.render('changePassword',{pageTitle: "비밀번호변경"});