import {useRouter} from 'next/router'

function GoBack() {
    const router = useRouter()
  return (
    <div className="go-back" onClick={() => router.back()}>
      <a>
        Go back
      </a>
    </div>
  )
}
export default GoBack