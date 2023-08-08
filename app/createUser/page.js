export default function CreateUser() {
  return (
    <>
    <h1>회원가입</h1>
    <form action="api/writeUser" method="POST">
      <label htmlFor="userId">아이디</label>
      <input type="text" name="userId" id="userId" />
      <br />
      <label htmlFor="userPw">비밀번호</label>
      <input type="password" name="userPw" id="userPw" />
      <br />
      <label htmlFor="userPwCheck">비밀번호 확인</label>
      <input type="password" name="userPwCheck" id="userPwCheck" />
      <br />
      <label htmlFor="userNickName">닉네임</label>
      <input type="text" name="userNickName" id="userNickName" />
      <br />
      <input type="submit" />
    </form>
    </>
  )
}