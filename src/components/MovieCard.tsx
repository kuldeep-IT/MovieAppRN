import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const genres: any = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentry',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystry',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

const MovieCard = (props: any) => {
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
                {/* <Text style={
                    {
                        color: 'white',
                        fontFamily: FONTFAMILY.poppins_regular,
                        paddingVertical: SPACING.space_10
                    }
                } numberOfLines={1}>{props.title}</Text> */}
                <View style={
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: 'row',
                    }
                }>
                    <MaterialCommunityIcons
                        style={{
                            color: COLORS.Yellow,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: SPACING.space_10,

                        }}
                        name="star"
                        size={20}
                    />

                    <Text style={
                        {
                            fontFamily: FONTFAMILY.poppins_regular,
                            fontSize: FONTSIZE.size_12,
                            color: COLORS.White,
                            textAlign: 'center',
                            textAlignVertical: 'center'
                        }
                    }>8.0 (1,024)</Text>

                </View>

                <Text style={
                    {
                        fontFamily: FONTFAMILY.poppins_medium,
                        fontSize: FONTSIZE.size_24,
                        color: COLORS.White,
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }
                }>{props.title}</Text>



                <View style={styles.genreMain}>
                    {props.genres.map((item: any, index: any) => {
                        x
                        return (
                            <View key={item} style={styles.genreMain}>
                                <Text style={styles.genreText}>{genres[item]}</Text>
                            </View>
                        )

                    })
                    }
                </View>

            </TouchableOpacity>

        </View>
    )
}

export default MovieCard

const styles = StyleSheet.create({

    main: {
        // backgroundColor: 'red',
        // flex: 0,
    },
    container: {
        // flex: 1,
        display: 'flex',
        backgroundColor: COLORS.Orange,

    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: BORDERRADIUS.radius_20
    },

    genreMain: {
        flexDirection: 'row',
        gap: SPACING.space_20,
        justifyContent: 'center',
        flexWrap: 'wrap'

    },

    genreText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        paddingHorizontal: SPACING.space_10,
        paddingVertical: SPACING.space_4,
        color: COLORS.White,
        borderRadius: BORDERRADIUS.radius_20,
        borderWidth: 1,
        borderColor: COLORS.WhiteRGBA15,
        paddingTop: SPACING.space_8

    },
})