import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  speed={2}
  width={151}
  height={280}
  viewBox="0 0 151 280"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
>
  <rect x="0" y="230" rx="11" ry="11" width="150" height="40" /> 
  <rect x="45" y="42" rx="0" ry="0" width="1" height="0" /> 
  <rect x="48" y="26" rx="0" ry="0" width="0" height="1" /> 
  <rect x="0" y="5" rx="5" ry="5" width="150" height="220" />
</ContentLoader>
)

export default Skeleton