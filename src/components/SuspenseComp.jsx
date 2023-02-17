import React from 'react'
import { Suspense } from 'react'
const Tan = React.lazy(() => import("./TanStack"))


function SuspenseComp() {
  return (
    <div>
      <h1>Suspense Component</h1>
      <Suspense fallback={<p>Loading Component...</p>}>
        <Tan />
      </Suspense>
    </div>
  )
}

export default SuspenseComp