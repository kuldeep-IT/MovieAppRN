import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, SPACING } from '../theme/theme'

const SubMovieCard = (props: any) => {
    return (
        <View style={[{
            // flex: 1,
        },
        { maxWidth: props.cardWidth },
        props.shouldMarginatedAtEnd ?
            props.isFirst ? { marginLeft: SPACING.space_36 } :
                props.isLast ? { marginRight: SPACING.space_36 } :
                    {} :
            {},
        props.shouldMarginatedAround ? { margin: SPACING.space_12 } : {}
        ]}>
            <TouchableOpacity style={styles.main} onPress={props.cardFunction}>
                <Image style={[styles.cardImage, { width: props.cardWidth }]} source={{ uri: props.imgPath }} />
                <Text style={
                    {
                        color: 'white',
                        fontFamily: FONTFAMILY.poppins_regular,
                        paddingVertical: SPACING.space_10
                    }
                } numberOfLines={1}>{props.title}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SubMovieCard

const styles = StyleSheet.create({

    main: {
        // backgroundColor: 'red',
        flex: 0,
        alignItems: 'flex-start'
    },
    container: {
        // flex: 1,
        display: 'flex',
        backgroundColor: COLORS.Orange,

    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: BORDERRADIUS.radius_20
    }
})