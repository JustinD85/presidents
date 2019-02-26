export const getPresidents =  async () => {
  const response = await fetch('http://localhost:3001/api/v1/presidents')
  const data = await response.json()
  console.log(data)
  return data
}