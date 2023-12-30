import {useEffect, useState} from 'react'
import {StyleSheet, SafeAreaView, View, ScrollView, Dimensions, Image, Text} from 'react-native'
import {AdaptiveWrapper, Skeleton} from './components'
import {data} from './data'

const color = '#E65050'
const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
}


let cuenta = 0
export default () => {
    const staticInfo = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]

    const [loading, setLoading] = useState(cuenta === 0 ? true : false)

    const getInformation = () => {
        setTimeout(() => {
            cuenta = cuenta + 1
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        getInformation()
    }, [])

    const Item = ({id, title, img, complete, percentaje, extraStyle}) => {
        return(
            !loading
            ?
                <View style={[{width: 150, height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 2, padding: 8}, shadow, {...extraStyle}]}>
                    <View style={{width: 60, height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 100, overflow: 'hidden', marginBottom: 6}}>
                        <Image
                            source={{uri: img}}
                            style={{width: 50, height: 50}}
                        />
                    </View>
                    <View style={{height: 'auto', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', marginBottom: 6}}>
                        <Text style={{fontSize: 13, color: '#383838', fontWeight: 'bold'}}>{title}</Text>
                    </View>
                    <View style={{height: 'auto', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', marginBottom: 6}}>
                        <Text style={{fontSize: 13, color: '#383838', fontWeight: '300'}}>{complete}</Text>
                    </View>
                    <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <View style={{height: 10, alignSelf: 'stretch', backgroundColor: '#dadada'}}>
                            <View style={{backgroundColor: color, height: '100%', width: percentaje, position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 8, color: '#fff', fontWeight: 'bold'}}>{percentaje}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            :
                <Skeleton style={{width: 150, height: 150, ...extraStyle}}/>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: color}}>
            <View style={styles.container}>
                <View style={styles.circle}>
                    <View style={[styles.elementPosition, {paddingLeft: 50}]}>
                        <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>Luis Tejeda</Text>
                        <Text style={{fontSize: 18, color: '#fff', fontWeight: '300'}}>Programador</Text>
                    </View>
                    <View style={[styles.elementPosition, {paddingRight: 50}]}>
                        {
                            !loading
                            ?
                                <Image 
                                    source={{uri: 'https://img.freepik.com/foto-gratis/disparo-cabeza-hombre-atractivo-sonriendo-complacido-mirando-intrigado-pie-sobre-fondo-azul_1258-65733.jpg'}}
                                    style={{width: 80, height: 80, borderWidth: 2, borderColor: '#FFF', borderRadius: 100}}
                                />
                            :
                                <Skeleton style={{width: 80, height: 80, borderRadius: 100}}/>
                        }
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: 215}} 
                >
                    <AdaptiveWrapper Item={Item} margin={20} data={loading ? staticInfo : data}/>
                </ScrollView>
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    circle: {
        width: Dimensions.get('window').width + 100,
        height: 400,
        backgroundColor: color,
        position: 'absolute',
        top: -100,
        left: -50,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    elementPosition: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    }
})