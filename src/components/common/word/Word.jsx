import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fs, rs } from '../../../utils/responsive/Responsive'
import { fonts } from '../../../utils/FontAndColors/FontsAndColors'

const Word = ({text,color,size,tc,ml,mr,mt,m,p,pr,pl,font,ls,line,pb,mb}) => {
  return (
      <Text 
      numberOfLines={line}
      style={{
        color:color ? color:'#000000',
        fontSize:fs(size),
        textAlign:tc ? tc:'left',
        marginTop:rs(mt) ? rs(mt):null,
        marginLeft:rs(ml)? rs(ml):null,
        marginRight:rs(mr)? rs(mr):null,
        marginBottom:rs(mb)? rs(mb):null,
        margin:rs(m)?rs(m):null,
        padding:rs(p)? rs(p):null,
        paddingLeft:rs(pl)? rs(pl):null,
        paddingRight:rs(pr) ? rs(pr):null,
        letterSpacing:rs(ls)? rs(ls):null,
        paddingBottom:rs(pb)? rs(pb):null,
       fontFamily: font == 1 ? fonts.thin :
            font == 2 ? fonts.extra_light :
            font == 3 ? fonts.light :
            font == 4 ? fonts.regular :
            font == 5 ? fonts.medium :
            font == 6 ? fonts.semi_bold :
            font == 7 ? fonts.bold :
            font == 8 ? fonts.extra_bold :
            font == 9 ? fonts.black :
            font == 10 ? fonts.HeadLine:
            fonts.regular

      }}
      >{text}</Text>
  )
}

export default Word

const styles = StyleSheet.create({})