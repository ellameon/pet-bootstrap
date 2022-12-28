export function JSPractice() {

  const count = 0
  const counted = counter()

  function counter() {
    return count + 1
  }

  const obj = {
    name: "Tom"
  }

  function changeObj(obj: { name: string }, c: number) {
    obj.name = "Bob"
    return c + 10
  }

  changeObj(obj, count)

  return (
    <>
      <div>Замыкание</div>
      <div>count = {count}</div>
      <div>counted = {counted}</div>


      <div>{obj.name} {count}</div>
    </>
  )
}