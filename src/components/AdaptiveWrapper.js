import { StyleSheet, View } from "react-native"

export default ({Item, margin = 0, data = []}) => {
    
    return(
        <View style={[styles.wrapper, {marginTop: margin, marginLeft: margin}]}>
            {
                data.map(x => 
                    <Item
                        key={x.id}
                        {...x}
                        extraStyle={{marginTop: margin, marginRight: margin}}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 'auto',
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }
})