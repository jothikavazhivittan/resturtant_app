import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hs, rs, ws } from '../../../utils/responsive/Responsive'

const Img = ({src,color,width,height,per,rm,mt,mr,ml,pa,pr,pl,ma,styles,radius}) => {
  return (
   <Image 
   style={{
    width:per ? width+per:ws(width),
    height:per ? height+per:hs(height),
    resizeMode:rm ? rm:'contain',
    marginTop:rs(mt)? rs(mt):null,
    marginRight:rs(mr)? rs(mr):null,
    marginLeft:rs(ml)? rs(ml):null,
    padding:rs(pa)? rs(pa):null,
    paddingRight:rs(pr)? rs(pr):null,
    paddingLeft:rs(pl)?rs(pl):null,
    margin:rs(ma)? rs(ma):null,
    ...styles,
    borderRadius:rs(radius)? rs(radius):null
   }}
   source={src} 
   tintColor={color}
  />
  )
}

export default Img

