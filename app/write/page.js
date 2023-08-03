export default  function Write(){

  return (<>
  <h4>글 작성하기</h4>
  <form action="api/writeDisc" method="POST"> 
  <input name="title" type="text" placeholder="제목" /><br/>
    <textarea name="content" id="" cols="30" rows="10" placeholder="내용"></textarea><br/>
    <button type="submit">제출</button>
  </form>

  </>)
}