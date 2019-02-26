

function* grabPresidents (){
  const result = await getPresidents()

    this.setState({
      presidents:result
    })
}

export function* listener(){
  yield takeLatest('')
}