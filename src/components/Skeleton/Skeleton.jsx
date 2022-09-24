import React from "react"
import ContentLoader from "react-content-loader";
import styles from './Skeleton.module.scss'

function Skeleton(props) {

  return (
    <ContentLoader 
        className={styles.skeleton}
        speed={2}
        width={350}
        height={135}
        viewBox="0 0 350 135"
        backgroundColor="#d6d6d6"
        foregroundColor="#ffffff"
        {...props}
        >
        <rect x="191" y="292" rx="0" ry="0" width="5" height="0" /> 
        <rect x="0" y="384" rx="10" ry="10" width="98" height="39" /> 
        <rect x="114" y="381" rx="23" ry="23" width="146" height="39" /> 
        <rect x="198" y="436" rx="0" ry="0" width="0" height="1" /> 
        <rect x="0" y="279" rx="10" ry="10" width="260" height="24" /> 
        <rect x="0" y="319" rx="10" ry="10" width="258" height="49" /> 
        <rect x="127" y="121" rx="0" ry="0" width="6" height="1" /> 
        <circle cx="66" cy="70" r="59" /> 
        <rect x="143" y="42" rx="12" ry="12" width="197" height="25" /> 
        <rect x="143" y="79" rx="10" ry="10" width="122" height="20" />
    </ContentLoader>
  )
}

export default Skeleton